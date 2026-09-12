> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticdynamicparameter/value](https://developer.apple.com/documentation/corehaptics/chhapticdynamicparameter/value)

# value (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The value of the dynamic parameter.

## Declaration

```swift
var value: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The range of possible values varies between different parameters. For example, the dynamic parameter for haptic intensity ranges from 0 and 1, indicating a multiplicative envelope, whereas the dynamic parameter for haptic sharpness varies between -1 and 1, indicating that the parameter can additively increase or decrease the sharpness.

## See Also

### Specifying a Dynamic Parameter’s Value

- [parameterID](parameterid.md): The dynamic parameter ID defining the type of parameter being modified.
- [relativeTime](relativetime.md): The time at which this dynamic parameter is applied, relative to the start time of the pattern.

# value (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The value of the dynamic parameter.

## Declaration

```objectivec
@property (readwrite) float value;
```

<a id="Discussion"></a>

## Discussion

The range of possible values varies between different parameters. For example, the dynamic parameter for haptic intensity ranges from 0 and 1, indicating a multiplicative envelope, whereas the dynamic parameter for haptic sharpness varies between -1 and 1, indicating that the parameter can additively increase or decrease the sharpness.

## See Also

### Specifying a Dynamic Parameter’s Value

- [parameterID](parameterid.md): The dynamic parameter ID defining the type of parameter being modified.
- [relativeTime](relativetime.md): The time at which this dynamic parameter is applied, relative to the start time of the pattern.
