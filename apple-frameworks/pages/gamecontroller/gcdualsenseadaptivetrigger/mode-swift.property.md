> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdualsenseadaptivetrigger/mode-swift.property](https://developer.apple.com/documentation/gamecontroller/gcdualsenseadaptivetrigger/mode-swift.property)

# mode (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+

The current configuration of the adaptive trigger.

## Declaration

```swift
var mode: GCDualSenseAdaptiveTrigger.Mode { get }
```

<a id="Discussion"></a>

## Discussion

There may be a delay updating this property value after you set the mode using one of the set mode methods because setting the mode requires a response from the controller.

## See Also

### Getting the mode

- [GCDualSenseAdaptiveTrigger.Mode](mode-swift.enum.md): The possible modes of an adaptive trigger.
- [setModeOff()](setmodeoff%28%29.md): Sets the mode to off and stops any trigger effect.

# mode (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+

The current configuration of the adaptive trigger.

## Declaration

```objectivec
@property (nonatomic, readonly) GCDualSenseAdaptiveTriggerMode mode;
```

<a id="Discussion"></a>

## Discussion

There may be a delay updating this property value after you set the mode using one of the set mode methods because setting the mode requires a response from the controller.

## See Also

### Getting the mode

- [GCDualSenseAdaptiveTriggerMode](mode-swift.enum.md): The possible modes of an adaptive trigger.
- [setModeOff](setmodeoff%28%29.md): Sets the mode to off and stops any trigger effect.
