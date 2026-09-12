> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/viewdidunhide()](https://developer.apple.com/documentation/appkit/nsview/viewdidunhide())

# viewDidUnhide() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Invoked when the view is unhidden, either directly, or in response to an ancestor being unhidden

## Declaration

```swift
func viewDidUnhide()
```

<a id="Discussion"></a>

## Discussion

The view receives this message when its `isHiddenOrHasHiddenAncestor` state goes from [true](https://developer.apple.com/documentation/swift/true) to [false](https://developer.apple.com/documentation/swift/false).  This can happen when the view or an ancestor is marked as not hidden, or when the view or an ancestor is removed from its containing view hierarchy.

## See Also

### Showing and Hiding the View

- [isHidden](ishidden.md): A Boolean value indicating whether the view is hidden.
- [isHiddenOrHasHiddenAncestor](ishiddenorhashiddenancestor.md): A Boolean value indicating whether the view is hidden from sight because it, or one of its ancestors, is marked as hidden.
- [viewDidHide()](viewdidhide%28%29.md): Invoked when the view is hidden, either directly, or in response to an ancestor being hidden.

# viewDidUnhide (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Invoked when the view is unhidden, either directly, or in response to an ancestor being unhidden

## Declaration

```objectivec
- (void) viewDidUnhide;
```

<a id="Discussion"></a>

## Discussion

The view receives this message when its `isHiddenOrHasHiddenAncestor` state goes from [true](https://developer.apple.com/documentation/swift/true) to [false](https://developer.apple.com/documentation/swift/false).  This can happen when the view or an ancestor is marked as not hidden, or when the view or an ancestor is removed from its containing view hierarchy.

## See Also

### Showing and Hiding the View

- [hidden](ishidden.md): A Boolean value indicating whether the view is hidden.
- [hiddenOrHasHiddenAncestor](ishiddenorhashiddenancestor.md): A Boolean value indicating whether the view is hidden from sight because it, or one of its ancestors, is marked as hidden.
- [viewDidHide](viewdidhide%28%29.md): Invoked when the view is hidden, either directly, or in response to an ancestor being hidden.
