> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticevent/eventparameters](https://developer.apple.com/documentation/corehaptics/chhapticevent/eventparameters)

# eventParameters (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

An array of event parameters, possibly empty.

## Declaration

```swift
var eventParameters: [CHHapticEventParameter] { get }
```

## See Also

### Configuring Haptic Events

- [CHHapticEvent.ParameterID](parameterid.md): An identifier for an event parameter.
- [relativeTime](relativetime.md): The start time of the event, relative to other events in the same pattern.
- [duration](duration.md): The duration of the haptic event.

# eventParameters (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

An array of event parameters, possibly empty.

## Declaration

```objectivec
@property (readonly) NSArray<CHHapticEventParameter *> * eventParameters;
```

## See Also

### Configuring Haptic Events

- [CHHapticEventParameterID](parameterid.md): An identifier for an event parameter.
- [relativeTime](relativetime.md): The start time of the event, relative to other events in the same pattern.
- [duration](duration.md): The duration of the haptic event.
