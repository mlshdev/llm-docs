> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spray3dfloatmake-5yjgm

# SPRay3DFloatMake

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRay3DFloat SPRay3DFloatMake(SPRay3D ray);
```

## Parameters

- `ray`: The ray.

<a id="return-value"></a>

## Return Value

A new ray.

<a id="discussion"></a>

## Discussion

Returns a single-precision ray from a double-precision ray.
