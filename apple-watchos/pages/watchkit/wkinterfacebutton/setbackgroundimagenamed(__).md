> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacebutton/setbackgroundimagenamed(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacebutton/setbackgroundimagenamed(_:))

# setBackgroundImageNamed(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the button’s background image to the image in the named resource file.

## Declaration

```swift
func setBackgroundImageNamed(_ imageName: String?)
```

## Parameters

- `imageName`: The name of the image to load from the Watch app’s bundle. For images in the bundle, specify the filename of the image and include the filename extension in the name. The image is displayed behind the button’s title text. You may specify an image file that contains multiple images running as an animation. The image is scaled as needed to fill the button’s content area.

<a id="Discussion"></a>

## Discussion

This method looks for an image with the specified name in the Watch app’s bundle and uses it as the background image for the button. (In watchOS 1, the button also searches the image cache for an image with the specified name.) If the specified image cannot be found, the button displays no background image.

When the image is a template image, the button tints that image using the current background color. The button does not use the background color for full-color images.

## See Also

### Setting the Button Background

- [setBackgroundColor(\_:)](setbackgroundcolor%28__%29.md): Sets the background color of the button.
- [setBackgroundImage(\_:)](setbackgroundimage%28__%29.md): Sets the button’s background image to the specified image.
- [setBackgroundImageData(\_:)](setbackgroundimagedata%28__%29.md): Sets the button’s background image to the image in the specified data object.

# setBackgroundImageNamed: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the button’s background image to the image in the named resource file.

## Declaration

```objectivec
- (void) setBackgroundImageNamed:(NSString *) imageName;
```

## Parameters

- `imageName`: The name of the image to load from the Watch app’s bundle. For images in the bundle, specify the filename of the image and include the filename extension in the name. The image is displayed behind the button’s title text. You may specify an image file that contains multiple images running as an animation. The image is scaled as needed to fill the button’s content area.

<a id="Discussion"></a>

## Discussion

This method looks for an image with the specified name in the Watch app’s bundle and uses it as the background image for the button. (In watchOS 1, the button also searches the image cache for an image with the specified name.) If the specified image cannot be found, the button displays no background image.

When the image is a template image, the button tints that image using the current background color. The button does not use the background color for full-color images.

## See Also

### Setting the Button Background

- [setBackgroundColor:](setbackgroundcolor%28__%29.md): Sets the background color of the button.
- [setBackgroundImage:](setbackgroundimage%28__%29.md): Sets the button’s background image to the specified image.
- [setBackgroundImageData:](setbackgroundimagedata%28__%29.md): Sets the button’s background image to the image in the specified data object.
