import React, { FC } from 'react';
import './index.less';
interface DialogProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: 'default' | 'primary' | 'secondary';
  disabled?: boolean;
  open? : boolean;
  children?: any;
}
const Dialog: FC<DialogProps> = (props, ...rest) => {
    const { children, open, onClick, type = 'dialog' } = props
  return (
    <div>
      <div style={{display: open? "block": "none"}}>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
      </div>
      <div className={'dev_dialog'} onClick={onClick}>
        {children}
      </div>
    </div>
  );
};
export default Dialog;
