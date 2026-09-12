> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/get-category-by-id](https://developer.apple.com/documentation/apple-ads-platform-api/get-category-by-id)

# Get Business Category

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Retrieve a single business category by its identifier.

## URL

```http
GET https://api.ads.apple.com/v1/business-categories/{id}
```

## Path Parameters

- `id` — `string` (required):

## Header Parameters

- `X-Ap-Context` — `string` (required):

## Response Codes

- `200` OK — `BusinessCategoryResponse`:
- `400` Bad Request — `Error`:
- `401` Unauthorized — `Error`:
- `403` Forbidden — `Error`:
- `404` Not Found — `ErrorResponse`:
- `429` Too Many Requests — `Error`:
- `500` Internal Server Error — `Error`:

<a id="Discussion"></a>

## Discussion

This endpoint returns the full `BusinessCategory` object for the specified category ID. Use this endpoint to look up the `qualifiedId`, display name, and eligibility status for a specific category. The `id` is the MUID, which you can obtain from the Query Business Categories endpoint.

<a id="Payload-Examples"></a>

## Payload Examples

**Get by ID**

<a id="Request"></a>

### Request

```
GET https://api.ads.apple.com/v1/business-categories/cat-din-001
```

<a id="Response"></a>

### Response

```json
{
 "result": {
   "id": "cat-din-001",
   "name": "Restaurant",
   "qualifiedId": "dining.restaurant",
   "creationTime": "2024-06-01T00:00:00Z",
   "modificationTime": "2024-06-01T00:00:00Z",
   "eligibility": {
     "status": "ELIGIBLE",
     "blockedGroups": [],
     "allowedGroups": []
   }
 }
}
```

## See Also

- [Query Brands](query-brands.md): Retrieve a paginated list of brands using filters and sorting.
- [Get Brand by ID](get-brand-by-id.md): Retrieve a single brand by its unique identifier.
- [Query Business Categories](query-categories.md): Retrieve a paginated list of business categories using filters and sorting.
- [Query Rejection Reasons for Brands](query-policy-assignments-%28rejection-reasons%29-for-external-consumers.md): Query paginated policy assignment rejection reason details.
