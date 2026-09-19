> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/sprect3dmake

# SPRect3DMake

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRect3D SPRect3DMake(SPRect3DFloat rect);
```

## Parameters

- `rect`: The rectangle.

<a id="return-value"></a>

## Return Value

A new rectangle.

<a id="discussion"></a>

## Discussion

Returns a double-precision rectangle from a single-precision rectangle.
