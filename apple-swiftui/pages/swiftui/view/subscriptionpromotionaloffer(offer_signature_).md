> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/subscriptionpromotionaloffer(offer:signature:)](https://developer.apple.com/documentation/swiftui/view/subscriptionpromotionaloffer(offer:signature:))

# subscriptionPromotionalOffer(offer:signature:)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ (deprecated in 26.0) · iPadOS 17.4+ (deprecated in 26.0) · Mac Catalyst 17.4+ (deprecated in 26.0) · macOS 14.4+ (deprecated in 26.0) · tvOS 17.4+ (deprecated in 26.0) · visionOS 1.1+ (deprecated in 26.0) · watchOS 10.4+ (deprecated in 26.0)

Selects a promotional offer to apply to a purchase a customer makes from a subscription store view.

> Sign promotional offers with JWS and use the [subscriptionPromotionalOffer(offer:compactJWS:)](subscriptionpromotionaloffer%28offer_compactjws_%29.md) view modifier instead.

## Declaration

```swift
nonisolated func subscriptionPromotionalOffer(offer: @escaping (Product, Product.SubscriptionInfo) -> Product.SubscriptionOffer?, signature: @escaping (Product, Product.SubscriptionInfo, Product.SubscriptionOffer) async throws -> Product.SubscriptionOffer.Signature) -> some View

```

## Parameters

- `offer`: The system calls this function before drawing the given subscription product on the subscription store view. Return the promotional offer to apply to the product, if any, to have system-provided UI reflect the discounted terms under the selected offer.
- `signature`: The system calls this function before processing a purchase, with the product to be purchased provided as a parameter, along with the selected subscription offer to be applied to the purchase. Return a signature you generate on your server that validates the selected offer. Errors thrown from this closure will be surfaced via the [onInAppPurchaseCompletion(perform:)](oninapppurchasecompletion%28perform_%29.md) modifier. For information about generating the signature, see [Generating a signature for promotional offers](https://developer.apple.com/documentation/storekit/generating-a-signature-for-promotional-offers).

<a id="discussion"></a>

## Discussion

Subscription stores within this view uses the specified subscription offer to configure the appearance of the subscription plans displayed, when you use a system-provided [SubscriptionStoreControlStyle](https://developer.apple.com/documentation/storekit/subscriptionstorecontrolstyle) to style the in-app subscription store. Standard [ProductViewStyle](https://developer.apple.com/documentation/storekit/productviewstyle) instances don’t show introductory or promotional offers in UI. Use the [SubscriptionStoreView](https://developer.apple.com/documentation/storekit/subscriptionstoreview) instead to show these offers in the UI.

If the signature passes validation for the offer you select, the system applies the offer to the purchase. If the signature fails validation for the offer you select, the purchase fails with [Product.PurchaseError.invalidOfferSignature](https://developer.apple.com/documentation/storekit/product/purchaseerror/invalidoffersignature).

Promotional offers you select in this modifier overwrite any offers you specified in ancestor views.

## See Also

### Technology-specific modifiers

- [postToPhotosSharedAlbumSheet(isPresented:items:photoLibrary:defaultAlbumIdentifier:completion:)](posttophotossharedalbumsheet%28ispresented_items_photolibrary_defaultalbumidentifier_completion_%29.md): Deprecated. Presents an “Add to Shared Album” sheet that allows the user to post the given items to a shared album.
- [offerCodeRedemption(isPresented:onCompletion:)](offercoderedemption%28ispresented_oncompletion_%29.md): Deprecated.
