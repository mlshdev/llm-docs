> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tkcompacttlvrecord](https://developer.apple.com/documentation/cryptotokenkit/tkcompacttlvrecord)

# TKCompactTLVRecord (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An object that implements encoding using Compact-TLV encoding according to ISO 7816-4.

## Declaration

```swift
class TKCompactTLVRecord
```

## Topics

### Creating TLV Records

- [init(tag:value:)](tkcompacttlvrecord/init%28tag_value_%29.md): Initializes a TLV record with the specified tag and value.

## Relationships

### Inherits From

- [TKTLVRecord](tktlvrecord.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Working with Tag-Length-Value Records

- [TKTLVRecord](tktlvrecord.md): The base class encapsulating a Tag-Length-Value record.
- [TKBERTLVRecord](tkbertlvrecord.md): An object that parses BER-encoded data and produces DER-encoded data for TLV records.
- [TKSimpleTLVRecord](tksimpletlvrecord.md): An object that implements encoding using Simple-TLV encoding according to ISO 7816-4.

# TKCompactTLVRecord (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An object that implements encoding using Compact-TLV encoding according to ISO 7816-4.

## Declaration

```objectivec
@interface TKCompactTLVRecord : TKTLVRecord
```

## Topics

### Creating TLV Records

- [initWithTag:value:](tkcompacttlvrecord/init%28tag_value_%29.md): Initializes a TLV record with the specified tag and value.

## Relationships

### Inherits From

- [TKTLVRecord](tktlvrecord.md)

## See Also

### Working with Tag-Length-Value Records

- [TKTLVRecord](tktlvrecord.md): The base class encapsulating a Tag-Length-Value record.
- [TKBERTLVRecord](tkbertlvrecord.md): An object that parses BER-encoded data and produces DER-encoded data for TLV records.
- [TKSimpleTLVRecord](tksimpletlvrecord.md): An object that implements encoding using Simple-TLV encoding according to ISO 7816-4.
