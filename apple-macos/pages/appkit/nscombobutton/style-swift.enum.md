> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscombobutton/style-swift.enum](https://developer.apple.com/documentation/appkit/nscombobutton/style-swift.enum)

# NSComboButton.Style (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 13.0+

Constants that indicate how a combo button presents its menu.

## Declaration

```swift
enum Style
```

## Topics

### Getting the Combo Button Styles

- [NSComboButton.Style.split](style-swift.enum/split.md): A style that separates the button’s title and image from the menu indicator people use to activate the button.
- [NSComboButton.Style.unified](style-swift.enum/unified.md): A style that unifies the button’s title and image with the menu indicator.

### Initializers

- [init(rawValue:)](style-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the Button Appearance

- [style](style-swift.property.md): The appearance setting that determines how the button presents its menu .
- [title](title.md): The localized string that the button displays.
- [image](image.md): The image that the button displays.
- [imageScaling](imagescaling.md): The scaling behavior to apply to the button’s image.

# NSComboButtonStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that indicate how a combo button presents its menu.

## Declaration

```objectivec
enum NSComboButtonStyle : NSInteger;
```

## Topics

### Getting the Combo Button Styles

- [NSComboButtonStyleSplit](style-swift.enum/split.md): A style that separates the button’s title and image from the menu indicator people use to activate the button.
- [NSComboButtonStyleUnified](style-swift.enum/unified.md): A style that unifies the button’s title and image with the menu indicator.

## See Also

### Configuring the Button Appearance

- [style](style-swift.property.md): The appearance setting that determines how the button presents its menu .
- [title](title.md): The localized string that the button displays.
- [image](image.md): The image that the button displays.
- [imageScaling](imagescaling.md): The scaling behavior to apply to the button’s image.
