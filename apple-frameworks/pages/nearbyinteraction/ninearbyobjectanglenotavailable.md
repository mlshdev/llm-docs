> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/ninearbyobjectanglenotavailable](https://developer.apple.com/documentation/nearbyinteraction/ninearbyobjectanglenotavailable)

# NINearbyObjectAngleNotAvailable

**Interface language:** Objective-C

**Framework:** Nearby Interaction  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

A value that indicates that a nearby object’s horizontal angle is unavailable.

## Declaration

```objectivec
extern float NINearbyObjectAngleNotAvailable;
```

<a id="Discussion"></a>

## Discussion

The framework sets [horizontalAngle](ninearbyobject/horizontalangle-9ibky.md) to the value of this property when it’s unable to acquire the nearby object’s horizontal angle at any given time.

## See Also

### Acquiring relative direction

- [direction](ninearbyobject/direction-5xcld.md): A vector that points from the user’s device in the direction of the peer device.
- [NINearbyObjectDirectionNotAvailable](ninearbyobjectdirectionnotavailable.md): A value that indicates that a nearby object’s direction is unavailable.
- [horizontalAngle](ninearbyobject/horizontalangle-9ibky.md): An angle in radians that indicates the azimuthal direction to the nearby object.
- [verticalDirectionEstimate](ninearbyobject/verticaldirectionestimate-swift.property.md): The estimation of a nearby object’s vertical position as it relates to the user’s device.
- [NINearbyObjectVerticalDirectionEstimate](ninearbyobject/verticaldirectionestimate-swift.enum.md): Estimations of a nearby object’s vertical position in relation to the user’s device.
