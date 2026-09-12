> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardslot/atr](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardslot/atr)

# atr (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The ATR (Answer to Reset) of the inserted Smart Card, or `nil` if no Smart Card is inserted or the inserted Smart Card is mute.

## Declaration

```swift
var atr: TKSmartCardATR? { get }
```

## See Also

### Reading the Answer to Reset

- [TKSmartCardATR](../tksmartcardatr.md): A parsed ATR (Answer To Reset) message from a Smart Card.

# ATR (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The ATR (Answer to Reset) of the inserted Smart Card, or `nil` if no Smart Card is inserted or the inserted Smart Card is mute.

## Declaration

```objectivec
@property (readonly, nullable) TKSmartCardATR * ATR;
```

## See Also

### Reading the Answer to Reset

- [TKSmartCardATR](../tksmartcardatr.md): A parsed ATR (Answer To Reset) message from a Smart Card.
