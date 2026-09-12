> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardatr/interfacegroup/protocol](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardatr/interfacegroup/protocol)

# protocol (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The protocol for this group.

## Declaration

```swift
var `protocol`: NSNumber? { get }
```

<a id="Discussion"></a>

## Discussion

This property returns an `NSNumber` object containing an `NSUInteger` value corresponding to a member of the [TKSmartCardProtocol](../../tksmartcardprotocol.md) enumeration.

This property is `nil` for the first interface group (global), as it has no assigned protocol.

## See Also

### Accessing Interface Group Protocol and Bytes

- [ta](ta.md): The TA interface byte of ATR group, or `nil` if TA is not present.
- [tb](tb.md): The TB interface byte of ATR group, or `nil` if TB is not present.
- [tc](tc.md): The TC interface byte of ATR group, or `nil` if TC is not present.

# protocol (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The protocol for this group.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSNumber * protocol;
```

<a id="Discussion"></a>

## Discussion

This property returns an `NSNumber` object containing an `NSUInteger` value corresponding to a member of the [TKSmartCardProtocol](../../tksmartcardprotocol.md) enumeration.

This property is `nil` for the first interface group (global), as it has no assigned protocol.

## See Also

### Accessing Interface Group Protocol and Bytes

- [TA](ta.md): The TA interface byte of ATR group, or `nil` if TA is not present.
- [TB](tb.md): The TB interface byte of ATR group, or `nil` if TB is not present.
- [TC](tc.md): The TC interface byte of ATR group, or `nil` if TC is not present.
