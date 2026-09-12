> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardatr/historicalbytes](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardatr/historicalbytes)

# historicalBytes (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The ATR historical bytes, not including interface bytes or the TCK (check byte).

## Declaration

```swift
var historicalBytes: Data { get }
```

## See Also

### Accessing ATR Attributes

- [protocols](protocols.md): An array of protocols indicated in the ATR
- [bytes](bytes.md): The ATR message data.
- [historicalRecords](historicalrecords.md): A list of compact TLV records parsed from historical bytes.

# historicalBytes (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The ATR historical bytes, not including interface bytes or the TCK (check byte).

## Declaration

```objectivec
@property (nonatomic, readonly) NSData * historicalBytes;
```

## See Also

### Accessing ATR Attributes

- [protocols](protocols.md): An array of protocols indicated in the ATR
- [bytes](bytes.md): The ATR message data.
- [historicalRecords](historicalrecords.md): A list of compact TLV records parsed from historical bytes.
