import { faker } from '@faker-js/faker';

export default function Student(props){
    return (
        <div className="container border mb-5">
            <div className="row">
                <div className="col-2">
                    <img src={faker.image.avatar()} alt="test" className="img-fluid w-100 rounded-circle mt-3"/>
                </div>
                <div className="col-10">
                     {props.name} <br/>
                    Coding Experience {props.experience} years!<br/>
                     {props.gender} <br/>
                     {props.education} <br/>
                     <a href="#prof" className="btn btn-primary mb-3 mt-2">
                        Click here to view profile
                     </a>
                </div>
            </div>
        </div>

    );
}