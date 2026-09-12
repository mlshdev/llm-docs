> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfield/leftview](https://developer.apple.com/documentation/uikit/uitextfield/leftview)

# leftView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The overlay view that displays on the left (or leading) side of the text field.

## Declaration

```swift
var leftView: UIView? { get set }
```

<a id="Discussion"></a>

## Discussion

You can use the left overlay view to indicate the intended behavior of the text field. For example, you might display a magnifying glass in this location to indicate that the text field is a search field. The left overlay view flips automatically in a right-to-left user interface.

The left overlay view is placed in the rectangle returned by the [leftViewRect(forBounds:)](leftviewrect%28forbounds_%29.md) method of the receiver. The image associated with this property should fit the given rectangle. If it does not fit, it is scaled to fit. If you specify a control for your view, the control tracks and sends actions as usual.

## See Also

### Related Documentation

- [leftViewRect(forBounds:)](leftviewrect%28forbounds_%29.md): Returns the drawing rectangle of the text field’s left overlay view.

### Managing overlay views

- [clearButtonMode](clearbuttonmode.md): A mode that controls when the standard Clear button appears in the text field.
- [leftViewMode](leftviewmode.md): A mode that controls when the left overlay view appears in the text field.
- [rightView](rightview.md): The overlay view that displays on the right (or trailing) side of the text field.
- [rightViewMode](rightviewmode.md): A mode that controls when the right overlay view appears in the text field.
- [UITextField.ViewMode](viewmode.md): Constants that define when overlay views appear in a text field.

# leftView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The overlay view that displays on the left (or leading) side of the text field.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIView * leftView;
```

<a id="Discussion"></a>

## Discussion

You can use the left overlay view to indicate the intended behavior of the text field. For example, you might display a magnifying glass in this location to indicate that the text field is a search field. The left overlay view flips automatically in a right-to-left user interface.

The left overlay view is placed in the rectangle returned by the [leftViewRectForBounds:](leftviewrect%28forbounds_%29.md) method of the receiver. The image associated with this property should fit the given rectangle. If it does not fit, it is scaled to fit. If you specify a control for your view, the control tracks and sends actions as usual.

## See Also

### Related Documentation

- [leftViewRectForBounds:](leftviewrect%28forbounds_%29.md): Returns the drawing rectangle of the text field’s left overlay view.

### Managing overlay views

- [clearButtonMode](clearbuttonmode.md): A mode that controls when the standard Clear button appears in the text field.
- [leftViewMode](leftviewmode.md): A mode that controls when the left overlay view appears in the text field.
- [rightView](rightview.md): The overlay view that displays on the right (or trailing) side of the text field.
- [rightViewMode](rightviewmode.md): A mode that controls when the right overlay view appears in the text field.
- [UITextFieldViewMode](viewmode.md): Constants that define when overlay views appear in a text field.
