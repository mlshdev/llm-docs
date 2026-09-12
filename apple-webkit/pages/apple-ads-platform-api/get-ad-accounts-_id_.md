> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/get-ad-accounts-_id_](https://developer.apple.com/documentation/apple-ads-platform-api/get-ad-accounts-_id_)

# Get Ad Account by ID

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Retrieve the full details of a specific ad account by its ID.

## URL

```http
GET https://api.ads.apple.com/v1/ad-accounts/{id}
```

## Path Parameters

- `id` — `string` (required):

## Header Parameters

- `X-Ap-Context` — `string` (required):

## Response Codes

- `200` OK — `AdAccountResponse`: Successful operation. Returns [AdAccountResponse](adaccountresponse.md) (`result`: [AdAccount](adaccount.md)).
- `400` Bad Request — `ErrorResponse`: Bad Request. Returns [ErrorResponse](errorresponse.md).
- `401` Unauthorized — `ErrorResponse`: Unauthorized.
- `403` Forbidden — `ErrorResponse`: Forbidden.
- `404` Not Found — `ErrorResponse`: Resource not found. Returns [ErrorResponse](errorresponse.md).
- `429` Too Many Requests — `ErrorResponse`: Rate Limit Exceeded. See [Applying Rate Limits](rate-limits.md).
- `500` Internal Server Error — `ErrorResponse`: Internal Server Error. Returns [ErrorResponse](errorresponse.md).

<a id="Discussion"></a>

## Discussion

This endpoint retrieves the full details of a specific ad account by its ID, including its associated advertiser resources.

<a id="Payload-Examples"></a>

## Payload Examples

**Get Ad Account by ID**

<a id="Request"></a>

### Request

```
GET https://api.ads.apple.com/v1/ad-accounts/123456789
```

<a id="Response"></a>

### Response

```json
{
 "result": {
   "id": 123456789,
   "name": "AwayFinder Ad Account",
   "orgId": 987654321,
   "timezone": "America/New_York",
   "currency": "USD",
   "paymentModel": "PAYG",
   "systemStatus": "ACTIVE",
   "systemStatusReasons": [],
   "productFeatures": [
     "APPSTORE_APP_MANUAL"
   ],
   "delegations": [
     {
       "resourceId": "12345678",
       "resourceType": "CONTENT_PROVIDER",
       "resourceName": "AwayFinder Apps"
     }
   ],
   "creationTime": "2025-01-10T08:00:00.000",
   "modificationTime": "2025-01-10T08:00:00.000"
 }
}
```

## See Also

- [Create Ad Accounts](post-ad-accounts.md): Create a new ad account under a specified organization.
- [Update Ad Accounts](put-ad-accounts-_id_.md): Update an ad account’s name or delegations.
- [Get Advertiser Resources](get-advertiser-resources.md): Retrieve the advertiser resources available to your organization, filtered by resource type.
