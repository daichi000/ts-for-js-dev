export {};
import axios from 'axios';

let url: string = 'http://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function(res) {
    interface Article {
        id: number;
        title: string;
        description: string;
    }
    let data: Article[];
    data = res.data;
    data = [
        {
            id: 1,
            title: 'ti',
            description: 'des'
        }
    ]
    console.log(res.data);
})