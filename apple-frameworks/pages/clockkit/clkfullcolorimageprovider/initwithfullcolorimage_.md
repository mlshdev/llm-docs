> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkfullcolorimageprovider/initwithfullcolorimage:

# initWithFullColorImage:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Creates an image provider with the specified full-color image.

## Declaration

```objectivec
- (instancetype) initWithFullColorImage:(UIImage *) image;
```

## Parameters

- `image`: The image to display.

<a id="return-value"></a>

## Return Value

A full-color image provider.

<a id="Discussion"></a>

## Discussion

For information about the image sizes and masks, see [Apple Watch Human Interface Guidelines](https://developer.apple.com/watch/human-interface-guidelines/).

## See Also

### Creating an Image Provider

- [providerWithFullColorImage:](init%28fullcolorimage_%29.md): Deprecated. Creates an image provider with the specified full-color image.
- [providerWithFullColorImage:tintedImageProvider:](init%28fullcolorimage_tintedimageprovider_%29.md): Deprecated. Creates an image provider that produces full-color and tinted images.
- [initWithFullColorImage:tintedImageProvider:](initwithfullcolorimage_tintedimageprovider_.md): Deprecated. Creates an image provider that produces full-color and tinted images.
