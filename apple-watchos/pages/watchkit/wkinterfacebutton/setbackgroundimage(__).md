> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacebutton/setbackgroundimage(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacebutton/setbackgroundimage(_:))

# setBackgroundImage(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the button’s background image to the specified image.

## Declaration

```swift
func setBackgroundImage(_ image: UIImage?)
```

## Parameters

- `image`: The image to be displayed behind the button’s title text. The image is displayed behind the button’s title text. Specifying `nil` removes the existing image. You may specify an image object that contains multiple images running as an animation. The image is scaled as needed to fill the button’s content area.

<a id="Discussion"></a>

## Discussion

If `image` is a template image, the button tints that image using the current background color. The button does not use the background color for full-color images.

## See Also

### Setting the Button Background

- [setBackgroundColor(\_:)](setbackgroundcolor%28__%29.md): Sets the background color of the button.
- [setBackgroundImageData(\_:)](setbackgroundimagedata%28__%29.md): Sets the button’s background image to the image in the specified data object.
- [setBackgroundImageNamed(\_:)](setbackgroundimagenamed%28__%29.md): Sets the button’s background image to the image in the named resource file.

# setBackgroundImage: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the button’s background image to the specified image.

## Declaration

```objectivec
- (void) setBackgroundImage:(UIImage *) image;
```

## Parameters

- `image`: The image to be displayed behind the button’s title text. The image is displayed behind the button’s title text. Specifying `nil` removes the existing image. You may specify an image object that contains multiple images running as an animation. The image is scaled as needed to fill the button’s content area.

<a id="Discussion"></a>

## Discussion

If `image` is a template image, the button tints that image using the current background color. The button does not use the background color for full-color images.

## See Also

### Setting the Button Background

- [setBackgroundColor:](setbackgroundcolor%28__%29.md): Sets the background color of the button.
- [setBackgroundImageData:](setbackgroundimagedata%28__%29.md): Sets the button’s background image to the image in the specified data object.
- [setBackgroundImageNamed:](setbackgroundimagenamed%28__%29.md): Sets the button’s background image to the image in the named resource file.
