> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcpluginoutputimageprovider/shouldcolormatch()](https://developer.apple.com/documentation/quartz/qcpluginoutputimageprovider/shouldcolormatch())

# shouldColorMatch() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns whether the image should be color matched.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
optional func shouldColorMatch() -> Bool
```

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) if the image is a mask or gradient; otherwise [true](https://developer.apple.com/documentation/swift/true), which is the default.

## See Also

### Providing Information About the Image

- [imageBounds()](imagebounds%28%29.md): Deprecated. Returns the bounds of the image expressed in pixels and aligned to integer boundaries.
- [imageColorSpace()](imagecolorspace%28%29.md): Deprecated. Returns the color space of the image or `NULL` if the image should not be color matched.

# shouldColorMatch (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns whether the image should be color matched.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (BOOL) shouldColorMatch;
```

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) if the image is a mask or gradient; otherwise [true](https://developer.apple.com/documentation/swift/true), which is the default.

## See Also

### Providing Information About the Image

- [imageBounds](imagebounds%28%29.md): Deprecated. Returns the bounds of the image expressed in pixels and aligned to integer boundaries.
- [imageColorSpace](imagecolorspace%28%29.md): Deprecated. Returns the color space of the image or `NULL` if the image should not be color matched.
