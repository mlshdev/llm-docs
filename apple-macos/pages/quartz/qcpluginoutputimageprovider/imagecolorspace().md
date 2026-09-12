> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcpluginoutputimageprovider/imagecolorspace()](https://developer.apple.com/documentation/quartz/qcpluginoutputimageprovider/imagecolorspace())

# imageColorSpace() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the color space of the image or `NULL` if the image should not be color matched.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func imageColorSpace() -> Unmanaged<CGColorSpace>!
```

<a id="return-value"></a>

## Return Value

The color space of the image or `NULL`.

## See Also

### Providing Information About the Image

- [imageBounds()](imagebounds%28%29.md): Deprecated. Returns the bounds of the image expressed in pixels and aligned to integer boundaries.
- [shouldColorMatch()](shouldcolormatch%28%29.md): Deprecated. Returns whether the image should be color matched.

# imageColorSpace (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the color space of the image or `NULL` if the image should not be color matched.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (CGColorSpaceRef) imageColorSpace;
```

<a id="return-value"></a>

## Return Value

The color space of the image or `NULL`.

## See Also

### Providing Information About the Image

- [imageBounds](imagebounds%28%29.md): Deprecated. Returns the bounds of the image expressed in pixels and aligned to integer boundaries.
- [shouldColorMatch](shouldcolormatch%28%29.md): Deprecated. Returns whether the image should be color matched.
