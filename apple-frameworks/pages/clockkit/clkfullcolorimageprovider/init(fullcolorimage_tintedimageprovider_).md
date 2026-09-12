> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkfullcolorimageprovider/init(fullcolorimage:tintedimageprovider:)](https://developer.apple.com/documentation/clockkit/clkfullcolorimageprovider/init(fullcolorimage:tintedimageprovider:))

# init(fullColorImage:tintedImageProvider:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 6.0+ (deprecated in 27.0)

Creates an image provider that produces full-color and tinted images.

## Declaration

```swift
convenience init(fullColorImage image: UIImage, tintedImageProvider: CLKImageProvider?)
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

- [init(fullColorImage:)](init%28fullcolorimage_%29.md): Deprecated. Creates an image provider with the specified full-color image.

# providerWithFullColorImage:tintedImageProvider: (Objective-C)

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 6.0+ (deprecated in 27.0)

Creates an image provider that produces full-color and tinted images.

## Declaration

```objectivec
+ (instancetype) providerWithFullColorImage:(UIImage *) image tintedImageProvider:(CLKImageProvider *) tintedImageProvider;
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
- [initWithFullColorImage:tintedImageProvider:](initwithfullcolorimage_tintedimageprovider_.md): Deprecated. Creates an image provider that produces full-color and tinted images.
