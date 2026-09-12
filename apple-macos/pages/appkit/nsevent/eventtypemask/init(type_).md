> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/eventtypemask/init(type:)](https://developer.apple.com/documentation/appkit/nsevent/eventtypemask/init(type:))

# init(type:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Returns the event mask for the specified type.

## Declaration

```swift
init(type: NSEvent.EventType)
```

## Parameters

- `type`: The event type whose mask you want to get.

<a id="return-value"></a>

## Return Value

The event mask corresponding to the specified type. The returned mask is equivalent to the number 1 left-shifted by `type` bits.

## See Also

### Constants

- [NSEvent.EventTypeMask](../eventtypemask.md): Constants that you use to filter out specific event types from the stream of incoming events.
- [NSEvent.ButtonMask](../buttonmask-swift.struct.md): Constants you use to identify the activated tablet buttons in an event.
- [NSEvent.ModifierFlags](../modifierflags-swift.struct.md): Flags that represent key states in an event object.
- [NSEvent.Phase](../phase-swift.struct.md): Constants that represent the possible phases during an event phase.
- [NSEvent.SwipeTrackingOptions](../swipetrackingoptions.md): Constants that specify swipe-tracking options.

# NSEventMaskFromType (Objective-C)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Returns the event mask for the specified type.

## Declaration

```objectivec
static NSEventMask NSEventMaskFromType(NSEventType type);
```

## Parameters

- `type`: The event type whose mask you want to get.

<a id="return-value"></a>

## Return Value

The event mask corresponding to the specified type. The returned mask is equivalent to the number 1 left-shifted by `type` bits.

## See Also

### Constants

- [NSEventMask](../eventtypemask.md): Constants that you use to filter out specific event types from the stream of incoming events.
- [NSEventButtonMask](../buttonmask-swift.struct.md): Constants you use to identify the activated tablet buttons in an event.
- [NSEventModifierFlags](../modifierflags-swift.struct.md): Flags that represent key states in an event object.
- [NSEventPhase](../phase-swift.struct.md): Constants that represent the possible phases during an event phase.
- [NSEventSwipeTrackingOptions](../swipetrackingoptions.md): Constants that specify swipe-tracking options.
