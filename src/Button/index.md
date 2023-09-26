```js
import React from 'react';
import { Button } from 'fit-components';

const ButtonDemo = () => {
    return <div>
    <Button onClick=
    {()=>alert('onClick')}>default</Button>
    </div>
}
```
```jsx
import React from 'react';
import { Button } from 'fit-components';

const ButtonDemo = () => {
    return <div>
    <Button type="primary" onClick=
    {()=>alert('onClick')}>default</Button>
    </div>
}

export default ButtonDemo
```