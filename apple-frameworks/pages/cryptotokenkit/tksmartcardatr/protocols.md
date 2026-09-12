> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardatr/protocols](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardatr/protocols)

# protocols (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An array of protocols indicated in the ATR

## Declaration

```swift
var protocols: [NSNumber] { get }
```

<a id="Discussion"></a>

## Discussion

Each element in the returned array is an `NSNumber` object containing an `NSUInteger` value corresponding to a member of the [TKSmartCardProtocol](../tksmartcardprotocol.md) enumeration.

The returned protocols are ordered such that the default protocol is at index `0`, and any duplicate values are removed.

## See Also

### Accessing ATR Attributes

- [bytes](bytes.md): The ATR message data.
- [historicalBytes](historicalbytes.md): The ATR historical bytes, not including interface bytes or the TCK (check byte).
- [historicalRecords](historicalrecords.md): A list of compact TLV records parsed from historical bytes.

# protocols (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An array of protocols indicated in the ATR

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSNumber *> * protocols;
```

<a id="Discussion"></a>

## Discussion

Each element in the returned array is an `NSNumber` object containing an `NSUInteger` value corresponding to a member of the [TKSmartCardProtocol](../tksmartcardprotocol.md) enumeration.

The returned protocols are ordered such that the default protocol is at index `0`, and any duplicate values are removed.

## See Also

### Accessing ATR Attributes

- [bytes](bytes.md): The ATR message data.
- [historicalBytes](historicalbytes.md): The ATR historical bytes, not including interface bytes or the TCK (check byte).
- [historicalRecords](historicalrecords.md): A list of compact TLV records parsed from historical bytes.
