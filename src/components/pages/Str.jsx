import React from 'react';
import {Page, ContentBlock, Navbar, List, ListItem} from 'framework7-react';

export const Str = () => {
    return (
        <Page>
            <Navbar title="Strength" backLink="Back" sliding />
            <ContentBlock>
                <List mediaList>
                    <ListItem
                        link="/axe/"
                        media="<img src='img/Axe.png' widht='80' height='80'>"
                        title="Axe"
                        text="Axe the Mogul Khan Guide"
                    ></ListItem>
                    <ListItem
                        link="/crixalis/"
                        media="<img src='img/crixalis.png' widht='80' height='80'>"
                        title="Crixalis"
                        text="The Sand King"
                    ></ListItem>
                    <ListItem
                        link="/str/"
                        media="<img src='img/str.png' widht='80' height='80'>"
                        title="Raigor"
                        text="Raigor Stone Hoof"
                    ></ListItem>
                    <ListItem
                        link="/str/"
                        media="<img src='img/str.png' widht='80' height='80'>"
                        title="Raigor"
                        text="Raigor Stone Hoof"
                    ></ListItem>
                    <ListItem
                        link="/str/"
                        media="<img src='img/str.png' widht='80' height='80'>"
                        title="Raigor"
                        text="Raigor Stone Hoof"  
                    ></ListItem>
                    <ListItem
                        link="/str/"
                        media="<img src='img/str.png' widht='80' height='80'>"
                        title="Raigor"
                        text="Raigor Stone Hoof"  
                    ></ListItem>
                    <ListItem
                        link="/str/"
                        media="<img src='img/str.png' widht='80' height='80'>"
                        title="Raigor"
                        text="Raigor Stone Hoof"  
                    ></ListItem>
                    <ListItem
                        link="/str/"
                        media="<img src='img/str.png' widht='80' height='80'>"
                        title="Raigor"
                        text="Raigor Stone Hoof"  
                    ></ListItem>
                </List>
            </ContentBlock>
        </Page>
    );
};
