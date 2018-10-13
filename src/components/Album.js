import React, { Component } from 'react';
import { Grid } from 'mauerwerk'
import lodash from 'lodash'
import data from './data'
import Cell from './Cell'
import Header from './Header'

class Album extends Component {
  state = { data, columns: 3, margin: 0, filter: '', height: true }
  search = e => this.setState({ filter: e.target.value })
  shuffle = () => this.setState(state => ({ data: lodash.shuffle(state.data) }))
  setColumns = e => this.setState({ columns: parseInt(e.key) })
  setMargin = e => this.setState({ margin: parseInt(e.key) })
  setHeight = e => this.setState({ height: e })
  render() {
    const data = this.state.data.filter(
      d => d.name.toLowerCase().indexOf(this.state.filter) !== -1
    )
    return (
      <div className="main">
        <Header
          {...this.state}
          search={this.search}
          shuffle={this.shuffle}
          setColumns={this.setColumns}
          setMargin={this.setMargin}
          setHeight={this.setHeight}
        />      
        <Grid
          className="Album"
          // Arbitrary data, should contain keys, possibly heights, etc.
          data={data}
          // Key accessor, instructs grid on how to fetch individual keys from the data set
          keys={d => d.name}
          // Can be a fixed value or an individual data accessor (for variable heights)
          // If you leave it undefined it will assume 100% container height
          heights={this.state.height ? d => d.height : 200}
          // Optional: number of columns (make it responsive yourself using react-measure/react-media)
          columns={this.state.columns}
          // Optional: space between elements
          margin={this.state.margin}
          // Optional: removes the possibility to scroll away from a maximized element
          lockScroll={false}
          // Optional: delay before minimizing an opened element
          closeDelay={500}
          // Optional: animates the grid in if true (default)
          transitionMount={true}>
          {(data, maximized, toggle) => (
            <Cell {...data} maximized={maximized} toggle={toggle} />
          )}
        </Grid>
      </div>     
    )
  }
}

export default Album;
