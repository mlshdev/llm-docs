> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddressfield/name](https://developer.apple.com/documentation/passkit/pkaddressfield/name)

# name (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 8.3+ (deprecated in 11.0) · iPadOS 8.3+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 11.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.0)

The buyer’s first and last name.

## Declaration

```swift
static var name: PKAddressField { get }
```

<a id="Discussion"></a>

## Discussion

This constant lets you request the name used for shipping or billing. The name is also included as part of the postal address field. The system only handles the name as a separate field when the postal address is not requested.

## See Also

### Constants

- [postalAddress](postaladdress.md): Deprecated. The buyer’s full street address, including name, street, city, state or province, postal code, and country or region.
- [phone](phone.md): Deprecated. The buyer’s telephone number.
- [email](email.md): Deprecated. The buyer’s email address.
- [all](all.md): Deprecated. All fields.

# PKAddressFieldName (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 8.3+ (deprecated in 11.0) · iPadOS 8.3+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 11.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

The buyer’s first and last name.

## Declaration

```objectivec
PKAddressFieldName
```

<a id="Discussion"></a>

## Discussion

This constant lets you request the name used for shipping or billing. The name is also included as part of the postal address field. The system only handles the name as a separate field when the postal address is not requested.

## See Also

### Constants

- [PKAddressFieldPostalAddress](postaladdress.md): Deprecated. The buyer’s full street address, including name, street, city, state or province, postal code, and country or region.
- [PKAddressFieldPhone](phone.md): Deprecated. The buyer’s telephone number.
- [PKAddressFieldEmail](email.md): Deprecated. The buyer’s email address.
- [PKAddressFieldAll](all.md): Deprecated. All fields.
