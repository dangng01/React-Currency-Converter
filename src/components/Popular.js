import React from 'react'

class Popular extends React.Component {
  render() {
    var languages = ['All', 'JavaScript','Ruby','Java','CSS','Python'];
    return (
      <ul className="languages">
          {languages.map(function (lang){
            return (
              <li>
                {lang}
              </li>
            )
          })}
      </ul>
    )
  }
}

export default Popular;
