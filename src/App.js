import axios from 'axios';

import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import ReactDOM from 'react-dom';
import BackgroundImg1 from './images/1.jpg';
import BackgroundImg2 from './images/2.jpg';
import BackgroundImg3 from './images/3.jpg';
import BackgroundImg4 from './images/4.jpg';
import BackgroundImg5 from './images/5.jpg';
import BackgroundImg6 from './images/6.jpg';
import BackgroundImg7 from './images/7.jpeg';
import BackgroundImg8 from './images/8.jpg';
import BackgroundImg9 from './images/9.jpg';
import BackgroundImg10 from './images/10.jpg';
import BackgroundImg11 from './images/11.jpg';
import BackgroundImg12 from './images/12.jpg';
import Plus from "./images/plus.png";

var images = [
    BackgroundImg1,
    BackgroundImg2,
    BackgroundImg3,
    BackgroundImg4,
    BackgroundImg5,
    BackgroundImg6,
    BackgroundImg7,
    BackgroundImg8,
    BackgroundImg8,
    BackgroundImg9,
    BackgroundImg10,
    BackgroundImg11,
    BackgroundImg12,
];


var Background = {
    backgroundImage: `url(${images[Math.round(Math.random() * 12)]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
};

class App extends React.Component {
    state = {
        x: Math.round(Math.random() * 1400),
        y: Math.round(Math.random() * 800),
        blur: 1,
        para: 'radial-gradient(rgb(255, 255, 255), rgb(0, 0, 0), transparent)',
        borderColor: '#fff',
        count: 1,
        newItem: null,
        success: false,
        webURL: '',
        favicon: '',
        finaUrlTailName: '',
        ItemArr: [],
        ItemURL: '',
        ItemName: '',
        URLTailName: '',
        AddForm: false,
        step2: false,
        slide2: false,
        addContent: true,
        permanent: [
            'https://www.youtube.com',
            'https://www.google.com',
            'https://www.linkedin.com',
            'https://www.facebook.com'
        ]
    };

    componentWillMount() {
        axios.post('https://api.muctool.de/whois').then(response => {
            console.log("response new by ali is this : ", response);
        })
    }


    // mouseOver(e){
    //     // this.setState({x:e.nativeEvent.pageX, y:e.nativeEvent.pageY});
    //     console.log("window.event");
    //     this.setState({para:'none',borderColor:'#000'});
    // }
    // mouseOut(e){
    //     // this.setState({x:e.nativeEvent.pageX, y:e.nativeEvent.pageY});
    //     console.log("window.event.initial");
    //     this.setState({para:'radial-gradient(rgb(255, 255, 255), rgb(0, 0, 0), transparent)',borderColor:'#fff'})
    // }
    // myFunction(e) {
    //     this.setState({x:e.nativeEvent.pageX, y:e.nativeEvent.pageY});
    //     this.forceUpdate();
    // }
    //https://ibb.co/d2pRwY5

    handleURL = () => {
        const {AddForm, slide2, step2} = this.state;
        // if(slide1 === true){
        //
        // }
        this.setState({AddForm: true, addContent: false});
        // if(step2 === true){
        //
        // }
    };

    goBack = () => {
        this.setState({AddForm: false, addContent: true});
    };

    addItem = () => {
        const {webURL, favicon, ItemArr, ItemName} = this.state;
        console.log("webURL : ", webURL);
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        if (pattern.test(webURL)) {
            // this.state.permanent.map(link => {
            console.log("ItemArr : " , ItemArr);
            ItemArr.map(item => {
                
            });
            if (webURL === 'https://www.youtube.com' || webURL === 'https://www.google.com' || webURL === 'https://www.facebook.com' || webURL === 'https://www.linkedin.com' || webURL === 'www.linkedin.com' || webURL === 'www.facebook.com' || webURL === 'www.google.com' || webURL === 'www.youtube.com') {
                return alert("This link is already available. Please use another one.");
            }
            else {
                console.log("not match");
                const arr = webURL.split("");
                // console.log("URL : ", arr.indexOf("."));
                const dotIndexNum = arr.indexOf(".");
                arr.splice(dotIndexNum, 1);
                // console.log("urlTailDOtStart",arr, urlTailDotStart);
                const urlTailName = arr.splice(dotIndexNum);
                // this.state.finaUrlTailName = urlTailName.replace(/,/g, "");

                // this.setState({favicon:`https://www.google.com/s2/favicons?domain=`});
                // console.warn("urlTailName : ", urlTailName);
                // console.warn("Favicon : ", favicon)
                const newone = urlTailName.join();
                const finaUrlTailName = newone.replace(/,/g, "");

                // this.setState({favicon: `https://www.google.com/s2/favicons?domain=${finaUrlTailName}`});
                this.setState({favicon: `https://www.${ItemName}.com/favicon.ico`});
                console.log("favicon : ", favicon);
                const separateNameByCamma = finaUrlTailName.split("");
                // const catchNameDot = separateNameByCamma.indexOf(".");
                const finalArrValue = separateNameByCamma.slice(0, separateNameByCamma.indexOf("."));
                const finalcommaValue = finalArrValue.join();
                const finalValue = finalcommaValue.replace(/,/g, "");
                const ItemDetails = {
                    ItemURL: favicon,
                    URLTailName: finaUrlTailName,
                    ItemName: finalValue
                };
                this.setState({
                    ItemArr: [...ItemArr, ItemDetails],
                    webURL: ""
                });
                this.forceUpdate();

                this.setState({AddForm: false, addContent: true});
            }
            // })
        } else {
            this.setState({AddForm: true, addContent: false});
        }
    };


    RemoveMember = (index) => {
        const {ItemArr} = this.state;
        console.log("Index : ", index);
        const newArray = ItemArr;
        newArray.splice(index,1);
        this.setState({
            ItemArr: newArray
        });
    }

    // handleUploadFile = (e) => {
    //     let item = e.target.files;
    //     let reader = new FileReader();
    //     reader.readAsDataURL(item[0]);
    //     reader.onload = (e) => {
    //         this.setState({newItem: e.target.result});
    //         console.log("I am fully loaded ", this.state.newItem)
    //     };
    //     axios.get('https://besticon-demo.herokuapp.com/').then(response => {
    //         console.log("response : ", response);
    //     });
    //
    //     console.log('webURL : ', this.state.webURL, 'uploaded: ', this.state.success);
    // };

    componentDidMount() {
        var canvas = document.getElementsByClassName("bg-animation");
        window.addEventListener('resize', function () {
            console.log("canvas", canvas[0].style.height = "100vh", canvas[0].style.width = "100vw");
            // canvas.width  = window.innerWidth;
            // canvas.height = window.innerHeight;
        }, true);
        canvas[0].style.height = "100vh";
        canvas[0].style.width = "100vw"

        axios.get('https://ipinfo.io').then(response => {
            console.log("ipinfo response : ", response);
        })
    }

    componentDidUpdate() {
        if (this.state.webURL !== "" && this.state.success === true) {
            setTimeout(() => {
                this.setState({success: true});
            }, 1000)
        }
        console.log("Success: ", this.state.success, 'webURL: ', this.state.webURL);
    }

    render() {
        // console.log("`url(${images[Math.round(Math.random()*2)]})`", `url(${Background}), `,Math.round(Math.random()*11));
        // console.log("window.event",this.state.x,this.state.y);
        const {x, y, borderColor, count, newItem, message, webURL, ItemArr, ItemURL, ItemName, ItemObject, AddForm, addContent} = this.state;
        return (
            <div className="App">
                {/*<header className="App-header" style={Background}>*/}
                {/*<code className="app-code">Nawab Muqsit Ali</code>*/}
                <div className={"wrapper-bookmark center"}>
                    <div className={`wrapper-links ${addContent === true ? "active" : ""}`}>
                        {/*<a className="link" href="https://youtube.com/">*/}
                        {/*    <img src={Youtube}/>*/}
                        {/*    /!*<sapn>Youtube</sapn>*!/*/}
                        {/*</a>*/}
                        {/*<a className="link" href="https://google.com/">*/}
                        {/*    <img src={Google}/>*/}
                        {/*    /!*<sapn>Youtube</sapn>*!/*/}
                        {/*</a>*/}
                        {/*<a className="link" href="https://linkedin.com/">*/}
                        {/*    <img src={Linkedin}/>*/}
                        {/*    /!*<sapn>Youtube</sapn>*!/*/}
                        {/*</a>*/}
                        {/*<a className="link" href="https://facebook.com/">*/}
                        {/*    <img src={Facebook}/>*/}
                        {/*    /!*<sapn>Youtube</sapn>*!/*/}
                        {/*</a>*/}
                        {/*<a className="link" href="https://twitter.com/">*/}
                        {/*    <img src={Twitter} style={{height: '40px'}}/>*/}
                        {/*    /!*<sapn>Youtube</sapn>*!/*/}
                        {/*</a>*/}
                        <div className="main-item-wrapper">
                            <a href={`https://www.youtube.com`}
                               style={{backgroundImage: `url(https://www.youtube.com/favicon.ico)`}}
                               className="uploaded-file-wrapper">
                                <p className="logoName">Youtube</p>
                            </a>
                        </div>
                        <div className="close">
                            <i className="fa fa-close"></i>
                        </div>
                        <div className="main-item-wrapper">
                            <a href={`https://www.google.com`}
                               style={{backgroundImage: `url(https://www.google.com/favicon.ico)`}}
                               className="uploaded-file-wrapper">
                                <p className="logoName">google</p>
                            </a>
                        </div>
                        <div className="main-item-wrapper">
                            <a href={`https://www.facebook.com`}
                               style={{backgroundImage: `url(https://www.facebook.com/favicon.ico`}}
                               className="uploaded-file-wrapper">
                                <p className="logoName">Facebook</p>
                            </a>
                        </div>
                        <div className="main-item-wrapper">
                            <a href={`https://www.github.com`}
                               style={{backgroundImage: `url(https://www.github.com/favicon.ico)`}}
                               className="uploaded-file-wrapper">
                                <p className="logoName">Github</p>
                            </a>
                        </div>
                        <div className="main-item-wrapper">
                            <a href={`https://www.linkedin.com`}
                               style={{backgroundImage: `url(https://www.linkedin.com/favicon.ico)`}}
                               className="uploaded-file-wrapper">
                                <p className="logoName">Linkedin</p>
                            </a>
                        </div>
                        {/*<a href={`https://www.${Item.URLTailName}`}*/}
                        {/*   style={{backgroundImage: `url(https://www.google.com/s2/favicons?domain=${Item.URLTailName})`}}*/}
                        {/*   className="uploaded-file-wrapper">*/}
                        {/*    <p className="logoName">{Item.ItemName}</p>*/}
                        {/*</a>*/}

                        {
                            ItemArr.map((Item, index) => {
                                    return (
                                        <>
                                            <div className="main-item-wrapper">
                                                <a href={`https://www.${Item.URLTailName}`}
                                                   style={{backgroundImage: `url(https://www.google.com/s2/favicons?domain=${Item.URLTailName})`}}
                                                   className="uploaded-file-wrapper">
                                                    <p className="logoName">{Item.ItemName}</p>
                                                </a>
                                                <div className="close" onClick={() => {
                                                    this.RemoveMember(index)
                                                }}>
                                                    <i className="fa fa-close"></i>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                            )
                        }
                        <a className="link uploaded-file-wrapper" onClick={() => {
                            this.handleURL()
                        }}>
                            <img src={Plus}/>
                            {/*<sapn>Youtube</sapn>*/}
                        </a>
                    </div>
                    <div className={`wrapper-newItem ${AddForm === true ? "active" : ""}`}>
                        <input type="url" className="url-input" placeholder="Enter Url (https://www.youtube.com)"
                               name="webURL" autoComplete="Off" onChange={(e) => {
                            this.setState({[e.target.name]: e.target.value})
                        }}/>
                        {/*<label className="file-input-wrapper" onClick={() => {this.setState({AddForm:false, addContent:true})}}>*/}
                        {/*    <i className="fa fa-cloud-upload"></i>*/}
                        {/*    <span>Upload Logo</span>*/}
                        {/*</label>*/}
                        <button className="primary-btn" onClick={this.goBack}>Go Back</button>
                        <button className="primary-btn" onClick={this.addItem}>Done</button>
                    </div>
                </div>
                {/*<img src={BackgroundImg}/>*/}
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 70
                            },
                            "size": {
                                "value": 2,
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }}
                    style={Background}
                    className="bg-animation"
                    id="canvas"
                />
                {/*</header>*/}
                {/*<div className="para" style={{left: x + 'px', top: y + 'px', background:this.state.para, borderColor: borderColor}}></div>    https://www.google.com/s2/favicons?domain=stackoverflow.com

*/}

            </div>

        );
    }
}

export default App;
ReactDOM.render(<App/>, document.getElementById('root'));


// this.setState({favicon:`https://www.google.com/s2/favicons?domain=`});