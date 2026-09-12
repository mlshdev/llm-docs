> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkfullcolorimageprovider/initwithfullcolorimage:tintedimageprovider:](https://developer.apple.com/documentation/clockkit/clkfullcolorimageprovider/initwithfullcolorimage:tintedimageprovider:)

# initWithFullColorImage:tintedImageProvider:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates an image provider that produces full-color and tinted images.

## Declaration

```objectivec
- (instancetype) initWithFullColorImage:(UIImage *) image tintedImageProvider:(CLKImageProvider *) tintedImageProvider;
```

## Parameters

- `image`: The image to display for full-color complications.
- `tintedImageProvider`: An image provider that produces images for tinted complications.

<a id="return-value"></a>

## Return Value

An image provider that produces full-color and tinted images. For more information about tinted images, see [tintedImageProvider](tintedimageprovider.md).

<a id="Discussion"></a>

## Discussion

For information about the image sizes and masks used by the different complication families, see [Complication Images](https://developer.apple.com/design/human-interface-guidelines/watchos/icons-and-images/complication-images/).

## See Also

### Creating an Image Provider

- [providerWithFullColorImage:](init%28fullcolorimage_%29.md): Deprecated. Creates an image provider with the specified full-color image.
- [initWithFullColorImage:](initwithfullcolorimage_.md): Deprecated. Creates an image provider with the specified full-color image.
- [providerWithFullColorImage:tintedImageProvider:](init%28fullcolorimage_tintedimageprovider_%29.md): Deprecated. Creates an image provider that produces full-color and tinted images.
