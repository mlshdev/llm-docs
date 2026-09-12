> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardatr/interfacegroup/tc](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardatr/interfacegroup/tc)

# tc (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The TC interface byte of ATR group, or `nil` if TC is not present.

## Declaration

```swift
var tc: NSNumber? { get }
```

## See Also

### Accessing Interface Group Protocol and Bytes

- [protocol](protocol.md): The protocol for this group.
- [ta](ta.md): The TA interface byte of ATR group, or `nil` if TA is not present.
- [tb](tb.md): The TB interface byte of ATR group, or `nil` if TB is not present.

# TC (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The TC interface byte of ATR group, or `nil` if TC is not present.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSNumber * TC;
```

## See Also

### Accessing Interface Group Protocol and Bytes

- [protocol](protocol.md): The protocol for this group.
- [TA](ta.md): The TA interface byte of ATR group, or `nil` if TA is not present.
- [TB](tb.md): The TB interface byte of ATR group, or `nil` if TB is not present.
