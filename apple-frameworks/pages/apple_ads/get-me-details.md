> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/get-me-details](https://developer.apple.com/documentation/apple_ads/get-me-details)

# Get Me Details

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Web Service Endpoint  
**Availability:** Search Ads 5.0+

Fetches details of an API caller.

## URL

```http
GET https://api.searchads.apple.com/api/v5/me
```

## Response Codes

- `200` OK — `MeDetailResponse`: If the call succeeds, the API returns the [MeDetail](medetail.md) object in the response payload with an HTTP status code of 200 (OK). If unsuccessful, the HTTP status code indicates the error with details in the error message.
- `401` Unauthorized — `ApiErrorResponse`: An unauthenticated call fails to get the requested response.
- `403` Forbidden — `ApiErrorResponse`: Insufficient rights to the resource.
- `429` — `ApiErrorResponse`: The API calls exceed rate-limit thresholds. See the Rate Limits subsection of [Calling the Apple Ads API](calling-the-apple-search-ads-api.md).
- `500` Internal Server Error — `ApiErrorResponse`: The Apple Ads server is temporarily down or unreachable. The request may be valid, but you need to retry it later.

## Mentioned In

- [Apple Ads Campaign Management API 4](apple-search-ads-campaign-management-api-4.md)

<a id="Discussion"></a>

## Discussion

This endpoint returns the `userId` and `parentOrgId` of an API caller. See the [MeDetail](medetail.md) object.

<a id="Get-Me-Details-Example"></a>

### Get Me Details Example

**Request**

```
curl "https://api.searchads.apple.com/api/v5/me"
-H "Authorization: Bearer {access_token}" \
-H "X-AP-Context: orgId={orgId}"
```

**Response**

```json
{
  "data": {
    "userId": 3962840,
    "parentOrgId": 27154130
  }
}
```

## See Also

### Access Control List

- [Get User ACL](get-user-acl.md): Fetches roles and organizations that the API has access to.
- [UserAcl](useracl.md): The response to ACL requests.
- [UserAclListResponse](useracllistresponse.md): A container for ACL call responses.
- [MeDetail](medetail.md): The API caller identifiers.
- [MeDetailResponse](medetailresponse.md): The response from me detail calls.
