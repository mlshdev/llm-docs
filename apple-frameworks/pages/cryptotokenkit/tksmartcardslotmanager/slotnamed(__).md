> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardslotmanager/slotnamed(_:)](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardslotmanager/slotnamed(_:))

# slotNamed(\_:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns the Smart Card slot with a given name.

## Declaration

```swift
func slotNamed(_ name: String) -> TKSmartCardSlot?
```

<a id="return-value"></a>

## Return Value

The slot with the specified name, or `nil` if no slot with that name exists.

## See Also

### Accessing Smart Card Slots

- [slotNames](slotnames.md): A list of identifiers for all the Smart Card reader slots available to the system.
- [getSlot(withName:reply:)](getslot%28withname_reply_%29.md): Asynchronously calls a block with a Smart Card reader slot for a specified name.

# slotNamed: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns the Smart Card slot with a given name.

## Declaration

```objectivec
- (TKSmartCardSlot *) slotNamed:(NSString *) name;
```

<a id="return-value"></a>

## Return Value

The slot with the specified name, or `nil` if no slot with that name exists.

## See Also

### Accessing Smart Card Slots

- [slotNames](slotnames.md): A list of identifiers for all the Smart Card reader slots available to the system.
- [getSlotWithName:reply:](getslot%28withname_reply_%29.md): Asynchronously calls a block with a Smart Card reader slot for a specified name.
