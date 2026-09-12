> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/ishidden](https://developer.apple.com/documentation/appkit/nsview/ishidden)

# isHidden (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the view is hidden.

## Declaration

```swift
var isHidden: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property reflects the state of the current view only, as set in Interface Builder or through the most recent change to this property. The property does not account for the state of the view’s ancestors in the view hierarchy. Thus, if the view has a hidden ancestor, the value of this property may still be [false](https://developer.apple.com/documentation/swift/false) even though the view itself is not visible. To determine whether a view is effectively hidden, for whatever reason, get the value of the [isHiddenOrHasHiddenAncestor](ishiddenorhashiddenancestor.md) property instead.

A hidden view disappears from its window and does not receive input events. It remains in its superview’s list of subviews, however, and participates in autoresizing as usual. AppKit also disables any cursor rectangle, tool-tip rectangle, or tracking rectangle associated with a hidden view. Hiding a view with subviews has the effect of hiding those subviews and any view descendants they might have. This effect is implicit and does not alter the hidden state of the view’s descendants as reported by this property.

Hiding the view that is the window’s current first responder causes the view’s next valid key view ([nextValidKeyView](nextvalidkeyview.md)) to become the new first responder. A hidden view remains in the [nextKeyView](nextkeyview.md) chain of views it was previously part of, but is ignored during keyboard navigation.

## See Also

### Showing and Hiding the View

- [isHiddenOrHasHiddenAncestor](ishiddenorhashiddenancestor.md): A Boolean value indicating whether the view is hidden from sight because it, or one of its ancestors, is marked as hidden.
- [viewDidHide()](viewdidhide%28%29.md): Invoked when the view is hidden, either directly, or in response to an ancestor being hidden.
- [viewDidUnhide()](viewdidunhide%28%29.md): Invoked when the view is unhidden, either directly, or in response to an ancestor being unhidden

# hidden (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the view is hidden.

## Declaration

```objectivec
@property (getter=isHidden) BOOL hidden;
```

<a id="Discussion"></a>

## Discussion

This property reflects the state of the current view only, as set in Interface Builder or through the most recent change to this property. The property does not account for the state of the view’s ancestors in the view hierarchy. Thus, if the view has a hidden ancestor, the value of this property may still be [false](https://developer.apple.com/documentation/swift/false) even though the view itself is not visible. To determine whether a view is effectively hidden, for whatever reason, get the value of the [hiddenOrHasHiddenAncestor](ishiddenorhashiddenancestor.md) property instead.

A hidden view disappears from its window and does not receive input events. It remains in its superview’s list of subviews, however, and participates in autoresizing as usual. AppKit also disables any cursor rectangle, tool-tip rectangle, or tracking rectangle associated with a hidden view. Hiding a view with subviews has the effect of hiding those subviews and any view descendants they might have. This effect is implicit and does not alter the hidden state of the view’s descendants as reported by this property.

Hiding the view that is the window’s current first responder causes the view’s next valid key view ([nextValidKeyView](nextvalidkeyview.md)) to become the new first responder. A hidden view remains in the [nextKeyView](nextkeyview.md) chain of views it was previously part of, but is ignored during keyboard navigation.

## See Also

### Showing and Hiding the View

- [hiddenOrHasHiddenAncestor](ishiddenorhashiddenancestor.md): A Boolean value indicating whether the view is hidden from sight because it, or one of its ancestors, is marked as hidden.
- [viewDidHide](viewdidhide%28%29.md): Invoked when the view is hidden, either directly, or in response to an ancestor being hidden.
- [viewDidUnhide](viewdidunhide%28%29.md): Invoked when the view is unhidden, either directly, or in response to an ancestor being unhidden
