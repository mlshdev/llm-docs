> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/istransparent](https://developer.apple.com/documentation/appkit/nsbutton/istransparent)

# isTransparent (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the button is transparent.

## Declaration

```swift
var isTransparent: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the button is transparent, [false](https://developer.apple.com/documentation/swift/false) otherwise. A transparent button never draws itself, but it receives mouse events, sends its action, and tracks the mouse properly. A transparent button can be useful for sensitizing an area on the screen so that an action gets sent to a target when the area receives a mouse click. Setting this property causes the button to redraw if necessary.

## See Also

### Configuring button images

- [image](image.md): The image that appears on the button when it’s in an off state, or `nil` if there is no such image.
- [alternateImage](alternateimage.md): An alternate image that appears on the button when the button is in an on state.
- [imagePosition](imageposition.md): The position of the button’s image relative to its title.
- [NSControl.ImagePosition](../nscontrol/imageposition.md): A constant for specifying the position of a button’s image relative to its title.
- [isBordered](isbordered.md): A Boolean value that determines whether the button has a border.
- [bezelStyle](bezelstyle-swift.property.md): The appearance of the button’s border.
- [bezelColor](bezelcolor.md): The color of the button’s bezel, in appearances that support it.
- [showsBorderOnlyWhileMouseInside](showsborderonlywhilemouseinside.md): A Boolean value that determines whether the button displays its border only when the pointer is over it.
- [imageHugsTitle](imagehugstitle.md): A Boolean value that determines how the button’s image and title are positioned together within the button bezel.
- [imageScaling](imagescaling.md): The scaling mode applied to make the cell’s image fit the frame of the image view.

# transparent (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the button is transparent.

## Declaration

```objectivec
@property (getter=isTransparent) BOOL transparent;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the button is transparent, [false](https://developer.apple.com/documentation/swift/false) otherwise. A transparent button never draws itself, but it receives mouse events, sends its action, and tracks the mouse properly. A transparent button can be useful for sensitizing an area on the screen so that an action gets sent to a target when the area receives a mouse click. Setting this property causes the button to redraw if necessary.

## See Also

### Configuring button images

- [image](image.md): The image that appears on the button when it’s in an off state, or `nil` if there is no such image.
- [alternateImage](alternateimage.md): An alternate image that appears on the button when the button is in an on state.
- [imagePosition](imageposition.md): The position of the button’s image relative to its title.
- [NSCellImagePosition](../nscontrol/imageposition.md): A constant for specifying the position of a button’s image relative to its title.
- [bordered](isbordered.md): A Boolean value that determines whether the button has a border.
- [bezelStyle](bezelstyle-swift.property.md): The appearance of the button’s border.
- [bezelColor](bezelcolor.md): The color of the button’s bezel, in appearances that support it.
- [showsBorderOnlyWhileMouseInside](showsborderonlywhilemouseinside.md): A Boolean value that determines whether the button displays its border only when the pointer is over it.
- [imageHugsTitle](imagehugstitle.md): A Boolean value that determines how the button’s image and title are positioned together within the button bezel.
- [imageScaling](imagescaling.md): The scaling mode applied to make the cell’s image fit the frame of the image view.
