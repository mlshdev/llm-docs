> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfield/leftviewmode](https://developer.apple.com/documentation/uikit/uitextfield/leftviewmode)

# leftViewMode (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A mode that controls when the left overlay view appears in the text field.

## Declaration

```swift
var leftViewMode: UITextField.ViewMode { get set }
```

<a id="Discussion"></a>

## Discussion

The default value for this property is [UITextField.ViewMode.never](viewmode/never.md). Note that the left overlay view flips automatically in a right-to-left user interface.

## See Also

### Managing overlay views

- [clearButtonMode](clearbuttonmode.md): A mode that controls when the standard Clear button appears in the text field.
- [leftView](leftview.md): The overlay view that displays on the left (or leading) side of the text field.
- [rightView](rightview.md): The overlay view that displays on the right (or trailing) side of the text field.
- [rightViewMode](rightviewmode.md): A mode that controls when the right overlay view appears in the text field.
- [UITextField.ViewMode](viewmode.md): Constants that define when overlay views appear in a text field.

# leftViewMode (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A mode that controls when the left overlay view appears in the text field.

## Declaration

```objectivec
@property (nonatomic) UITextFieldViewMode leftViewMode;
```

<a id="Discussion"></a>

## Discussion

The default value for this property is [UITextFieldViewModeNever](viewmode/never.md). Note that the left overlay view flips automatically in a right-to-left user interface.

## See Also

### Managing overlay views

- [clearButtonMode](clearbuttonmode.md): A mode that controls when the standard Clear button appears in the text field.
- [leftView](leftview.md): The overlay view that displays on the left (or leading) side of the text field.
- [rightView](rightview.md): The overlay view that displays on the right (or trailing) side of the text field.
- [rightViewMode](rightviewmode.md): A mode that controls when the right overlay view appears in the text field.
- [UITextFieldViewMode](viewmode.md): Constants that define when overlay views appear in a text field.
