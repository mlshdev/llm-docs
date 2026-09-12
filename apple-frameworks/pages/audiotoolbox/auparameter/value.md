> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparameter/value](https://developer.apple.com/documentation/audiotoolbox/auparameter/value)

# value (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The parameter’s current value.

## Declaration

```swift
var value: AUValue { get set }
```

## See Also

### Managing Parameter Values

- [setValue(\_:originator:)](setvalue%28__originator_%29.md): Sets the parameter’s value, avoiding redundant notifications to the originator.
- [setValue(\_:originator:atHostTime:)](setvalue%28__originator_athosttime_%29.md): Sets the parameter’s value, preserving the host time of the gesture that initiated the change.
- [setValue(\_:originator:atHostTime:eventType:)](setvalue%28__originator_athosttime_eventtype_%29.md)
- [string(fromValue:)](string%28fromvalue_%29.md): Gets the string representation of a parameter value.
- [value(from:)](value%28from_%29.md): Converts a string into a parameter value.

# value (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The parameter’s current value.

## Declaration

```objectivec
@property (nonatomic) AUValue value;
```

```objectivec
@property (atomic) AUValue value;
```

## See Also

### Managing Parameter Values

- [setValue:originator:](setvalue%28__originator_%29.md): Sets the parameter’s value, avoiding redundant notifications to the originator.
- [setValue:originator:atHostTime:](setvalue%28__originator_athosttime_%29.md): Sets the parameter’s value, preserving the host time of the gesture that initiated the change.
- [setValue:originator:atHostTime:eventType:](setvalue%28__originator_athosttime_eventtype_%29.md)
- [stringFromValue:](string%28fromvalue_%29.md): Gets the string representation of a parameter value.
- [valueFromString:](value%28from_%29.md): Converts a string into a parameter value.
