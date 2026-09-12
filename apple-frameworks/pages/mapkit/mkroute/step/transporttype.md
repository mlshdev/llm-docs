> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkroute/step/transporttype](https://developer.apple.com/documentation/mapkit/mkroute/step/transporttype)

# transportType (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The transport type of the step.

## Declaration

```swift
var transportType: MKDirectionsTransportType { get }
```

<a id="Discussion"></a>

## Discussion

This property reflects the transport type employed by the step and may differ from the transport type of the overall route.

## See Also

### Getting additional step details

- [instructions](instructions.md): The written instructions for following the path that the step represents.
- [notice](notice.md): Additional notices that apply to the step.
- [distance](distance.md): The step distance, in meters.

# transportType (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The transport type of the step.

## Declaration

```objectivec
@property (nonatomic, readonly) MKDirectionsTransportType transportType;
```

<a id="Discussion"></a>

## Discussion

This property reflects the transport type employed by the step and may differ from the transport type of the overall route.

## See Also

### Getting additional step details

- [instructions](instructions.md): The written instructions for following the path that the step represents.
- [notice](notice.md): Additional notices that apply to the step.
- [distance](distance.md): The step distance, in meters.
