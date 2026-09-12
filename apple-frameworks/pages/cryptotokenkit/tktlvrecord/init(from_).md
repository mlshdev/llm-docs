> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktlvrecord/init(from:)](https://developer.apple.com/documentation/cryptotokenkit/tktlvrecord/init(from:))

# init(from:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates and returns a TLV record from by parsing the specified data.

## Declaration

```swift
convenience init?(from data: Data)
```

## Parameters

- `data`: A data object containing the serialized representation of a TLV record.

<a id="return-value"></a>

## Return Value

A TLV record, or `nil` if `data` does not specify a valid record.

## See Also

### Creating Records

- [sequenceOfRecords(from:)](sequenceofrecords%28from_%29.md): Creates and returns an array of TLV records from the specified data.

# recordFromData: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates and returns a TLV record from by parsing the specified data.

## Declaration

```objectivec
+ (instancetype) recordFromData:(NSData *) data;
```

## Parameters

- `data`: A data object containing the serialized representation of a TLV record.

<a id="return-value"></a>

## Return Value

A TLV record, or `nil` if `data` does not specify a valid record.

## See Also

### Creating Records

- [sequenceOfRecordsFromData:](sequenceofrecords%28from_%29.md): Creates and returns an array of TLV records from the specified data.
