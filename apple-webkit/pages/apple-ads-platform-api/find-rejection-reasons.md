> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/find-rejection-reasons](https://developer.apple.com/documentation/apple-ads-platform-api/find-rejection-reasons)

# Query Rejection Reasons

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Query ad creative rejection reasons for apps and return why each ad creative failed approval.

## URL

```http
POST https://api.ads.apple.com/v1/rejection-reasons/apps/query
```

## Header Parameters

- `X-Ap-Context` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `CreativeRejectionReasonQueryRequest`

## Response Codes

- `200` OK — `CreativeRejectionReasonQueryResponse`:
- `400` Bad Request — `Error`:
- `401` Unauthorized — `Error`:
- `403` Forbidden — `Error`:
- `404` Not Found — `Error`:
- `429` Too Many Requests — `Error`:
- `500` Internal Server Error — `Error`:

<a id="Discussion"></a>

## Discussion

This endpoint retrieves a list of ad creative rejection reasons based on filtering and pagination criteria. See [CreativeRejectionReason](creativerejectionreason.md) for the full field reference, including `creativeId` and the `reasonLevel` values.

See [QueryFilterOperator](queryfilteroperator.md) for the full set of supported comparison operators.

<a id="Filterable-Fields"></a>

### Filterable Fields

| Field | Type | Operators | Sortable | Description |
| --- | --- | --- | --- | --- |
| `adamId` | integer (int64) | `EQUALS` |  | The Adam ID of the app whose product page triggered the rejection |

Only `adamId` is confirmed filterable; other [CreativeRejectionReason](creativerejectionreason.md) fields aren’t documented as query filters. The request body is a [QueryRequest](queryrequest.md) composed of [QueryFilter](queryfilter.md) conditions and [QuerySort](querysort.md) directives ([QuerySortOrder](querysortorder.md)), controlled by [QueryPagination](querypagination.md).

<a id="Payload-Examples"></a>

## Payload Examples

**Query Rejection Reasons**

<a id="Request"></a>

### Request

```json
POST /v1/rejection-reasons/apps/query

{
 "filters": [
   {
     "field": "adamId",
     "operator": "EQUALS",
     "value": 123456789
   }
 ],
 "pagination": {
   "offset": 0,
   "pageSize": 20
 },
 "sorting": [
   {
     "field": "id",
     "order": "DESC"
   }
 ]
}
```

<a id="Response"></a>

### Response

```json
{
 "result": [
   {
     "id": 112233445,
     "adamId": 123456789,
     "creativeId": 456789,
     "productPageId": "1a2b3c4d-0001",
     "assetId": null,
     "supplySource": "APPSTORE",
     "supplyPlacement": "APPSTORE_SEARCH_RESULTS",
     "countryOrRegion": "US",
     "languageCode": "en-US",
     "reasonType": "REJECTION_REASON",
     "reasonCode": "APP_NOT_ELIGIBLE",
     "comment": null,
     "reasonLevel": "CUSTOM_PRODUCT_PAGE_LOCALE",
     "creationTime": "2026-02-05T08:30:00.000",
     "modificationTime": "2026-03-05T08:30:00.000"
   }
 ],
 "pagination": {
   "totalCount": 1,
   "offset": 0,
   "pageSize": 20
 }
}
```

## See Also

### Related Documentation

- [App Eligibility Endpoints](app-eligibility-endpoints.md): Check whether apps qualify to run ads and look up rejection reasons for creatives.

- [Check App Eligibility](find-apps-eligibilities.md): Check whether an app is eligible to run on certain Apple Ads placements and in specific countries or regions.
- [Get Rejection Reasons](gets-rejection-reasons-by-id.md): Retrieve the details of an ad creative rejection reason by ID.
