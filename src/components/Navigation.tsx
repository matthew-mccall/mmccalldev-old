export default function Navigation() {
    return (
        <div className="text-center">
            <h6 className="d-none d-md-block">mmccall.dev</h6>
            <br className="d-none d-md-block" />
            <div className="nav nav-pills flex-column">
                <a
                    className="nav-link active"
                    aria-current="page"
                    href="/">web</a
                >
                <a className="nav-link" href="https://docs.mmccall.dev">docs</a>
                <a className="nav-link" href="https://blog.mmccall.dev">blog</a>
                <a className="nav-link" href="https://blog.mmccall.dev">resume</a>
                <br />
                <a className="nav-link" href="https://blog.mmccall.dev"><i className="bi-linkedin"></i></a>
                <a className="nav-link" href="https://blog.mmccall.dev"><i className="bi-github"></i></a>
                <a className="nav-link" href="https://blog.mmccall.dev"><i className="bi-twitter"></i></a>
                <a className="nav-link" href="https://blog.mmccall.dev"><i className="bi-instagram"></i></a>
                <a className="nav-link" href="https://blog.mmccall.dev"><i className="bi-youtube"></i></a>
            </div>
        </div>
    )
}