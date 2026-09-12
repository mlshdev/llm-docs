> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardatr/bytes](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardatr/bytes)

# bytes (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The ATR message data.

## Declaration

```swift
var bytes: Data { get }
```

## See Also

### Accessing ATR Attributes

- [protocols](protocols.md): An array of protocols indicated in the ATR
- [historicalBytes](historicalbytes.md): The ATR historical bytes, not including interface bytes or the TCK (check byte).
- [historicalRecords](historicalrecords.md): A list of compact TLV records parsed from historical bytes.

# bytes (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The ATR message data.

## Declaration

```objectivec
@property (nonatomic, readonly) NSData * bytes;
```

## See Also

### Accessing ATR Attributes

- [protocols](protocols.md): An array of protocols indicated in the ATR
- [historicalBytes](historicalbytes.md): The ATR historical bytes, not including interface bytes or the TCK (check byte).
- [historicalRecords](historicalrecords.md): A list of compact TLV records parsed from historical bytes.
