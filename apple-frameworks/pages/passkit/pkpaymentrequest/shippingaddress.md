> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequest/shippingaddress](https://developer.apple.com/documentation/passkit/pkpaymentrequest/shippingaddress)

# shippingAddress (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0)

A prepopulated shipping address.

> This property is deprecated. Use the [shippingContact](shippingcontact.md) property instead.

## Declaration

```swift
unowned(unsafe) var shippingAddress: ABRecord? { get set }
```

<a id="Discussion"></a>

## Discussion

If you already have a shipping address on file, set this property to that address. When the [PKPaymentAuthorizationViewController](../pkpaymentauthorizationviewcontroller.md) class is presented, the user can either keep the address you specified or enter a different address.

## See Also

### Deprecated

- [applePayLaterAvailability](applepaylateravailability-3dxrt.md): Deprecated. A value that indicates whether Apple Pay Later is available for a transaction.
- [enabled](../pkshippingcontacteditingmode/enabled.md): Deprecated. All fields of the shipping contact on the payment sheet are editable by the user.
- [requiredBillingAddressFields](requiredbillingaddressfields.md): Deprecated. A bit field of billing address fields that you need in order to process the transaction.
- [requiredShippingAddressFields](requiredshippingaddressfields.md): Deprecated. A bit field of shipping address fields that you need in order to process the transaction.
- [PKAddressField](../pkaddressfield.md): Deprecated. Billing or shipping address fields.
- [billingAddress](billingaddress.md): Deprecated. A prepopulated billing address.

# shippingAddress (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0)

A prepopulated shipping address.

> This property is deprecated. Use the [shippingContact](shippingcontact.md) property instead.

## Declaration

```objectivec
@property (nonatomic, assign, nullable) ABRecordRef shippingAddress;
```

<a id="Discussion"></a>

## Discussion

If you already have a shipping address on file, set this property to that address. When the [PKPaymentAuthorizationViewController](../pkpaymentauthorizationviewcontroller.md) class is presented, the user can either keep the address you specified or enter a different address.

## See Also

### Deprecated

- [PKShippingContactEditingModeEnabled](../pkshippingcontacteditingmode/enabled.md): Deprecated. All fields of the shipping contact on the payment sheet are editable by the user.
- [requiredBillingAddressFields](requiredbillingaddressfields.md): Deprecated. A bit field of billing address fields that you need in order to process the transaction.
- [requiredShippingAddressFields](requiredshippingaddressfields.md): Deprecated. A bit field of shipping address fields that you need in order to process the transaction.
- [PKAddressField](../pkaddressfield.md): Deprecated. Billing or shipping address fields.
- [billingAddress](billingaddress.md): Deprecated. A prepopulated billing address.
