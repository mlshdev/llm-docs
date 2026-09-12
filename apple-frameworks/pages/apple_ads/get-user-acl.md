> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/get-user-acl](https://developer.apple.com/documentation/apple_ads/get-user-acl)

# Get User ACL

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Web Service Endpoint  
**Availability:** Search Ads 5.0+

Fetches roles and organizations that the API has access to.

## URL

```http
GET https://api.searchads.apple.com/api/v5/acls
```

## Response Codes

- `200` OK — `UserAclListResponse`: If successful, the API returns a list of ACL objects in the response payload with an HTTP status code of `200 (OK)`. If unsuccessful, the HTTP status code indicates the error with details in the error message.
- `401` Unauthorized — `ApiErrorResponse`: An unauthenticated call fails to get the requested response.
- `403` Forbidden — `ApiErrorResponse`: Insufficient rights to the resource.
- `429` — `ApiErrorResponse`: The API calls exceed rate-limit thresholds. See the Rate Limits subsection of [Calling the Apple Ads API](calling-the-apple-search-ads-api.md).
- `500` Internal Server Error — `ApiErrorResponse`: The Apple Ads server is temporarily down or unreachable. The request may be valid, but you need to retry it later.

<a id="Discussion"></a>

## Discussion

The API uses a user access control list (ACL) for policy-based authorization to determine access to resources. The Get User ACL call fetches roles in all organizations. Each role has access to all organizations or a subset of them.

<a id="Get-user-ACL-example"></a>

### Get user ACL example

**Request**

```
GET https://api.searchads.apple.com/api/v5/acls
```

**Response**

```json
{
  "data": {
    "orgName": "Trip Trek",
    "orgId": 40669820,
    "currency": "USD",
    "timeZone": "America/Los_Angeles",
    "paymentModel": "PAYG",
    "roleNames": [
      "Admin"
    ],
    "parentOrgId": "27154130",
    "displayName": "Trip Trek"
  },
  "pagination": null,
  "error": null
}
```

<a id="Campaign-Groups"></a>

### Campaign Groups

The API treats your `orgId` like a campaign group. If you need to manage Apple Ads for multiple clients, or if you need to restrict user access to a subset of your campaigns, you can create additional campaign groups within your account. Otherwise, you can create and manage all your campaigns under your default `orgId` and campaign group.

## See Also

### Access Control List

- [UserAcl](useracl.md): The response to ACL requests.
- [UserAclListResponse](useracllistresponse.md): A container for ACL call responses.
- [Get Me Details](get-me-details.md): Fetches details of an API caller.
- [MeDetail](medetail.md): The API caller identifiers.
- [MeDetailResponse](medetailresponse.md): The response from me detail calls.
