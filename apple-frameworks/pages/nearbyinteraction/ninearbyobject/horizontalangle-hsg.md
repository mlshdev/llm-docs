> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/ninearbyobject/horizontalangle-hsg](https://developer.apple.com/documentation/nearbyinteraction/ninearbyobject/horizontalangle-hsg)

# horizontalAngle

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

An angle in radians that indicates the azimuthal direction to the nearby object.

## Declaration

```swift
var horizontalAngle: Float? { get }
```

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

The framework sets a value of this property when [isCameraAssistanceEnabled](../ninearbypeerconfiguration/iscameraassistanceenabled.md) is `true`.

This property is `nil` when direction is unavailable, such as when the app runs on Apple Watch.

## See Also

### Acquiring relative direction

- [direction](direction-4qh5w.md): A vector that points from the user’s device in the direction of the peer device.
- [verticalDirectionEstimate](verticaldirectionestimate-swift.property.md): The estimation of a nearby object’s vertical position as it relates to the user’s device.
- [NINearbyObject.VerticalDirectionEstimate](verticaldirectionestimate-swift.enum.md): Estimations of a nearby object’s vertical position in relation to the user’s device.
