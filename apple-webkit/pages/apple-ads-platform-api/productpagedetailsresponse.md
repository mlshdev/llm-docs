> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/productpagedetailsresponse](https://developer.apple.com/documentation/apple-ads-platform-api/productpagedetailsresponse)

# ProductPageDetailsResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Response object for a single product page retrieval.

## Declaration

```
object ProductPageDetailsResponse
```

## Properties

- `result` — `ProductPageDetails`: On success, the [ProductPageDetails](productpagedetails.md) object for the requested product page. Read-only.
- `error` — `Error`: Populated only when the request fails. Omitted entirely on success. See [Error](error.md).

<a id="Discussion"></a>

## Discussion

The [Get Product Page by ID](get-product-page-by-id.md) endpoint returns `ProductPageDetailsResponse` as the top-level envelope.

<a id="Example"></a>

### Example

```json
{
  "result": {
    "id": "133fc807-d4d5-4c77-92ae-1d6ffdf0c7dc",
    "adamId": 123456789,
    "name": "AwayFinder - Holiday Season CPP",
    "state": "PUBLISHED",
    "deepLink": "https://apps.apple.com/us/app/awayfinder/id123456789?ppid=133fc807-d4d5-4c77-92ae-1d6ffdf0c7dc",
    "creationTime": "2025-04-10T08:00:00.000",
    "modificationTime": "2025-05-01T14:30:00.000"
  }
}
```

## See Also

- [ProductPageDetails](productpagedetails.md): Product page metadata for a Default Product Page, Custom Product Page, or Product Page Optimization (PPO) variant.
- [ProductPageDetailsQueryResponse](productpagedetailsqueryresponse.md): Paginated response object for the product page details query.
- [ProductPageLocaleDetails](productpagelocaledetails.md): Locale-specific metadata for an App Store product page.
- [ProductPageLocaleDetailsQueryResponse](productpagelocaledetailsqueryresponse.md): Paginated response object for the product page locale details query.
- [DeviceAssetGroup](deviceassetgroup.md): Represents assets organized by device type with fallback device information.
