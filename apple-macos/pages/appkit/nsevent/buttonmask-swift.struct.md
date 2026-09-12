> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/buttonmask-swift.struct](https://developer.apple.com/documentation/appkit/nsevent/buttonmask-swift.struct)

# NSEvent.ButtonMask (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants you use to identify the activated tablet buttons in an event.

## Declaration

```swift
struct ButtonMask
```

## Topics

### Getting the Tablet Button Masks

- [penTip](buttonmask-swift.struct/pentip.md): A mask that matches the pen tip.
- [penLowerSide](buttonmask-swift.struct/penlowerside.md): A mask that matches the button on the lower side of the device.
- [penUpperSide](buttonmask-swift.struct/penupperside.md): A mask that matches the button on the upper side of the device.

### Initializers

- [init(rawValue:)](buttonmask-swift.struct/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [NSEvent.EventTypeMask](eventtypemask.md): Constants that you use to filter out specific event types from the stream of incoming events.
- [NSEvent.ModifierFlags](modifierflags-swift.struct.md): Flags that represent key states in an event object.
- [NSEvent.Phase](phase-swift.struct.md): Constants that represent the possible phases during an event phase.
- [NSEvent.SwipeTrackingOptions](swipetrackingoptions.md): Constants that specify swipe-tracking options.
- [init(type:)](eventtypemask/init%28type_%29.md): Returns the event mask for the specified type.

# NSEventButtonMask (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants you use to identify the activated tablet buttons in an event.

## Declaration

```objectivec
enum NSEventButtonMask : NSUInteger;
```

## Topics

### Getting the Tablet Button Masks

- [NSEventButtonMaskPenTip](buttonmask-swift.struct/pentip.md): A mask that matches the pen tip.
- [NSEventButtonMaskPenLowerSide](buttonmask-swift.struct/penlowerside.md): A mask that matches the button on the lower side of the device.
- [NSEventButtonMaskPenUpperSide](buttonmask-swift.struct/penupperside.md): A mask that matches the button on the upper side of the device.

### Deprecated

- [NSPenLowerSideMask](../nspenlowersidemask.md): Deprecated. The button on the lower side of the device is activated.
- [NSPenTipMask](../nspentipmask.md): Deprecated. The pen tip is activated.
- [NSPenUpperSideMask](../nspenuppersidemask.md): Deprecated. The button on the upper side of the device is activated.

## See Also

### Constants

- [NSEventMask](eventtypemask.md): Constants that you use to filter out specific event types from the stream of incoming events.
- [NSEventModifierFlags](modifierflags-swift.struct.md): Flags that represent key states in an event object.
- [NSEventPhase](phase-swift.struct.md): Constants that represent the possible phases during an event phase.
- [NSEventSwipeTrackingOptions](swipetrackingoptions.md): Constants that specify swipe-tracking options.
- [NSEventMaskFromType](eventtypemask/init%28type_%29.md): Returns the event mask for the specified type.
