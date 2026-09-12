> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/advancedcommerceproduct](https://developer.apple.com/documentation/storekit/advancedcommerceproduct)

# AdvancedCommerceProduct

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

A product configured as a generic SKU in App Store Connect for use with the Advanced Commerce API.

## Declaration

```swift
struct AdvancedCommerceProduct
```

<a id="overview"></a>

## Overview

For more information about [Advanced Commerce API](../advancedcommerceapi.md), see [Advanced Commerce API](https://developer.apple.com/in-app-purchase/advanced-commerce-api/).

## Topics

### Getting the product ID and type

- [id](advancedcommerceproduct/id.md): The generic product ID.
- [AdvancedCommerceProduct.ProductType](advancedcommerceproduct/producttype.md)
- [type](advancedcommerceproduct/type.md): The type of the product.

### Initiating purchases

- [AdvancedCommerceProduct.PurchaseOption](advancedcommerceproduct/purchaseoption.md)
- [purchase(compactJWS:confirmIn:options:)](advancedcommerceproduct/purchase%28compactjws_confirmin_options_%29-7x4bh.md): Processes a purchase for the product.
- [purchase(compactJWS:confirmIn:options:)](advancedcommerceproduct/purchase%28compactjws_confirmin_options_%29-54lkw.md): Processes a purchase for the product.
- [purchase(compactJWS:options:)](advancedcommerceproduct/purchase%28compactjws_options_%29.md): Processes a purchase for the product.
- [AdvancedCommerceProduct.PurchaseResult](advancedcommerceproduct/purchaseresult.md)

### Getting transactions and entitlements

- [allTransactions](advancedcommerceproduct/alltransactions.md): All transactions associated with the generic product ID.
- [currentEntitlements](advancedcommerceproduct/currententitlements.md): The transactions that entitle the customer to Advanced Commerce Items purchased using the generic product ID.
- [latestTransaction](advancedcommerceproduct/latesttransaction.md): The most recent transaction associated with the generic product ID, if it exists.

### Initializing an instance

- [init(id:)](advancedcommerceproduct/init%28id_%29.md): Creates an Advanced Commerce product.

### Handling errors

- [InvalidRequestError](invalidrequesterror.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Advanced Commerce API interactions

- [Sending Advanced Commerce API requests from your app](sending-advanced-commerce-api-requests-from-your-app.md): Send Advanced Commerce API requests from your app that you authorize with a JSON Web Signature (JWS) you generate on your server.
- [Generating JWS to sign App Store requests](generating-jws-to-sign-app-store-requests.md): Create signed JSON Web Signature (JWS) strings on your server to authorize your API requests in your app.
