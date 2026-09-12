> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/ray3dfloat/intersects(sphereorigin:sphereradius:)](https://developer.apple.com/documentation/spatial/ray3dfloat/intersects(sphereorigin:sphereradius:))

# intersects(sphereOrigin:sphereRadius:) (Swift)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
func intersects(sphereOrigin: Point3DFloat, sphereRadius: Float) -> Bool
```

## Parameters

- `sphereOrigin`: A point structure that defines the center of the sphere.
- `sphereRadius`: The radius of the sphere.

<a id="return-value"></a>

## Return Value

A  Boolean value that indicates whether the ray intersects the sphere.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the ray intersects a specified sphere.

# SPRay3DFloatIntersectsSphere (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static bool SPRay3DFloatIntersectsSphere(SPRay3DFloat ray, SPPoint3DFloat sphereOrigin, float sphereRadius);
```

## Parameters

- `ray`: The ray.
- `sphereOrigin`: A point structure that defines the center of the sphere.
- `sphereRadius`: The radius of the sphere.

<a id="return-value"></a>

## Return Value

A  Boolean value that indicates whether the ray intersects the sphere.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the ray intersects a specified sphere.
