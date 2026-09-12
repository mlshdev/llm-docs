> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparameter/setvalue(_:originator:athosttime:eventtype:)](https://developer.apple.com/documentation/audiotoolbox/auparameter/setvalue(_:originator:athosttime:eventtype:))

# setValue(\_:originator:atHostTime:eventType:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

## Declaration

```swift
func setValue(_ value: AUValue, originator: AUParameterObserverToken?, atHostTime hostTime: UInt64, eventType: AUParameterAutomationEventType)
```

## See Also

### Managing Parameter Values

- [value](value.md): The parameter’s current value.
- [setValue(\_:originator:)](setvalue%28__originator_%29.md): Sets the parameter’s value, avoiding redundant notifications to the originator.
- [setValue(\_:originator:atHostTime:)](setvalue%28__originator_athosttime_%29.md): Sets the parameter’s value, preserving the host time of the gesture that initiated the change.
- [string(fromValue:)](string%28fromvalue_%29.md): Gets the string representation of a parameter value.
- [value(from:)](value%28from_%29.md): Converts a string into a parameter value.

# setValue:originator:atHostTime:eventType: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) setValue:(AUValue) value originator:(AUParameterObserverToken) originator atHostTime:(uint64_t) hostTime eventType:(AUParameterAutomationEventType) eventType;
```

## See Also

### Managing Parameter Values

- [value](value.md): The parameter’s current value.
- [setValue:originator:](setvalue%28__originator_%29.md): Sets the parameter’s value, avoiding redundant notifications to the originator.
- [setValue:originator:atHostTime:](setvalue%28__originator_athosttime_%29.md): Sets the parameter’s value, preserving the host time of the gesture that initiated the change.
- [stringFromValue:](string%28fromvalue_%29.md): Gets the string representation of a parameter value.
- [valueFromString:](value%28from_%29.md): Converts a string into a parameter value.
