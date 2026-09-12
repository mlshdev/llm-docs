> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/query-brands](https://developer.apple.com/documentation/apple-ads-platform-api/query-brands)

# Query Brands

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Retrieve a paginated list of brands using filters and sorting.

## URL

```http
POST https://api.ads.apple.com/v1/business-brands/query
```

## Header Parameters

- `X-Ap-Context` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `QueryRequest`

## Response Codes

- `200` OK — `BrandQueryResponse`:
- `400` Bad Request — `BrandQueryResponse`:
- `401` Unauthorized — `Error`:
- `403` Forbidden — `Error`:
- `404` Not Found — `Error`:
- `429` Too Many Requests — `Error`:
- `500` Internal Server Error — `Error`:

<a id="Discussion"></a>

## Discussion

This endpoint returns a paginated list of brands accessible to the ad account. An empty request body returns all brands with default pagination.

The brand `id` returned in results corresponds to the `promotedObjectId` used when creating `BUSINESS_BRAND` campaigns.

See [QueryFilterOperator](queryfilteroperator.md) for the full set of supported comparison operators.

<a id="Filterable-Fields"></a>

### Filterable Fields

| Field | Type | Operators | Sortable | Description |
| --- | --- | --- | --- | --- |
| `id` | string | `EQUALS`, `IN` |  | ID of the brand. |
| `eligibility.status` | string (enum) | `EQUALS` |  | Ad serving eligibility for the brand. See [Eligibility](eligibility.md). |

The request body is a [QueryRequest](queryrequest.md) composed of [QueryFilter](queryfilter.md) conditions and [QuerySort](querysort.md) directives ([QuerySortOrder](querysortorder.md)), controlled by [QueryPagination](querypagination.md).

<a id="Request-Body"></a>

## Request Body

See [QueryRequest](queryrequest.md).

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `filters` | array | No | Filter conditions to narrow results. |
| `sorting` | array | No | Sort order for results (field + ASC/DESC). |
| `pagination` | object | No | Offset and page size. Defaults apply if omitted. |

<a id="Payload-Examples"></a>

## Payload Examples

**Query Brands**

<a id="Request"></a>

### Request

```json
POST /v1/business-brands/query

{
 "filters": [
   {
     "field": "id",
     "operator": "EQUALS",
     "value": "9151314442816847872"
   }
 ],
 "pagination": {
   "offset": 0,
   "pageSize": 20,
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
     "id": "9151314442816847872",
     "name": "AwayFinder",
     "countryOrRegion": "US",
     "categories": [
       "dining.restaurant"
     ],
     "eligibility": {
       "status": "ELIGIBLE"
     }
   }
 ],
 "pagination": {
   "totalCount": 1,
   "offset": 0,
   "pageSize": 20
 }
}
```

**Filter by Eligibility**

<a id="Request"></a>

### Request

Returns only brands you can use in a campaign. Confirm a brand’s eligibility with this filter before creating a Brands campaign, as described in [Ads on Apple Maps Endpoints](brands-endpoints.md).

```json
POST /v1/business-brands/query

{
 "filters": [
   {
     "field": "eligibility.status",
     "operator": "EQUALS",
     "value": "ELIGIBLE"
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
     "id": "9151314442816847872",
     "name": "AwayFinder",
     "countryOrRegion": "US",
     "categories": [
       "dining.restaurant"
     ],
     "eligibility": {
       "status": "ELIGIBLE"
     }
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

- [Get Brand by ID](get-brand-by-id.md): Retrieve a single brand by its unique identifier.
- [Query Business Categories](query-categories.md): Retrieve a paginated list of business categories using filters and sorting.
- [Get Business Category](get-category-by-id.md): Retrieve a single business category by its identifier.
- [Query Rejection Reasons for Brands](query-policy-assignments-%28rejection-reasons%29-for-external-consumers.md): Query paginated policy assignment rejection reason details.
