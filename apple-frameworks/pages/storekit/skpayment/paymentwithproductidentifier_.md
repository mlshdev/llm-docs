> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpayment/paymentwithproductidentifier:](https://developer.apple.com/documentation/storekit/skpayment/paymentwithproductidentifier:)

# paymentWithProductIdentifier:

**Interface language:** Objective-C

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 3.0+ (deprecated in 5.0) · iPadOS 3.0+ (deprecated in 5.0) · Mac Catalyst 13.1+ (deprecated in 13.0)

Returns a new payment with the specified product identifier.

> Use [paymentWithProduct:](init%28product_%29.md) instead, passing a product returned from [SKProductsRequest](../skproductsrequest.md).

## Declaration

```objectivec
+ (id) paymentWithProductIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: A string that identifies the item to be purchased.

<a id="return-value"></a>

## Return Value

A new payment object.

<a id="Discussion"></a>

## Discussion

The product identifier is a string previously agreed on between your application and the Apple App Store. The quantity property defaults to `1`.

To create a [SKPayment](../skpayment.md) object with a quantity greater than `1`, create a `SKMutablePayment` object, adjust its [quantity](../skmutablepayment/quantity.md) property and then add it to the payment queue:

```objc
SKMutablePayment *myPayment = [SKMutablePayment paymentWithProductIdentifier: myIdentifier];
myPayment.quantity = 2;
[[SKPaymentQueue defaultQueue] addPayment:myPayment];
```

## See Also

### Creating Payments

- [paymentWithProduct:](init%28product_%29.md): Deprecated. Returns a new payment for the specified product.
