> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardslotmanager/slotnames](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardslotmanager/slotnames)

# slotNames (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A list of identifiers for all the Smart Card reader slots available to the system.

## Declaration

```swift
var slotNames: [String] { get }
```

<a id="Discussion"></a>

## Discussion

Use Key-Value Observing on this property to be notified for changes to available Smart Card reader slots. For more information, see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

## See Also

### Accessing Smart Card Slots

- [getSlot(withName:reply:)](getslot%28withname_reply_%29.md): Asynchronously calls a block with a Smart Card reader slot for a specified name.
- [slotNamed(\_:)](slotnamed%28__%29.md): Returns the Smart Card slot with a given name.

# slotNames (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A list of identifiers for all the Smart Card reader slots available to the system.

## Declaration

```objectivec
@property (readonly) NSArray<NSString *> * slotNames;
```

<a id="Discussion"></a>

## Discussion

Use Key-Value Observing on this property to be notified for changes to available Smart Card reader slots. For more information, see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

## See Also

### Accessing Smart Card Slots

- [getSlotWithName:reply:](getslot%28withname_reply_%29.md): Asynchronously calls a block with a Smart Card reader slot for a specified name.
- [slotNamed:](slotnamed%28__%29.md): Returns the Smart Card slot with a given name.
