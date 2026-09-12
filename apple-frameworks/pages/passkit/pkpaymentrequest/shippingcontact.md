> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequest/shippingcontact](https://developer.apple.com/documentation/passkit/pkpaymentrequest/shippingcontact)

# shippingContact (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

A prepopulated shipping address.

## Declaration

```swift
var shippingContact: PKContact? { get set }
```

## Mentioned In

- [Displaying a Read-Only Pickup Address](../displaying-a-read-only-pickup-address.md)

<a id="Discussion"></a>

## Discussion

If you have an up-to-date shipping address on file, you can set this property to that address. This shipping address appears in the payment sheet. When the framework presents the [PKPaymentAuthorizationViewController](../pkpaymentauthorizationviewcontroller.md), the user can either keep the address you specified or enter a different address.

Note that a [PKContact](../pkcontact.md) object that represents a shipping contact contains information for only the [postalAddress](../pkcontact/postaladdress.md), [emailAddress](../pkcontact/emailaddress.md), and [phoneNumber](../pkcontact/phonenumber.md) properties. The framework sets all other properties in the object to `nil`.

## See Also

### Providing known contact information

- [billingContact](billingcontact.md): A prepopulated billing address.
- [PKContact](../pkcontact.md): An object that encapsulates contact information needed for billing and shipping.

# shippingContact (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

A prepopulated shipping address.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) PKContact * shippingContact;
```

## Mentioned In

- [Displaying a Read-Only Pickup Address](../displaying-a-read-only-pickup-address.md)

<a id="Discussion"></a>

## Discussion

If you have an up-to-date shipping address on file, you can set this property to that address. This shipping address appears in the payment sheet. When the framework presents the [PKPaymentAuthorizationViewController](../pkpaymentauthorizationviewcontroller.md), the user can either keep the address you specified or enter a different address.

Note that a [PKContact](../pkcontact.md) object that represents a shipping contact contains information for only the [postalAddress](../pkcontact/postaladdress.md), [emailAddress](../pkcontact/emailaddress.md), and [phoneNumber](../pkcontact/phonenumber.md) properties. The framework sets all other properties in the object to `nil`.

## See Also

### Providing known contact information

- [billingContact](billingcontact.md): A prepopulated billing address.
- [PKContact](../pkcontact.md): An object that encapsulates contact information needed for billing and shipping.
