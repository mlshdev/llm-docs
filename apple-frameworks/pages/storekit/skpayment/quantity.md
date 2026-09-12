> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpayment/quantity](https://developer.apple.com/documentation/storekit/skpayment/quantity)

# quantity (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The number of items the user wants to purchase.

> Create a Product.PurchaseOption.quantity to use in Product.purchase(confirmIn:options:).

## Declaration

```swift
var quantity: Int { get }
```

<a id="Discussion"></a>

## Discussion

The default value is 1, the minimum value is 1, and the maximum value is 10.

## See Also

### Getting Payment Details

- [productIdentifier](productidentifier.md): Deprecated. A string used to identify a product that can be purchased from within your app.
- [requestData](requestdata.md): Deprecated. Reserved for future use.
- [applicationUsername](applicationusername.md): Deprecated. A string that associates the transaction with a user account on your service.

# quantity (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The number of items the user wants to purchase.

> Create a Product.PurchaseOption.quantity to use in Product.purchase(confirmIn:options:).

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger quantity;
```

<a id="Discussion"></a>

## Discussion

The default value is 1, the minimum value is 1, and the maximum value is 10.

## See Also

### Getting Payment Details

- [productIdentifier](productidentifier.md): Deprecated. A string used to identify a product that can be purchased from within your app.
- [requestData](requestdata.md): Deprecated. Reserved for future use.
- [applicationUsername](applicationusername.md): Deprecated. A string that associates the transaction with a user account on your service.
