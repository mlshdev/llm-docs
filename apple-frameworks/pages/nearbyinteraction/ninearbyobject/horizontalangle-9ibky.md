> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/ninearbyobject/horizontalangle-9ibky](https://developer.apple.com/documentation/nearbyinteraction/ninearbyobject/horizontalangle-9ibky)

# horizontalAngle

**Interface language:** Objective-C

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

An angle in radians that indicates the azimuthal direction to the nearby object.

## Declaration

```objectivec
@property (nonatomic, readonly) float horizontalAngle;
```

<a id="Discussion"></a>

## Discussion

The framework sets a value of this property when [cameraAssistanceEnabled](../ninearbypeerconfiguration/iscameraassistanceenabled.md) is `true`.

The value of this property is [NINearbyObjectAngleNotAvailable](../ninearbyobjectanglenotavailable.md) when direction is unavailable, such as when the app runs on Apple Watch.

## See Also

### Acquiring relative direction

- [direction](direction-5xcld.md): A vector that points from the user’s device in the direction of the peer device.
- [NINearbyObjectDirectionNotAvailable](../ninearbyobjectdirectionnotavailable.md): A value that indicates that a nearby object’s direction is unavailable.
- [NINearbyObjectAngleNotAvailable](../ninearbyobjectanglenotavailable.md): A value that indicates that a nearby object’s horizontal angle is unavailable.
- [verticalDirectionEstimate](verticaldirectionestimate-swift.property.md): The estimation of a nearby object’s vertical position as it relates to the user’s device.
- [NINearbyObjectVerticalDirectionEstimate](verticaldirectionestimate-swift.enum.md): Estimations of a nearby object’s vertical position in relation to the user’s device.
