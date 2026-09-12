> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/ninearbyobject/verticaldirectionestimate-swift.property](https://developer.apple.com/documentation/nearbyinteraction/ninearbyobject/verticaldirectionestimate-swift.property)

# verticalDirectionEstimate (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

The estimation of a nearby object’s vertical position as it relates to the user’s device.

## Declaration

```swift
var verticalDirectionEstimate: NINearbyObject.VerticalDirectionEstimate { get }
```

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

The framework sets a value of this property when [isCameraAssistanceEnabled](../ninearbypeerconfiguration/iscameraassistanceenabled.md) is `true`.

The framework periodically sets the value of this property when vertical positioning is available. Otherwise, the framework sets the value to [NINearbyObject.VerticalDirectionEstimate.unknown](verticaldirectionestimate-swift.enum/unknown.md).

## See Also

### Acquiring relative direction

- [direction](direction-4qh5w.md): A vector that points from the user’s device in the direction of the peer device.
- [horizontalAngle](horizontalangle-hsg.md): An angle in radians that indicates the azimuthal direction to the nearby object.
- [NINearbyObject.VerticalDirectionEstimate](verticaldirectionestimate-swift.enum.md): Estimations of a nearby object’s vertical position in relation to the user’s device.

# verticalDirectionEstimate (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

The estimation of a nearby object’s vertical position as it relates to the user’s device.

## Declaration

```objectivec
@property (nonatomic, readonly) NINearbyObjectVerticalDirectionEstimate verticalDirectionEstimate;
```

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

The framework sets a value of this property when [cameraAssistanceEnabled](../ninearbypeerconfiguration/iscameraassistanceenabled.md) is `true`.

The framework periodically sets the value of this property when vertical positioning is available. Otherwise, the framework sets the value to [NINearbyObjectVerticalDirectionEstimateUnknown](verticaldirectionestimate-swift.enum/unknown.md).

## See Also

### Acquiring relative direction

- [direction](direction-5xcld.md): A vector that points from the user’s device in the direction of the peer device.
- [NINearbyObjectDirectionNotAvailable](../ninearbyobjectdirectionnotavailable.md): A value that indicates that a nearby object’s direction is unavailable.
- [horizontalAngle](horizontalangle-9ibky.md): An angle in radians that indicates the azimuthal direction to the nearby object.
- [NINearbyObjectAngleNotAvailable](../ninearbyobjectanglenotavailable.md): A value that indicates that a nearby object’s horizontal angle is unavailable.
- [NINearbyObjectVerticalDirectionEstimate](verticaldirectionestimate-swift.enum.md): Estimations of a nearby object’s vertical position in relation to the user’s device.
