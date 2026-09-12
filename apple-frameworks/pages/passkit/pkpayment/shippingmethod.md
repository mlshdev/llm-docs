> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpayment/shippingmethod](https://developer.apple.com/documentation/passkit/pkpayment/shippingmethod)

# shippingMethod (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

The user-selected shipping method for this transaction.

## Declaration

```swift
var shippingMethod: PKShippingMethod? { get }
```

<a id="Discussion"></a>

## Discussion

A value is set for this property only if the corresponding payment request specified available shipping methods in the [shippingMethods](../pkpaymentrequest/shippingmethods.md) property of the [PKPaymentRequest](../pkpaymentrequest.md) object. Otherwise, the value is `nil.`

## See Also

### Working with billing and shipping information

- [billingContact](billingcontact.md): The user-selected billing address for this transaction.
- [shippingContact](shippingcontact.md): The user-selected shipping address for this transaction.
- [PKContact](../pkcontact.md): An object that encapsulates contact information needed for billing and shipping.
- [PKShippingMethod](../pkshippingmethod.md): An object that defines a shipping method for delivering physical goods.

# shippingMethod (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

The user-selected shipping method for this transaction.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) PKShippingMethod * shippingMethod;
```

<a id="Discussion"></a>

## Discussion

A value is set for this property only if the corresponding payment request specified available shipping methods in the [shippingMethods](../pkpaymentrequest/shippingmethods.md) property of the [PKPaymentRequest](../pkpaymentrequest.md) object. Otherwise, the value is `nil.`

## See Also

### Working with billing and shipping information

- [billingContact](billingcontact.md): The user-selected billing address for this transaction.
- [shippingContact](shippingcontact.md): The user-selected shipping address for this transaction.
- [PKContact](../pkcontact.md): An object that encapsulates contact information needed for billing and shipping.
- [PKShippingMethod](../pkshippingmethod.md): An object that defines a shipping method for delivering physical goods.
