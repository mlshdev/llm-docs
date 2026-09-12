> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpayment/init(product:)](https://developer.apple.com/documentation/storekit/skpayment/init(product:))

# init(product:) (Swift)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Returns a new payment for the specified product.

> Use Product.purchase(confirmIn:options:).

## Declaration

```swift
convenience init(product: SKProduct)
```

## Parameters

- `product`: The product the user wishes to purchase.

<a id="return-value"></a>

## Return Value

A new payment object.

<a id="Discussion"></a>

## Discussion

This [Object creation](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/ObjectCreation.html#//apple_ref/doc/uid/TP40008195-CH39) uses the `productIdentifier` property obtained from the `product` parameter to create and return a new payment with that identifier. The quantity property defaults to `1`.

To create a [SKPayment](../skpayment.md) object with a quantity greater than `1`, create a `SKMutablePayment` object, adjust its `quantity` property and then add it to the payment queue.

```objc
SKMutablePayment *myPayment = [SKMutablePayment paymentWithProduct: myProduct];
myPayment.quantity = 2;
[[SKPaymentQueue defaultQueue] addPayment:myPayment];
```

## See Also

### Related Documentation

- [In-App Purchase Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Introduction.html#//apple_ref/doc/uid/TP40008267)

# paymentWithProduct: (Objective-C)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Returns a new payment for the specified product.

> Use Product.purchase(confirmIn:options:).

## Declaration

```objectivec
+ (instancetype) paymentWithProduct:(SKProduct *) product;
```

## Parameters

- `product`: The product the user wishes to purchase.

<a id="return-value"></a>

## Return Value

A new payment object.

<a id="Discussion"></a>

## Discussion

This [Object creation](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/ObjectCreation.html#//apple_ref/doc/uid/TP40008195-CH39) uses the `productIdentifier` property obtained from the `product` parameter to create and return a new payment with that identifier. The quantity property defaults to `1`.

To create a [SKPayment](../skpayment.md) object with a quantity greater than `1`, create a `SKMutablePayment` object, adjust its `quantity` property and then add it to the payment queue.

```objc
SKMutablePayment *myPayment = [SKMutablePayment paymentWithProduct: myProduct];
myPayment.quantity = 2;
[[SKPaymentQueue defaultQueue] addPayment:myPayment];
```

## See Also

### Related Documentation

- [In-App Purchase Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Introduction.html#//apple_ref/doc/uid/TP40008267)

### Creating Payments

- [paymentWithProductIdentifier:](paymentwithproductidentifier_.md): Deprecated. Returns a new payment with the specified product identifier.
