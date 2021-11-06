import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { Dialog, DialogContent } from "@material-ui/core";
import { PrimaryButton } from "../UIkit";
import { createQuiz } from "../../function/quiz";
import { Choice, Quiz } from "./index";

const useStyles = makeStyles({
  container: {
    width: "100%",
    padding: "30px 50px",
  },
  headline: {
    color: "#4dd0e1",
    fontSize: "1.563rem",
    margin: "0 auto 1rem auto",
    textAlign: "center",
  },
});

const ConfirmDialog = ({ quiz, choice1, select1, choice2, select2, choice3, select3, choice4, select4, open, onClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  return (
    <div>
      <Dialog
        open={open}
        onClose={(e) => onClose(e)}
        fullWidth={false}
        maxWidth={"md"}
      >
        <DialogContent>
          <div className={classes.container}>
            <div className={classes.headline}>以下の内容でクイズを作成してもよろしいですか？</div>
            <div className="module-spacer--extra-small" />
            <Quiz quiz={quiz} label={"問題"} />
            <Choice choice={choice1} select={select1} label={"選択肢１"} />
            <Choice choice={choice2} select={select2} label={"選択肢２"} />
            <Choice choice={choice3} select={select3} label={"選択肢３"} />
            <Choice choice={choice4} select={select4} label={"選択肢４"} />
            <div className="module-spacer--extra-extra-small" />
            <PrimaryButton
              label={"クイズを作成する"}
              fullWidth={true}
              onClick={() => dispatch(createQuiz(quiz, choice1, select1, choice2, select2, choice3, select3, choice4, select4 ))}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ConfirmDialog;
