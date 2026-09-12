> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/ishiddenorhashiddenancestor](https://developer.apple.com/documentation/appkit/nsview/ishiddenorhashiddenancestor)

# isHiddenOrHasHiddenAncestor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the view is hidden from sight because it, or one of its ancestors, is marked as hidden.

## Declaration

```swift
var isHiddenOrHasHiddenAncestor: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the value of the [isHidden](ishidden.md) property is [true](https://developer.apple.com/documentation/swift/true) for the current view or any of its ancestors in the view hierarchy. This property does not account for other reasons why a view might be considered hidden, such as being positioned outside its superview’s bounds, not having a window, or residing in a window that is offscreen or overlapped by another window.

## See Also

### Showing and Hiding the View

- [isHidden](ishidden.md): A Boolean value indicating whether the view is hidden.
- [viewDidHide()](viewdidhide%28%29.md): Invoked when the view is hidden, either directly, or in response to an ancestor being hidden.
- [viewDidUnhide()](viewdidunhide%28%29.md): Invoked when the view is unhidden, either directly, or in response to an ancestor being unhidden

# hiddenOrHasHiddenAncestor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the view is hidden from sight because it, or one of its ancestors, is marked as hidden.

## Declaration

```objectivec
@property (readonly, getter=isHiddenOrHasHiddenAncestor) BOOL hiddenOrHasHiddenAncestor;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the value of the [hidden](ishidden.md) property is [true](https://developer.apple.com/documentation/swift/true) for the current view or any of its ancestors in the view hierarchy. This property does not account for other reasons why a view might be considered hidden, such as being positioned outside its superview’s bounds, not having a window, or residing in a window that is offscreen or overlapped by another window.

## See Also

### Showing and Hiding the View

- [hidden](ishidden.md): A Boolean value indicating whether the view is hidden.
- [viewDidHide](viewdidhide%28%29.md): Invoked when the view is hidden, either directly, or in response to an ancestor being hidden.
- [viewDidUnhide](viewdidunhide%28%29.md): Invoked when the view is unhidden, either directly, or in response to an ancestor being unhidden
