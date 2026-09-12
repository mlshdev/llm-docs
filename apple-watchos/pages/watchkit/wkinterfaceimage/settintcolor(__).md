> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceimage/settintcolor(_:)](https://developer.apple.com/documentation/watchkit/wkinterfaceimage/settintcolor(_:))

# setTintColor(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Changes the color applied to a template image.

## Declaration

```swift
func setTintColor(_ tintColor: UIColor?)
```

## Parameters

- `tintColor`: The tint color to use for a template image. Specify `nil` to use the default tint color.

<a id="Discussion"></a>

## Discussion

When you display a template image, use this method to set the tint color to apply to that image. With a template image, WatchKit uses only the alpha channel of the image to define a shape. To create a template image from an existing image, call the [withRenderingMode(\_:)](https://developer.apple.com/documentation/uikit/uiimage/withrenderingmode%28_:%29) method on an existing [UIImage](https://developer.apple.com/documentation/uikit/uiimage) and specify the [UIImage.RenderingMode.alwaysTemplate](https://developer.apple.com/documentation/uikit/uiimage/renderingmode-swift.enum/alwaystemplate) rendering mode.

An image object applies the tint color only when it contains a single template image. It does not apply the tint color to animated images or images that are not configured as template images.

## See Also

### Configuring the Image

- [setImage(\_:)](setimage%28__%29.md): Sets the displayed image using the specified image object.
- [setImageData(\_:)](setimagedata%28__%29.md): Sets the displayed image using a formatted data object.
- [setImageNamed(\_:)](setimagenamed%28__%29.md): Sets the displayed image using a named image resource file.

# setTintColor: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Changes the color applied to a template image.

## Declaration

```objectivec
- (void) setTintColor:(UIColor *) tintColor;
```

## Parameters

- `tintColor`: The tint color to use for a template image. Specify `nil` to use the default tint color.

<a id="Discussion"></a>

## Discussion

When you display a template image, use this method to set the tint color to apply to that image. With a template image, WatchKit uses only the alpha channel of the image to define a shape. To create a template image from an existing image, call the [imageWithRenderingMode:](https://developer.apple.com/documentation/uikit/uiimage/withrenderingmode%28_:%29) method on an existing [UIImage](https://developer.apple.com/documentation/uikit/uiimage) and specify the [UIImageRenderingModeAlwaysTemplate](https://developer.apple.com/documentation/uikit/uiimage/renderingmode-swift.enum/alwaystemplate) rendering mode.

An image object applies the tint color only when it contains a single template image. It does not apply the tint color to animated images or images that are not configured as template images.

## See Also

### Configuring the Image

- [setImage:](setimage%28__%29.md): Sets the displayed image using the specified image object.
- [setImageData:](setimagedata%28__%29.md): Sets the displayed image using a formatted data object.
- [setImageNamed:](setimagenamed%28__%29.md): Sets the displayed image using a named image resource file.
