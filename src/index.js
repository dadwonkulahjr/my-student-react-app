import ReactDOM from 'react-dom/client';
import Heading from './Heading';
import MainBody from './MainBody';
import Footer from './Footer';
import Student from './Student';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <Heading/>
    <MainBody/>
    <Student name="Mike Simson" experience={5} gender="Male" education="BSc. IT"/>
    <Student name="Lisa Williams" experience={2} gender="Female" education="BSc. CS"/>
    <Student name="Paul Walker" experience={10} gender="Male" education="BSc. Engineering"/>
    <Footer/>
  </div>
 

);


