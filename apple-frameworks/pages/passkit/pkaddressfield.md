> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddressfield](https://developer.apple.com/documentation/passkit/pkaddressfield)

# PKAddressField (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Structure  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

Billing or shipping address fields.

> This field is deprecated. Use [PKContactField](pkcontactfield.md) instead.

## Declaration

```swift
struct PKAddressField
```

## Topics

### Constants

- [postalAddress](pkaddressfield/postaladdress.md): Deprecated. The buyer’s full street address, including name, street, city, state or province, postal code, and country or region.
- [phone](pkaddressfield/phone.md): Deprecated. The buyer’s telephone number.
- [email](pkaddressfield/email.md): Deprecated. The buyer’s email address.
- [name](pkaddressfield/name.md): Deprecated. The buyer’s first and last name.
- [all](pkaddressfield/all.md): Deprecated. All fields.

### Initializers

- [init(rawValue:)](pkaddressfield/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Deprecated

- [applePayLaterAvailability](pkpaymentrequest/applepaylateravailability-3dxrt.md): Deprecated. A value that indicates whether Apple Pay Later is available for a transaction.
- [PKPaymentRequest.ApplePayLaterAvailability](pkpaymentrequest/applepaylateravailability-swift.enum.md): Deprecated. Values you use to enable or disable Apple Pay Later for a specific transaction.
- [PKApplePayLaterAvailability](pkapplepaylateravailability.md): Deprecated. Values you use to enable or disable Apple Pay Later for a specific transaction.

# PKAddressField (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

Billing or shipping address fields.

> This field is deprecated. Use [PKContactField](pkcontactfield.md) instead.

## Declaration

```objectivec
enum PKAddressField : NSUInteger;
```

## Topics

### Constants

- [PKAddressFieldPostalAddress](pkaddressfield/postaladdress.md): Deprecated. The buyer’s full street address, including name, street, city, state or province, postal code, and country or region.
- [PKAddressFieldPhone](pkaddressfield/phone.md): Deprecated. The buyer’s telephone number.
- [PKAddressFieldEmail](pkaddressfield/email.md): Deprecated. The buyer’s email address.
- [PKAddressFieldName](pkaddressfield/name.md): Deprecated. The buyer’s first and last name.
- [PKAddressFieldAll](pkaddressfield/all.md): Deprecated. All fields.

### Enumeration Cases

- [PKAddressFieldNone](pkaddressfield/pkaddressfieldnone.md): Deprecated. No fields.

## See Also

### Deprecated

- [applePayLaterAvailability](pkpaymentrequest/applepaylateravailability-inpf.md): Deprecated. A value that indicates whether Apple Pay Later is available for a transaction.
- [PKApplePayLaterAvailability](pkapplepaylateravailability.md): Deprecated. Values you use to enable or disable Apple Pay Later for a specific transaction.
