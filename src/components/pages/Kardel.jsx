import React from 'react';
import {Page, Navbar, Card,CardHeader, ContentBlockTitle, ContentBlock, GridCol, GridRow, CardContent, AccordionItem, AccordionToggle, AccordionContent} from 'framework7-react';

export const Kardel = () => {
    return (
        <Page>
            <Navbar title="Kardel" backLink="Back" sliding />
            <Card>
                {/* ================================ */}
                {/* Top */}
                {/* ================================ */}
                <CardHeader>
                    <GridRow noGutter>
                        <GridCol width="40">
                            <div><img src="img/Axe.png" role="presentation" width="80" height="80"/></div>
                        </GridCol>
                        <GridCol width="60">
                            <div>Axe the Mogul Khan Guide </div>
                        </GridCol>
                    </GridRow>
                </CardHeader>

                <CardContent>

                    {/* ================================ */}
                    {/* Description */}
                    {/* ================================ */}
                    <ContentBlockTitle><p>Description</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <p>Axe, one of the strongest tanker in Dota Allstars, not to mention his ulti can directly kill the low life hero even with Omniknight ulti effect. I got one friend even say that he is a mad, self-torture hero, I can't agree more.</p>
                    </ContentBlock>
                    <ContentBlockTitle><p>Information</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <div>Range: 100(Melee) | Move Speed: 290</div>
                        <div>Primary: STR</div>
                        <div>Str: 25 + 2.5 | Agi: 20 + 2.2 | Int: 14 + 1.6</div>
                        <div>Damage: 49-53 | HP: 625 | Mana: 182</div>
                        <div>HP Regen: 1 | Mana Regen: 0.57</div>
                        <div>Attack Speed: 1.42 | Armor: 2</div>
                    </ContentBlock>

                    {/* ================================ */}
                    {/* Skills */}
                    {/* ================================ */}
                    <ContentBlockTitle><p>Skills</p></ContentBlockTitle>
                    
                    <ContentBlock inner>
                        {/* Skill 1 */}
                        <AccordionItem>
                            <AccordionToggle>
                                <GridRow noGutter>
                                    <GridCol width="20">
                                        <div><img src="img/Skills/Axe/1.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>Beserker's Call</div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    {/* Skill 1 Description here */}
                                    <ContentBlock>
                                        <div>Mogul Kahn focuses all of his enemies' hatred on him, causing them to attack him at all costs. 300 AoE.</div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>Level 1 - Lasts 1.5 seconds, 5 bonus armor.</div>
                                        <div>Level 2 - Lasts 2 seconds, 10 bonus armor.</div>
                                        <div>Level 3 - Lasts 2.5 seconds, 15 bonus armor.</div>
                                        <div>Level 4 - Lasts 3 seconds, 20 bonus armor.</div>
                                        <div>Mana Cost: 80/90/100/110</div>
                                        <div>Cooldown: 14 seconds</div>
                                    </ContentBlock>
                                </ContentBlock>
                                <ContentBlock>
                                <p></p>
                                </ContentBlock>

                            </AccordionContent>
                        </AccordionItem>

                        {/* Skill 2 */}
                        <AccordionItem>
                            <AccordionToggle>
                                <GridRow noGutter>
                                    <GridCol width="20">
                                        <div><img src="img/Skills/Axe/2.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>Skill 2</div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>
                                 <GridRow noGutter>
                                    <GridCol width="10">
                                        <p> </p>
                                    </GridCol>
                                    <GridCol width="90">

                                        <ContentBlock inner>
                                            {/* Skill 2 Description here */}
                                            <p>Mauris posuere sit amet metus id venenatis. Ut ante dolor, tempor nec commodo rutrum, varius at sem. Nullam ac nisi non neque ornare pretium. Nulla mauris mauris, consequat et elementum sit amet, egestas sed orci. In hac habitasse platea dictumst.</p>
                                        </ContentBlock>
                                        <ContentBlock>
                                        <p></p>
                                        </ContentBlock>
                                        
                                    </GridCol>
                                </GridRow>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Skill 3 */}
                        <AccordionItem>
                            <AccordionToggle>
                                <GridRow noGutter>
                                    <GridCol width="20">
                                        <div><img src="img/Skills/Axe/3.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>Skill 3</div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>
                                 <GridRow noGutter>
                                    <GridCol width="10">
                                        <p> </p>
                                    </GridCol>
                                    <GridCol width="90">

                                        <ContentBlock inner>
                                            {/* Skill 3 Description here */}
                                            <p>Mauris posuere sit amet metus id venenatis. Ut ante dolor, tempor nec commodo rutrum, varius at sem. Nullam ac nisi non neque ornare pretium. Nulla mauris mauris, consequat et elementum sit amet, egestas sed orci. In hac habitasse platea dictumst.</p>
                                        </ContentBlock>
                                        <ContentBlock>
                                        <p></p>
                                        </ContentBlock>
                                        
                                    </GridCol>
                                </GridRow>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Skill 4 */}
                        <AccordionItem>
                            <AccordionToggle>
                                <GridRow noGutter>
                                    <GridCol width="20">
                                        <div><img src="img/Skills/Axe/4.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>Skill 4</div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>
                                 <GridRow noGutter>
                                    <GridCol width="10">
                                        <p> </p>
                                    </GridCol>
                                    <GridCol width="90">

                                        <ContentBlock inner>
                                            {/* Skill 4 Description here */}
                                            <p>Mauris posuere sit amet metus id venenatis. Ut ante dolor, tempor nec commodo rutrum, varius at sem. Nullam ac nisi non neque ornare pretium. Nulla mauris mauris, consequat et elementum sit amet, egestas sed orci. In hac habitasse platea dictumst.</p>
                                        </ContentBlock>
                                        <ContentBlock>
                                        <p></p>
                                        </ContentBlock>
                                        
                                    </GridCol>
                                </GridRow>
                            </AccordionContent>
                        </AccordionItem>


                    </ContentBlock>

                </CardContent>
            </Card>
        </Page>
    );
};
