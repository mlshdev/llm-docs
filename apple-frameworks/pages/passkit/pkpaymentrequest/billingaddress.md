> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequest/billingaddress](https://developer.apple.com/documentation/passkit/pkpaymentrequest/billingaddress)

# billingAddress (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0)

A prepopulated billing address.

> This property is deprecated. Use the [billingContact](billingcontact.md) property instead.

## Declaration

```swift
unowned(unsafe) var billingAddress: ABRecord? { get set }
```

<a id="Discussion"></a>

## Discussion

If you already have a billing address on file, set it here. The user can either use the address you specify or select a different address.

## See Also

### Deprecated

- [applePayLaterAvailability](applepaylateravailability-3dxrt.md): Deprecated. A value that indicates whether Apple Pay Later is available for a transaction.
- [enabled](../pkshippingcontacteditingmode/enabled.md): Deprecated. All fields of the shipping contact on the payment sheet are editable by the user.
- [requiredBillingAddressFields](requiredbillingaddressfields.md): Deprecated. A bit field of billing address fields that you need in order to process the transaction.
- [requiredShippingAddressFields](requiredshippingaddressfields.md): Deprecated. A bit field of shipping address fields that you need in order to process the transaction.
- [PKAddressField](../pkaddressfield.md): Deprecated. Billing or shipping address fields.
- [shippingAddress](shippingaddress.md): Deprecated. A prepopulated shipping address.

# billingAddress (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0)

A prepopulated billing address.

> This property is deprecated. Use the [billingContact](billingcontact.md) property instead.

## Declaration

```objectivec
@property (nonatomic, assign, nullable) ABRecordRef billingAddress;
```

<a id="Discussion"></a>

## Discussion

If you already have a billing address on file, set it here. The user can either use the address you specify or select a different address.

## See Also

### Deprecated

- [PKShippingContactEditingModeEnabled](../pkshippingcontacteditingmode/enabled.md): Deprecated. All fields of the shipping contact on the payment sheet are editable by the user.
- [requiredBillingAddressFields](requiredbillingaddressfields.md): Deprecated. A bit field of billing address fields that you need in order to process the transaction.
- [requiredShippingAddressFields](requiredshippingaddressfields.md): Deprecated. A bit field of shipping address fields that you need in order to process the transaction.
- [PKAddressField](../pkaddressfield.md): Deprecated. Billing or shipping address fields.
- [shippingAddress](shippingaddress.md): Deprecated. A prepopulated shipping address.
