import styles from "../styles/home.module.css";
import { read, utils } from 'xlsx';
import { useState, useEffect } from 'react';



export default function Home() {
  const [dados, setDados] = useState([]);
  const [file, setFile] = useState();
  const [headers, setHeaders] = useState([])

  async function extrairDadosPlanilhaExcel(e) {
    const f = e.target.files[0];
    setFile(f);
    const arrayBook = await f.arrayBuffer();
    const workBook = await read(arrayBook);
    const workSheet = workBook.Sheets[workBook.SheetNames[0]];
    const data = utils.sheet_to_json(workSheet);

    setDados(data);
    if (data.length > 0) {
      setHeaders(Object.keys(data[0]));
    }
    console.log(data)
  };

  useEffect(() => {

  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Desafio Dev</h1>
      <span className={styles.caption}>
        Clique <a href="/produtos.xlsx">aqui</a> para baixar o modelo de arquivo
      </span>
      <hr />

      <div className={styles.form}>
        <input type="file" accept="xlsx" onChange={extrairDadosPlanilhaExcel} />
      </div>

      {
        file &&
        <table className={styles.table}>
          <thead>
            <tr>
              {headers.map(header => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dados.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map(header =>(
                  <td key={header}>{row[header]}</td>
                ))}
              </tr>
            ))}
          </tbody>

        </table>
      }

    </div>
  );
}
