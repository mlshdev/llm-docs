> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticdynamicparameter/relativetime](https://developer.apple.com/documentation/corehaptics/chhapticdynamicparameter/relativetime)

# relativeTime (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The time at which this dynamic parameter is applied, relative to the start time of the pattern.

## Declaration

```swift
var relativeTime: TimeInterval { get set }
```

## See Also

### Specifying a Dynamic Parameter’s Value

- [parameterID](parameterid.md): The dynamic parameter ID defining the type of parameter being modified.
- [value](value.md): The value of the dynamic parameter.

# relativeTime (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The time at which this dynamic parameter is applied, relative to the start time of the pattern.

## Declaration

```objectivec
@property (readwrite) NSTimeInterval relativeTime;
```

## See Also

### Specifying a Dynamic Parameter’s Value

- [parameterID](parameterid.md): The dynamic parameter ID defining the type of parameter being modified.
- [value](value.md): The value of the dynamic parameter.
