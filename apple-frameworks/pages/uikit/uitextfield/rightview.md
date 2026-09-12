> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfield/rightview](https://developer.apple.com/documentation/uikit/uitextfield/rightview)

# rightView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The overlay view that displays on the right (or trailing) side of the text field.

## Declaration

```swift
var rightView: UIView? { get set }
```

<a id="Discussion"></a>

## Discussion

You can use the right overlay view to provide indicate additional features available for the text field. For example, you might display a bookmarks button in this location to allow the user to select from a set of predefined items. The right overlay view flips automatically in a right-to-left user interface.

The right overlay view is placed in the rectangle returned by the [rightViewRect(forBounds:)](rightviewrect%28forbounds_%29.md) method of the receiver. The image associated with this property should fit the given rectangle. If it does not fit, it is scaled to fit. If you specify a control for your view, that control tracks and sends actions as usual.

If your right overlay view overlaps a sibling view, such as the clear button, you must use the [UITextField.ViewMode](viewmode.md) to implement proper behavior. For example, if [clearButtonMode](clearbuttonmode.md) is set to display the clear button, you can set the right overlay view’s [rightViewMode](rightviewmode.md) to [UITextField.ViewMode.unlessEditing](viewmode/unlessediting.md) to reveal the clear button during editing when the text field has contents.

## See Also

### Related Documentation

- [rightViewRect(forBounds:)](rightviewrect%28forbounds_%29.md): Returns the drawing location of the text field’s right overlay view.

### Managing overlay views

- [clearButtonMode](clearbuttonmode.md): A mode that controls when the standard Clear button appears in the text field.
- [leftView](leftview.md): The overlay view that displays on the left (or leading) side of the text field.
- [leftViewMode](leftviewmode.md): A mode that controls when the left overlay view appears in the text field.
- [rightViewMode](rightviewmode.md): A mode that controls when the right overlay view appears in the text field.
- [UITextField.ViewMode](viewmode.md): Constants that define when overlay views appear in a text field.

# rightView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The overlay view that displays on the right (or trailing) side of the text field.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIView * rightView;
```

<a id="Discussion"></a>

## Discussion

You can use the right overlay view to provide indicate additional features available for the text field. For example, you might display a bookmarks button in this location to allow the user to select from a set of predefined items. The right overlay view flips automatically in a right-to-left user interface.

The right overlay view is placed in the rectangle returned by the [rightViewRectForBounds:](rightviewrect%28forbounds_%29.md) method of the receiver. The image associated with this property should fit the given rectangle. If it does not fit, it is scaled to fit. If you specify a control for your view, that control tracks and sends actions as usual.

If your right overlay view overlaps a sibling view, such as the clear button, you must use the [UITextFieldViewMode](viewmode.md) to implement proper behavior. For example, if [clearButtonMode](clearbuttonmode.md) is set to display the clear button, you can set the right overlay view’s [rightViewMode](rightviewmode.md) to [UITextFieldViewModeUnlessEditing](viewmode/unlessediting.md) to reveal the clear button during editing when the text field has contents.

## See Also

### Related Documentation

- [rightViewRectForBounds:](rightviewrect%28forbounds_%29.md): Returns the drawing location of the text field’s right overlay view.

### Managing overlay views

- [clearButtonMode](clearbuttonmode.md): A mode that controls when the standard Clear button appears in the text field.
- [leftView](leftview.md): The overlay view that displays on the left (or leading) side of the text field.
- [leftViewMode](leftviewmode.md): A mode that controls when the left overlay view appears in the text field.
- [rightViewMode](rightviewmode.md): A mode that controls when the right overlay view appears in the text field.
- [UITextFieldViewMode](viewmode.md): Constants that define when overlay views appear in a text field.
