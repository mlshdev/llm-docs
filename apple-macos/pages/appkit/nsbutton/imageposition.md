> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/imageposition](https://developer.apple.com/documentation/appkit/nsbutton/imageposition)

# imagePosition (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The position of the button’s image relative to its title.

## Declaration

```swift
var imagePosition: NSControl.ImagePosition { get set }
```

<a id="Discussion"></a>

## Discussion

If the title is above, below, or overlapping the image, or if there is no image, the text is horizontally centered within the button. See [NSControl.ImagePosition](../nscontrol/imageposition.md) in [NSCell](../nscell.md) for the list of possible image positions.

## See Also

### Related Documentation

- [title](title.md): The title displayed on the button when it’s in an off state.
- [setButtonType(\_:)](setbuttontype%28__%29.md): Sets the button’s type, which affects its user interface and behavior when clicked.

### Configuring button images

- [image](image.md): The image that appears on the button when it’s in an off state, or `nil` if there is no such image.
- [alternateImage](alternateimage.md): An alternate image that appears on the button when the button is in an on state.
- [NSControl.ImagePosition](../nscontrol/imageposition.md): A constant for specifying the position of a button’s image relative to its title.
- [isBordered](isbordered.md): A Boolean value that determines whether the button has a border.
- [isTransparent](istransparent.md): A Boolean value that indicates whether the button is transparent.
- [bezelStyle](bezelstyle-swift.property.md): The appearance of the button’s border.
- [bezelColor](bezelcolor.md): The color of the button’s bezel, in appearances that support it.
- [showsBorderOnlyWhileMouseInside](showsborderonlywhilemouseinside.md): A Boolean value that determines whether the button displays its border only when the pointer is over it.
- [imageHugsTitle](imagehugstitle.md): A Boolean value that determines how the button’s image and title are positioned together within the button bezel.
- [imageScaling](imagescaling.md): The scaling mode applied to make the cell’s image fit the frame of the image view.

# imagePosition (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The position of the button’s image relative to its title.

## Declaration

```objectivec
@property NSCellImagePosition imagePosition;
```

<a id="Discussion"></a>

## Discussion

If the title is above, below, or overlapping the image, or if there is no image, the text is horizontally centered within the button. See [NSCellImagePosition](../nscontrol/imageposition.md) in [NSCell](../nscell.md) for the list of possible image positions.

## See Also

### Related Documentation

- [title](title.md): The title displayed on the button when it’s in an off state.
- [setButtonType:](setbuttontype%28__%29.md): Sets the button’s type, which affects its user interface and behavior when clicked.

### Configuring button images

- [image](image.md): The image that appears on the button when it’s in an off state, or `nil` if there is no such image.
- [alternateImage](alternateimage.md): An alternate image that appears on the button when the button is in an on state.
- [NSCellImagePosition](../nscontrol/imageposition.md): A constant for specifying the position of a button’s image relative to its title.
- [bordered](isbordered.md): A Boolean value that determines whether the button has a border.
- [transparent](istransparent.md): A Boolean value that indicates whether the button is transparent.
- [bezelStyle](bezelstyle-swift.property.md): The appearance of the button’s border.
- [bezelColor](bezelcolor.md): The color of the button’s bezel, in appearances that support it.
- [showsBorderOnlyWhileMouseInside](showsborderonlywhilemouseinside.md): A Boolean value that determines whether the button displays its border only when the pointer is over it.
- [imageHugsTitle](imagehugstitle.md): A Boolean value that determines how the button’s image and title are positioned together within the button bezel.
- [imageScaling](imagescaling.md): The scaling mode applied to make the cell’s image fit the frame of the image view.
