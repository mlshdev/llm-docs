> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktlvrecord](https://developer.apple.com/documentation/cryptotokenkit/tktlvrecord)

# TKTLVRecord (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The base class encapsulating a Tag-Length-Value record.

## Declaration

```swift
class TKTLVRecord
```

<a id="overview"></a>

## Overview

The CryptoTokenKit framework provides the following concrete subclasses for various TLV record encodings:

- [TKBERTLVRecord](tkbertlvrecord.md) for BER-TLV encoding rules
- [TKSimpleTLVRecord](tksimpletlvrecord.md) for Simple-TLV encoding according to ISO 7816-4
- [TKCompactTLVRecord](tkcompacttlvrecord.md) for Compact-TLV encoding according to ISO 7816-4

## Topics

### Creating Records

- [sequenceOfRecords(from:)](tktlvrecord/sequenceofrecords%28from_%29.md): Creates and returns an array of TLV records from the specified data.
- [init(from:)](tktlvrecord/init%28from_%29.md): Creates and returns a TLV record from by parsing the specified data.

### Accessing the Tag Field

- [tag](tktlvrecord/tag.md): The tag field of the record.
- [TKTLVTag](tktlvtag.md): The type used to identify TLV format tags.

### Accessing the Value Field

- [value](tktlvrecord/value.md): The value field of the record.

### Accessing Record Data

- [data](tktlvrecord/data.md): The record data, including the tag, length, and value fields.

### Initializers

- [init(fromData:)](tktlvrecord/init%28fromdata_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [TKBERTLVRecord](tkbertlvrecord.md)
- [TKCompactTLVRecord](tkcompacttlvrecord.md)
- [TKSimpleTLVRecord](tksimpletlvrecord.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Working with Tag-Length-Value Records

- [TKBERTLVRecord](tkbertlvrecord.md): An object that parses BER-encoded data and produces DER-encoded data for TLV records.
- [TKCompactTLVRecord](tkcompacttlvrecord.md): An object that implements encoding using Compact-TLV encoding according to ISO 7816-4.
- [TKSimpleTLVRecord](tksimpletlvrecord.md): An object that implements encoding using Simple-TLV encoding according to ISO 7816-4.

# TKTLVRecord (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The base class encapsulating a Tag-Length-Value record.

## Declaration

```objectivec
@interface TKTLVRecord : NSObject
```

<a id="overview"></a>

## Overview

The CryptoTokenKit framework provides the following concrete subclasses for various TLV record encodings:

- [TKBERTLVRecord](tkbertlvrecord.md) for BER-TLV encoding rules
- [TKSimpleTLVRecord](tksimpletlvrecord.md) for Simple-TLV encoding according to ISO 7816-4
- [TKCompactTLVRecord](tkcompacttlvrecord.md) for Compact-TLV encoding according to ISO 7816-4

## Topics

### Creating Records

- [sequenceOfRecordsFromData:](tktlvrecord/sequenceofrecords%28from_%29.md): Creates and returns an array of TLV records from the specified data.
- [recordFromData:](tktlvrecord/init%28from_%29.md): Creates and returns a TLV record from by parsing the specified data.

### Accessing the Tag Field

- [tag](tktlvrecord/tag.md): The tag field of the record.
- [TKTLVTag](tktlvtag.md): The type used to identify TLV format tags.

### Accessing the Value Field

- [value](tktlvrecord/value.md): The value field of the record.

### Accessing Record Data

- [data](tktlvrecord/data.md): The record data, including the tag, length, and value fields.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [TKBERTLVRecord](tkbertlvrecord.md)
- [TKCompactTLVRecord](tkcompacttlvrecord.md)
- [TKSimpleTLVRecord](tksimpletlvrecord.md)

## See Also

### Working with Tag-Length-Value Records

- [TKBERTLVRecord](tkbertlvrecord.md): An object that parses BER-encoded data and produces DER-encoded data for TLV records.
- [TKCompactTLVRecord](tkcompacttlvrecord.md): An object that implements encoding using Compact-TLV encoding according to ISO 7816-4.
- [TKSimpleTLVRecord](tksimpletlvrecord.md): An object that implements encoding using Simple-TLV encoding according to ISO 7816-4.
