> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/ninearbyobjectdistancenotavailable](https://developer.apple.com/documentation/nearbyinteraction/ninearbyobjectdistancenotavailable)

# NINearbyObjectDistanceNotAvailable

**Interface language:** Objective-C

**Framework:** Nearby Interaction  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

An object that indicates the peer’s distance is unavailable.

## Declaration

```objectivec
extern float NINearbyObjectDistanceNotAvailable;
```

## Mentioned In

- [Initiating and maintaining a session](initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

The framework sets [distance](ninearbyobject/distance-9atp7.md) to the value of this property if it’s unable to acquire distance at any given time.

## See Also

### Acquring relative distance

- [distance](ninearbyobject/distance-9atp7.md): The distance from the user’s device to the peer device in meters.
