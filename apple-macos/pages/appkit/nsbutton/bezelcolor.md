> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/bezelcolor](https://developer.apple.com/documentation/appkit/nsbutton/bezelcolor)

# bezelColor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The color of the button’s bezel, in appearances that support it.

## Declaration

```swift
@NSCopying var bezelColor: NSColor? { get set }
```

## See Also

### Configuring button images

- [image](image.md): The image that appears on the button when it’s in an off state, or `nil` if there is no such image.
- [alternateImage](alternateimage.md): An alternate image that appears on the button when the button is in an on state.
- [imagePosition](imageposition.md): The position of the button’s image relative to its title.
- [NSControl.ImagePosition](../nscontrol/imageposition.md): A constant for specifying the position of a button’s image relative to its title.
- [isBordered](isbordered.md): A Boolean value that determines whether the button has a border.
- [isTransparent](istransparent.md): A Boolean value that indicates whether the button is transparent.
- [bezelStyle](bezelstyle-swift.property.md): The appearance of the button’s border.
- [showsBorderOnlyWhileMouseInside](showsborderonlywhilemouseinside.md): A Boolean value that determines whether the button displays its border only when the pointer is over it.
- [imageHugsTitle](imagehugstitle.md): A Boolean value that determines how the button’s image and title are positioned together within the button bezel.
- [imageScaling](imagescaling.md): The scaling mode applied to make the cell’s image fit the frame of the image view.

# bezelColor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The color of the button’s bezel, in appearances that support it.

## Declaration

```objectivec
@property (copy, nullable) NSColor * bezelColor;
```

## See Also

### Configuring button images

- [image](image.md): The image that appears on the button when it’s in an off state, or `nil` if there is no such image.
- [alternateImage](alternateimage.md): An alternate image that appears on the button when the button is in an on state.
- [imagePosition](imageposition.md): The position of the button’s image relative to its title.
- [NSCellImagePosition](../nscontrol/imageposition.md): A constant for specifying the position of a button’s image relative to its title.
- [bordered](isbordered.md): A Boolean value that determines whether the button has a border.
- [transparent](istransparent.md): A Boolean value that indicates whether the button is transparent.
- [bezelStyle](bezelstyle-swift.property.md): The appearance of the button’s border.
- [showsBorderOnlyWhileMouseInside](showsborderonlywhilemouseinside.md): A Boolean value that determines whether the button displays its border only when the pointer is over it.
- [imageHugsTitle](imagehugstitle.md): A Boolean value that determines how the button’s image and title are positioned together within the button bezel.
- [imageScaling](imagescaling.md): The scaling mode applied to make the cell’s image fit the frame of the image view.
