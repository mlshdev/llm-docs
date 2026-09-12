> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfield/clearbuttonmode](https://developer.apple.com/documentation/uikit/uitextfield/clearbuttonmode)

# clearButtonMode (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A mode that controls when the standard Clear button appears in the text field.

## Declaration

```swift
var clearButtonMode: UITextField.ViewMode { get set }
```

<a id="Discussion"></a>

## Discussion

The standard clear button displays at the right side of the text field when the text field has contents, providing a way for the user to remove text quickly.

This button appears automatically based on the value of this property. The default value for this property is [UITextField.ViewMode.never](viewmode/never.md).

## See Also

### Managing overlay views

- [leftView](leftview.md): The overlay view that displays on the left (or leading) side of the text field.
- [leftViewMode](leftviewmode.md): A mode that controls when the left overlay view appears in the text field.
- [rightView](rightview.md): The overlay view that displays on the right (or trailing) side of the text field.
- [rightViewMode](rightviewmode.md): A mode that controls when the right overlay view appears in the text field.
- [UITextField.ViewMode](viewmode.md): Constants that define when overlay views appear in a text field.

# clearButtonMode (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A mode that controls when the standard Clear button appears in the text field.

## Declaration

```objectivec
@property (nonatomic) UITextFieldViewMode clearButtonMode;
```

<a id="Discussion"></a>

## Discussion

The standard clear button displays at the right side of the text field when the text field has contents, providing a way for the user to remove text quickly.

This button appears automatically based on the value of this property. The default value for this property is [UITextFieldViewModeNever](viewmode/never.md).

## See Also

### Managing overlay views

- [leftView](leftview.md): The overlay view that displays on the left (or leading) side of the text field.
- [leftViewMode](leftviewmode.md): A mode that controls when the left overlay view appears in the text field.
- [rightView](rightview.md): The overlay view that displays on the right (or trailing) side of the text field.
- [rightViewMode](rightviewmode.md): A mode that controls when the right overlay view appears in the text field.
- [UITextFieldViewMode](viewmode.md): Constants that define when overlay views appear in a text field.
