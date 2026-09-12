> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequest/requiredbillingaddressfields](https://developer.apple.com/documentation/passkit/pkpaymentrequest/requiredbillingaddressfields)

# requiredBillingAddressFields (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 11.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.0)

A bit field of billing address fields that you need in order to process the transaction.

> This property is deprecated. Use [requiredBillingContactFields](requiredbillingcontactfields.md) instead.

## Declaration

```swift
var requiredBillingAddressFields: PKAddressField { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [PKPaymentRequest](../pkpaymentrequest.md). For possible values, see [PKPaymentRequest](../pkpaymentrequest.md).

## See Also

### Deprecated

- [applePayLaterAvailability](applepaylateravailability-3dxrt.md): Deprecated. A value that indicates whether Apple Pay Later is available for a transaction.
- [enabled](../pkshippingcontacteditingmode/enabled.md): Deprecated. All fields of the shipping contact on the payment sheet are editable by the user.
- [requiredShippingAddressFields](requiredshippingaddressfields.md): Deprecated. A bit field of shipping address fields that you need in order to process the transaction.
- [PKAddressField](../pkaddressfield.md): Deprecated. Billing or shipping address fields.
- [billingAddress](billingaddress.md): Deprecated. A prepopulated billing address.
- [shippingAddress](shippingaddress.md): Deprecated. A prepopulated shipping address.

# requiredBillingAddressFields (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 11.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

A bit field of billing address fields that you need in order to process the transaction.

> This property is deprecated. Use [requiredBillingContactFields](requiredbillingcontactfields.md) instead.

## Declaration

```objectivec
@property (nonatomic, assign) PKAddressField requiredBillingAddressFields;
```

<a id="Discussion"></a>

## Discussion

The default value is [PKPaymentRequest](../pkpaymentrequest.md). For possible values, see [PKPaymentRequest](../pkpaymentrequest.md).

## See Also

### Deprecated

- [PKShippingContactEditingModeEnabled](../pkshippingcontacteditingmode/enabled.md): Deprecated. All fields of the shipping contact on the payment sheet are editable by the user.
- [requiredShippingAddressFields](requiredshippingaddressfields.md): Deprecated. A bit field of shipping address fields that you need in order to process the transaction.
- [PKAddressField](../pkaddressfield.md): Deprecated. Billing or shipping address fields.
- [billingAddress](billingaddress.md): Deprecated. A prepopulated billing address.
- [shippingAddress](shippingaddress.md): Deprecated. A prepopulated shipping address.
