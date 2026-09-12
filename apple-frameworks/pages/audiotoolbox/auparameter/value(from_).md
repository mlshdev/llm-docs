> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparameter/value(from:)](https://developer.apple.com/documentation/audiotoolbox/auparameter/value(from:))

# value(from:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Converts a string into a parameter value.

## Declaration

```swift
func value(from string: String) -> AUValue
```

## Parameters

- `string`: The string representation of a parameter value.

<a id="return-value"></a>

## Return Value

The parameter value obtained from the string.

## See Also

### Managing Parameter Values

- [value](value.md): The parameter’s current value.
- [setValue(\_:originator:)](setvalue%28__originator_%29.md): Sets the parameter’s value, avoiding redundant notifications to the originator.
- [setValue(\_:originator:atHostTime:)](setvalue%28__originator_athosttime_%29.md): Sets the parameter’s value, preserving the host time of the gesture that initiated the change.
- [setValue(\_:originator:atHostTime:eventType:)](setvalue%28__originator_athosttime_eventtype_%29.md)
- [string(fromValue:)](string%28fromvalue_%29.md): Gets the string representation of a parameter value.

# valueFromString: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Converts a string into a parameter value.

## Declaration

```objectivec
- (AUValue) valueFromString:(NSString *) string;
```

## Parameters

- `string`: The string representation of a parameter value.

<a id="return-value"></a>

## Return Value

The parameter value obtained from the string.

## See Also

### Managing Parameter Values

- [value](value.md): The parameter’s current value.
- [setValue:originator:](setvalue%28__originator_%29.md): Sets the parameter’s value, avoiding redundant notifications to the originator.
- [setValue:originator:atHostTime:](setvalue%28__originator_athosttime_%29.md): Sets the parameter’s value, preserving the host time of the gesture that initiated the change.
- [setValue:originator:atHostTime:eventType:](setvalue%28__originator_athosttime_eventtype_%29.md)
- [stringFromValue:](string%28fromvalue_%29.md): Gets the string representation of a parameter value.
