> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/affinetransform3dfloat/scale

# scale (Swift)

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
var scale: Size3DFloat { get }
```

<a id="discussion"></a>

## Discussion

Returns an affine transform’s scale.

# SPAffineTransform3DFloatGetScale (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPSize3DFloat SPAffineTransform3DFloatGetScale(SPAffineTransform3DFloat transform);
```

## Parameters

- `transform`: The source transform.

<a id="return-value"></a>

## Return Value

A size structure that represents the transform’s scale.

<a id="discussion"></a>

## Discussion

Returns an affine transform’s scale.
