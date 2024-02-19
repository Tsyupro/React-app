import React, { useState } from 'react';
import './UploadForm.css'; // Імпортуйте CSS файл

function UploadForm() {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const validateEmail = (email: string) => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
    // Submit form
  };

  return (
    <form onSubmit={handleSubmit} className="upload-form">
      <label>
        Nickname:
        <input type="text" value={nickname} onChange={e => setNickname(e.target.value)} required />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </label>
      <label>
        Photo:
        <input type="file" onChange={e => setPhoto(e.target.files ? e.target.files[0] : null)} required />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={e => setDescription(e.target.value)} required />
      </label>
      <label>
        Tags:
        <input type="text" value={tags} onChange={e => setTags(e.target.value)} required />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default UploadForm;
