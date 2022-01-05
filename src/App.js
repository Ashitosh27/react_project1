export default function App() {
  let list=[1,1,1,1,1,1];
  return (
    <div className="Container-fluid">
      <div className="row bg-secondary">
        <div className="col">
            <h1 className="d-flex justify-content-center">Mini-Project-React</h1>
        </div>
      </div>
     
      <div className="row">
      {list.map((item)=>(
        <div className="col-4 d-flex justify-content-center">
          <div className="card mb-2">
            <div className="card-body">
              <img src="https://picsum.photos/400/401" alt="" />
            </div>
            <div className="card-footer m-2">
                <h4 style={{backgroundColor:"skyblue",color:"white"}}>Happy New Year</h4>
            </div>
          </div>
        </div>))}
      </div>
    </div>
  );
}
