> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/skproduct/isfamilyshareable

# isFamilyShareable (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A Boolean value that indicates whether the product is available for Family Sharing in App Store Connect.

> Use Product.isFamilyShareable.

## Declaration

```swift
var isFamilyShareable: Bool { get }
```

## Mentioned In

- [Supporting Family Sharing in your app](../supporting-family-sharing-in-your-app.md)

<a id="Discussion"></a>

## Discussion

Check the value of [isFamilyShareable](isfamilyshareable.md) to learn whether an Apple In-App Purchase is sharable with the family group.

```swift
// Determine whether an in-app purchase supports Family Sharing.
let myProduct: SKProduct = getProductWithId(id: "com.example.product_identifier")
if myProduct.isFamilyShareable {
    print("Product can be shared with family group.")
}
```

When displaying Apple In-App Purchases in your app, indicate whether the product includes Family Sharing to help customers make a selection that best fits their needs.

Configure your Apple In-App Purchases to allow Family Sharing in App Store Connect. For more information about setting up Family Sharing, see [Turn-on Family Sharing for Apple In-App Purchases](https://developer.apple.com/help/app-store-connect/configure-in-app-purchase-settings/turn-on-family-sharing-for-in-app-purchases).

## See Also

### Family Sharing

- [Supporting Family Sharing in your app](../supporting-family-sharing-in-your-app.md): Provide service to share subscriptions and non-consumable products to family members.
- [paymentQueue(\_:didRevokeEntitlementsForProductIdentifiers:)](../skpaymenttransactionobserver/paymentqueue%28__didrevokeentitlementsforproductidentifiers_%29.md): Deprecated. Tells an observer that the customer is no longer entitled to one or more Family Sharing purchases.

# isFamilyShareable (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A Boolean value that indicates whether the product is available for Family Sharing in App Store Connect.

> Use Product.isFamilyShareable.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isFamilyShareable;
```

## Mentioned In

- [Supporting Family Sharing in your app](../supporting-family-sharing-in-your-app.md)

<a id="Discussion"></a>

## Discussion

Check the value of [isFamilyShareable](isfamilyshareable.md) to learn whether an Apple In-App Purchase is sharable with the family group.

```swift
// Determine whether an in-app purchase supports Family Sharing.
let myProduct: SKProduct = getProductWithId(id: "com.example.product_identifier")
if myProduct.isFamilyShareable {
    print("Product can be shared with family group.")
}
```

When displaying Apple In-App Purchases in your app, indicate whether the product includes Family Sharing to help customers make a selection that best fits their needs.

Configure your Apple In-App Purchases to allow Family Sharing in App Store Connect. For more information about setting up Family Sharing, see [Turn-on Family Sharing for Apple In-App Purchases](https://developer.apple.com/help/app-store-connect/configure-in-app-purchase-settings/turn-on-family-sharing-for-in-app-purchases).

## See Also

### Family Sharing

- [Supporting Family Sharing in your app](../supporting-family-sharing-in-your-app.md): Provide service to share subscriptions and non-consumable products to family members.
- [paymentQueue:didRevokeEntitlementsForProductIdentifiers:](../skpaymenttransactionobserver/paymentqueue%28__didrevokeentitlementsforproductidentifiers_%29.md): Deprecated. Tells an observer that the customer is no longer entitled to one or more Family Sharing purchases.
