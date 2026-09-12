> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/modifierflags-swift.struct](https://developer.apple.com/documentation/appkit/nsevent/modifierflags-swift.struct)

# NSEvent.ModifierFlags (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Flags that represent key states in an event object.

## Declaration

```swift
struct ModifierFlags
```

## Topics

### Event Modifier Flags

- [capsLock](modifierflags-swift.struct/capslock.md): The Caps Lock key has been pressed.
- [shift](modifierflags-swift.struct/shift.md): The Shift key has been pressed.
- [control](modifierflags-swift.struct/control.md): The Control key has been pressed.
- [option](modifierflags-swift.struct/option.md): The Option or Alt key has been pressed.
- [command](modifierflags-swift.struct/command.md): The Command key has been pressed.
- [numericPad](modifierflags-swift.struct/numericpad.md): A key in the numeric keypad or an arrow key has been pressed.
- [help](modifierflags-swift.struct/help.md): The Help key has been pressed.
- [function](modifierflags-swift.struct/function.md): A function key has been pressed.
- [deviceIndependentFlagsMask](modifierflags-swift.struct/deviceindependentflagsmask.md): Device-independent modifier flags are masked.

### Deprecated

- [init(rawValue:)](modifierflags-swift.struct/init%28rawvalue_%29.md)

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
- [NSEvent.ButtonMask](buttonmask-swift.struct.md): Constants you use to identify the activated tablet buttons in an event.
- [NSEvent.Phase](phase-swift.struct.md): Constants that represent the possible phases during an event phase.
- [NSEvent.SwipeTrackingOptions](swipetrackingoptions.md): Constants that specify swipe-tracking options.
- [init(type:)](eventtypemask/init%28type_%29.md): Returns the event mask for the specified type.

# NSEventModifierFlags (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Flags that represent key states in an event object.

## Declaration

```objectivec
enum NSEventModifierFlags : NSUInteger;
```

## Topics

### Event Modifier Flags

- [NSEventModifierFlagCapsLock](modifierflags-swift.struct/capslock.md): The Caps Lock key has been pressed.
- [NSEventModifierFlagShift](modifierflags-swift.struct/shift.md): The Shift key has been pressed.
- [NSEventModifierFlagControl](modifierflags-swift.struct/control.md): The Control key has been pressed.
- [NSEventModifierFlagOption](modifierflags-swift.struct/option.md): The Option or Alt key has been pressed.
- [NSEventModifierFlagCommand](modifierflags-swift.struct/command.md): The Command key has been pressed.
- [NSEventModifierFlagNumericPad](modifierflags-swift.struct/numericpad.md): A key in the numeric keypad or an arrow key has been pressed.
- [NSEventModifierFlagHelp](modifierflags-swift.struct/help.md): The Help key has been pressed.
- [NSEventModifierFlagFunction](modifierflags-swift.struct/function.md): A function key has been pressed.
- [NSEventModifierFlagDeviceIndependentFlagsMask](modifierflags-swift.struct/deviceindependentflagsmask.md): Device-independent modifier flags are masked.

### Deprecated

- [NSAlphaShiftKeyMask](../nsalphashiftkeymask.md): Deprecated. The Caps Lock key has been pressed.
- [NSShiftKeyMask](../nsshiftkeymask.md): Deprecated. The Shift key has been pressed.
- [NSControlKeyMask](../nscontrolkeymask.md): Deprecated. The Control key has been pressed.
- [NSAlternateKeyMask](../nsalternatekeymask.md): Deprecated. The Option or Alt key has been pressed.
- [NSCommandKeyMask](../nscommandkeymask.md): Deprecated. The Command key has been pressed.
- [NSNumericPadKeyMask](../nsnumericpadkeymask.md): Deprecated. A key in the numeric keypad or an arrow key has been pressed.
- [NSHelpKeyMask](../nshelpkeymask.md): Deprecated. The Help key has been pressed.
- [NSFunctionKeyMask](../nsfunctionkeymask.md): Deprecated. A function key has been pressed.
- [NSDeviceIndependentModifierFlagsMask](../nsdeviceindependentmodifierflagsmask.md): Deprecated. Device-independent modifier flags are masked.

## See Also

### Constants

- [NSEventMask](eventtypemask.md): Constants that you use to filter out specific event types from the stream of incoming events.
- [NSEventButtonMask](buttonmask-swift.struct.md): Constants you use to identify the activated tablet buttons in an event.
- [NSEventPhase](phase-swift.struct.md): Constants that represent the possible phases during an event phase.
- [NSEventSwipeTrackingOptions](swipetrackingoptions.md): Constants that specify swipe-tracking options.
- [NSEventMaskFromType](eventtypemask/init%28type_%29.md): Returns the event mask for the specified type.
