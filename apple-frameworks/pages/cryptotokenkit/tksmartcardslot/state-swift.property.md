> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardslot/state-swift.property](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardslot/state-swift.property)

# state (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The current state of the Smart Card reader slot.

## Declaration

```swift
var state: TKSmartCardSlot.State { get }
```

<a id="Discussion"></a>

## Discussion

Use Key-Value-Observing to be notified for changes to the state. For more information, see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

## See Also

### Getting the Slot State

- [TKSmartCardSlot.State](state-swift.enum.md): All smart card slot states.

# state (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The current state of the Smart Card reader slot.

## Declaration

```objectivec
@property (readonly) TKSmartCardSlotState state;
```

<a id="Discussion"></a>

## Discussion

Use Key-Value-Observing to be notified for changes to the state. For more information, see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

## See Also

### Getting the Slot State

- [TKSmartCardSlotState](state-swift.enum.md): All smart card slot states.
