> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corehaptics/chhapticparametercurve/relativetime

# relativeTime (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

The time at which this parameter curve is applied, relative to the start time of the pattern.

## Declaration

```swift
var relativeTime: TimeInterval { get set }
```

## See Also

### Describing the Curve

- [controlPoints](controlpoints.md): An array containing the curve’s control points.
- [parameterID](parameterid.md): The parameter ID defining the type of parameter that the curve represents.

# relativeTime (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

The time at which this parameter curve is applied, relative to the start time of the pattern.

## Declaration

```objectivec
@property (readwrite) NSTimeInterval relativeTime;
```

## See Also

### Describing the Curve

- [controlPoints](controlpoints.md): An array containing the curve’s control points.
- [parameterID](parameterid.md): The parameter ID defining the type of parameter that the curve represents.
