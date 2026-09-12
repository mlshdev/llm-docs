> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticeventparameter/value](https://developer.apple.com/documentation/corehaptics/chhapticeventparameter/value)

# value (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The value of the parameter.

## Declaration

```swift
var value: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The range of possible values varies between different parameters. For example, haptic intensity and haptic sharpness vary between `0` and `1`, with `0` indicating minimal intensity or sharpness, and `1` indicating the maximum intensity or sharpness value allowed. See the individual parameter pages for the ranges and default values of each parameter.

## See Also

### Specifying an Event Parameter’s Value

- [parameterID](parameterid.md): The haptic parameter ID indicating what type of parameter the current event represents.

# value (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The value of the parameter.

## Declaration

```objectivec
@property (readwrite) float value;
```

<a id="Discussion"></a>

## Discussion

The range of possible values varies between different parameters. For example, haptic intensity and haptic sharpness vary between `0` and `1`, with `0` indicating minimal intensity or sharpness, and `1` indicating the maximum intensity or sharpness value allowed. See the individual parameter pages for the ranges and default values of each parameter.

## See Also

### Specifying an Event Parameter’s Value

- [parameterID](parameterid.md): The haptic parameter ID indicating what type of parameter the current event represents.
