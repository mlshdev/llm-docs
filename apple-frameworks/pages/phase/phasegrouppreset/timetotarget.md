> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasegrouppreset/timetotarget](https://developer.apple.com/documentation/phase/phasegrouppreset/timetotarget)

# timeToTarget (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A duration in which the engine fades the settings from their original value to their new value.

## Declaration

```swift
var timeToTarget: Double { get }
```

<a id="Discussion"></a>

## Discussion

This property determines the speed of activation when the app calls [activate()](activate%28%29.md). The framework scales the value by [unitsPerSecond](../phaseengine/unitspersecond.md).

## See Also

### Fading Between Settings

- [timeToReset](timetoreset.md): A duration in which the framework restores the group’s original state.

# timeToTarget (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A duration in which the engine fades the settings from their original value to their new value.

## Declaration

```objectivec
@property (nonatomic, readonly) double timeToTarget;
```

<a id="Discussion"></a>

## Discussion

This property determines the speed of activation when the app calls [activate](activate%28%29.md). The framework scales the value by [unitsPerSecond](../phaseengine/unitspersecond.md).

## See Also

### Fading Between Settings

- [timeToReset](timetoreset.md): A duration in which the framework restores the group’s original state.
