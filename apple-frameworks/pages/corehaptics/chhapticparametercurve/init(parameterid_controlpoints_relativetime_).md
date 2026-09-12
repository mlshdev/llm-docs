> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticparametercurve/init(parameterid:controlpoints:relativetime:)](https://developer.apple.com/documentation/corehaptics/chhapticparametercurve/init(parameterid:controlpoints:relativetime:))

# init(parameterID:controlPoints:relativeTime:) (Swift)

**Framework:** Core Haptics  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

Creates a parameter curve from its parameter ID, control points, and start time.

## Declaration

```swift
init(parameterID: CHHapticDynamicParameter.ID, controlPoints: [CHHapticParameterCurve.ControlPoint], relativeTime: TimeInterval)
```

## Parameters

- `parameterID`: The ID indicating the type of the dynamic parameter that the parameter curve is modifying.
- `controlPoints`: An array of control points defining how the parameter curve changes over time.
- `relativeTime`: The time at which to start applying the parameter curve.

## See Also

### Creating a Curve

- [CHHapticParameterCurve.ControlPoint](controlpoint.md): A single control point in a parameter curve.

# initWithParameterID:controlPoints:relativeTime: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

Creates a parameter curve from its parameter ID, control points, and start time.

## Declaration

```objectivec
- (instancetype) initWithParameterID:(CHHapticDynamicParameterID) parameterID controlPoints:(NSArray<CHHapticParameterCurveControlPoint *> *) controlPoints relativeTime:(NSTimeInterval) relativeTime;
```

## Parameters

- `parameterID`: The ID indicating the type of the dynamic parameter that the parameter curve is modifying.
- `controlPoints`: An array of control points defining how the parameter curve changes over time.
- `relativeTime`: The time at which to start applying the parameter curve.

## See Also

### Creating a Curve

- [CHHapticParameterCurveControlPoint](controlpoint.md): A single control point in a parameter curve.
