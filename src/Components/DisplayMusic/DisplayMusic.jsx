import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'



const DisplayMusic = ({songs, search}) => {

    const globalIgnoreRegex = new RegExp(search, 'gi')

    let songSearch = songs.filter((song) =>{
        if(globalIgnoreRegex.test(song.artist) === true || 
            globalIgnoreRegex.test(song.title) === true || 
            globalIgnoreRegex.test(song.album) === true || 
            globalIgnoreRegex.test(song.release_date) === true ||
            globalIgnoreRegex.test(song.genre) === true){
            return true;
        } else {
            return false;
        }
    })
 

    return ( 
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {songSearch.map((song, index)=> {
                        return (
                            <tr key={index + 1}>
                                <th>{song.id}</th>
                                <th>{song.title}</th>
                                <th>{song.artist}</th>
                                <th>{song.album}</th>
                                <th>{song.release_date}</th>
                                <th>{song.genre}</th>
                            </tr>
                        )
                    })}
                </tbody>
    </Table>
        </div>
     );
}
 
export default DisplayMusic;