> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfield/borderstyle-swift.property](https://developer.apple.com/documentation/uikit/uitextfield/borderstyle-swift.property)

# borderStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The border style for the text field.

## Declaration

```swift
var borderStyle: UITextField.BorderStyle { get set }
```

<a id="Discussion"></a>

## Discussion

The default value for this property is [UITextField.BorderStyle.none](borderstyle-swift.enum/none.md). If the value is set to the [UITextField.BorderStyle.roundedRect](borderstyle-swift.enum/roundedrect.md) style, the custom background image associated with the text field is ignored.

## See Also

### Setting the view’s background appearance

- [background](background.md): The image that represents the background appearance of the text field when it is in an enabled state.
- [disabledBackground](disabledbackground.md): The image that represents the background appearance of the text field when it is in a disabled state.

# borderStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The border style for the text field.

## Declaration

```objectivec
@property (nonatomic) UITextBorderStyle borderStyle;
```

<a id="Discussion"></a>

## Discussion

The default value for this property is [UITextBorderStyleNone](borderstyle-swift.enum/none.md). If the value is set to the [UITextBorderStyleRoundedRect](borderstyle-swift.enum/roundedrect.md) style, the custom background image associated with the text field is ignored.

## See Also

### Setting the view’s background appearance

- [background](background.md): The image that represents the background appearance of the text field when it is in an enabled state.
- [disabledBackground](disabledbackground.md): The image that represents the background appearance of the text field when it is in a disabled state.
