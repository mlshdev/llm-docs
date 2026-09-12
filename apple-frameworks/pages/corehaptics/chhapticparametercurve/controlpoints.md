> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticparametercurve/controlpoints](https://developer.apple.com/documentation/corehaptics/chhapticparametercurve/controlpoints)

# controlPoints (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

An array containing the curve’s control points.

## Declaration

```swift
var controlPoints: [CHHapticParameterCurve.ControlPoint] { get }
```

## See Also

### Describing the Curve

- [parameterID](parameterid.md): The parameter ID defining the type of parameter that the curve represents.
- [relativeTime](relativetime.md): The time at which this parameter curve is applied, relative to the start time of the pattern.

# controlPoints (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

An array containing the curve’s control points.

## Declaration

```objectivec
@property (readonly) NSArray<CHHapticParameterCurveControlPoint *> * controlPoints;
```

## See Also

### Describing the Curve

- [parameterID](parameterid.md): The parameter ID defining the type of parameter that the curve represents.
- [relativeTime](relativetime.md): The time at which this parameter curve is applied, relative to the start time of the pattern.
