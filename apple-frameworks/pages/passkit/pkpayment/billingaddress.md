> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpayment/billingaddress](https://developer.apple.com/documentation/passkit/pkpayment/billingaddress)

# billingAddress (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0)

The user-selected billing address for this transaction.

> This property is deprecated. Use [billingContact](billingcontact.md) instead.

## Declaration

```swift
unowned(unsafe) var billingAddress: ABRecord? { get }
```

<a id="Discussion"></a>

## Discussion

Only the fields specified in the the [requiredBillingAddressFields](../pkpaymentrequest/requiredbillingaddressfields.md) property of the [PKPaymentRequest](../pkpaymentrequest.md) object are populated. If no required billing fields were specified, the value of this property is `nil`.

## See Also

### Deprecated

- [shippingAddress](shippingaddress.md): Deprecated. The user-selected shipping address for this transaction.

# billingAddress (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0)

The user-selected billing address for this transaction.

> This property is deprecated. Use [billingContact](billingcontact.md) instead.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, nullable) ABRecordRef billingAddress;
```

<a id="Discussion"></a>

## Discussion

Only the fields specified in the the [requiredBillingAddressFields](../pkpaymentrequest/requiredbillingaddressfields.md) property of the [PKPaymentRequest](../pkpaymentrequest.md) object are populated. If no required billing fields were specified, the value of this property is `nil`.

## See Also

### Deprecated

- [shippingAddress](shippingaddress.md): Deprecated. The user-selected shipping address for this transaction.
