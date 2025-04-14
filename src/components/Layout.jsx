export default function Layout(props) {

    const { children } = props
    const header = (
        <header>
            <h1 className="text-gradient">The Workout Program</h1>
            <p><strong>30 Simple Workout Programs</strong></p>
        </header>
    )
    const footer = (
        <footer>
            <p>Built by <a href="https://maquentr.com" target="_blank">maquentr</a></p>
        </footer>
    )

    return (
        <>
            {header}
            {children}
            {footer}
        </>
    )
}