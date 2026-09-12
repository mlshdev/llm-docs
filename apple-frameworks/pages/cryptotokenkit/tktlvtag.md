> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktlvtag](https://developer.apple.com/documentation/cryptotokenkit/tktlvtag)

# TKTLVTag (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The type used to identify TLV format tags.

## Declaration

```swift
typealias TKTLVTag = UInt64
```

<a id="Discussion"></a>

## Discussion

Although some encodings tags do not have any size restrictions, the CryptoTokenKit framework supports tag lengths only up to 64-bits.

## See Also

### Creating TLV Records

- [init(tag:value:)](tkbertlvrecord/init%28tag_value_%29.md): Initializes a BER-TLV record with the specified tag and value.
- [init(tag:records:)](tkbertlvrecord/init%28tag_records_%29.md): Initializes a BER-TLV record with the specified tag and an array of TLV subrecords.

# TKTLVTag (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The type used to identify TLV format tags.

## Declaration

```objectivec
typedef UInt64 TKTLVTag;
```

<a id="Discussion"></a>

## Discussion

Although some encodings tags do not have any size restrictions, the CryptoTokenKit framework supports tag lengths only up to 64-bits.

## See Also

### Creating TLV Records

- [initWithTag:value:](tkbertlvrecord/init%28tag_value_%29.md): Initializes a BER-TLV record with the specified tag and value.
- [initWithTag:records:](tkbertlvrecord/init%28tag_records_%29.md): Initializes a BER-TLV record with the specified tag and an array of TLV subrecords.
