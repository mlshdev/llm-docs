> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticparametercurve/controlpoint](https://developer.apple.com/documentation/corehaptics/chhapticparametercurve/controlpoint)

# CHHapticParameterCurve.ControlPoint (Swift)

**Framework:** Core Haptics  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A single control point in a parameter curve.

## Declaration

```swift
class ControlPoint
```

## Topics

### Creating a Control Point

- [init(relativeTime:value:)](controlpoint/init%28relativetime_value_%29.md): Creates a control point from its time and value.

### Specifying Control Point Coordinates

- [relativeTime](controlpoint/relativetime.md): The time at which the associated parameter reaches this value, relative to the start time of the parameter curve.
- [value](controlpoint/value.md): The parameter value of the point.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Creating a Curve

- [init(parameterID:controlPoints:relativeTime:)](init%28parameterid_controlpoints_relativetime_%29.md): Creates a parameter curve from its parameter ID, control points, and start time.

# CHHapticParameterCurveControlPoint (Objective-C)

**Framework:** Core Haptics  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A single control point in a parameter curve.

## Declaration

```objectivec
@interface CHHapticParameterCurveControlPoint : NSObject
```

## Topics

### Creating a Control Point

- [initWithRelativeTime:value:](controlpoint/init%28relativetime_value_%29.md): Creates a control point from its time and value.

### Specifying Control Point Coordinates

- [relativeTime](controlpoint/relativetime.md): The time at which the associated parameter reaches this value, relative to the start time of the parameter curve.
- [value](controlpoint/value.md): The parameter value of the point.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Creating a Curve

- [initWithParameterID:controlPoints:relativeTime:](init%28parameterid_controlpoints_relativetime_%29.md): Creates a parameter curve from its parameter ID, control points, and start time.
