> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasegrouppreset/timetoreset](https://developer.apple.com/documentation/phase/phasegrouppreset/timetoreset)

# timeToReset (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A duration in which the framework restores the group’s original state.

## Declaration

```swift
var timeToReset: Double { get }
```

<a id="Discussion"></a>

## Discussion

This property determines the speed of deactivation when the app calls [deactivate()](deactivate%28%29.md). The framework scales the value by [unitsPerSecond](../phaseengine/unitspersecond.md).

## See Also

### Fading Between Settings

- [timeToTarget](timetotarget.md): A duration in which the engine fades the settings from their original value to their new value.

# timeToReset (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A duration in which the framework restores the group’s original state.

## Declaration

```objectivec
@property (nonatomic, readonly) double timeToReset;
```

<a id="Discussion"></a>

## Discussion

This property determines the speed of deactivation when the app calls [deactivate](deactivate%28%29.md). The framework scales the value by [unitsPerSecond](../phaseengine/unitspersecond.md).

## See Also

### Fading Between Settings

- [timeToTarget](timetotarget.md): A duration in which the engine fades the settings from their original value to their new value.
