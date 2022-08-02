import React from "react";
import FooterComponent from "./footer/footer";
import HeaderComponent from "./header/header";

type Iprops = {
  children: React.ReactNode;
};

const PrincipalComponents = (props: Iprops) => {
  return (
    <div id="main-wrapper">
      <HeaderComponent />
      <div className="page-wrapper">{props.children}</div>
      <FooterComponent />
    </div>
  );
};

export const withPrincipal = (component: any) => {
  const Component = component;

  return (): React.ReactElement => {
    return (
      <PrincipalComponents>
        <Component />
      </PrincipalComponents>
    );
  };
};

export default PrincipalComponents;
