> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartz/qcpluginoutputimageprovider/imagebounds()

# imageBounds() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the bounds of the image expressed in pixels and aligned to integer boundaries.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func imageBounds() -> NSRect
```

<a id="return-value"></a>

## Return Value

The bounds of the image. Note that the `QCPlugIn` class does not support images that have infinite bounds.

## See Also

### Providing Information About the Image

- [imageColorSpace()](imagecolorspace%28%29.md): Deprecated. Returns the color space of the image or `NULL` if the image should not be color matched.
- [shouldColorMatch()](shouldcolormatch%28%29.md): Deprecated. Returns whether the image should be color matched.

# imageBounds (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the bounds of the image expressed in pixels and aligned to integer boundaries.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (NSRect) imageBounds;
```

<a id="return-value"></a>

## Return Value

The bounds of the image. Note that the `QCPlugIn` class does not support images that have infinite bounds.

## See Also

### Providing Information About the Image

- [imageColorSpace](imagecolorspace%28%29.md): Deprecated. Returns the color space of the image or `NULL` if the image should not be color matched.
- [shouldColorMatch](shouldcolormatch%28%29.md): Deprecated. Returns whether the image should be color matched.
