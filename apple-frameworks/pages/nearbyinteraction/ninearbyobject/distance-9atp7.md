> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/ninearbyobject/distance-9atp7](https://developer.apple.com/documentation/nearbyinteraction/ninearbyobject/distance-9atp7)

# distance

**Interface language:** Objective-C

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

The distance from the user’s device to the peer device in meters.

## Declaration

```objectivec
@property (nonatomic, readonly) float distance;
```

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

This property contains the distance in meters between the local device and the peer device described by [NINearbyObject](../ninearbyobject.md). If the framework fails to acquire the peer device’s distance, the value is [NINearbyObjectDistanceNotAvailable](../ninearbyobjectdistancenotavailable.md).

The maximum detectable range depends on environmental factors. For example, a clear path between the two devices increases the detectable range, and solid obstructions to the device’s line of sight constrict the range.

> **Important**

>  The framework doesn’t implement secure ranging, so don’t rely on Nearby Interaction to provide users with secure access, for example, security clearance, based on the value of this property.

## See Also

### Acquring relative distance

- [NINearbyObjectDistanceNotAvailable](../ninearbyobjectdistancenotavailable.md): An object that indicates the peer’s distance is unavailable.
