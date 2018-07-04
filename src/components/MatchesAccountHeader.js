import React, { Component } from 'react'

class MatchesAccountHeader extends Component {
  render() {
    const { account, season } = this.props

    if (!account) {
      return null
    }

    return (
      <h2 className="h2 text-normal mb-2">
        <span className="text-gray">Season {season}</span>
        <span> / </span>
        {account.battletag}
      </h2>
    )
  }
}

export default MatchesAccountHeader
