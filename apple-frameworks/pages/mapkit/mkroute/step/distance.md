> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkroute/step/distance](https://developer.apple.com/documentation/mapkit/mkroute/step/distance)

# distance (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The step distance, in meters.

## Declaration

```swift
var distance: CLLocationDistance { get }
```

<a id="Discussion"></a>

## Discussion

This property reflects the distance that the user covers while traversing the path of the step. It isn’t a lilnear distance between the start and end points of the step.

## See Also

### Getting additional step details

- [instructions](instructions.md): The written instructions for following the path that the step represents.
- [notice](notice.md): Additional notices that apply to the step.
- [transportType](transporttype.md): The transport type of the step.

# distance (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The step distance, in meters.

## Declaration

```objectivec
@property (nonatomic, readonly) CLLocationDistance distance;
```

<a id="Discussion"></a>

## Discussion

This property reflects the distance that the user covers while traversing the path of the step. It isn’t a lilnear distance between the start and end points of the step.

## See Also

### Getting additional step details

- [instructions](instructions.md): The written instructions for following the path that the step represents.
- [notice](notice.md): Additional notices that apply to the step.
- [transportType](transporttype.md): The transport type of the step.
