> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslideraccessorybehavior/valuereset](https://developer.apple.com/documentation/appkit/nsslideraccessorybehavior/valuereset)

# valueReset (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12+

The value of the slider is reset to the associated value for the accessory.

## Declaration

```swift
@NSCopying class var valueReset: NSSliderAccessoryBehavior { get }
```

## See Also

### Type Properties

- [automatic](automatic.md): The behavior is automatically picked to be the system standard, given the slider’s current context.
- [valueStep](valuestep.md): The value of the slider moves towards the associated value for the accessory with by a delta of the slider’s `altIncrementValue`.

# valueResetBehavior (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12+

The value of the slider is reset to the associated value for the accessory.

## Declaration

```objectivec
@property (class, copy, readonly) NSSliderAccessoryBehavior * valueResetBehavior;
```

## See Also

### Type Properties

- [automaticBehavior](automatic.md): The behavior is automatically picked to be the system standard, given the slider’s current context.
- [valueStepBehavior](valuestep.md): The value of the slider moves towards the associated value for the accessory with by a delta of the slider’s `altIncrementValue`.
