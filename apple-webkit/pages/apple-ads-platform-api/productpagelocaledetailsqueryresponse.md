> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/productpagelocaledetailsqueryresponse](https://developer.apple.com/documentation/apple-ads-platform-api/productpagelocaledetailsqueryresponse)

# ProductPageLocaleDetailsQueryResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Paginated response object for the product page locale details query.

## Declaration

```
object ProductPageLocaleDetailsQueryResponse
```

## Properties

- `result` — `[ProductPageLocaleDetails]`: Array of product page locale details objects, one per product page and locale combination. See [ProductPageLocaleDetails](productpagelocaledetails.md). Read-only.
- `pagination` — `QueryPaginationResult`: Pagination metadata for the result set, including `pageSize` (number of results per page), `offset` (zero-based offset of the first result), and `totalCount` (total number of matching records, only populated when the request sends `fetchTotalCount: true`). Read-only.
- `error` — `Error`: Error details if the request failed. Omitted entirely on success. See [Error](error.md). Read-only.

<a id="Discussion"></a>

## Discussion

The `ProductPageLocaleDetailsQueryResponse` object is the top-level envelope returned by [Query Product Page Locale Details](query-product-page-locale-details.md). The `pagination` object describes the current page position.

<a id="Example"></a>

### Example

```json
{
  "result": [
    {
      "productPageId": "133fc807-d4d5-4c77-92ae-1d6ffdf0c7dc",
      "adamId": 123456789,
      "language": "en",
      "languageCode": "en-US",
      "appName": "AwayFinder",
      "subTitle": "Get more done every day",
      "promotionalText": "Now with AI-powered scheduling",
      "shortDescription": "The all-in-one task manager for busy professionals.",
      "deviceClasses": [
        "IPHONE",
        "IPAD"
      ],
      "assetsByDevice": {
        "iphone_6_5": {
          "assets": [
            {
              "assetId": "41a91e19-e021-45bb-ac5a-5faec02f9445"
            },
            {
              "assetId": "52b02f2a-f132-56cc-bd6b-6cbfd13c0556"
            }
          ],
          "appPreviewDeviceFallBackDevices": []
        }
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

- [ProductPageDetails](productpagedetails.md): Product page metadata for a Default Product Page, Custom Product Page, or Product Page Optimization (PPO) variant.
- [ProductPageDetailsResponse](productpagedetailsresponse.md): Response object for a single product page retrieval.
- [ProductPageDetailsQueryResponse](productpagedetailsqueryresponse.md): Paginated response object for the product page details query.
- [ProductPageLocaleDetails](productpagelocaledetails.md): Locale-specific metadata for an App Store product page.
- [DeviceAssetGroup](deviceassetgroup.md): Represents assets organized by device type with fallback device information.
