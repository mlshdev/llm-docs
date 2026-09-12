> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardpinformat/encoding-swift.enum](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardpinformat/encoding-swift.enum)

# TKSmartCardPINFormat.Encoding (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Possible PIN encoding types.

## Declaration

```swift
enum Encoding
```

## Topics

### Constants

- [TKSmartCardPINFormat.Encoding.binary](encoding-swift.enum/binary.md)
- [TKSmartCardPINFormat.Encoding.ascii](encoding-swift.enum/ascii.md)
- [TKSmartCardPINFormat.Encoding.bcd](encoding-swift.enum/bcd.md)

### Initializers

- [init(rawValue:)](encoding-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### PIN Characteristics

- [TKSmartCardPINFormat.Charset](charset-swift.enum.md): Possible PIN character sets.
- [TKSmartCardPINFormat.Justification](justification.md): Possible PIN justification types

# TKSmartCardPINEncoding (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Possible PIN encoding types.

## Declaration

```objectivec
enum TKSmartCardPINEncoding : NSInteger;
```

## Topics

### Constants

- [TKSmartCardPINEncodingBinary](encoding-swift.enum/binary.md)
- [TKSmartCardPINEncodingASCII](encoding-swift.enum/ascii.md)
- [TKSmartCardPINEncodingBCD](encoding-swift.enum/bcd.md)

## See Also

### PIN Characteristics

- [TKSmartCardPINCharset](charset-swift.enum.md): Possible PIN character sets.
- [TKSmartCardPINJustification](justification.md): Possible PIN justification types
