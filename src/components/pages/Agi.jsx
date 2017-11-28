import React from 'react';
import {Page, ContentBlock, Navbar, List, ListItem} from 'framework7-react';

export const Agi = () => {
    return (
        <Page>
            <Navbar title="Agility" backLink="Back" sliding />
             <ContentBlock>
                <List mediaList>
                    <ListItem
                        link="/yurnero/"
                        media="<img src='img/yurnero.png' widht='80' height='80'>"
                        title="Yurnero"
                        text="Yurnero the Juggernaut"
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
