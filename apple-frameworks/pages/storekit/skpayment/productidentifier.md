> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpayment/productidentifier](https://developer.apple.com/documentation/storekit/skpayment/productidentifier)

# productIdentifier (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A string used to identify a product that can be purchased from within your app.

> Use Product.purchase(confirmIn:options:).

## Declaration

```swift
var productIdentifier: String { get }
```

## Mentioned In

- [Testing an interrupted purchase](../testing-an-interrupted-purchase.md)

<a id="Discussion"></a>

## Discussion

The product identifier is a string previously agreed on between your app and the Apple App Store.

## See Also

### Getting Payment Details

- [quantity](quantity.md): Deprecated. The number of items the user wants to purchase.
- [requestData](requestdata.md): Deprecated. Reserved for future use.
- [applicationUsername](applicationusername.md): Deprecated. A string that associates the transaction with a user account on your service.

# productIdentifier (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A string used to identify a product that can be purchased from within your app.

> Use Product.purchase(confirmIn:options:).

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * productIdentifier;
```

## Mentioned In

- [Testing an interrupted purchase](../testing-an-interrupted-purchase.md)

<a id="Discussion"></a>

## Discussion

The product identifier is a string previously agreed on between your app and the Apple App Store.

## See Also

### Getting Payment Details

- [quantity](quantity.md): Deprecated. The number of items the user wants to purchase.
- [requestData](requestdata.md): Deprecated. Reserved for future use.
- [applicationUsername](applicationusername.md): Deprecated. A string that associates the transaction with a user account on your service.
