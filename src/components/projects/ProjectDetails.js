import React from 'react'

const ProjectDetails = (props) =>{
    const id = props.match.params.id;
    return(
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project title-{id}</span>
                    <p>
                        Sint nostrud dolor sit sunt ut ad. Adipisicing amet qui elit ut anim veniam ut ullamco nulla pariatur mollit consequat occaecat. Excepteur aliqua culpa enim cillum enim eu exercitation occaecat. Eu exercitation proident occaecat cillum dolore consequat incididunt eu laboris. Ipsum ullamco amet exercitation irure ipsum consectetur duis. Id sunt non Lorem deserunt elit Lorem deserunt.
                    </p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                <div>Posted by The User</div>   
                <div>27th June</div> 
                </div>
            </div>
        </div>    

    )
}

export default ProjectDetails