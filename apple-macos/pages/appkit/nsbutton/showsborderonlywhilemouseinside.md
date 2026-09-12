> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/showsborderonlywhilemouseinside](https://developer.apple.com/documentation/appkit/nsbutton/showsborderonlywhilemouseinside)

# showsBorderOnlyWhileMouseInside (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that determines whether the button displays its border only when the pointer is over it.

## Declaration

```swift
var showsBorderOnlyWhileMouseInside: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the button’s border is displayed only when the pointer is over the button and the button is active. The value is [false](https://developer.apple.com/documentation/swift/false) if the border is displayed all the time, regardless of the position of the pointer. By default, this method returns [false](https://developer.apple.com/documentation/swift/false).

If [isBordered](isbordered.md) is [false](https://developer.apple.com/documentation/swift/false), the border is never displayed, regardless of the value of [showsBorderOnlyWhileMouseInside](showsborderonlywhilemouseinside.md).

## See Also

### Configuring button images

- [image](image.md): The image that appears on the button when it’s in an off state, or `nil` if there is no such image.
- [alternateImage](alternateimage.md): An alternate image that appears on the button when the button is in an on state.
- [imagePosition](imageposition.md): The position of the button’s image relative to its title.
- [NSControl.ImagePosition](../nscontrol/imageposition.md): A constant for specifying the position of a button’s image relative to its title.
- [isBordered](isbordered.md): A Boolean value that determines whether the button has a border.
- [isTransparent](istransparent.md): A Boolean value that indicates whether the button is transparent.
- [bezelStyle](bezelstyle-swift.property.md): The appearance of the button’s border.
- [bezelColor](bezelcolor.md): The color of the button’s bezel, in appearances that support it.
- [imageHugsTitle](imagehugstitle.md): A Boolean value that determines how the button’s image and title are positioned together within the button bezel.
- [imageScaling](imagescaling.md): The scaling mode applied to make the cell’s image fit the frame of the image view.

# showsBorderOnlyWhileMouseInside (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that determines whether the button displays its border only when the pointer is over it.

## Declaration

```objectivec
@property BOOL showsBorderOnlyWhileMouseInside;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the button’s border is displayed only when the pointer is over the button and the button is active. The value is [false](https://developer.apple.com/documentation/swift/false) if the border is displayed all the time, regardless of the position of the pointer. By default, this method returns [false](https://developer.apple.com/documentation/swift/false).

If [bordered](isbordered.md) is [false](https://developer.apple.com/documentation/swift/false), the border is never displayed, regardless of the value of [showsBorderOnlyWhileMouseInside](showsborderonlywhilemouseinside.md).

## See Also

### Configuring button images

- [image](image.md): The image that appears on the button when it’s in an off state, or `nil` if there is no such image.
- [alternateImage](alternateimage.md): An alternate image that appears on the button when the button is in an on state.
- [imagePosition](imageposition.md): The position of the button’s image relative to its title.
- [NSCellImagePosition](../nscontrol/imageposition.md): A constant for specifying the position of a button’s image relative to its title.
- [bordered](isbordered.md): A Boolean value that determines whether the button has a border.
- [transparent](istransparent.md): A Boolean value that indicates whether the button is transparent.
- [bezelStyle](bezelstyle-swift.property.md): The appearance of the button’s border.
- [bezelColor](bezelcolor.md): The color of the button’s bezel, in appearances that support it.
- [imageHugsTitle](imagehugstitle.md): A Boolean value that determines how the button’s image and title are positioned together within the button bezel.
- [imageScaling](imagescaling.md): The scaling mode applied to make the cell’s image fit the frame of the image view.
