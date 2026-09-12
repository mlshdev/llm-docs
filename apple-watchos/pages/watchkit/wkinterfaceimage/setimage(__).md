> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceimage/setimage(_:)](https://developer.apple.com/documentation/watchkit/wkinterfaceimage/setimage(_:))

# setImage(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the displayed image using the specified image object.

## Declaration

```swift
func setImage(_ image: UIImage?)
```

## Parameters

- `image`: The image to be displayed. Specifying `nil` removes the existing image, causing the watch interface to display nothing in the space previously occupied by the image. You may specify a template image or an animated image sequence for this parameter.  For information on how to specify an animated image, see [Animating a Series of Images](../wkinterfaceimage.md#Animating-a-Series-of-Images).

<a id="Discussion"></a>

## Discussion

This method changes the image being displayed. Use this method to assign either a static image or an animated image that you created using the [animatedImage(with:duration:)](https://developer.apple.com/documentation/uikit/uiimage/animatedimage%28with:duration:%29) method.

When setting images, always try to use images that are sized to fit the available space. Images are rendered according to the mode and size attributes you set for the image interface object.

## See Also

### Related Documentation

- [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969)

### Configuring the Image

- [setImageData(\_:)](setimagedata%28__%29.md): Sets the displayed image using a formatted data object.
- [setImageNamed(\_:)](setimagenamed%28__%29.md): Sets the displayed image using a named image resource file.
- [setTintColor(\_:)](settintcolor%28__%29.md): Changes the color applied to a template image.

# setImage: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the displayed image using the specified image object.

## Declaration

```objectivec
- (void) setImage:(UIImage *) image;
```

## Parameters

- `image`: The image to be displayed. Specifying `nil` removes the existing image, causing the watch interface to display nothing in the space previously occupied by the image. You may specify a template image or an animated image sequence for this parameter.  For information on how to specify an animated image, see [Animating a Series of Images](../wkinterfaceimage.md#Animating-a-Series-of-Images).

<a id="Discussion"></a>

## Discussion

This method changes the image being displayed. Use this method to assign either a static image or an animated image that you created using the [animatedImageWithImages:duration:](https://developer.apple.com/documentation/uikit/uiimage/animatedimage%28with:duration:%29) method.

When setting images, always try to use images that are sized to fit the available space. Images are rendered according to the mode and size attributes you set for the image interface object.

## See Also

### Related Documentation

- [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969)

### Configuring the Image

- [setImageData:](setimagedata%28__%29.md): Sets the displayed image using a formatted data object.
- [setImageNamed:](setimagenamed%28__%29.md): Sets the displayed image using a named image resource file.
- [setTintColor:](settintcolor%28__%29.md): Changes the color applied to a template image.
