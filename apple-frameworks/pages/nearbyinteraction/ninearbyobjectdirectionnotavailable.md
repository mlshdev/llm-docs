> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/ninearbyobjectdirectionnotavailable](https://developer.apple.com/documentation/nearbyinteraction/ninearbyobjectdirectionnotavailable)

# NINearbyObjectDirectionNotAvailable

**Interface language:** Objective-C

**Framework:** Nearby Interaction  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

A value that indicates that a nearby object’s direction is unavailable.

## Declaration

```objectivec
extern simd_float3 NINearbyObjectDirectionNotAvailable;
```

## Mentioned In

- [Initiating and maintaining a session](initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

The framework sets [direction](ninearbyobject/direction-5xcld.md) to the value of this property when it’s unable to acquire the nearby object’s direction at any given time.

To increase the direction availability, enable [cameraAssistanceEnabled](ninearbypeerconfiguration/iscameraassistanceenabled.md).

## See Also

### Acquiring relative direction

- [direction](ninearbyobject/direction-5xcld.md): A vector that points from the user’s device in the direction of the peer device.
- [horizontalAngle](ninearbyobject/horizontalangle-9ibky.md): An angle in radians that indicates the azimuthal direction to the nearby object.
- [NINearbyObjectAngleNotAvailable](ninearbyobjectanglenotavailable.md): A value that indicates that a nearby object’s horizontal angle is unavailable.
- [verticalDirectionEstimate](ninearbyobject/verticaldirectionestimate-swift.property.md): The estimation of a nearby object’s vertical position as it relates to the user’s device.
- [NINearbyObjectVerticalDirectionEstimate](ninearbyobject/verticaldirectionestimate-swift.enum.md): Estimations of a nearby object’s vertical position in relation to the user’s device.
