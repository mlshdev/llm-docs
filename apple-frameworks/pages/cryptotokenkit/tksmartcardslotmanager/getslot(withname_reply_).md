> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardslotmanager/getslot(withname:reply:)](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardslotmanager/getslot(withname:reply:))

# getSlot(withName:reply:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Asynchronously calls a block with a Smart Card reader slot for a specified name.

## Declaration

```swift
func getSlot(withName name: String, reply: @escaping @Sendable (TKSmartCardSlot?) -> Void)
```

```swift
func getSlot(withName name: String) async -> TKSmartCardSlot?
```

## Parameters

- `name`: The name of the Smart Card reader slot.
- `reply`: - **slot**: The Smart Card reader slot corresponding to the specified name. If no slot exists with that name, this argument is `nil`.

## See Also

### Accessing Smart Card Slots

- [slotNames](slotnames.md): A list of identifiers for all the Smart Card reader slots available to the system.
- [slotNamed(\_:)](slotnamed%28__%29.md): Returns the Smart Card slot with a given name.

# getSlotWithName:reply: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Asynchronously calls a block with a Smart Card reader slot for a specified name.

## Declaration

```objectivec
- (void) getSlotWithName:(NSString *) name reply:(void (^)(TKSmartCardSlot *slot)) reply;
```

## Parameters

- `name`: The name of the Smart Card reader slot.
- `reply`: - **slot**: The Smart Card reader slot corresponding to the specified name. If no slot exists with that name, this argument is `nil`.

## See Also

### Accessing Smart Card Slots

- [slotNames](slotnames.md): A list of identifiers for all the Smart Card reader slots available to the system.
- [slotNamed:](slotnamed%28__%29.md): Returns the Smart Card slot with a given name.
