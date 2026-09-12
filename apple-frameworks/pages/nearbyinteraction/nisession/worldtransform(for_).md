> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nisession/worldtransform(for:)](https://developer.apple.com/documentation/nearbyinteraction/nisession/worldtransform(for:))

# worldTransform(for:)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Returns a world transform to integrate a nearby object in an AR experience.

## Declaration

```swift
func worldTransform(for object: NINearbyObject) -> simd_float4x4?
```

## Parameters

- `object`: The object for which to calculate a world transform.

<a id="return-value"></a>

## Return Value

A world transform in ARKit’s coordinate space.

<a id="Discussion"></a>

## Discussion

This [ARKit](../../arkit.md) transform represents the given object’s position in the physical environment, if it’s available. Otherwise, this function returns `nil`.

With this transform, you can:

- Overlay 3D virtual content onto a camera-feed visualization where the nearby object resides in the physical environment, such as done by an AR app’s renderer.
- Play a 3D-spatial sound from the location of the nearby object, for example, by using [PHASE](../../phase.md).

## See Also

### Utilizing Camera Assistance

- [setARSession(\_:)](setarsession%28__%29.md): Provides the framework with an existing AR session to use for Camera Assistance.
