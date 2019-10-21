import {
    Container, Tab, Message, Loader,
} from 'semantic-ui-react';
import React from 'react';
import { Query } from 'react-apollo';

import { connect } from 'react-redux';
import gql from 'graphql-tag';
// import ReactTable from 'react-table';
import PieChart from '../charts/PieChart';
import BarChart from '../charts/BarChart';
import LineChart from '../charts/LineChart';

function Analytics(props) {
    const { projectId } = props;

    const from = 1564580540;
    const to = new Date().getTime() / 1000;

    const renderConversationLengths = () => {
        const GET_CONVERSATIONS_LENGTH = gql`
            query ConversationLengths($projectId: String!, $from: Float, $to: Float) {
                conversationLengths(
                    projectId: $projectId,
                    from: $from,
                    to: $to,
                ) {
                    frequency,
                    count,
                    length
                }
            }
        `;
        const params = {
            x: 'length', y: [['count', 'frequency']],
        };

        return (
            <Query query={GET_CONVERSATIONS_LENGTH} variables={{ projectId, from, to }}>
                {({ loading, error, data: { conversationLengths } }) => {
                    if (loading) return <Loader active inline='centered' />;
                    if (error) return `Error! ${error.message}`;
                    return (
                        <>
                            <Message content='# of user messages sent by conversation' />
                            <div style={{ height: 300 }}>
                                <PieChart
                                    data={conversationLengths}
                                    {...params}
                                />
                            </div>
                            <br />
                            <div style={{ height: 300 }}>
                                <BarChart
                                    data={conversationLengths}
                                    {...params}
                                />
                            </div>
                            {/* <ReactTable
                                data={conversationLengths.map(i => ({
                                    ...i,
                                    frequency: `${(i.frequency * 100).toFixed(2)}%`,
                                }))}
                                getTdProps={() => ({
                                    style: {
                                        textAlign: 'right',
                                    },
                                })}
                                columns={[
                                    {
                                        id: 'Length',
                                        accessor: 'length',
                                        Header: 'Length',
                                    },
                                    {
                                        id: 'count',
                                        accessor: 'count',
                                        Header: 'Count',
                                    },
                                    {
                                        id: 'frequency',
                                        accessor: 'frequency',
                                        Header: 'Frequency',
                                    },
                                ]}
                            /> */}
                            <br />
                        </>
                    );
                }}
            </Query>
        );
    };

    const renderIntentFrequencies = () => {
        const GET_INTENTS_FREQUENCIES = gql`
            query IntentFrequencies($projectId: String!, $from: Float, $to: Float) {
                intentFrequencies(
                    projectId: $projectId,
                    from: $from,
                    to: $to,
                    beg: 2,
                    end: 2,
                ) {
                    frequency,
                    count,
                    name
                }
            }
        `;

        const params = {
            x: 'name', y: [['count', 'frequency']],
        };

        return (
            <Query query={GET_INTENTS_FREQUENCIES} variables={{ projectId, from, to }}>
                {({ loading, error, data: { intentFrequencies } }) => {
                    if (loading) return <Loader active inline='centered' />;
                    if (error) return `Error! ${error.message}`;
                    return (
                        <>
                            <Message content='Most frequent user intents of 2nd message' />
                            <div style={{ height: 300 }}>
                                <PieChart
                                    data={intentFrequencies}
                                    {...params}
                                />
                            </div>
                        </>
                    );
                }}
            </Query>
        );
    };

    const renderVisits = () => {
        const GET_CONVERSATION_COUNTS = gql`
            query ConversationCounts($projectId: String!, $from: Float, $to: Float) {
                conversationCounts(
                    projectId: $projectId,
                    from: $from,
                    to: $to,
                ) {
                    bucket, count, engagements, proportion,
                }
            }
        `;

        const params = {
            x: 'bucket', y: [['count'], ['engagements', 'proportion']],
        };

        return (
            <Query query={GET_CONVERSATION_COUNTS} variables={{ projectId, from, to }}>
                {({ loading, error, data: { conversationCounts } }) => {
                    if (loading) return <Loader active inline='centered' />;
                    if (error) return `Error! ${error.message}`;
                    return (
                        <>
                            <Message content='Visits' />
                            <div style={{ height: 300 }}>
                                <LineChart
                                    data={conversationCounts.map(c => ({
                                        ...c,
                                        bucket: new Date(parseInt(c.bucket, 10) * 1000).toLocaleDateString(),
                                    }))}
                                    {...params}
                                />
                            </div>
                        </>
                    );
                }}
            </Query>
        );
    };

    const renderEngagement = () => {
        const GET_CONVERSATION_COUNTS = gql`
            query ConversationCounts($projectId: String!, $from: Float, $to: Float) {
                conversationCounts(
                    projectId: $projectId,
                    from: $from,
                    to: $to,
                ) {
                    bucket, proportion,
                }
            }
        `;

        const params = {
            x: 'bucket', y: [['proportion']],
        };

        return (
            <Query query={GET_CONVERSATION_COUNTS} variables={{ projectId, from, to }}>
                {({ loading, error, data: { conversationCounts } }) => {
                    if (loading) return <Loader active inline='centered' />;
                    if (error) return `Error! ${error.message}`;
                    return (
                        <>
                            <Message content='Engagement %' />
                            <div style={{ height: 300 }}>
                                <LineChart
                                    data={conversationCounts.map(c => ({
                                        ...c,
                                        bucket: new Date(parseInt(c.bucket, 10) * 1000).toLocaleDateString(),
                                    }))}
                                    {...params}
                                    axisLeft={{ tickValues: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
                                />
                            </div>
                        </>
                    );
                }}
            </Query>
        );
    };

    const renderConversationDurations = () => {
        const GET_CONVERSATION_DURATIONS = gql`
            query ConversationDurations($projectId: String!, $from: Float, $to: Float) {
                conversationDurations(
                    projectId: $projectId,
                    from: $from,
                    to: $to,
                ) {
                    duration, count, frequency,
                }
            }
        `;

        const params = {
            x: 'duration', y: [['count', 'frequency']],
        };

        return (
            <Query query={GET_CONVERSATION_DURATIONS} variables={{ projectId, from, to }}>
                {({ loading, error, data: { conversationDurations } }) => {
                    if (loading) return <Loader active inline='centered' />;
                    if (error) return `Error! ${error.message}`;
                    return (
                        <>
                            {' '}
                            <Message content='# of conversations by duration' />
                            <div style={{ height: 300 }}>
                                <BarChart
                                    data={conversationDurations}
                                    {...params}
                                />
                            </div>
                        </>
                    );
                }}
            </Query>
        );
    };
    
    const panes = [
        {
            menuItem: 'Conversation lengths',
            render: () => <Tab.Pane>{renderConversationLengths()}</Tab.Pane>,
        },
        {
            menuItem: 'Conversation durations',
            render: () => <Tab.Pane>{renderConversationDurations()}</Tab.Pane>,
        },
        {
            menuItem: 'Intents frequencies',
            render: () => <Tab.Pane>{renderIntentFrequencies()}</Tab.Pane>,
        },
        {
            menuItem: 'Visits',
            render: () => <Tab.Pane>{renderVisits()}</Tab.Pane>,
        },
        {
            menuItem: 'Engagement %',
            render: () => <Tab.Pane>{renderEngagement()}</Tab.Pane>,
        },
    ];

    return (
        <>
            <br />
            <Container>
                {<Tab menu={{ vertical: true, pointing: true }} panes={panes} />}
            </Container>
        </>
    );
}

Analytics.propTypes = {};

Analytics.defaultProps = {};

const mapStateToProps = state => ({
    projectId: state.settings.get('projectId'),
});

export default connect(mapStateToProps)(Analytics);
