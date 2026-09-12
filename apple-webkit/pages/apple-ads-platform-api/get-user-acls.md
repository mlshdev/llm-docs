> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/get-user-acls](https://developer.apple.com/documentation/apple-ads-platform-api/get-user-acls)

# Get User ACL

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Return the ad accounts and roles accessible to the authenticated API caller.

## URL

```http
GET https://api.ads.apple.com/v1/acls
```

## Response Codes

- `200` OK — `UserAclListResponse`: Successful operation. Returns [UserAclListResponse](useracllistresponse.md) (`result`: [UserAccessResult](useraccessresult.md)).
- `400` Bad Request — `Error`: Bad Request. Returns [ErrorResponse](errorresponse.md).
- `401` Unauthorized — `Error`: Unauthorized.
- `403` Forbidden — `Error`: Forbidden.
- `404` Not Found — `Error`: Resource not found. Returns [ErrorResponse](errorresponse.md).
- `429` Too Many Requests — `Error`: Rate Limit Exceeded. See [Applying Rate Limits](rate-limits.md).
- `500` Internal Server Error — `Error`: Internal Server Error. Returns [ErrorResponse](errorresponse.md).

<a id="Discussion"></a>

## Discussion

This endpoint retrieves a `UserAclListResponse` for the authenticated user. The response contains a `result` object with an `acls` array. Each `UserAcl` entry contains an `adAccount` object and a `roles` array listing the roles the user holds for that account.

To discover which ad accounts an API token can access and what permission level applies, use this endpoint at the start of a session. Each access token binds to exactly one org. The `orgId` on every returned `adAccount` will be the same.

<a id="Payload-Examples"></a>

## Payload Examples

**Get User ACL**

<a id="Request"></a>

### Request

```
GET https://api.ads.apple.com/v1/acls
```

<a id="Response"></a>

### Response

```json
{
 "result": {
   "acls": [
     {
       "adAccount": {
         "id": 123456789,
         "name": "AwayFinder",
         "orgId": 40669820
       },
       "roles": [
         "Admin"
       ]
     }
   ]
 }
}
```

## See Also

- [Get Me Details](get-current-user-details.md): Return the user ID and organization ID of the authenticated API caller.
- [Get Org by ID](get-orgs-_id_.md): Retrieve the details of a specific organization by its ID.
