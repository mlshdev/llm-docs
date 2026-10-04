> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreserverapi/get-group-members

# Get Group Members

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Server API 1.22+

Get a paginated list of the customers that belong to a group.

## URL

```http
GET https://api.storekit.apple.com/groups/v1/group/{groupId}
```

## Sandbox URL

```http
GET https://api.storekit-sandbox.apple.com/groups/v1/group/{groupId}
```

## Path Parameters

- `groupId` — `groupId` (required): The identifier of a group in your app, which the [Get Customer Groups](get-customer-groups.md) endpoint returns.

## Query Parameters

- `paginationToken` — `paginationToken`: An optional token you use to get the next set of members. Responses that have more members available include a `paginationToken`.

  Note: Omit this parameter the first time you call this endpoint.
- `limit` — `limit`: An optional maximum number of members to return in a single response.
  **Maximum:** `100`

## Response Codes

- `200` OK — `GetGroupMembersResponse`: Request succeeded.
- `400` Bad Request — `(InvalidGroupIdError | InvalidLimitError | InvalidPaginationTokenError)`: Invalid request.
- `401` Unauthorized: The JSON Web Token (JWT) in the authorization header is invalid. For more information, see [Generating JSON Web Tokens for API requests](generating-json-web-tokens-for-api-requests.md).
- `404` Not Found — `GroupNotFoundError`: The group doesn’t exist.
- `429` — `RateLimitExceededError`: The request exceeded the rate limit.
- `500` Internal Server Error — `GeneralInternalError`: Server error. Try again later.

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)
- [Identifying rate limits](identifying-rate-limits.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  This endpoint is only available in the sandbox environment.

Call this endpoint to enumerate the customers that belong to a group. Get the `groupId` for a group by calling the [Get Customer Groups](get-customer-groups.md) endpoint.

The response, [GetGroupMembersResponse](getgroupmembersresponse.md), contains a [GroupMemberEntry](groupmemberentry.md) for each member. Each entry identifies the member by their [appTransactionId](apptransactionid.md).

Each response returns at most the number of members you request in the `limit` query parameter. If the [hasMore](hasmore.md) field in the response is `true`, more members are available: call the endpoint again with the [paginationToken](https://developer.apple.com/documentation/appstoreserverapi/get-group-members/paginationtoken) from the previous response to get the next set.

The following request gets the first 50 members of a group:

```javascript
GET https://api.storekit-sandbox.apple.com/groups/v1/group/{groupId}?limit=50
```

Group membership is separate from any transaction information. To unlock content for a customer, read their transactions; don’t depend on this endpoint. For more information, see [Get Customer Groups](get-customer-groups.md).

<a id="Test-in-the-sandbox-environment"></a>

### Test in the sandbox environment

In the sandbox environment, this endpoint returns a placeholder response when you send the placeholder [groupId](https://developer.apple.com/documentation/appstoreserverapi/get-group-members/groupid) of `900000000000000000` that the [Get Customer Groups](get-customer-groups.md) endpoint returns:

```json
{
  "members": [
    {
      "appTransactionId": "700000000000000000"
    }
  ],
  "hasMore": false
}
```

## See Also

### Multiseat purchases

- [Get Customer Groups](get-customer-groups.md): Get the groups that a customer belongs to, and their role in each group.
- [GetCustomerGroupsResponse](getcustomergroupsresponse.md): A response that contains the groups a customer belongs to, and their role in each group.
- [GetGroupMembersResponse](getgroupmembersresponse.md): A response that contains a page of the customers that belong to a group.
