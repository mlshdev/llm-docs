> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextselectiondisplayinteraction/highlightview](https://developer.apple.com/documentation/uikit/uitextselectiondisplayinteraction/highlightview)

# highlightView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

The view that draws the selection highlight behind the rendered text.

## Declaration

```swift
var highlightView: any UIView & UITextSelectionHighlightView { get set }
```

## Mentioned In

- [Adopting system selection UI in custom text views](../adopting-system-selection-ui-in-custom-text-views.md)

<a id="Discussion"></a>

## Discussion

When you install the interaction on your text input view, the system installs a view in this property that provides the standard system highlight appearance for selections. You can replace this view with a custom one you provide to change the appearance of selections.

## See Also

### Getting the system selection views

- [handleViews](handleviews.md): The view that draws the selection handles for the selected text.
- [cursorView](cursorview.md): The view that draws the caret at the text insertion point.

# highlightView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

The view that draws the selection highlight behind the rendered text.

## Declaration

```objectivec
@property (nonatomic, strong) UIView<UITextSelectionHighlightView> * highlightView;
```

## Mentioned In

- [Adopting system selection UI in custom text views](../adopting-system-selection-ui-in-custom-text-views.md)

<a id="Discussion"></a>

## Discussion

When you install the interaction on your text input view, the system installs a view in this property that provides the standard system highlight appearance for selections. You can replace this view with a custom one you provide to change the appearance of selections.

## See Also

### Getting the system selection views

- [handleViews](handleviews.md): The view that draws the selection handles for the selected text.
- [cursorView](cursorview.md): The view that draws the caret at the text insertion point.
