import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://ap-southeast-1.aws.data.mongodb-api.com/app/data-tqlme/endpoint/GET');
        setUserData(response.data);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>DANH SÁCH VÀ STT </h2>
      <h5>(Refresh)</h5>
      <ul>
        {userData.map((user, index) => (
          <li key={index}>
            Tên người dùng: {user.username}, Mật khẩu: {user.password}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
