> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardslot/state-swift.enum](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardslot/state-swift.enum)

# TKSmartCardSlot.State (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

All smart card slot states.

## Declaration

```swift
enum State
```

## Topics

### Constants

- [TKSmartCardSlot.State.missing](state-swift.enum/missing.md)
- [TKSmartCardSlot.State.empty](state-swift.enum/empty.md)
- [TKSmartCardSlot.State.probing](state-swift.enum/probing.md)
- [TKSmartCardSlot.State.muteCard](state-swift.enum/mutecard.md)
- [TKSmartCardSlot.State.validCard](state-swift.enum/validcard.md)

### Initializers

- [init(rawValue:)](state-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Slot State

- [state](state-swift.property.md): The current state of the Smart Card reader slot.

# TKSmartCardSlotState (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

All smart card slot states.

## Declaration

```objectivec
enum TKSmartCardSlotState : NSInteger;
```

## Topics

### Constants

- [TKSmartCardSlotStateMissing](state-swift.enum/missing.md)
- [TKSmartCardSlotStateEmpty](state-swift.enum/empty.md)
- [TKSmartCardSlotStateProbing](state-swift.enum/probing.md)
- [TKSmartCardSlotStateMuteCard](state-swift.enum/mutecard.md)
- [TKSmartCardSlotStateValidCard](state-swift.enum/validcard.md)

## See Also

### Getting the Slot State

- [state](state-swift.property.md): The current state of the Smart Card reader slot.
