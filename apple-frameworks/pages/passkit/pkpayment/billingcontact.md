> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpayment/billingcontact](https://developer.apple.com/documentation/passkit/pkpayment/billingcontact)

# billingContact (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

The user-selected billing address for this transaction.

## Declaration

```swift
var billingContact: PKContact? { get }
```

<a id="Discussion"></a>

## Discussion

Only the fields specified in the [requiredBillingAddressFields](../pkpaymentrequest/requiredbillingaddressfields.md) property of the [PKPaymentRequest](../pkpaymentrequest.md) object are populated. If no required billing fields were specified, the value of this property is `nil`.

## See Also

### Working with billing and shipping information

- [shippingContact](shippingcontact.md): The user-selected shipping address for this transaction.
- [shippingMethod](shippingmethod.md): The user-selected shipping method for this transaction.
- [PKContact](../pkcontact.md): An object that encapsulates contact information needed for billing and shipping.
- [PKShippingMethod](../pkshippingmethod.md): An object that defines a shipping method for delivering physical goods.

# billingContact (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

The user-selected billing address for this transaction.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) PKContact * billingContact;
```

<a id="Discussion"></a>

## Discussion

Only the fields specified in the [requiredBillingAddressFields](../pkpaymentrequest/requiredbillingaddressfields.md) property of the [PKPaymentRequest](../pkpaymentrequest.md) object are populated. If no required billing fields were specified, the value of this property is `nil`.

## See Also

### Working with billing and shipping information

- [shippingContact](shippingcontact.md): The user-selected shipping address for this transaction.
- [shippingMethod](shippingmethod.md): The user-selected shipping method for this transaction.
- [PKContact](../pkcontact.md): An object that encapsulates contact information needed for billing and shipping.
- [PKShippingMethod](../pkshippingmethod.md): An object that defines a shipping method for delivering physical goods.
