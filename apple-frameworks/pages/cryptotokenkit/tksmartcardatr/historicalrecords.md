> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardatr/historicalrecords](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardatr/historicalrecords)

# historicalRecords (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A list of compact TLV records parsed from historical bytes.

## Declaration

```swift
var historicalRecords: [TKCompactTLVRecord]? { get }
```

## See Also

### Accessing ATR Attributes

- [protocols](protocols.md): An array of protocols indicated in the ATR
- [bytes](bytes.md): The ATR message data.
- [historicalBytes](historicalbytes.md): The ATR historical bytes, not including interface bytes or the TCK (check byte).

# historicalRecords (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A list of compact TLV records parsed from historical bytes.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<TKCompactTLVRecord *> * historicalRecords;
```

## See Also

### Accessing ATR Attributes

- [protocols](protocols.md): An array of protocols indicated in the ATR
- [bytes](bytes.md): The ATR message data.
- [historicalBytes](historicalbytes.md): The ATR historical bytes, not including interface bytes or the TCK (check byte).
