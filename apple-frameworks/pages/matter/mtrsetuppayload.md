> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrsetuppayload](https://developer.apple.com/documentation/matter/mtrsetuppayload)

# MTRSetupPayload (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRSetupPayload
```

## Mentioned In

- [Onboarding a Matter device](onboarding-a-matter-device.md)

## Topics

### Initializers

- [init(onboardingPayload:)](mtrsetuppayload/init%28onboardingpayload_%29.md): Deprecated.
- [init(payload:)](mtrsetuppayload/init%28payload_%29.md)
- [init(setupPasscode:discriminator:)](mtrsetuppayload/init%28setuppasscode_discriminator_%29.md)
- [init(coder:)](mtrsetuppayload/init%28coder_%29.md)

### Instance Properties

- [commissioningFlow](mtrsetuppayload/commissioningflow.md)
- [discoveryCapabilities](mtrsetuppayload/discoverycapabilities.md)
- [discriminator](mtrsetuppayload/discriminator.md)
- [hasShortDiscriminator](mtrsetuppayload/hasshortdiscriminator.md)
- [productID](mtrsetuppayload/productid.md)
- [rendezvousInformation](mtrsetuppayload/rendezvousinformation.md): Deprecated.
- [serialNumber](mtrsetuppayload/serialnumber.md)
- [setUpPINCode](mtrsetuppayload/setuppincode.md): Deprecated.
- [setupPasscode](mtrsetuppayload/setuppasscode.md)
- [vendorElements](mtrsetuppayload/vendorelements.md)
- [vendorID](mtrsetuppayload/vendorid.md)
- [version](mtrsetuppayload/version.md)
- [isConcatenated](mtrsetuppayload/isconcatenated.md): Whether this object represents a concatenated QR Code payload consisting of two or more underlying payloads. If YES, then:
- [subPayloads](mtrsetuppayload/subpayloads.md): The individual constituent payloads, if the receiver represents a concatenated payload.

### Instance Methods

- [addOrReplaceVendorElement(\_:)](mtrsetuppayload/addorreplacevendorelement%28__%29.md)
- [getAllOptionalVendorData()](mtrsetuppayload/getalloptionalvendordata%28%29.md): Deprecated.
- [manualEntryCode()](mtrsetuppayload/manualentrycode%28%29.md)
- [qrCodeString()](mtrsetuppayload/qrcodestring%28%29.md)
- [qrCodeString(\_:)](mtrsetuppayload/qrcodestring%28__%29.md): Deprecated.
- [removeVendorElement(withTag:)](mtrsetuppayload/removevendorelement%28withtag_%29.md)
- [vendorElement(withTag:)](mtrsetuppayload/vendorelement%28withtag_%29.md)

### Type Methods

- [generateRandomPIN()](mtrsetuppayload/generaterandompin%28%29.md): Deprecated.
- [generateRandomSetupPasscode()](mtrsetuppayload/generaterandomsetuppasscode%28%29.md)
- [new()](mtrsetuppayload/new%28%29.md): Deprecated.
- [isValidSetupPasscode(\_:)](mtrsetuppayload/isvalidsetuppasscode%28__%29.md): Check whether the provided setup passcode (represented as an unsigned integer) is a valid setup passcode.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

# MTRSetupPayload (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRSetupPayload : NSObject
```

## Mentioned In

- [Onboarding a Matter device](onboarding-a-matter-device.md)

## Topics

### Initializers

- [setupPayloadWithOnboardingPayload:error:](mtrsetuppayload/init%28onboardingpayload_%29.md): Deprecated.
- [initWithPayload:](mtrsetuppayload/init%28payload_%29.md)
- [initWithSetupPasscode:discriminator:](mtrsetuppayload/init%28setuppasscode_discriminator_%29.md)

### Instance Properties

- [commissioningFlow](mtrsetuppayload/commissioningflow.md)
- [discoveryCapabilities](mtrsetuppayload/discoverycapabilities.md)
- [discriminator](mtrsetuppayload/discriminator.md)
- [hasShortDiscriminator](mtrsetuppayload/hasshortdiscriminator.md)
- [productID](mtrsetuppayload/productid.md)
- [rendezvousInformation](mtrsetuppayload/rendezvousinformation.md): Deprecated.
- [serialNumber](mtrsetuppayload/serialnumber.md)
- [setUpPINCode](mtrsetuppayload/setuppincode.md): Deprecated.
- [setupPasscode](mtrsetuppayload/setuppasscode.md)
- [vendorElements](mtrsetuppayload/vendorelements.md)
- [vendorID](mtrsetuppayload/vendorid.md)
- [version](mtrsetuppayload/version.md)
- [concatenated](mtrsetuppayload/isconcatenated.md): Whether this object represents a concatenated QR Code payload consisting of two or more underlying payloads. If YES, then:
- [subPayloads](mtrsetuppayload/subpayloads.md): The individual constituent payloads, if the receiver represents a concatenated payload.

### Instance Methods

- [addOrReplaceVendorElement:](mtrsetuppayload/addorreplacevendorelement%28__%29.md)
- [getAllOptionalVendorData:](mtrsetuppayload/getalloptionalvendordata%28%29.md): Deprecated.
- [manualEntryCode](mtrsetuppayload/manualentrycode%28%29.md)
- [qrCodeString](mtrsetuppayload/qrcodestring%28%29.md)
- [qrCodeString:](mtrsetuppayload/qrcodestring%28__%29.md): Deprecated.
- [removeVendorElementWithTag:](mtrsetuppayload/removevendorelement%28withtag_%29.md)
- [vendorElementWithTag:](mtrsetuppayload/vendorelement%28withtag_%29.md)
- [init](mtrsetuppayload/init.md): Deprecated.

### Type Methods

- [generateRandomPIN](mtrsetuppayload/generaterandompin%28%29.md): Deprecated.
- [generateRandomSetupPasscode](mtrsetuppayload/generaterandomsetuppasscode%28%29.md)
- [new](mtrsetuppayload/new%28%29.md): Deprecated.
- [isValidSetupPasscode:](mtrsetuppayload/isvalidsetuppasscode%28__%29.md): Check whether the provided setup passcode (represented as an unsigned integer) is a valid setup passcode.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
