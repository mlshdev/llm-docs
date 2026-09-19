> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfcmifaretag/identifier

# identifier (Swift)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The unique hardware identifier of the tag.

## Declaration

```swift
var identifier: Data { get }
```

<a id="Discussion"></a>

## Discussion

The [identifier](identifier.md) data is in big-endian byte order.

## See Also

### Getting Tag Information

- [mifareFamily](mifarefamily.md): The MIFARE product family identifier for the tag.
- [NFCMiFareFamily](../nfcmifarefamily.md): Identifiers for the MIFARE product families.
- [historicalBytes](historicalbytes.md): The historical bytes extracted from an Answer To Select response.

# identifier (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The unique hardware identifier of the tag.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSData * identifier;
```

<a id="Discussion"></a>

## Discussion

The [identifier](identifier.md) data is in big-endian byte order.

## See Also

### Getting Tag Information

- [mifareFamily](mifarefamily.md): The MIFARE product family identifier for the tag.
- [NFCMiFareFamily](../nfcmifarefamily.md): Identifiers for the MIFARE product families.
- [historicalBytes](historicalbytes.md): The historical bytes extracted from an Answer To Select response.
