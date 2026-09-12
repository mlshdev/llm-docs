> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacebutton/setbackgroundcolor(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacebutton/setbackgroundcolor(_:))

# setBackgroundColor(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the background color of the button.

## Declaration

```swift
func setBackgroundColor(_ color: UIColor?)
```

## Parameters

- `color`: The fill color to use for the button’s background.

<a id="Discussion"></a>

## Discussion

If you specify both a background color and a full-color background image, only the image is displayed. If the image is a template image instead, the button tints the image using the background color.

## See Also

### Setting the Button Background

- [setBackgroundImage(\_:)](setbackgroundimage%28__%29.md): Sets the button’s background image to the specified image.
- [setBackgroundImageData(\_:)](setbackgroundimagedata%28__%29.md): Sets the button’s background image to the image in the specified data object.
- [setBackgroundImageNamed(\_:)](setbackgroundimagenamed%28__%29.md): Sets the button’s background image to the image in the named resource file.

# setBackgroundColor: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the background color of the button.

## Declaration

```objectivec
- (void) setBackgroundColor:(UIColor *) color;
```

## Parameters

- `color`: The fill color to use for the button’s background.

<a id="Discussion"></a>

## Discussion

If you specify both a background color and a full-color background image, only the image is displayed. If the image is a template image instead, the button tints the image using the background color.

## See Also

### Setting the Button Background

- [setBackgroundImage:](setbackgroundimage%28__%29.md): Sets the button’s background image to the specified image.
- [setBackgroundImageData:](setbackgroundimagedata%28__%29.md): Sets the button’s background image to the image in the specified data object.
- [setBackgroundImageNamed:](setbackgroundimagenamed%28__%29.md): Sets the button’s background image to the image in the named resource file.
