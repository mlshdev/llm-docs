> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpayment/requestdata](https://developer.apple.com/documentation/storekit/skpayment/requestdata)

# requestData (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Reserved for future use.

> Create Product.PurchaseOption.custom values to use in Product.purchase(confirmIn:options:).

## Declaration

```swift
var requestData: Data? { get }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`. If [requestData](requestdata.md) is not `nil`, your payment request will be rejected.

## See Also

### Getting Payment Details

- [productIdentifier](productidentifier.md): Deprecated. A string used to identify a product that can be purchased from within your app.
- [quantity](quantity.md): Deprecated. The number of items the user wants to purchase.
- [applicationUsername](applicationusername.md): Deprecated. A string that associates the transaction with a user account on your service.

# requestData (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Reserved for future use.

> Create Product.PurchaseOption.custom values to use in Product.purchase(confirmIn:options:).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSData * requestData;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`. If [requestData](requestdata.md) is not `nil`, your payment request will be rejected.

## See Also

### Getting Payment Details

- [productIdentifier](productidentifier.md): Deprecated. A string used to identify a product that can be purchased from within your app.
- [quantity](quantity.md): Deprecated. The number of items the user wants to purchase.
- [applicationUsername](applicationusername.md): Deprecated. A string that associates the transaction with a user account on your service.
