> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpayment/applicationusername](https://developer.apple.com/documentation/storekit/skpayment/applicationusername)

# applicationUsername (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 18.0) · iPadOS 7.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.9+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A string that associates the transaction with a user account on your service.

> Create a Product.PurchaseOption.appAccountToken to use in Product.purchase(confirmIn:options:).

## Declaration

```swift
var applicationUsername: String? { get }
```

<a id="Discussion"></a>

## Discussion

For more information on how to set and use this property, see [applicationUsername](../skmutablepayment/applicationusername.md).

## See Also

### Getting Payment Details

- [productIdentifier](productidentifier.md): Deprecated. A string used to identify a product that can be purchased from within your app.
- [quantity](quantity.md): Deprecated. The number of items the user wants to purchase.
- [requestData](requestdata.md): Deprecated. Reserved for future use.

# applicationUsername (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 18.0) · iPadOS 7.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.9+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A string that associates the transaction with a user account on your service.

> Create a Product.PurchaseOption.appAccountToken to use in Product.purchase(confirmIn:options:).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * applicationUsername;
```

<a id="Discussion"></a>

## Discussion

For more information on how to set and use this property, see [applicationUsername](../skmutablepayment/applicationusername.md).

## See Also

### Getting Payment Details

- [productIdentifier](productidentifier.md): Deprecated. A string used to identify a product that can be purchased from within your app.
- [quantity](quantity.md): Deprecated. The number of items the user wants to purchase.
- [requestData](requestdata.md): Deprecated. Reserved for future use.
