> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddressfield/postaladdress](https://developer.apple.com/documentation/passkit/pkaddressfield/postaladdress)

# postalAddress (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

The buyer’s full street address, including name, street, city, state or province, postal code, and country or region.

> Use PKContactField and -requiredShippingContactFields / -requiredBillingContactFields

## Declaration

```swift
static var postalAddress: PKAddressField { get }
```

## See Also

### Constants

- [phone](phone.md): Deprecated. The buyer’s telephone number.
- [email](email.md): Deprecated. The buyer’s email address.
- [name](name.md): Deprecated. The buyer’s first and last name.
- [all](all.md): Deprecated. All fields.

# PKAddressFieldPostalAddress (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

The buyer’s full street address, including name, street, city, state or province, postal code, and country or region.

> Use PKContactField and -requiredShippingContactFields / -requiredBillingContactFields

## Declaration

```objectivec
PKAddressFieldPostalAddress
```

## See Also

### Constants

- [PKAddressFieldPhone](phone.md): Deprecated. The buyer’s telephone number.
- [PKAddressFieldEmail](email.md): Deprecated. The buyer’s email address.
- [PKAddressFieldName](name.md): Deprecated. The buyer’s first and last name.
- [PKAddressFieldAll](all.md): Deprecated. All fields.
