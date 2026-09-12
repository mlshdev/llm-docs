> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/post-creatives](https://developer.apple.com/documentation/apple-ads-platform-api/post-creatives)

# Create an Ad Creative

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Add a new ad creative that defines the visual presentation and tap destination for an ad.

## URL

```http
POST https://api.ads.apple.com/v1/creatives
```

## Header Parameters

- `X-Ap-Context` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `CreativeCreate`

## Response Codes

- `200` OK — `CreativeResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` Too Many Requests — `ErrorResponse`:
- `500` Internal Server Error — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

This endpoint creates an ad creative that defines the visual presentation of an ad. It contains the content, branding, and destination for a specific ad creative type. Ad creatives are independent of campaigns and ad groups. One ad creative can be linked to multiple ads across different campaigns.

- The three required fields are `name`, `creativeType`, and `destination`.
- The `creativeSpec` structure varies by type and carries the type-specific content payload.
- The `destination` field defines where a tap on the ad leads. For App Ads ad creatives (`DEFAULT_PRODUCT_PAGE`, `CUSTOM_PRODUCT_PAGE`), set the app identifier and optional product page identifier inside `destination.parameters`, not at the root of the request body.
- After creation, `systemStatus` reflects the review state.
- The response returns the ad creative identifier in the `result.id` field. This value is what you supply as `creativeId` in the body of a [Create an Ad](post-ads.md) request.

<a id="Payload-Examples"></a>

## Payload Examples

**Custom Product Page**

Create an ad creative linked to a custom product page variant from App Store Connect.

<a id="Request"></a>

### Request

Creates a `CUSTOM_PRODUCT_PAGE` ad creative that sends users to a specific product page variant, identified by `productPageId`, on the app’s App Store listing.

```json
POST /v1/creatives

{
 "name": "AwayFinder - Summer Campaign Creative",
 "creativeType": "CUSTOM_PRODUCT_PAGE",
 "creativeSpec": {},
 "destination": {
   "destinationType": "APP_STORE_PRODUCT_PAGE",
   "parameters": {
     "adamId": "987654321",
     "productPageId": "76659d7a-d146-43d3-b6b8-b7a12f74bf6b"
   }
 }
}
```

<a id="Response"></a>

### Response

```json
{
 "result": {
   "id": 666777888,
   "adAccountId": 123456789,
   "name": "AwayFinder - Summer Campaign Creative",
   "creativeType": "CUSTOM_PRODUCT_PAGE",
   "creativeSpec": {},
   "destination": {
     "destinationType": "APP_STORE_PRODUCT_PAGE",
     "parameters": {
       "adamId": "987654321",
       "productPageId": "76659d7a-d146-43d3-b6b8-b7a12f74bf6b"
     }
   },
   "systemStatus": "PENDING",
   "systemStatusReasons": [],
   "deleted": false,
   "creationTime": "2025-06-01T00:00:00.000",
   "modificationTime": "2025-06-01T00:00:00.000"
 }
}
```

**Default Product Page**

Create an ad creative linked to the app’s default App Store listing. You don’t need a `productPageId`.

<a id="Request"></a>

### Request

Creates a `DEFAULT_PRODUCT_PAGE` ad creative that links to the app’s standard App Store listing using only the `adamId`, with no custom product page specified.

```json
POST /v1/creatives

{
 "name": "AwayFinder - Product Page Creative",
 "creativeType": "DEFAULT_PRODUCT_PAGE",
 "creativeSpec": {},
 "destination": {
   "destinationType": "APP_STORE_PRODUCT_PAGE",
   "parameters": {
     "adamId": "987654321"
   }
 }
}
```

<a id="Response"></a>

### Response

```json
{
 "result": {
   "id": 666777889,
   "adAccountId": 123456789,
   "name": "AwayFinder - Product Page Creative",
   "creativeType": "DEFAULT_PRODUCT_PAGE",
   "creativeSpec": {},
   "destination": {
     "destinationType": "APP_STORE_PRODUCT_PAGE",
     "parameters": {
       "adamId": "987654321",
       "productPageId": null
     }
   },
   "systemStatus": "VALID",
   "systemStatusReasons": [],
   "deleted": false,
   "creationTime": "2025-06-01T00:00:00.000",
   "modificationTime": "2025-06-01T00:00:00.000"
 }
}
```

**Apple Maps Creative**

Create an Apple Maps ad creative with localized promo text. The `creativeSpec` carries the brand content. The `destination` field is the post-tap Maps place card.

<a id="Request"></a>

### Request

Creates a `LOCAL_ADS_SEARCH_CREATIVE` with localized promo text and brand metadata in `creativeSpec`, routing taps to the brand’s Maps place card via `LOCAL_ADS_PLACECARD` destination.

```json
POST /v1/creatives

{
 "name": "AwayFinder - Store Promotion Creative",
 "creativeType": "LOCAL_ADS_SEARCH_CREATIVE",
 "creativeSpec": {
   "brandId": "111222",
   "creativeSubtype": "BUSINESS_ASSET",
   "creativeAssets": [
     {
       "assetId": "770e8400-e29b-41d4-a716-446655440002"
     }
   ],
   "localizedText": {
     "en-US": {
       "promoText": "Visit us today for special offers!"
     }
   },
   "defaultLocale": "en-US"
 },
 "destination": {
   "destinationType": "LOCAL_ADS_PLACECARD"
 }
}
```

<a id="Response"></a>

### Response

```json
{
 "result": {
   "id": 666777890,
   "adAccountId": 123456789,
   "name": "AwayFinder - Store Promotion Creative",
   "creativeType": "LOCAL_ADS_SEARCH_CREATIVE",
   "creativeSpec": {
     "brandId": "111222",
     "creativeSubtype": "BUSINESS_ASSET",
     "creativeAssets": [
       {
         "assetId": "770e8400-e29b-41d4-a716-446655440002"
       }
     ],
     "localizedText": {
       "en-US": {
         "promoText": "Visit us today for special offers!"
       }
     },
     "defaultLocale": "en-US"
   },
   "destination": {
     "destinationType": "LOCAL_ADS_PLACECARD"
   },
   "systemStatus": "PENDING",
   "systemStatusReasons": [],
   "deleted": false,
   "creationTime": "2025-06-01T00:00:00.000",
   "modificationTime": "2025-06-01T00:00:00.000"
 }
}
```

## See Also

- [Query Ad Creatives](post-creatives-query.md): Retrieve ad creatives that match structured filter, sort, and pagination criteria.
- [Get an Ad Creative](get-creatives-_id_.md): Fetch a single ad creative by its unique identifier.
- [Update an Ad Creative](put-creatives-_id_.md): Change an ad creative’s name or creative spec by its unique identifier.
- [Delete an Ad Creative](delete-creatives-_id_.md): Remove an ad creative by its unique identifier.
