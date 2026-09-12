> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktlvrecord/sequenceofrecords(from:)](https://developer.apple.com/documentation/cryptotokenkit/tktlvrecord/sequenceofrecords(from:))

# sequenceOfRecords(from:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates and returns an array of TLV records from the specified data.

## Declaration

```swift
class func sequenceOfRecords(from data: Data) -> [TKTLVRecord]?
```

## Parameters

- `data`: A data object containing the serialized representation of zero or more TLV records.

<a id="return-value"></a>

## Return Value

A sequence of TLV records, or `nil` if `data` does not specify a sequence of valid records.

## See Also

### Creating Records

- [init(from:)](init%28from_%29.md): Creates and returns a TLV record from by parsing the specified data.

# sequenceOfRecordsFromData: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates and returns an array of TLV records from the specified data.

## Declaration

```objectivec
+ (NSArray<TKTLVRecord *> *) sequenceOfRecordsFromData:(NSData *) data;
```

## Parameters

- `data`: A data object containing the serialized representation of zero or more TLV records.

<a id="return-value"></a>

## Return Value

A sequence of TLV records, or `nil` if `data` does not specify a sequence of valid records.

## See Also

### Creating Records

- [recordFromData:](init%28from_%29.md): Creates and returns a TLV record from by parsing the specified data.
