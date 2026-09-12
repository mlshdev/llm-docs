> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/apppromotedpurchaseslinkagesrequest](https://developer.apple.com/documentation/appstoreconnectapi/apppromotedpurchaseslinkagesrequest)

# AppPromotedPurchasesLinkagesRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

The request body for updating the ordered list of in-app purchases and subscriptions promoted on an app’s product page.

## Declaration

```
object AppPromotedPurchasesLinkagesRequest
```

## Properties

- `data` — `[AppPromotedPurchasesLinkagesRequest.Data]` (required):

## Topics

### Objects

- [AppPromotedPurchasesLinkagesRequest.Data](apppromotedpurchaseslinkagesrequest/data-data.dictionary.md): The resource linkage identifying a promoted purchase associated with the app promoted purchases linkages request.

## See Also

### Objects

- [PromotedPurchaseResponse](promotedpurchaseresponse.md): The response body for endpoints that read or modify a promoted in-app purchase or subscription.
- [PromotedPurchasesResponse](promotedpurchasesresponse.md): The response body for endpoints that list promoted in-app purchases and subscriptions for an app.
- [PromotedPurchaseCreateRequest](promotedpurchasecreaterequest.md): The request body you use to create a promoted purchase.
- [PromotedPurchaseUpdateRequest](promotedpurchaseupdaterequest.md): The request body you use to update a promoted purchase update request.
- [AppPromotedPurchasesLinkagesResponse](apppromotedpurchaseslinkagesresponse.md): A response containing the resource identifiers of in-app purchases and subscriptions promoted on an app’s product page.
