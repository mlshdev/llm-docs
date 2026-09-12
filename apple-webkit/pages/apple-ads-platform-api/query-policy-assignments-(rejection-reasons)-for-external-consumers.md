> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/query-policy-assignments-(rejection-reasons)-for-external-consumers](https://developer.apple.com/documentation/apple-ads-platform-api/query-policy-assignments-(rejection-reasons)-for-external-consumers)

# Query Rejection Reasons for Brands

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Query paginated policy assignment rejection reason details.

## URL

```http
POST https://api.ads.apple.com/v1/rejection-reasons/business-brands/query
```

## Header Parameters

- `X-Ap-Context` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `PolicyAssignmentQueryRequest`

## Response Codes

- `200` OK — `PolicyAssignmentQueryResponse`:
- `400` Bad Request — `Error`:
- `401` Unauthorized — `Error`:
- `403` Forbidden — `Error`:
- `404` Not Found — `Error`:
- `429` Too Many Requests — `Error`:
- `500` Internal Server Error — `Error`:

<a id="Discussion"></a>

## Discussion

This endpoint returns rejection reason details for policy assignments associated with brands. Use it to identify why a creative, asset, or brand entity was rejected so you can take corrective action.

The endpoint returns results as `BrandRejectionReasonResponse` objects, each containing the policy assignment ID, the affected entity, the component that triggered the rejection, and a human-readable rejection code, title, and body.

The request supports standard `filters`, `sorting`, and `pagination` via `PolicyAssignmentQueryRequest`. Filter by `promotedObjectId` to scope results to a specific brand. The endpoint returns only non-deleted rejection reasons.

See [QueryFilterOperator](queryfilteroperator.md) for the full set of supported comparison operators.

<a id="Filterable-Fields"></a>

### Filterable Fields

| Field | Type | Operators | Sortable | Description |
| --- | --- | --- | --- | --- |
| `promotedObjectId` | string | `IN` |  | Scope results to a specific brand. The only field supported by `PolicyAssignmentQueryRequest`. |

The request body is a [QueryRequest](queryrequest.md)-shaped object composed of [QueryFilter](queryfilter.md) conditions and [QuerySort](querysort.md) directives ([QuerySortOrder](querysortorder.md)), controlled by [QueryPagination](querypagination.md).

<a id="Request-Body"></a>

## Request Body

`PolicyAssignmentQueryRequest`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `filters` | array | No | Array of filter conditions. Supported field: `promotedObjectId`. |
| `sorting` | array | No | Array of sort directives. Each entry specifies a `field` and `order` (`ASC` or `DESC`). |
| `pagination` | object | No | Pagination object with `pageSize` (default: 20), `offset` (default: 0), and optional `fetchTotalCount` (boolean). When `fetchTotalCount` is `true`, the response includes the total count of matching records. |

<a id="Payload-Examples"></a>

## Payload Examples

**Query Rejection Reasons**

<a id="Request"></a>

### Request

Query rejection reasons for a specific brand, sorted by ID descending.

```json
{
 "filters": [
   {
     "field": "promotedObjectId",
     "operator": "IN",
     "value": [
       "1001",
       "1002"
     ]
   }
 ],
 "sorting": [
   {
     "field": "id",
     "order": "DESC"
   }
 ],
 "pagination": {
   "pageSize": 20,
   "offset": 0,
   "fetchTotalCount": true
 }
}
```

<a id="Response"></a>

### Response

```json
{
 "result": [
   {
     "id": 76191,
     "promotedObjectId": "9223372036280979184",
     "promotedObjectType": "BUSINESS_BRAND",
     "entityId": "1582231810777739300",
     "entityType": "BUSINESS_BRAND",
     "componentType": "ENTITY_ASSET",
     "component": "3135832a-0645-5b84-a030-36394cbdbcf6",
     "code": "PERSONAL_INFORMATION",
     "title": "Personal Information",
     "body": "Content containing personally identifiable information is not allowed."
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

- [Query Brands](query-brands.md): Retrieve a paginated list of brands using filters and sorting.
- [Get Brand by ID](get-brand-by-id.md): Retrieve a single brand by its unique identifier.
- [Query Business Categories](query-categories.md): Retrieve a paginated list of business categories using filters and sorting.
- [Get Business Category](get-category-by-id.md): Retrieve a single business category by its identifier.
