import styles from "./Login.module.css";
import { useState } from 'react';

export default function Login() {

const [formData, setFormData] = useState({
username:"",
password:"",
})

function handleChange(e){
  // const { name, value } = e.target;
  // setFormData(prev => ({ ...prev, [name]: value }));
  // console.log(e.target.value)

}

function HandleSubmit(e){
 for (let key in e.target) {
    console.log(key, e.target[key]);
  }
  const username = e.target.username.value;
  const password = e.target.password.value;

e.preventDefault()
setFormData({
    username: username,
    password: password

  });

  console.log( password);
}



  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Welcome</h1>

        <form className={styles.form}onSubmit={HandleSubmit}>
          <input type="text" name="username" placeholder="Username" onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" autoComplete="on" onChange={handleChange} />
          <button type="submit" >Login</button>

        </form>
      </div>

      <ul className={styles.bgBubbles}>
        {Array.from({ length: 10 }).map((_, i) => (
          <li key={i}></li>
        ))}
      </ul>
    </div>
  );
}
