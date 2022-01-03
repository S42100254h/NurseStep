import React from "react";
import { makeStyles } from "@material-ui/core";
import { Dialog, DialogContent } from "@material-ui/core";
import { PrimaryButton, SecondaryButton } from "../UIkit";
import cat from "../../assets/img/cat.png";

const useStyles = makeStyles({
  heading: {
    fontSize: 24,
    textAlign: "center",
    paddingBottom: 4,
    borderBottom: "1.3px solid",
  },
  span: {
    color: "#cf222e",
    fontWeight: "bold",
  },
  image: {
    display: "block",
    margin: "auto",
  },
});

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClickStop: () => void;
  onClickProceed: () => void;
  
};

const Confirmation = (props: Props) => {
  const classes = useStyles();

  return (
    <>
      <Dialog
        open={props.isOpen}
        onClose={() => props.onClose()}
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogContent>
          <div>
            <h1 className={classes.heading}>退会</h1>
            <div className="module-spacer--extra-small" />
            <h2>退会手続きの前にご確認ください</h2>
            <div className="module-spacer--extra-extra-small" />
            <p>アカウントを削除すると、これまでのデータが<span className={classes.span}>すべて削除されます</span></p>
            <img src={cat} alt="ねこ" width="180px" height="180px" className={classes.image} />
          </div>
          <div className="module-spacer--extra-small" />
          <PrimaryButton
            label={"退会をやめる"}
            fullWidth={true}
            onClick={props.onClickStop} 
          />
          <div className="module-spacer--extra-small" />
          <SecondaryButton
            label={"退会手続きを進める"}
            fullWidth={true}
            onClick={props.onClickProceed}
          />
          <div className="module-spacer--extra-small" />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Confirmation;
