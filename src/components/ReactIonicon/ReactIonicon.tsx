import React from 'react';

import Helmet from "react-helmet";

declare global {
    namespace JSX {
      interface IntrinsicElements {
        'ion-icon': IonIconProps
      }
    }
  }
  
  interface IonIconProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    name?: string
    size?: string
  }

export interface props{
    name: string,
    size: string
    className: string,
}

const ReactIonicon = (props: props) => {
  return (
    <>
        <Helmet>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </Helmet>
        <div className={props.className}>
            <ion-icon name={props.name} size={props.size}/>
        </div>
    </>
  )
}

export default ReactIonicon;
