```jsx
import React, { useState } from 'react';
import { Dialog } from 'fit-components'; // 可通过包名引入，而不是相对路径
const DialogDemo = () => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        console.log("===log click===");
        setOpen(!open);
    }
    return <div>
        <Dialog open={open} onClick={handleClick}>default</Dialog>
    </div>
}
export default DialogDemo;

```
