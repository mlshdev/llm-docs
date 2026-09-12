> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparameter/string(fromvalue:)](https://developer.apple.com/documentation/audiotoolbox/auparameter/string(fromvalue:))

# string(fromValue:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Gets the string representation of a parameter value.

## Declaration

```swift
func string(fromValue value: UnsafePointer<AUValue>?) -> String
```

## Parameters

- `value`: The parameter value to represent as a string.

<a id="return-value"></a>

## Return Value

The string representation of a parameter value.

<a id="Discussion"></a>

## Discussion

Pass `nil` into the `value` parameter to use the current value.

## See Also

### Managing Parameter Values

- [value](value.md): The parameter’s current value.
- [setValue(\_:originator:)](setvalue%28__originator_%29.md): Sets the parameter’s value, avoiding redundant notifications to the originator.
- [setValue(\_:originator:atHostTime:)](setvalue%28__originator_athosttime_%29.md): Sets the parameter’s value, preserving the host time of the gesture that initiated the change.
- [setValue(\_:originator:atHostTime:eventType:)](setvalue%28__originator_athosttime_eventtype_%29.md)
- [value(from:)](value%28from_%29.md): Converts a string into a parameter value.

# stringFromValue: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Gets the string representation of a parameter value.

## Declaration

```objectivec
- (NSString *) stringFromValue:(const AUValue *) value;
```

## Parameters

- `value`: The parameter value to represent as a string.

<a id="return-value"></a>

## Return Value

The string representation of a parameter value.

<a id="Discussion"></a>

## Discussion

Pass `nil` into the `value` parameter to use the current value.

## See Also

### Managing Parameter Values

- [value](value.md): The parameter’s current value.
- [setValue:originator:](setvalue%28__originator_%29.md): Sets the parameter’s value, avoiding redundant notifications to the originator.
- [setValue:originator:atHostTime:](setvalue%28__originator_athosttime_%29.md): Sets the parameter’s value, preserving the host time of the gesture that initiated the change.
- [setValue:originator:atHostTime:eventType:](setvalue%28__originator_athosttime_eventtype_%29.md)
- [valueFromString:](value%28from_%29.md): Converts a string into a parameter value.
