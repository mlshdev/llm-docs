> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextselectiondisplayinteraction/cursorview](https://developer.apple.com/documentation/uikit/uitextselectiondisplayinteraction/cursorview)

# cursorView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

The view that draws the caret at the text insertion point.

## Declaration

```swift
var cursorView: any UIView & UITextCursorView { get set }
```

## Mentioned In

- [Adopting system selection UI in custom text views](../adopting-system-selection-ui-in-custom-text-views.md)

<a id="Discussion"></a>

## Discussion

When you install the interaction on your text input view, the system installs a view in this property that provides the standard system appearance for the caret at the insertion point. You can replace this view with a custom one you provide to change the appearance of the caret.

## See Also

### Getting the system selection views

- [highlightView](highlightview.md): The view that draws the selection highlight behind the rendered text.
- [handleViews](handleviews.md): The view that draws the selection handles for the selected text.

# cursorView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

The view that draws the caret at the text insertion point.

## Declaration

```objectivec
@property (nonatomic, strong) UIView<UITextCursorView> * cursorView;
```

## Mentioned In

- [Adopting system selection UI in custom text views](../adopting-system-selection-ui-in-custom-text-views.md)

<a id="Discussion"></a>

## Discussion

When you install the interaction on your text input view, the system installs a view in this property that provides the standard system appearance for the caret at the insertion point. You can replace this view with a custom one you provide to change the appearance of the caret.

## See Also

### Getting the system selection views

- [highlightView](highlightview.md): The view that draws the selection highlight behind the rendered text.
- [handleViews](handleviews.md): The view that draws the selection handles for the selected text.
