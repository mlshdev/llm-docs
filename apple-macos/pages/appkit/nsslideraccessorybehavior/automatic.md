> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslideraccessorybehavior/automatic](https://developer.apple.com/documentation/appkit/nsslideraccessorybehavior/automatic)

# automatic (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12+

The behavior is automatically picked to be the system standard, given the slider’s current context.

## Declaration

```swift
@NSCopying class var automatic: NSSliderAccessoryBehavior { get }
```

<a id="discussion"></a>

## Discussion

For example, NSTouchBarItems have `.valueStep` behavior.

## See Also

### Type Properties

- [valueReset](valuereset.md): The value of the slider is reset to the associated value for the accessory.
- [valueStep](valuestep.md): The value of the slider moves towards the associated value for the accessory with by a delta of the slider’s `altIncrementValue`.

# automaticBehavior (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12+

The behavior is automatically picked to be the system standard, given the slider’s current context.

## Declaration

```objectivec
@property (class, copy, readonly) NSSliderAccessoryBehavior * automaticBehavior;
```

<a id="discussion"></a>

## Discussion

For example, NSTouchBarItems have `.valueStep` behavior.

## See Also

### Type Properties

- [valueResetBehavior](valuereset.md): The value of the slider is reset to the associated value for the accessory.
- [valueStepBehavior](valuestep.md): The value of the slider moves towards the associated value for the accessory with by a delta of the slider’s `altIncrementValue`.
