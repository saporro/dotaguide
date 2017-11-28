import React from 'react';
import {Page, Navbar, Card,CardHeader, ContentBlockTitle, ContentBlock, GridCol, GridRow, CardContent, AccordionItem, AccordionToggle, AccordionContent} from 'framework7-react';

export const Yurnero = () => {
    return (
        <Page>
            <Navbar title="Yurnero" backLink="Back" sliding />
            <Card>
                {/* ================================ */}
                {/* Top */}
                {/* ================================ */}
                <CardHeader>
                    <GridRow noGutter>
                        <GridCol width="40">
                            <div><img src="img/Yurnero.png" role="presentation" width="80" height="80"/></div>
                        </GridCol>
                        <GridCol width="60">
                            <div>Yurnero the Juggernaut Guide</div>
                        </GridCol>
                    </GridRow>
                </CardHeader>

                <CardContent>

                    {/* ================================ */}
                    {/* Description */}
                    {/* ================================ */}
                    <ContentBlockTitle><p>Description</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <p>
                            Yurnero is one of the carry hero who can become immune to magic, has awesome finishing moves and has good healing mechanism. This post contains Yurnero the Juggernaut guide, item build, skill build and strategy.
                        </p>
                    </ContentBlock>
                    <ContentBlockTitle><p>Information</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <div>Strength - 20 + 1.9</div>
                        <div>Agility - 20 + 2.85 (Primary)</div>
                        <div>Intelligence- 14 + 1.4</div>
                        <div>Base damage 44-48</div>
                        <div>Attack range of 100 (melee)</div>
                        <div>Base Armor 3.9</div>
                        <div>Movement speed of 305</div>
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
                                        <div><img src="img/Skills/Yurnero/1.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>Blade Fury</div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            
                            <AccordionContent>

                                <ContentBlock inner>
                                    {/* Skill 1 Description here */}
                                    <ContentBlock>
                                        <div>
                                            Causes a bladestorm of destructive force around Yurnero, rendering him immune to magic and dealing damage to nearby enemy units. Lasts 5 seconds.
                                        </div>
                                    </ContentBlock>
                                    {/* 'Skill 1 Info here */}
                                    <ContentBlock>
                                        <p></p>
                                        <div>Level 1 - Deals 80 damage per second</div>
                                        <div>Level 2 - Deals 100 damage per second</div>
                                        <div>Level 3 - Deals 120 damage per second</div>
                                        <div>Level 4 - Deals 140 damage per second</div>
                                        <div>Mana Cost: 110</div>
                                        <div>Cooldown: 30,28,26,24</div>
                                    </ContentBlock>
                                </ContentBlock>
                                <ContentBlock>
                                <p></p>
                                </ContentBlock>

                            </AccordionContent>
                        </AccordionItem>

                        {/* 'Skill 2 */}
                        <AccordionItem>
                            <AccordionToggle>
                                <GridRow noGutter>
                                    <GridCol width="20">
                                        <div><img src="img/Skills/Yurnero/2.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>Healing Ward</div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    {/* Skill 2 Description here */}
                                    <ContentBlock>
                                        <div>
                                            Summons a Healing Ward that heals all nearby allied units' life. Lasts 25 seconds.
                                        {/* 'Skill 2 Description here */}
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>Level 1 - Heals 1% of hit points per second.</div>
                                        <div>Level 2 - Heals 2% of hit points per second.</div>
                                        <div>Level 3 - Heals 3% of hit points per second.</div>
                                        <div>Level 4 - Heals 4% of hit points per second.</div>
                                    </ContentBlock>
                                </ContentBlock>
                                <ContentBlock>
                                <p></p>
                                </ContentBlock>

                            </AccordionContent>
                        </AccordionItem>

                        {/* Skill 3 */}
                        <AccordionItem>
                            <AccordionToggle>
                                <GridRow noGutter>
                                    <GridCol width="20">
                                        <div><img src="img/Skills/Yurnero/3.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>Blade Dance</div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    {/* Skill 3 Description here */}
                                    <ContentBlock>
                                        <div>
                                        Yurnero's cunning blade gives him a chance to deal double damage on each attack.
                                        {/* 'Skill 3 Description here */}
                                        </div>
                                    </ContentBlock>
                                    {/*' Skill 3 Skill info here */}
                                    <ContentBlock>
                                        <p></p>
                                        <div>Level 1 - 10% chance.</div>
                                        <div>Level 2 - 18% chance.</div>
                                        <div>Level 3 - 26% chance.</div>
                                        <div>Level 4 - 36% chance.</div>
                                    </ContentBlock>
                                </ContentBlock>
                                <ContentBlock>
                                <p></p>
                                </ContentBlock>

                            </AccordionContent>
                        </AccordionItem>

                        {/* Skill 4 */}
                        <AccordionItem>
                            <AccordionToggle>
                                <GridRow noGutter>
                                    <GridCol width="20">
                                        <div><img src="img/Skills/Yurnero/4.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>Omnislash</div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    {/* Skill 4 Description here */}
                                    <ContentBlock>
                                        <div>
                                            Yurnero moves around the battlefield, slashing many enemies. Yurnero becomes invulnerable while Omnislashing.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>Level 1 - 3 (5*) Slashes</div>
                                        <div>Level 2 - 5 (7*) Slashes</div>
                                        <div>Level 3 - 8 (10*) Slashes</div>
                                        <div>Cooldown: 130/120/110 (110/100/90 *)</div>
                                        <div>Mana Cost: 200/275/350</div>
                                    </ContentBlock>
                                </ContentBlock>
                                <ContentBlock>
                                <p></p>
                                </ContentBlock>

                            </AccordionContent>
                        </AccordionItem>


                    </ContentBlock>

                </CardContent>
            </Card>
        </Page>
    );
};
