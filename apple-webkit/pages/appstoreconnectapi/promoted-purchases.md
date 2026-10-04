> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/promoted-purchases

# Promoted Purchases

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Manage the In-App Purchase or auto-renewable subscription that’s promoted on an app listing in the App Store.

## Topics

### Endpoints

- [Promote a purchase](post-v1-promotedpurchases.md): Add an existing In-App Purchase or auto-renewable subscription to the promoted In-App Purchases on an app listing in the App Store.
- [List all promoted purchases for an app](get-v1-apps-_id_-promotedpurchases.md): Get a list of promoted In-App Purchases, including promoted auto-renewable subscriptions, for an app.
- [List promoted purchase ids for an app](get-v1-apps-_id_-relationships-promotedpurchases.md): Get a list of resource IDs representing promoted purchases for an auto-renewable subscription.
- [Read promoted purchase information](get-v1-promotedpurchases-_id_.md): Get details about a specific promoted In-App Purchase.
- [Modify a promoted In-App Purchase](patch-v1-promotedpurchases-_id_.md): Update the visibility of a promoted In-App Purchase.
- [Modify the order of a promoted purchase for an app](patch-v1-apps-_id_-relationships-promotedpurchases.md): Update the order of promoted purchases.
- [Remove a promoted purchase](delete-v1-promotedpurchases-_id_.md): Remove a promotion for an In-App Purchase or auto-renewable subscription from the App Store listing.

### Objects

- [PromotedPurchaseResponse](promotedpurchaseresponse.md): The response body for endpoints that read or modify a promoted In-App Purchase or subscription.
- [PromotedPurchasesResponse](promotedpurchasesresponse.md): The response body for endpoints that list promoted In-App Purchases and subscriptions for an app.
- [PromotedPurchaseCreateRequest](promotedpurchasecreaterequest.md): The request body you use to create a promoted purchase.
- [PromotedPurchaseUpdateRequest](promotedpurchaseupdaterequest.md): The request body you use to update a promoted purchase update request.
- [AppPromotedPurchasesLinkagesRequest](apppromotedpurchaseslinkagesrequest.md): The request body for updating the ordered list of In-App Purchases and subscriptions promoted on an app’s product page.
- [AppPromotedPurchasesLinkagesResponse](apppromotedpurchaseslinkagesresponse.md): A response containing the resource identifiers of In-App Purchases and subscriptions promoted on an app’s product page.

## See Also

### Managing Promoted Purchases

- [Promoted Purchase Images](promoted-purchase-images.md): Create, commit, and delete images for a promoted In-App Purchase.
