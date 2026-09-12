> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/ninearbypeerconfiguration/iscameraassistanceenabled](https://developer.apple.com/documentation/nearbyinteraction/ninearbypeerconfiguration/iscameraassistanceenabled)

# isCameraAssistanceEnabled (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

A Boolean value that combines the spatial awareness of ARKit with Nearby Interaction to improve the accuracy of a nearby object’s position.

## Declaration

```swift
var isCameraAssistanceEnabled: Bool { get set }
```

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

The default value is `false`.

When `true`, this property leverages [ARKit](../../arkit.md) to provide a nearby object’s [distance](../ninearbyobject/distance-9atp7.md) and [direction](../ninearbyobject/direction-4qh5w.md) in a wider range of environmental conditions.

By studying image captures from the device’s camera, ARKit creates an accurate world model of the user’s physical space. As the user moves, ARKit tracks the device with 6 degrees of freedom, by noting the device’s:

- 3D position `(x, y, z)`
- 3D orientation `(roll, pitch, yaw)`

Nearby Interaction adds readings from the device’s Ultra Wideband Chip to attain a robust position for a nearby object. This also enables the interaction session to provide an object’s [horizontalAngle](../ninearbyobject/horizontalangle-hsg.md) and [verticalDirectionEstimate](../ninearbyobject/verticaldirectionestimate-swift.property.md).

# cameraAssistanceEnabled (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

A Boolean value that combines the spatial awareness of ARKit with Nearby Interaction to improve the accuracy of a nearby object’s position.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isCameraAssistanceEnabled) BOOL cameraAssistanceEnabled;
```

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

The default value is `false`.

When `true`, this property leverages [ARKit](../../arkit.md) to provide a nearby object’s [distance](../ninearbyobject/distance-9atp7.md) and [direction](../ninearbyobject/direction-4qh5w.md) in a wider range of environmental conditions.

By studying image captures from the device’s camera, ARKit creates an accurate world model of the user’s physical space. As the user moves, ARKit tracks the device with 6 degrees of freedom, by noting the device’s:

- 3D position `(x, y, z)`
- 3D orientation `(roll, pitch, yaw)`

Nearby Interaction adds readings from the device’s Ultra Wideband Chip to attain a robust position for a nearby object. This also enables the interaction session to provide an object’s [horizontalAngle](../ninearbyobject/horizontalangle-hsg.md) and [verticalDirectionEstimate](../ninearbyobject/verticaldirectionestimate-swift.property.md).
