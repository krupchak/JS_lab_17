import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Task1 extends React.Component {
    render() {
        let info = (<h1>1</h1>);
        return (
            <div>
                { info }
                Текст
            </div>
        );
    }
}

class Task2 extends React.Component {
    render() {
        let info = (<h1>2</h1>);
        let text = 'Текст';
        return (
            <div>
                { info }
                { text }
            </div>
        );
    }
}

class Task3 extends React.Component {
    render() {
        let info = (<h1>3</h1>);

        let text = (<p>Текст</p>);
        return (
            <div>
                { info }
                { text }
            </div>
        );
    }
}

class Task4 extends React.Component {
    render() {
        let info = (<h1>4</h1>);

        let text1 = (<p>Текст1</p>);
        let text2 = (<p>Текст2</p>);
        return (
            <div>
                { info }
                { text1 }
                <p>!!!</p>
                { text2 }
            </div>
        )
    }
}

class Task5 extends React.Component {
    render() {
        let info = (<h1>5</h1>);

        let attr = 'block';
        return (
            <div id={ attr }>
                { info }
                Текст
            </div>
        );
    }
}

class Task6 extends React.Component {
    render() {
        let info = (<h1>6</h1>);
        let str = 'block';
        return (
            <div className={ str }>
                { info }
                Текст
            </div>
        );
    }
}

class Task7 extends React.Component {
    render() {
        let info = (<h1>7</h1>);

        return (
            <div style={ { 
                        background: 'green' ,
                        border: '5px solid black',
                        borderRadius: '30px',
                        textAlign: 'center',
                        color: 'black',
                        fontSize: '20px',
                        margin: '30px'
                    } }>
                { info }
            </div>
        );
    }
}

class Task8 extends React.Component {
    render() {
        let info = (<h1>8</h1>);

        let show = true;
        let content;

        if (show) content = 'Текст1'
        else content = 'Текст2'

        return (
            <div>
                { info }
                { content }
            </div>
        );
    }
}

class Task9 extends React.Component {
    render() {
        let info = (<h1>9</h1>);

        let arr = ['a', 'b', 'c', 'd', 'e'];
        let list = '';

        list = arr.map((item, index) => {
            return (<li>{ item }</li>)
        });

        return (
            <div>
                { info }
                <ul>
                    { list }
                </ul>
            </div>
        );
    }
}

class Task10 extends React.Component {
    getText() {
        return <p>Текст</p>
    }

    render() {
        let info = (<h1>10</h1>);

        return (
            <div>
                { info }
                { this.getText() }
            </div>
        );
    }
}

class Task11 extends React.Component {
    getNum1() {
        return 1;
    }

    getNum2() {
        return 2;
    }

    render() {
        let info = (<h1>11</h1>);

        return (
            <div>
                { info }
                Текст { this.getNum1() + this.getNum2() }
            </div>
        );
    }
}

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <div>
            <Task1 />
            <Task2 />
            <Task3 />
            <Task4 />
            <Task5 />
            <Task6 />
            <Task7 />
            <Task8 />
            <Task9 />
            <Task10 />
            <Task11 />
        </div>
    );