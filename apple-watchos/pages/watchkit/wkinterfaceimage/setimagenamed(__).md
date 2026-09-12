> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceimage/setimagenamed(_:)](https://developer.apple.com/documentation/watchkit/wkinterfaceimage/setimagenamed(_:))

# setImageNamed(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the displayed image using a named image resource file.

## Declaration

```swift
func setImageNamed(_ imageName: String?)
```

## Parameters

- `imageName`: The name of the image to be loaded from the Watch app’s bundle. Specify the filename of the image and include the filename extension in the name. You may specify an image file that contains multiple images running as an animation. For information on how to specify an animated image, see [Animating a Series of Images](../wkinterfaceimage.md#Animating-a-Series-of-Images).

<a id="Discussion"></a>

## Discussion

This method looks for an image with the specified name on Apple Watch and displays it in the image view. If the specified image cannot be found, the image view displays no image.

When setting images, always try to use images that are sized to fit the available space. Images are rendered according to the mode and size attributes you set for the image interface object.

## See Also

### Configuring the Image

- [setImage(\_:)](setimage%28__%29.md): Sets the displayed image using the specified image object.
- [setImageData(\_:)](setimagedata%28__%29.md): Sets the displayed image using a formatted data object.
- [setTintColor(\_:)](settintcolor%28__%29.md): Changes the color applied to a template image.

# setImageNamed: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the displayed image using a named image resource file.

## Declaration

```objectivec
- (void) setImageNamed:(NSString *) imageName;
```

## Parameters

- `imageName`: The name of the image to be loaded from the Watch app’s bundle. Specify the filename of the image and include the filename extension in the name. You may specify an image file that contains multiple images running as an animation. For information on how to specify an animated image, see [Animating a Series of Images](../wkinterfaceimage.md#Animating-a-Series-of-Images).

<a id="Discussion"></a>

## Discussion

This method looks for an image with the specified name on Apple Watch and displays it in the image view. If the specified image cannot be found, the image view displays no image.

When setting images, always try to use images that are sized to fit the available space. Images are rendered according to the mode and size attributes you set for the image interface object.

## See Also

### Configuring the Image

- [setImage:](setimage%28__%29.md): Sets the displayed image using the specified image object.
- [setImageData:](setimagedata%28__%29.md): Sets the displayed image using a formatted data object.
- [setTintColor:](settintcolor%28__%29.md): Changes the color applied to a template image.
