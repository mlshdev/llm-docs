> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkfullcolorimageprovider/init(fullcolorimage:)](https://developer.apple.com/documentation/clockkit/clkfullcolorimageprovider/init(fullcolorimage:))

# init(fullColorImage:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

Creates an image provider with the specified full-color image.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
convenience init(fullColorImage image: UIImage)
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

- [init(fullColorImage:tintedImageProvider:)](init%28fullcolorimage_tintedimageprovider_%29.md): Deprecated. Creates an image provider that produces full-color and tinted images.

# providerWithFullColorImage: (Objective-C)

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

Creates an image provider with the specified full-color image.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
+ (instancetype) providerWithFullColorImage:(UIImage *) image;
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

- [initWithFullColorImage:](initwithfullcolorimage_.md): Deprecated. Creates an image provider with the specified full-color image.
- [providerWithFullColorImage:tintedImageProvider:](init%28fullcolorimage_tintedimageprovider_%29.md): Deprecated. Creates an image provider that produces full-color and tinted images.
- [initWithFullColorImage:tintedImageProvider:](initwithfullcolorimage_tintedimageprovider_.md): Deprecated. Creates an image provider that produces full-color and tinted images.
