> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/get-brand-by-id](https://developer.apple.com/documentation/apple-ads-platform-api/get-brand-by-id)

# Get Brand by ID

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Retrieve a single brand by its unique identifier.

## URL

```http
GET https://api.ads.apple.com/v1/business-brands/{id}
```

## Path Parameters

- `id` — `string` (required):

## Header Parameters

- `X-Ap-Context` — `string` (required):

## Response Codes

- `200` OK — `BrandResponse`:
- `400` Bad Request — `Error`:
- `401` Unauthorized — `Error`:
- `403` Forbidden — `Error`:
- `404` Not Found — `BrandResponse`:
- `429` Too Many Requests — `Error`:
- `500` Internal Server Error — `Error`:

<a id="Discussion"></a>

## Discussion

This endpoint retrieves a single brand by its ID. The brand `id` in the response is the same value you use as `promotedObjectId` when creating a `BUSINESS_BRAND` campaign.

<a id="Payload-Examples"></a>

## Payload Examples

**Get Brand**

<a id="Request"></a>

### Request

Retrieves the brand with the given ID and returns its country or region, categories, and current eligibility status.

```
GET https://api.ads.apple.com/v1/business-brands/9151314442816847872
```

<a id="Response"></a>

### Response

```json
{
 "result": {
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
}
```

## See Also

- [Query Brands](query-brands.md): Retrieve a paginated list of brands using filters and sorting.
- [Query Business Categories](query-categories.md): Retrieve a paginated list of business categories using filters and sorting.
- [Get Business Category](get-category-by-id.md): Retrieve a single business category by its identifier.
- [Query Rejection Reasons for Brands](query-policy-assignments-%28rejection-reasons%29-for-external-consumers.md): Query paginated policy assignment rejection reason details.
