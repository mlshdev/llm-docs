> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/promotedpurchasesresponse](https://developer.apple.com/documentation/appstoreconnectapi/promotedpurchasesresponse)

# PromotedPurchasesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

The response body for endpoints that list promoted in-app purchases and subscriptions for an app.

## Declaration

```
object PromotedPurchasesResponse
```

## Properties

- `data` — `[PromotedPurchase]` (required):
- `included` — `[*]`: **Allowed types:** `InAppPurchaseV2`, `Subscription`
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [PromotedPurchaseResponse](promotedpurchaseresponse.md): The response body for endpoints that read or modify a promoted in-app purchase or subscription.
- [PromotedPurchaseCreateRequest](promotedpurchasecreaterequest.md): The request body you use to create a promoted purchase.
- [PromotedPurchaseUpdateRequest](promotedpurchaseupdaterequest.md): The request body you use to update a promoted purchase update request.
- [AppPromotedPurchasesLinkagesRequest](apppromotedpurchaseslinkagesrequest.md): The request body for updating the ordered list of in-app purchases and subscriptions promoted on an app’s product page.
- [AppPromotedPurchasesLinkagesResponse](apppromotedpurchaseslinkagesresponse.md): A response containing the resource identifiers of in-app purchases and subscriptions promoted on an app’s product page.
