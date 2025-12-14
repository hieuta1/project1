import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents([
      { id: 1, mssv: "SV001", name: "Nguyễn Văn A", age: 20, className: "CNTT1" },
      { id: 2, mssv: "SV002", name: "Trần Thị B", age: 21, className: "CNTT2" },
      { id: 3, mssv: "SV003", name: "Lê Văn C", age: 22, className: "CNTT1" },
    ]);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Danh sách sinh viên</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>#</th>
            <th>MSSV</th>
            <th>Họ tên</th>
            <th>Tuổi</th>
            <th>Lớp</th>
          </tr>
        </thead>
        <tbody>
          {students.map((sv, i) => (
            <tr key={sv.id}>
              <td>{i + 1}</td>
              <td>{sv.mssv}</td>
              <td>{sv.name}</td>
              <td>{sv.age}</td>
              <td>{sv.className}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
