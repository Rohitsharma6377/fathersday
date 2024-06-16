
import { useState } from 'react';
import dad from '../assets/dad.gif'
import Heart from 'react-animated-heart'
const special = () => {
    const [isClick , setClick] = useState(false);
  return (
    <div>
<img src={dad} alt="" />
<Heart isClick={isClick} onClick={() => setClick(!isClick)} />
<p>“Dads are most ordinary men turned by love into heroes, adventurers, storytellers and singers of song.”</p>
<p>i love you dad</p>
    </div>
  )
}

export default special;
