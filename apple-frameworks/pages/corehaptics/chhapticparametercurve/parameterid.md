> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticparametercurve/parameterid](https://developer.apple.com/documentation/corehaptics/chhapticparametercurve/parameterid)

# parameterID (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

The parameter ID defining the type of parameter that the curve represents.

## Declaration

```swift
var parameterID: CHHapticDynamicParameter.ID { get }
```

## See Also

### Describing the Curve

- [controlPoints](controlpoints.md): An array containing the curve’s control points.
- [relativeTime](relativetime.md): The time at which this parameter curve is applied, relative to the start time of the pattern.

# parameterID (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

The parameter ID defining the type of parameter that the curve represents.

## Declaration

```objectivec
@property (readonly) CHHapticDynamicParameterID parameterID;
```

## See Also

### Describing the Curve

- [controlPoints](controlpoints.md): An array containing the curve’s control points.
- [relativeTime](relativetime.md): The time at which this parameter curve is applied, relative to the start time of the pattern.
