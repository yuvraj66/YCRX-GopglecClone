import React, { useState } from 'react';
import '../css/show.css';
const Show=(props)=> {
const {info,results}=props;

  return (
<div className="mainContainers">
<div className="mainContainers__head">
	<p>{info ? `About: ${info.totalResults} Results`:""}</p>
</div>
<div className="mainContainers__info">
{results != null  ? results.map(result=>(
<div className="container">

<div className="container__link">
	{result.displayLink}
</div>
	<div className="container__title">
	<a href={result.link}>{result.title}</a>
</div>

<div className="container__snippet">
	<p>{result.snippet}</p>
</div>
</div>
)) : <h1> परिणामहरू फेला परेन, कृपया गुगलमा खोजी गर्नुहोस् ! Error</h1> }
</div>
</div>
  );
}
// value={state} onClick={clear}
export default Show;
