import { Button, notification } from 'antd';

import React from 'react'
import 'antd/dist/antd.css';


function Notification() {

    const openNotification = () => {
        notification.open({
          message: 'Notification Title',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
      };
    return (
        <div>
            <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>
        </div>
    )
}

export default Notification
