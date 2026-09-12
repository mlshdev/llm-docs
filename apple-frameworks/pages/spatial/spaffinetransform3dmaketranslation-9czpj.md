> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spaffinetransform3dmaketranslation-9czpj](https://developer.apple.com/documentation/spatial/spaffinetransform3dmaketranslation-9czpj)

# SPAffineTransform3DMakeTranslation

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
static SPAffineTransform3D SPAffineTransform3DMakeTranslation(SPVector3D offset);
```

## Parameters

- `offset`: The translation.

<a id="return-value"></a>

## Return Value

A new affine transform structure.

<a id="discussion"></a>

## Discussion

Returns a new translation affine transform.
