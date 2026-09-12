> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparameter/setvalue(_:originator:athosttime:)](https://developer.apple.com/documentation/audiotoolbox/auparameter/setvalue(_:originator:athosttime:))

# setValue(\_:originator:atHostTime:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets the parameter’s value, preserving the host time of the gesture that initiated the change.

## Declaration

```swift
func setValue(_ value: AUValue, originator: AUParameterObserverToken?, atHostTime hostTime: UInt64)
```

## Parameters

- `value`: The parameter’s new value.
- `originator`: The originator of the change in value. This token allows for observer management to avoid notification callback loops.
- `hostTime`: The time at which to schedule the change in value. This parameter allows for synchronization with other events.

## See Also

### Managing Parameter Values

- [value](value.md): The parameter’s current value.
- [setValue(\_:originator:)](setvalue%28__originator_%29.md): Sets the parameter’s value, avoiding redundant notifications to the originator.
- [setValue(\_:originator:atHostTime:eventType:)](setvalue%28__originator_athosttime_eventtype_%29.md)
- [string(fromValue:)](string%28fromvalue_%29.md): Gets the string representation of a parameter value.
- [value(from:)](value%28from_%29.md): Converts a string into a parameter value.

# setValue:originator:atHostTime: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets the parameter’s value, preserving the host time of the gesture that initiated the change.

## Declaration

```objectivec
- (void) setValue:(AUValue) value originator:(AUParameterObserverToken) originator atHostTime:(uint64_t) hostTime;
```

## Parameters

- `value`: The parameter’s new value.
- `originator`: The originator of the change in value. This token allows for observer management to avoid notification callback loops.
- `hostTime`: The time at which to schedule the change in value. This parameter allows for synchronization with other events.

## See Also

### Managing Parameter Values

- [value](value.md): The parameter’s current value.
- [setValue:originator:](setvalue%28__originator_%29.md): Sets the parameter’s value, avoiding redundant notifications to the originator.
- [setValue:originator:atHostTime:eventType:](setvalue%28__originator_athosttime_eventtype_%29.md)
- [stringFromValue:](string%28fromvalue_%29.md): Gets the string representation of a parameter value.
- [valueFromString:](value%28from_%29.md): Converts a string into a parameter value.
