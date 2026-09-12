> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddressfield/email](https://developer.apple.com/documentation/passkit/pkaddressfield/email)

# email (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

The buyer’s email address.

> Use PKContactField and -requiredShippingContactFields / -requiredBillingContactFields

## Declaration

```swift
static var email: PKAddressField { get }
```

## See Also

### Constants

- [postalAddress](postaladdress.md): Deprecated. The buyer’s full street address, including name, street, city, state or province, postal code, and country or region.
- [phone](phone.md): Deprecated. The buyer’s telephone number.
- [name](name.md): Deprecated. The buyer’s first and last name.
- [all](all.md): Deprecated. All fields.

# PKAddressFieldEmail (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

The buyer’s email address.

> Use PKContactField and -requiredShippingContactFields / -requiredBillingContactFields

## Declaration

```objectivec
PKAddressFieldEmail
```

## See Also

### Constants

- [PKAddressFieldPostalAddress](postaladdress.md): Deprecated. The buyer’s full street address, including name, street, city, state or province, postal code, and country or region.
- [PKAddressFieldPhone](phone.md): Deprecated. The buyer’s telephone number.
- [PKAddressFieldName](name.md): Deprecated. The buyer’s first and last name.
- [PKAddressFieldAll](all.md): Deprecated. All fields.
