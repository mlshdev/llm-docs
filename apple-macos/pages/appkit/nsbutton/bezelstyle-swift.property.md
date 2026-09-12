> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/bezelstyle-swift.property](https://developer.apple.com/documentation/appkit/nsbutton/bezelstyle-swift.property)

# bezelStyle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The appearance of the button’s border.

## Declaration

```swift
var bezelStyle: NSButton.BezelStyle { get set }
```

<a id="return-value"></a>

## Return Value

The bezel style of the button. See [NSButton.BezelStyle](bezelstyle-swift.enum.md) in [NSButtonCell](../nsbuttoncell.md) for the list of possible values.

<a id="discussion"></a>

## Discussion

Note that if the button is not bordered, the bezel style is ignored.

## See Also

### Configuring button images

- [image](image.md): The image that appears on the button when it’s in an off state, or `nil` if there is no such image.
- [alternateImage](alternateimage.md): An alternate image that appears on the button when the button is in an on state.
- [imagePosition](imageposition.md): The position of the button’s image relative to its title.
- [NSControl.ImagePosition](../nscontrol/imageposition.md): A constant for specifying the position of a button’s image relative to its title.
- [isBordered](isbordered.md): A Boolean value that determines whether the button has a border.
- [isTransparent](istransparent.md): A Boolean value that indicates whether the button is transparent.
- [bezelColor](bezelcolor.md): The color of the button’s bezel, in appearances that support it.
- [showsBorderOnlyWhileMouseInside](showsborderonlywhilemouseinside.md): A Boolean value that determines whether the button displays its border only when the pointer is over it.
- [imageHugsTitle](imagehugstitle.md): A Boolean value that determines how the button’s image and title are positioned together within the button bezel.
- [imageScaling](imagescaling.md): The scaling mode applied to make the cell’s image fit the frame of the image view.

# bezelStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The appearance of the button’s border.

## Declaration

```objectivec
@property NSBezelStyle bezelStyle;
```

<a id="return-value"></a>

## Return Value

The bezel style of the button. See [NSBezelStyle](bezelstyle-swift.enum.md) in [NSButtonCell](../nsbuttoncell.md) for the list of possible values.

<a id="discussion"></a>

## Discussion

Note that if the button is not bordered, the bezel style is ignored.

## See Also

### Configuring button images

- [image](image.md): The image that appears on the button when it’s in an off state, or `nil` if there is no such image.
- [alternateImage](alternateimage.md): An alternate image that appears on the button when the button is in an on state.
- [imagePosition](imageposition.md): The position of the button’s image relative to its title.
- [NSCellImagePosition](../nscontrol/imageposition.md): A constant for specifying the position of a button’s image relative to its title.
- [bordered](isbordered.md): A Boolean value that determines whether the button has a border.
- [transparent](istransparent.md): A Boolean value that indicates whether the button is transparent.
- [bezelColor](bezelcolor.md): The color of the button’s bezel, in appearances that support it.
- [showsBorderOnlyWhileMouseInside](showsborderonlywhilemouseinside.md): A Boolean value that determines whether the button displays its border only when the pointer is over it.
- [imageHugsTitle](imagehugstitle.md): A Boolean value that determines how the button’s image and title are positioned together within the button bezel.
- [imageScaling](imagescaling.md): The scaling mode applied to make the cell’s image fit the frame of the image view.
