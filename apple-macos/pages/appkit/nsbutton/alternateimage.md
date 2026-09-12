> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/alternateimage](https://developer.apple.com/documentation/appkit/nsbutton/alternateimage)

# alternateImage (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An alternate image that appears on the button when the button is in an on state.

## Declaration

```swift
var alternateImage: NSImage? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if there is no alternate image for the button. Note that some button types don’t display an alternate image, and buttons don’t display images by default. If you use this property to set an image, the button redraws its contents if necessary.

## See Also

### Related Documentation

- [keyEquivalent](keyequivalent.md): The key-equivalent character of the button.
- [setButtonType(\_:)](setbuttontype%28__%29.md): Sets the button’s type, which affects its user interface and behavior when clicked.

### Configuring button images

- [image](image.md): The image that appears on the button when it’s in an off state, or `nil` if there is no such image.
- [imagePosition](imageposition.md): The position of the button’s image relative to its title.
- [NSControl.ImagePosition](../nscontrol/imageposition.md): A constant for specifying the position of a button’s image relative to its title.
- [isBordered](isbordered.md): A Boolean value that determines whether the button has a border.
- [isTransparent](istransparent.md): A Boolean value that indicates whether the button is transparent.
- [bezelStyle](bezelstyle-swift.property.md): The appearance of the button’s border.
- [bezelColor](bezelcolor.md): The color of the button’s bezel, in appearances that support it.
- [showsBorderOnlyWhileMouseInside](showsborderonlywhilemouseinside.md): A Boolean value that determines whether the button displays its border only when the pointer is over it.
- [imageHugsTitle](imagehugstitle.md): A Boolean value that determines how the button’s image and title are positioned together within the button bezel.
- [imageScaling](imagescaling.md): The scaling mode applied to make the cell’s image fit the frame of the image view.

# alternateImage (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An alternate image that appears on the button when the button is in an on state.

## Declaration

```objectivec
@property (strong, nullable) NSImage * alternateImage;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if there is no alternate image for the button. Note that some button types don’t display an alternate image, and buttons don’t display images by default. If you use this property to set an image, the button redraws its contents if necessary.

## See Also

### Related Documentation

- [keyEquivalent](keyequivalent.md): The key-equivalent character of the button.
- [setButtonType:](setbuttontype%28__%29.md): Sets the button’s type, which affects its user interface and behavior when clicked.

### Configuring button images

- [image](image.md): The image that appears on the button when it’s in an off state, or `nil` if there is no such image.
- [imagePosition](imageposition.md): The position of the button’s image relative to its title.
- [NSCellImagePosition](../nscontrol/imageposition.md): A constant for specifying the position of a button’s image relative to its title.
- [bordered](isbordered.md): A Boolean value that determines whether the button has a border.
- [transparent](istransparent.md): A Boolean value that indicates whether the button is transparent.
- [bezelStyle](bezelstyle-swift.property.md): The appearance of the button’s border.
- [bezelColor](bezelcolor.md): The color of the button’s bezel, in appearances that support it.
- [showsBorderOnlyWhileMouseInside](showsborderonlywhilemouseinside.md): A Boolean value that determines whether the button displays its border only when the pointer is over it.
- [imageHugsTitle](imagehugstitle.md): A Boolean value that determines how the button’s image and title are positioned together within the button bezel.
- [imageScaling](imagescaling.md): The scaling mode applied to make the cell’s image fit the frame of the image view.
