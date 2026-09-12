> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacebutton/setbackgroundimagedata(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacebutton/setbackgroundimagedata(_:))

# setBackgroundImageData(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the button’s background image to the image in the specified data object.

## Declaration

```swift
func setBackgroundImageData(_ imageData: Data?)
```

## Parameters

- `imageData`: A data object containing the image data in its native format. The image is displayed behind the button’s title text. Specifying `nil` removes the existing image. You may specify image data that contains multiple images running as an animation. The image is scaled as needed to fill the button’s content area.

<a id="Discussion"></a>

## Discussion

Use this method when you already have image data in the raw PNG or JPG format. This method sends the data as-is, which lets you send the data in a compressed format. Sending compressed data is often more efficient than sending a [UIImage](https://developer.apple.com/documentation/uikit/uiimage) object.

## See Also

### Setting the Button Background

- [setBackgroundColor(\_:)](setbackgroundcolor%28__%29.md): Sets the background color of the button.
- [setBackgroundImage(\_:)](setbackgroundimage%28__%29.md): Sets the button’s background image to the specified image.
- [setBackgroundImageNamed(\_:)](setbackgroundimagenamed%28__%29.md): Sets the button’s background image to the image in the named resource file.

# setBackgroundImageData: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the button’s background image to the image in the specified data object.

## Declaration

```objectivec
- (void) setBackgroundImageData:(NSData *) imageData;
```

## Parameters

- `imageData`: A data object containing the image data in its native format. The image is displayed behind the button’s title text. Specifying `nil` removes the existing image. You may specify image data that contains multiple images running as an animation. The image is scaled as needed to fill the button’s content area.

<a id="Discussion"></a>

## Discussion

Use this method when you already have image data in the raw PNG or JPG format. This method sends the data as-is, which lets you send the data in a compressed format. Sending compressed data is often more efficient than sending a [UIImage](https://developer.apple.com/documentation/uikit/uiimage) object.

## See Also

### Setting the Button Background

- [setBackgroundColor:](setbackgroundcolor%28__%29.md): Sets the background color of the button.
- [setBackgroundImage:](setbackgroundimage%28__%29.md): Sets the button’s background image to the specified image.
- [setBackgroundImageNamed:](setbackgroundimagenamed%28__%29.md): Sets the button’s background image to the image in the named resource file.
