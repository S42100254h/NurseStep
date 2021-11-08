import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { fetchQuizzes } from "../reducks/quizzes/operations";
import { getQuizzes } from "../reducks/quizzes/selectors";
import { DataGrid } from "@mui/x-data-grid";
import { PrimaryButton } from "../components/UIkit";
import { push } from "connected-react-router";

const useStyles = makeStyles({
  container: {
    margin: "25px auto",
    width: "calc(100% - 20rem)",
  },
  headline: {
    color: "#4dd0e1",
    fontSize: "1.563rem",
    margin: "0 auto 1rem auto",
    textAlign: "center",
  },
});

const QuizList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const quizzes = getQuizzes(selector);

  useEffect(() => {
    dispatch(fetchQuizzes());
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "detail",
      headerName: "詳細",
      width: 100,
      renderCell: (params) => <PrimaryButton label={"詳細"} rowId={params.id} onClick={() => dispatch(push("/quiz/list/" + params.id))} />
    },
    { field: "title", headerName: "タイトル", width: 530 },
    { field: "created_at", headerName: "作成日", width: 200 },
    { field: "updated_at", headerName: "更新日", width: 200 },
  ];
  
  const rows = quizzes;

  return (
    <div className={classes.container}>
      <h2 className={classes.headline}>クイズ一覧</h2>
      <div style={{ width: "100%", backgroundColor: "#fff" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
    </div>
  ); 
};

export default QuizList;
