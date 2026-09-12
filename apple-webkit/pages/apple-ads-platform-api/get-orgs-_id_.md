> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/get-orgs-_id_](https://developer.apple.com/documentation/apple-ads-platform-api/get-orgs-_id_)

# Get Org by ID

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Retrieve the details of a specific organization by its ID.

## URL

```http
GET https://api.ads.apple.com/v1/orgs/{id}
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `OrgResponse`: Successful operation. Returns [OrgResponse](orgresponse.md) (`result`: [Org](org.md)).
- `400` Bad Request — `ErrorResponse`: Bad Request. Returns [ErrorResponse](errorresponse.md).
- `401` Unauthorized — `ErrorResponse`: Unauthorized.
- `403` Forbidden — `ErrorResponse`: Forbidden.
- `404` Not Found — `ErrorResponse`: Resource not found. Returns [ErrorResponse](errorresponse.md).
- `429` Too Many Requests — `ErrorResponse`: Rate Limit Exceeded. See [Applying Rate Limits](rate-limits.md).
- `500` Internal Server Error — `ErrorResponse`: Internal Server Error. Returns [ErrorResponse](errorresponse.md).

<a id="Discussion"></a>

## Discussion

This endpoint retrieves the details of a specific organization by its ID. To retrieve your organization ID, call [Get Me Details](get-current-user-details.md), which returns the `orgId` bound to the authenticated user.

<a id="Payload-Examples"></a>

## Payload Examples

**Get Organization by ID**

<a id="Request"></a>

### Request

```
GET https://api.ads.apple.com/v1/orgs/987654321
```

<a id="Response"></a>

### Response

```json
{
 "result": {
   "id": 987654321,
   "name": "AwayFinder",
   "currency": "USD",
   "timezone": "America/New_York",
   "paymentModel": "PAYG",
   "systemStatus": "ACTIVE",
   "systemStatusReasons": []
 }
}
```

## See Also

- [Get Me Details](get-current-user-details.md): Return the user ID and organization ID of the authenticated API caller.
- [Get User ACL](get-user-acls.md): Return the ad accounts and roles accessible to the authenticated API caller.
