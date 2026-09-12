> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcmifaretag/historicalbytes](https://developer.apple.com/documentation/corenfc/nfcmifaretag/historicalbytes)

# historicalBytes (Swift)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The historical bytes extracted from an Answer To Select response.

## Declaration

```swift
var historicalBytes: Data? { get }
```

## See Also

### Getting Tag Information

- [mifareFamily](mifarefamily.md): The MIFARE product family identifier for the tag.
- [NFCMiFareFamily](../nfcmifarefamily.md): Identifiers for the MIFARE product families.
- [identifier](identifier.md): The unique hardware identifier of the tag.

# historicalBytes (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The historical bytes extracted from an Answer To Select response.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSData * historicalBytes;
```

## See Also

### Getting Tag Information

- [mifareFamily](mifarefamily.md): The MIFARE product family identifier for the tag.
- [NFCMiFareFamily](../nfcmifarefamily.md): Identifiers for the MIFARE product families.
- [identifier](identifier.md): The unique hardware identifier of the tag.
