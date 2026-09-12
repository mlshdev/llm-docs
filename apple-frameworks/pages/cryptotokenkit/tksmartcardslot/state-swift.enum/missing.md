> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardslot/state-swift.enum/missing](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardslot/state-swift.enum/missing)

# TKSmartCardSlot.State.missing (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

## Declaration

```swift
case missing
```

<a id="Discussion"></a>

## Discussion

The Smart Card reader slot is no longer known to the system.

> **Important**

>  This is the terminal state of a `TKSmartCardSlotThis` instance; once it has reached this state, the Smart Card reader slot cannot be reinitialized.

## See Also

### Constants

- [TKSmartCardSlot.State.empty](empty.md)
- [TKSmartCardSlot.State.probing](probing.md)
- [TKSmartCardSlot.State.muteCard](mutecard.md)
- [TKSmartCardSlot.State.validCard](validcard.md)

# TKSmartCardSlotStateMissing (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

## Declaration

```objectivec
TKSmartCardSlotStateMissing
```

<a id="Discussion"></a>

## Discussion

The Smart Card reader slot is no longer known to the system.

> **Important**

>  This is the terminal state of a `TKSmartCardSlotThis` instance; once it has reached this state, the Smart Card reader slot cannot be reinitialized.

## See Also

### Constants

- [TKSmartCardSlotStateEmpty](empty.md)
- [TKSmartCardSlotStateProbing](probing.md)
- [TKSmartCardSlotStateMuteCard](mutecard.md)
- [TKSmartCardSlotStateValidCard](validcard.md)
