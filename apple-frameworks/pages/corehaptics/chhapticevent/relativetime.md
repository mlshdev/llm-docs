> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticevent/relativetime](https://developer.apple.com/documentation/corehaptics/chhapticevent/relativetime)

# relativeTime (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The start time of the event, relative to other events in the same pattern.

## Declaration

```swift
var relativeTime: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

A [relativeTime](../chhapticparametercurve/relativetime.md) of zero indicates immediate playback. Another haptic event starting one second later would have a [relativeTime](relativetime.md) of `1`.

## See Also

### Configuring Haptic Events

- [eventParameters](eventparameters.md): An array of event parameters, possibly empty.
- [CHHapticEvent.ParameterID](parameterid.md): An identifier for an event parameter.
- [duration](duration.md): The duration of the haptic event.

# relativeTime (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The start time of the event, relative to other events in the same pattern.

## Declaration

```objectivec
@property (readwrite) NSTimeInterval relativeTime;
```

<a id="Discussion"></a>

## Discussion

A [relativeTime](../chhapticparametercurve/relativetime.md) of zero indicates immediate playback. Another haptic event starting one second later would have a [relativeTime](relativetime.md) of `1`.

## See Also

### Configuring Haptic Events

- [eventParameters](eventparameters.md): An array of event parameters, possibly empty.
- [CHHapticEventParameterID](parameterid.md): An identifier for an event parameter.
- [duration](duration.md): The duration of the haptic event.
