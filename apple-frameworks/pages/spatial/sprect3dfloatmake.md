> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/sprect3dfloatmake

# SPRect3DFloatMake

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRect3DFloat SPRect3DFloatMake(SPRect3D rect);
```

## Parameters

- `rect`: The rectangle.

<a id="return-value"></a>

## Return Value

A new rectangle.

<a id="discussion"></a>

## Discussion

Returns a single-precision rectangle from a double-precision rectangle.
