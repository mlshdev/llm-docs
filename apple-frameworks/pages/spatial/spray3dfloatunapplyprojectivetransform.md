> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spray3dfloatunapplyprojectivetransform](https://developer.apple.com/documentation/spatial/spray3dfloatunapplyprojectivetransform)

# SPRay3DFloatUnapplyProjectiveTransform

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRay3DFloat SPRay3DFloatUnapplyProjectiveTransform(SPRay3DFloat ray, SPProjectiveTransform3DFloat transform);
```

## Parameters

- `ray`: The source ray.
- `transform`: The projective transform that the function unapplies to the ray.

<a id="return-value"></a>

## Return Value

The transformed ray.

<a id="discussion"></a>

## Discussion

Returns a ray that’s transformed by the inverse of the specified projective transform.
