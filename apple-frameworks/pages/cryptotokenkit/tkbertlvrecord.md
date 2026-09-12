> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tkbertlvrecord](https://developer.apple.com/documentation/cryptotokenkit/tkbertlvrecord)

# TKBERTLVRecord (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An object that parses BER-encoded data and produces DER-encoded data for TLV records.

## Declaration

```swift
class TKBERTLVRecord
```

## Topics

### Creating TLV Records

- [init(tag:value:)](tkbertlvrecord/init%28tag_value_%29.md): Initializes a BER-TLV record with the specified tag and value.
- [init(tag:records:)](tkbertlvrecord/init%28tag_records_%29.md): Initializes a BER-TLV record with the specified tag and an array of TLV subrecords.
- [TKTLVTag](tktlvtag.md): The type used to identify TLV format tags.

### Encoding Data

- [data(forTag:)](tkbertlvrecord/data%28fortag_%29.md): Encodes a specified tag using BER-TLV tag encoding rules.

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
- [TKCompactTLVRecord](tkcompacttlvrecord.md): An object that implements encoding using Compact-TLV encoding according to ISO 7816-4.
- [TKSimpleTLVRecord](tksimpletlvrecord.md): An object that implements encoding using Simple-TLV encoding according to ISO 7816-4.

# TKBERTLVRecord (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An object that parses BER-encoded data and produces DER-encoded data for TLV records.

## Declaration

```objectivec
@interface TKBERTLVRecord : TKTLVRecord
```

## Topics

### Creating TLV Records

- [initWithTag:value:](tkbertlvrecord/init%28tag_value_%29.md): Initializes a BER-TLV record with the specified tag and value.
- [initWithTag:records:](tkbertlvrecord/init%28tag_records_%29.md): Initializes a BER-TLV record with the specified tag and an array of TLV subrecords.
- [TKTLVTag](tktlvtag.md): The type used to identify TLV format tags.

### Encoding Data

- [dataForTag:](tkbertlvrecord/data%28fortag_%29.md): Encodes a specified tag using BER-TLV tag encoding rules.

## Relationships

### Inherits From

- [TKTLVRecord](tktlvrecord.md)

## See Also

### Working with Tag-Length-Value Records

- [TKTLVRecord](tktlvrecord.md): The base class encapsulating a Tag-Length-Value record.
- [TKCompactTLVRecord](tkcompacttlvrecord.md): An object that implements encoding using Compact-TLV encoding according to ISO 7816-4.
- [TKSimpleTLVRecord](tksimpletlvrecord.md): An object that implements encoding using Simple-TLV encoding according to ISO 7816-4.
