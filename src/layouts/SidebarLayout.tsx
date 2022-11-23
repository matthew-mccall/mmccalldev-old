import Navigation from "../components/Navigation";
import VCenter from "../components/VCenter";

export default function SidebarLayout(props: { children: React.ReactNode }) {
    return (
        <>
            <div className="row g-0 vh-100">
                <div className=" d-none d-md-block col-auto h-100 border-end bg-light px-5">
                    <VCenter>
                        <Navigation />
                    </VCenter>
                </div>
                <div className="col h-100 overflow-auto">
                    {props.children}
                </div>
            </div>
            <div className="row fixed-bottom d-md-none">
                <div className="col-auto ms-auto">
                    <button className="btn btn-light border m-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar" aria-controls="sidebar">
                        <i className="bi-list" />
                    </button>
                </div>
            </div>
            <div className="offcanvas offcanvas-start" id="sidebar" aria-labelledby="sidebarLabel" data-bs-backdrop="static" tabIndex={-1}>
                <div className="offcanvas-header border-bottom">
                    <h5 className="offcanvas-title" id="sidebarLabel">mmccall.dev</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <Navigation />
                </div>
            </div>
        </>
    )
}