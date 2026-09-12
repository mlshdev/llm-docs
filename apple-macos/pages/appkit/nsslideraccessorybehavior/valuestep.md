> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslideraccessorybehavior/valuestep](https://developer.apple.com/documentation/appkit/nsslideraccessorybehavior/valuestep)

# valueStep (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12+

The value of the slider moves towards the associated value for the accessory with by a delta of the slider’s `altIncrementValue`.

## Declaration

```swift
@NSCopying class var valueStep: NSSliderAccessoryBehavior { get }
```

## See Also

### Type Properties

- [automatic](automatic.md): The behavior is automatically picked to be the system standard, given the slider’s current context.
- [valueReset](valuereset.md): The value of the slider is reset to the associated value for the accessory.

# valueStepBehavior (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12+

The value of the slider moves towards the associated value for the accessory with by a delta of the slider’s `altIncrementValue`.

## Declaration

```objectivec
@property (class, copy, readonly) NSSliderAccessoryBehavior * valueStepBehavior;
```

## See Also

### Type Properties

- [automaticBehavior](automatic.md): The behavior is automatically picked to be the system standard, given the slider’s current context.
- [valueResetBehavior](valuereset.md): The value of the slider is reset to the associated value for the accessory.
