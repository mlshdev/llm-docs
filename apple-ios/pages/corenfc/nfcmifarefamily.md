> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcmifarefamily](https://developer.apple.com/documentation/corenfc/nfcmifarefamily)

# NFCMiFareFamily (Swift)

**Framework:** Core NFC  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Identifiers for the MIFARE product families.

## Declaration

```swift
enum NFCMiFareFamily
```

## Topics

### Product Families

- [NFCMiFareFamily.unknown](nfcmifarefamily/unknown.md): An identifier that indicates a compatible ISO14443 Type A tag.
- [NFCMiFareFamily.ultralight](nfcmifarefamily/ultralight.md): An identifier that indicates the MIFARE Ultralight® product family.
- [NFCMiFareFamily.plus](nfcmifarefamily/plus.md): An identifier that indicates the MIFARE Plus® product family.
- [NFCMiFareFamily.desfire](nfcmifarefamily/desfire.md): An identifier that indicates the MIFARE® DESFire® product family.

### Initializers

- [init(rawValue:)](nfcmifarefamily/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Tag Information

- [mifareFamily](nfcmifaretag/mifarefamily.md): The MIFARE product family identifier for the tag.
- [identifier](nfcmifaretag/identifier.md): The unique hardware identifier of the tag.
- [historicalBytes](nfcmifaretag/historicalbytes.md): The historical bytes extracted from an Answer To Select response.

# NFCMiFareFamily (Objective-C)

**Framework:** Core NFC  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst

Identifiers for the MIFARE product families.

## Declaration

```objectivec
enum NFCMiFareFamily : NSUInteger;
```

## Topics

### Product Families

- [NFCMiFareUnknown](nfcmifarefamily/unknown.md): An identifier that indicates a compatible ISO14443 Type A tag.
- [NFCMiFareUltralight](nfcmifarefamily/ultralight.md): An identifier that indicates the MIFARE Ultralight® product family.
- [NFCMiFarePlus](nfcmifarefamily/plus.md): An identifier that indicates the MIFARE Plus® product family.
- [NFCMiFareDESFire](nfcmifarefamily/desfire.md): An identifier that indicates the MIFARE® DESFire® product family.

## See Also

### Getting Tag Information

- [mifareFamily](nfcmifaretag/mifarefamily.md): The MIFARE product family identifier for the tag.
- [identifier](nfcmifaretag/identifier.md): The unique hardware identifier of the tag.
- [historicalBytes](nfcmifaretag/historicalbytes.md): The historical bytes extracted from an Answer To Select response.
