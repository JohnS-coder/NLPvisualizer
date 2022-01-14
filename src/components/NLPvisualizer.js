import './test.css'

const NLPvisualizer =({data}) =>{
const ent = [
    {entity:"PER",color:"darkred"},
    {entity:"LOC",color:"darkorange"},
    {entity:"ORG",color:"blue"}
]
    return (
    <>
        {data ? (Object.values(data).map((chunk,index)=>{
            console.log(chunk);
            return (<div key={index}>
                {
                    !chunk.entity ? (
                        <span className="entity-wrapper non-ner">{chunk.original_chunk}</span>
                    ):(
                        <span className="entity-wrapper" style={{backgroundColor:ent.find(
                            (item) => item.entity === chunk.entity
                          ).color}}>
                            <span className="entity-name">{chunk.original_chunk}</span>
                            <span className="entity-type">{chunk.entity}</span>
                        </span>
                    )
                }
                </div>)
        })):(<p>No data</p>)}
    </>
    );

};
export default NLPvisualizer;