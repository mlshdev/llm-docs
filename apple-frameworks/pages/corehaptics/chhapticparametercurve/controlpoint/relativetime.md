> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticparametercurve/controlpoint/relativetime](https://developer.apple.com/documentation/corehaptics/chhapticparametercurve/controlpoint/relativetime)

# relativeTime (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The time at which the associated parameter reaches this value, relative to the start time of the parameter curve.

## Declaration

```swift
var relativeTime: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

Think of the time as the control point’s x-coordinate.

## See Also

### Specifying Control Point Coordinates

- [value](value.md): The parameter value of the point.

# relativeTime (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The time at which the associated parameter reaches this value, relative to the start time of the parameter curve.

## Declaration

```objectivec
@property (readwrite) NSTimeInterval relativeTime;
```

<a id="Discussion"></a>

## Discussion

Think of the time as the control point’s x-coordinate.

## See Also

### Specifying Control Point Coordinates

- [value](value.md): The parameter value of the point.
