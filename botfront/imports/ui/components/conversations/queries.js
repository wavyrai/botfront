import gql from 'graphql-tag';

export const GET_CONVERSATIONS = gql`
query retreiveConversations(
    $projectId: String!
    $page: Int!
    $pageSize: Int
    $env: String
    $lengthFilter: Int
    $xThanLength: compare
    $durationFilterLowerBound: Float
    $durationFilterUpperBound: Float
    $confidenceFilter: Float
    $xThanConfidence: compare
    $startDate: String
    $endDate: String
    $userId: String
    $intentsActionsOperator: String
    $intentsActionsFilters: [StepInput]
    $fetchTrackers: Boolean = false
    ) {
    conversationsPage(
        projectId: $projectId,
        page: $page, 
        pageSize: $pageSize,
        status: ["new", "read", "flagged"],
        sort: updatedAt_DESC,
        env: $env,
        lengthFilter: $lengthFilter,
        xThanLength: $xThanLength,
        durationFilterLowerBound: $durationFilterLowerBound,
        durationFilterUpperBound: $durationFilterUpperBound,
        confidenceFilter: $confidenceFilter,
        xThanConfidence: $xThanConfidence,
        startDate: $startDate,
        endDate: $endDate,
        userId: $userId
        intentsActionsOperator: $intentsActionsOperator,
        intentsActionsFilters: $intentsActionsFilters
    ) {
        conversations {
            _id
            updatedAt
            status
            projectId
            userId
            tracker @include(if: $fetchTrackers)
            createdAt @include(if: $fetchTrackers)
            env @include(if: $fetchTrackers)
            language @include(if: $fetchTrackers)
        }
        pages
    }
}`;

export const GET_CONVERSATION = gql`
query retreiveAConversation($projectId: String!, $conversationId: String!) {
    conversation(projectId: $projectId, id: $conversationId ) {
        tracker
        status
        _id
        userId
    }
}`;


export const GET_INTENTS_IN_CONVERSATIONS = gql`
    query retrieveIntentsInConversations($projectId: String!) {
        intentsInConversations(projectId: $projectId)
    }
`;
