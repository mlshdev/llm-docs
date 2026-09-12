> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparameter/setvalue(_:originator:)](https://developer.apple.com/documentation/audiotoolbox/auparameter/setvalue(_:originator:))

# setValue(\_:originator:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets the parameter’s value, avoiding redundant notifications to the originator.

## Declaration

```swift
func setValue(_ value: AUValue, originator: AUParameterObserverToken?)
```

## Parameters

- `value`: The parameter’s new value.
- `originator`: The originator of the change in value. This token allows for observer management to avoid notification callback loops.

## See Also

### Managing Parameter Values

- [value](value.md): The parameter’s current value.
- [setValue(\_:originator:atHostTime:)](setvalue%28__originator_athosttime_%29.md): Sets the parameter’s value, preserving the host time of the gesture that initiated the change.
- [setValue(\_:originator:atHostTime:eventType:)](setvalue%28__originator_athosttime_eventtype_%29.md)
- [string(fromValue:)](string%28fromvalue_%29.md): Gets the string representation of a parameter value.
- [value(from:)](value%28from_%29.md): Converts a string into a parameter value.

# setValue:originator: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets the parameter’s value, avoiding redundant notifications to the originator.

## Declaration

```objectivec
- (void) setValue:(AUValue) value originator:(AUParameterObserverToken) originator;
```

## Parameters

- `value`: The parameter’s new value.
- `originator`: The originator of the change in value. This token allows for observer management to avoid notification callback loops.

## See Also

### Managing Parameter Values

- [value](value.md): The parameter’s current value.
- [setValue:originator:atHostTime:](setvalue%28__originator_athosttime_%29.md): Sets the parameter’s value, preserving the host time of the gesture that initiated the change.
- [setValue:originator:atHostTime:eventType:](setvalue%28__originator_athosttime_eventtype_%29.md)
- [stringFromValue:](string%28fromvalue_%29.md): Gets the string representation of a parameter value.
- [valueFromString:](value%28from_%29.md): Converts a string into a parameter value.
