> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spray3dmake-3296l

# SPRay3DMake

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRay3D SPRay3DMake(SPRay3DFloat ray);
```

## Parameters

- `ray`: The ray.

<a id="return-value"></a>

## Return Value

A new ray.

<a id="discussion"></a>

## Discussion

Returns a double-precision ray from a single-precision ray.
