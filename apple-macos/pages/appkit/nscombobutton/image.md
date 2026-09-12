> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscombobutton/image](https://developer.apple.com/documentation/appkit/nscombobutton/image)

# image (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The image that the button displays.

## Declaration

```swift
var image: NSImage? { get set }
```

<a id="Discussion"></a>

## Discussion

The combo button scales the image to fit within its bounds. Use the [imageScaling](imagescaling.md) property to specify the scaling behavior to use with your image.

## See Also

### Configuring the Button Appearance

- [style](style-swift.property.md): The appearance setting that determines how the button presents its menu .
- [NSComboButton.Style](style-swift.enum.md): Constants that indicate how a combo button presents its menu.
- [title](title.md): The localized string that the button displays.
- [imageScaling](imagescaling.md): The scaling behavior to apply to the button’s image.

# image (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The image that the button displays.

## Declaration

```objectivec
@property (strong, nullable) NSImage * image;
```

<a id="Discussion"></a>

## Discussion

The combo button scales the image to fit within its bounds. Use the [imageScaling](imagescaling.md) property to specify the scaling behavior to use with your image.

## See Also

### Configuring the Button Appearance

- [style](style-swift.property.md): The appearance setting that determines how the button presents its menu .
- [NSComboButtonStyle](style-swift.enum.md): Constants that indicate how a combo button presents its menu.
- [title](title.md): The localized string that the button displays.
- [imageScaling](imagescaling.md): The scaling behavior to apply to the button’s image.
