> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceimage/setimagedata(_:)](https://developer.apple.com/documentation/watchkit/wkinterfaceimage/setimagedata(_:))

# setImageData(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the displayed image using a formatted data object.

## Declaration

```swift
func setImageData(_ imageData: Data?)
```

## Parameters

- `imageData`: A data object containing the image data in its native format. Specifying `nil` removes the existing image, causing the watch interface to display nothing in the space previously occupied by the image.

<a id="Discussion"></a>

## Discussion

This method changes the image being displayed.

When setting images, always try to use images that are sized to fit the available space. Images are rendered according to the mode and size attributes you set for the image interface object.

## See Also

### Configuring the Image

- [setImage(\_:)](setimage%28__%29.md): Sets the displayed image using the specified image object.
- [setImageNamed(\_:)](setimagenamed%28__%29.md): Sets the displayed image using a named image resource file.
- [setTintColor(\_:)](settintcolor%28__%29.md): Changes the color applied to a template image.

# setImageData: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the displayed image using a formatted data object.

## Declaration

```objectivec
- (void) setImageData:(NSData *) imageData;
```

## Parameters

- `imageData`: A data object containing the image data in its native format. Specifying `nil` removes the existing image, causing the watch interface to display nothing in the space previously occupied by the image.

<a id="Discussion"></a>

## Discussion

This method changes the image being displayed.

When setting images, always try to use images that are sized to fit the available space. Images are rendered according to the mode and size attributes you set for the image interface object.

## See Also

### Configuring the Image

- [setImage:](setimage%28__%29.md): Sets the displayed image using the specified image object.
- [setImageNamed:](setimagenamed%28__%29.md): Sets the displayed image using a named image resource file.
- [setTintColor:](settintcolor%28__%29.md): Changes the color applied to a template image.
