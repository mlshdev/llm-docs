> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/get-current-user-details](https://developer.apple.com/documentation/apple-ads-platform-api/get-current-user-details)

# Get Me Details

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Return the user ID and organization ID of the authenticated API caller.

## URL

```http
GET https://api.ads.apple.com/v1/me
```

## Response Codes

- `200` OK — `MeResponse`: Successful operation. Returns [MeResponse](meresponse.md) (`result`: [Me](me.md)).
- `400` Bad Request — `Error`: Bad Request. Returns [ErrorResponse](errorresponse.md).
- `401` Unauthorized — `Error`: Unauthorized.
- `403` Forbidden — `Error`: Forbidden.
- `404` Not Found — `Error`: Resource not found. Returns [ErrorResponse](errorresponse.md).
- `429` Too Many Requests — `Error`: Rate Limit Exceeded. See [Applying Rate Limits](rate-limits.md).
- `500` Internal Server Error — `Error`: Internal Server Error. Returns [ErrorResponse](errorresponse.md).

<a id="Discussion"></a>

## Discussion

This endpoint returns the `userId` and `orgId` associated with the access token used to authenticate the request. To confirm which user account is active and retrieve the root organization for subsequent API calls, use this endpoint.

<a id="Payload-Examples"></a>

## Payload Examples

**Get User Details**

<a id="Request"></a>

### Request

```
GET https://api.ads.apple.com/v1/me
```

<a id="Response"></a>

### Response

```json
{
 "result": {
   "userId": 3962840,
   "orgId": 27154130
 }
}
```

## See Also

- [Get User ACL](get-user-acls.md): Return the ad accounts and roles accessible to the authenticated API caller.
- [Get Org by ID](get-orgs-_id_.md): Retrieve the details of a specific organization by its ID.
