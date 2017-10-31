import React from 'react';
import Compute from '../component/Compute';

const ComputeContainer = ({ handleComputeClick }) => {
  return (
    <div className="compute-container">
      <Compute val="/" handleComputeClick={ handleComputeClick }/>
      <Compute val="*" handleComputeClick={ handleComputeClick }/>
      <Compute val="-" handleComputeClick={ handleComputeClick }/>
      <Compute val="+" handleComputeClick={ handleComputeClick }/>
      <Compute val="=" handleComputeClick={ handleComputeClick }/>
    </div>
  )
}

export default ComputeContainer;
