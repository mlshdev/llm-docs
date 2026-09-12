> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/apppromotedpurchaseslinkagesresponse](https://developer.apple.com/documentation/appstoreconnectapi/apppromotedpurchaseslinkagesresponse)

# AppPromotedPurchasesLinkagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

A response containing the resource identifiers of in-app purchases and subscriptions promoted on an app’s product page.

## Declaration

```
object AppPromotedPurchasesLinkagesResponse
```

## Properties

- `data` — `[AppPromotedPurchasesLinkagesResponse.Data]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## Topics

### Objects

- [AppPromotedPurchasesLinkagesResponse.Data](apppromotedpurchaseslinkagesresponse/data-data.dictionary.md): The resource linkage identifying a promoted purchase associated with the app promoted purchases linkages response.

## See Also

### Objects

- [PromotedPurchaseResponse](promotedpurchaseresponse.md): The response body for endpoints that read or modify a promoted in-app purchase or subscription.
- [PromotedPurchasesResponse](promotedpurchasesresponse.md): The response body for endpoints that list promoted in-app purchases and subscriptions for an app.
- [PromotedPurchaseCreateRequest](promotedpurchasecreaterequest.md): The request body you use to create a promoted purchase.
- [PromotedPurchaseUpdateRequest](promotedpurchaseupdaterequest.md): The request body you use to update a promoted purchase update request.
- [AppPromotedPurchasesLinkagesRequest](apppromotedpurchaseslinkagesrequest.md): The request body for updating the ordered list of in-app purchases and subscriptions promoted on an app’s product page.
