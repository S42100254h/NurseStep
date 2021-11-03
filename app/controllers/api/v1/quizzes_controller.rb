class Api::V1::QuizzesController < Api::V1::ApiController
  before_action :authenticate_admin!, only: [:create, :update, :destroy]

  def index
    quizzes = Quiz.all
    render json: quizzes
  end

  def show
    quiz = Quiz.find(params[:id])
    render json: quiz
  end

  def create
    quiz = Quiz.create!(quiz_params)
    render json: quiz
  end


  def update
  end

  def destroy
  end

  private

    def quiz_params
      params.require(:quiz).permit(:title)
    end
end
