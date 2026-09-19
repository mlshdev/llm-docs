> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spaffinetransform3disrectilinear

# SPAffineTransform3DIsRectilinear

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
static bool SPAffineTransform3DIsRectilinear(SPAffineTransform3D transform);
```

## Parameters

- `transform`: The source transform.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the transform is rectilinear.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the transform is rectilinear.
