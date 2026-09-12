> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextselectiondisplayinteraction/handleviews](https://developer.apple.com/documentation/uikit/uitextselectiondisplayinteraction/handleviews)

# handleViews (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

The view that draws the selection handles for the selected text.

## Declaration

```swift
var handleViews: [any UIView & UITextSelectionHandleView] { get set }
```

## Mentioned In

- [Adopting system selection UI in custom text views](../adopting-system-selection-ui-in-custom-text-views.md)

<a id="Discussion"></a>

## Discussion

When you install the interaction on your text input view, the system installs two views in this property that provide the standard system appearance for the selection handles. You can replace these views with custom ones you provide to change the appearance of the selection handles.

> **Important**

>  When assigning a value to this property, you must provide exactly two views. One view provides the leading selection handle and the other provides the trailing selection handle.

## See Also

### Getting the system selection views

- [highlightView](highlightview.md): The view that draws the selection highlight behind the rendered text.
- [cursorView](cursorview.md): The view that draws the caret at the text insertion point.

# handleViews (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

The view that draws the selection handles for the selected text.

## Declaration

```objectivec
@property (nonatomic, strong) NSArray<UIView<UITextSelectionHandleView> *> * handleViews;
```

## Mentioned In

- [Adopting system selection UI in custom text views](../adopting-system-selection-ui-in-custom-text-views.md)

<a id="Discussion"></a>

## Discussion

When you install the interaction on your text input view, the system installs two views in this property that provide the standard system appearance for the selection handles. You can replace these views with custom ones you provide to change the appearance of the selection handles.

> **Important**

>  When assigning a value to this property, you must provide exactly two views. One view provides the leading selection handle and the other provides the trailing selection handle.

## See Also

### Getting the system selection views

- [highlightView](highlightview.md): The view that draws the selection highlight behind the rendered text.
- [cursorView](cursorview.md): The view that draws the caret at the text insertion point.
