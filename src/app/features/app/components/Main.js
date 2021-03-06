// @flow

import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import { Messages, SendMessage } from '../../messages';
import { Users } from '../../users';

type Props = {};

type State = {};

class Main extends Component<Props, State> {
    render() {
        return (
            <Grid columns = 'equal' padded>
                <Grid.Column style = {{ maxWidth: 400, padding: 10 }} color = 'teal'>
                    <Users />
                </Grid.Column>
                <Grid.Column>
                    <Messages />
                    <SendMessage />
                </Grid.Column>
            </Grid>
        );
    }
}

export default Main;
