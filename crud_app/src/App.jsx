import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css'; // Importing Remixicon icons
import './App.css'; // Importing the CSS file for styling

const App = () => {
  const [open, setOpen] = useState(true);
  const [edit, seteditSt] = useState(null);
  const [students, createSt] = useState([]);
  const [form, setForm] = useState({
    fullname: '',
    class: '',
    subject: '',
    ID: '',
    DOB: '',
  });

  const handleDrawer = () => {
    setOpen(!open);
  };

  const createStudent = (e) => {
    e.preventDefault();
    createSt([...students, form]);
    setForm({ fullname: '', class: '', subject: '', ID: '', DOB: '' });
    setOpen(false);
  };

  const handleInput = (e) => {
    const input = e.target;
    const value = input.value;
    const key = input.name;
    setForm({ ...form, [key]: value });
  };

  const saveStudent = (e) => {
    e.preventDefault();
    const backup = [...students];
    backup[edit] = form;
    createSt(backup);
    seteditSt(null);
    setOpen(false);
  };

  const deleteSt = (index) => {
    const copy = [...students];
    copy.splice(index, 1);
    createSt(copy);
  };

  const editStudent = (index) => {
    setOpen(!open);
    setForm(students[index]);
    seteditSt(index);
  };

  return (
    <div style={{ background: '#ddd', height: '100vh', fontFamily: 'monospace' }}>
      <div style={{ background: 'white', width: '70%', margin: '32px auto', padding: '32px', borderRadius: '10px', boxShadow: '0 0 20px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: 35, textAlign: 'center', color: 'dodgerblue' }}>Student Platform</h1>
        <button
          onClick={handleDrawer}
          style={{
            fontSize: 20,
            fontFamily: 'monospace',
            border: 'none',
            padding: '16px 32px',
            borderRadius: '5px',
            color: 'white',
            background: 'dodgerblue',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <i className="ri-user-add-line" style={{ marginRight: '8px' }}></i>
          Add Student
        </button>
        <table className='crud'>
          <thead>
            <tr>
              <th>SL</th>
              <th>ID</th>
              <th>Name</th>
              <th>Class</th>
              <th>Subject</th>
              <th>DOB</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.ID}</td>
                <td>{student.fullname}</td>
                <td>{student.class}</td>
                <td>{student.subject}</td>
                <td>{student.DOB}</td>
                <td>
                  <button onClick={() => editStudent(index)}
                    style={{
                      marginRight: '8px',
                      padding: '8px 12px',
                      border: 'none',
                      background: 'dodgerblue',
                      color: 'white',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      transition: 'background 0.3s ease',
                    }}
                  >
                    <i className="ri-file-edit-line"></i>
                  </button>
                  <button onClick={() => deleteSt(index)}
                    style={{
                      padding: '8px 12px',
                      border: 'none',
                      background: 'tomato',
                      color: 'white',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      transition: 'background 0.3s ease',
                    }}
                  >
                    <i className="ri-delete-bin-6-line"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <aside
        style={{
          padding: '30px',
          position: 'fixed',
          top: 0,
          right: open ? '0' : '-100%',
          width: '450px',
          background: 'white',
          height: '100%',
          boxShadow: '0 0 40px rgba(0,0,0,0.3)',
          boxSizing: 'border-box',
          color: 'black',
          transition: '0.7s',
        }}
      >
        <button
          onClick={handleDrawer}
          style={{
            fontSize: 25,
            fontFamily: 'monospace',
            border: 'none',
            position: 'absolute',
            top: 20,
            right: 20,
            borderRadius: '5px',
            color: 'dodgerblue',
            background: 'transparent',
            cursor: 'pointer',
            transition: '0.3s',
          }}
        >
          <i className="ri-close-circle-line"></i>
        </button>
        <h1>New Student</h1>
        <form action="" onSubmit={edit === null ? createStudent : saveStudent}
          style={{ display: 'flex', flexDirection: 'column', gap: 25 }}>
          <input
            onChange={handleInput}
            type="text"
            required
            name="fullname"
            placeholder="Enter your full name"
            value={form.fullname}
            style={{
              fontWeight: 'bold',
              width: '320px',
              border: '1px solid #ccc',
              padding: 16,
              borderRadius: 4,
              fontFamily: 'monospace',
            }}
          />
          <input
            onChange={handleInput}
            type="text"
            required
            name="subject"
            placeholder="Enter subject"
            value={form.subject}
            style={{
              fontWeight: 'bold',
              width: '320px',
              border: '1px solid #ccc',
              padding: 16,
              borderRadius: 4,
              fontFamily: 'monospace',
            }}
          />
          <input
            onChange={handleInput}
            type="text"
            required
            name="class"
            placeholder="Class"
            value={form.class}
            style={{
              fontWeight: 'bold',
              width: '320px',
              border: '1px solid #ccc',
              padding: 16,
              borderRadius: 4,
              fontFamily: 'monospace',
            }}
          />
          <input
            onChange={handleInput}
            type="text"
            required
            name="ID"
            placeholder="Enter your ID"
            value={form.ID}
            style={{
              fontWeight: 'bold',
              width: '320px',
              border: '1px solid #ccc',
              padding: 16,
              borderRadius: 4,
              fontFamily: 'monospace',
            }}
          />
          <input
            onChange={handleInput}
            type="date"
            required
            name="DOB"
            value={form.DOB}
            style={{
              fontWeight: 'bold',
              width: '320px',
              border: '1px solid #ccc',
              padding: 16,
              borderRadius: 4,
              fontFamily: 'monospace',
            }}
          />
          {
            edit === null ?
              <input
                onClick={createStudent}
                type="submit"
                value="Submit"
                style={{
                  width: 352.5,
                  fontSize: 20,
                  fontFamily: 'monospace',
                  padding: 13,
                  borderRadius: 4,
                  background: 'dodgerblue',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'background 0.3s ease',
                }}
              />
              :
              <input
                onClick={saveStudent}
                type="submit"
                value="Save"
                style={{
                  width: 352.5,
                  fontSize: 20,
                  fontFamily: 'monospace',
                  padding: 13,
                  borderRadius: 4,
                  background: 'crimson',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'background 0.3s ease',
                }}
              />
          }
        </form>
      </aside>
    </div>
  );
};

export default App;
