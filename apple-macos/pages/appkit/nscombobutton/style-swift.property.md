> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscombobutton/style-swift.property](https://developer.apple.com/documentation/appkit/nscombobutton/style-swift.property)

# style (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The appearance setting that determines how the button presents its menu .

## Declaration

```swift
var style: NSComboButton.Style { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [NSComboButton.Style.split](style-swift.enum/split.md).

## See Also

### Configuring the Button Appearance

- [NSComboButton.Style](style-swift.enum.md): Constants that indicate how a combo button presents its menu.
- [title](title.md): The localized string that the button displays.
- [image](image.md): The image that the button displays.
- [imageScaling](imagescaling.md): The scaling behavior to apply to the button’s image.

# style (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The appearance setting that determines how the button presents its menu .

## Declaration

```objectivec
@property NSComboButtonStyle style;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [NSComboButtonStyleSplit](style-swift.enum/split.md).

## See Also

### Configuring the Button Appearance

- [NSComboButtonStyle](style-swift.enum.md): Constants that indicate how a combo button presents its menu.
- [title](title.md): The localized string that the button displays.
- [image](image.md): The image that the button displays.
- [imageScaling](imagescaling.md): The scaling behavior to apply to the button’s image.
