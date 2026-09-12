> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardatr/interfacegroup/ta](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardatr/interfacegroup/ta)

# ta (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The TA interface byte of ATR group, or `nil` if TA is not present.

## Declaration

```swift
var ta: NSNumber? { get }
```

## See Also

### Accessing Interface Group Protocol and Bytes

- [protocol](protocol.md): The protocol for this group.
- [tb](tb.md): The TB interface byte of ATR group, or `nil` if TB is not present.
- [tc](tc.md): The TC interface byte of ATR group, or `nil` if TC is not present.

# TA (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The TA interface byte of ATR group, or `nil` if TA is not present.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSNumber * TA;
```

## See Also

### Accessing Interface Group Protocol and Bytes

- [protocol](protocol.md): The protocol for this group.
- [TB](tb.md): The TB interface byte of ATR group, or `nil` if TB is not present.
- [TC](tc.md): The TC interface byte of ATR group, or `nil` if TC is not present.
