export default function VCenter(props: { children?: React.ReactNode }) {
    return (
        <div className="row h-100">
            <div className="col my-auto">
                {props.children}
            </div>
        </div>
    )
}