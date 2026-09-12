> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticevent/duration](https://developer.apple.com/documentation/corehaptics/chhapticevent/duration)

# duration (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The duration of the haptic event.

## Declaration

```swift
var duration: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

The maximum duration of a continuous haptic event is 30 seconds.

## See Also

### Configuring Haptic Events

- [eventParameters](eventparameters.md): An array of event parameters, possibly empty.
- [CHHapticEvent.ParameterID](parameterid.md): An identifier for an event parameter.
- [relativeTime](relativetime.md): The start time of the event, relative to other events in the same pattern.

# duration (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The duration of the haptic event.

## Declaration

```objectivec
@property (readwrite) NSTimeInterval duration;
```

<a id="Discussion"></a>

## Discussion

The maximum duration of a continuous haptic event is 30 seconds.

## See Also

### Configuring Haptic Events

- [eventParameters](eventparameters.md): An array of event parameters, possibly empty.
- [CHHapticEventParameterID](parameterid.md): An identifier for an event parameter.
- [relativeTime](relativetime.md): The start time of the event, relative to other events in the same pattern.
