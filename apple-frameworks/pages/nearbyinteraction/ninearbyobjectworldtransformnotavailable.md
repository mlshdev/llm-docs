> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/ninearbyobjectworldtransformnotavailable](https://developer.apple.com/documentation/nearbyinteraction/ninearbyobjectworldtransformnotavailable)

# NINearbyObjectWorldTransformNotAvailable

**Interface language:** Objective-C

**Framework:** Nearby Interaction  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

A constant that indicates that the framework is unable to provide a world transform for a nearby object.

## Declaration

```objectivec
extern simd_float4x4 NINearbyObjectWorldTransformNotAvailable;
```

<a id="Discussion"></a>

## Discussion

The framework returns this constant for [worldTransformForObject:](nisession/worldtransformforobject_.md) when it fails to produce a transform for the given object.

## See Also

### Utilizing Camera Assistance

- [setARSession:](nisession/setarsession%28__%29.md): Provides the framework with an existing AR session to use for Camera Assistance.
- [worldTransformForObject:](nisession/worldtransformforobject_.md): Returns a world transform to integrate a nearby object in an AR experience.
