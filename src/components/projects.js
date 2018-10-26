import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';

class Projects extends Component {
constructor(props) {
  super(props);
  this.state = { activeTab: 0};
}

toggleCategories(){
  if(this.state.activeTab === 0) {
    return (
      <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', background: 'url(https://www.underconsideration.com/brandnew/archives/genesys_monogram_detail.png) center / cover'}}>
            Genesys Project #1
          </CardTitle>
          <CardText>
            Genesys, is a company that sells customer experience and call center technology to mid-sized and large businesses. It sells both cloud-based and on-premises software. Genesys is headquartered in Daly City, California, and has offices in Canada, Latin America, Europe, the Middle East, Africa, Asia, and Australia.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share"></IconButton>
          </CardMenu>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', background: 'url(https://www.underconsideration.com/brandnew/archives/genesys_monogram_detail.png) center / cover'}}>
            Genesys Project #1
          </CardTitle>
          <CardText>
            Genesys, is a company that sells customer experience and call center technology to mid-sized and large businesses. It sells both cloud-based and on-premises software. Genesys is headquartered in Daly City, California, and has offices in Canada, Latin America, Europe, the Middle East, Africa, Asia, and Australia.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share"></IconButton>
          </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', background: 'url(https://www.underconsideration.com/brandnew/archives/genesys_monogram_detail.png) center / cover'}}>
            Genesys Project #1
          </CardTitle>
          <CardText>
            Genesys, is a company that sells customer experience and call center technology to mid-sized and large businesses. It sells both cloud-based and on-premises software. Genesys is headquartered in Daly City, California, and has offices in Canada, Latin America, Europe, the Middle East, Africa, Asia, and Australia.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share"></IconButton>
          </CardMenu>
        </Card>
      </div>
    );
  }else if (this.state.activeTab === 1) {
    return (
      <div><h1>This is C#</h1></div>
    );
  }else if (this.state.activeTab === 2) {
    return (
      <div><h1>This is React</h1></div>
    );
  }
}

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
          <Tab> Genesys </Tab>
          <Tab> C#</Tab>
          <Tab> React </Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>

      </div>
    )
  }
}

export default Projects;
