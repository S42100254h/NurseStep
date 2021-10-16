require "rails_helper"

RSpec.describe "Api::V1::Auth::Passwords", type: :request do
  describe "POST /api/v1/auth/password" do
    subject { post(api_v1_user_password_path, params: params) }
    
    context "send correct email" do
      let(:params) { { email: user.email } }
      let!(:user) { create(:user, email: "neko@gmail.com") }

      it "email is sent" do
        subject
        res = response.body
        expect(res).to include "An email has been sent"
        expect(response).to have_http_status(200)
      end
    end

    context "send wrong email" do
      let(:params) { { email: "dummy@gmail.com" } }
      let!(:user) { create(:user, email: "neko@gmail.com") }

      it "email is not sent" do
        subject
        res = response.body
        expect(res).to include "Unable to find user with email 'dummy@gmail.com'."
        expect(response).to have_http_status(404)
      end
    end
  end

  describe "GET /api/v1/auth/password/edit" do
    subject { get(edit_api_v1_user_password_path(reset_password_token: token)) }

    let(:token) { user.send_reset_password_instructions }
    let!(:user) { create(:user) }
    
    it "redirect url" do
      subject
      headers = response.headers
      expect(headers["Location"]).to include ENV["RESET_PASSWORD_URL"]
      expect(response).to have_http_status(302)
    end
  end
end
