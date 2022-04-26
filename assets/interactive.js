import React, {Component} from 'react';

export default class Toggle extends Component {
  constructor(){
    super();
    this.state = { showArticle: true };
  }

  render(){
    const { showArticle } = this.state;
    const classes = showArticle ? 'db' : 'dn';
    return (
      <div style={{color: 'white', textAlign: 'left'}}>
        <article className={`pa3 ${classes}`}>
          <h1>Title</h1>
          <p className="measure lh-copy">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>
        </article>
        <button
          onClick={()=>{ this.setState({ showArticle: !showArticle})}}
          style={{padding: '10px 40px', fontSize: '18px', borderRadius: '4px'}}>
          Toggle
        </button>
      </div>
    )
  }
}
