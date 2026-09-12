> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticparametercurve/controlpoint/value](https://developer.apple.com/documentation/corehaptics/chhapticparametercurve/controlpoint/value)

# value (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The parameter value of the point.

## Declaration

```swift
var value: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Think of the value as the control point’s y-coordinate.

> **Note**

>  The range of possible values varies between different parameters.

## See Also

### Specifying Control Point Coordinates

- [relativeTime](relativetime.md): The time at which the associated parameter reaches this value, relative to the start time of the parameter curve.

# value (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The parameter value of the point.

## Declaration

```objectivec
@property (readwrite) float value;
```

<a id="Discussion"></a>

## Discussion

Think of the value as the control point’s y-coordinate.

> **Note**

>  The range of possible values varies between different parameters.

## See Also

### Specifying Control Point Coordinates

- [relativeTime](relativetime.md): The time at which the associated parameter reaches this value, relative to the start time of the parameter curve.
