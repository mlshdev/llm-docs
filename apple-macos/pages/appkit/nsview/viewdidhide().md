> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/viewdidhide()](https://developer.apple.com/documentation/appkit/nsview/viewdidhide())

# viewDidHide() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Invoked when the view is hidden, either directly, or in response to an ancestor being hidden.

## Declaration

```swift
func viewDidHide()
```

<a id="Discussion"></a>

## Discussion

The view receives this message when its [isHiddenOrHasHiddenAncestor](ishiddenorhashiddenancestor.md) property changes from [false](https://developer.apple.com/documentation/swift/false) to [true](https://developer.apple.com/documentation/swift/true). This happens when the view or an ancestor is marked as hidden, or when the view or an ancestor is inserted into a new view hierarchy.

## See Also

### Showing and Hiding the View

- [isHidden](ishidden.md): A Boolean value indicating whether the view is hidden.
- [isHiddenOrHasHiddenAncestor](ishiddenorhashiddenancestor.md): A Boolean value indicating whether the view is hidden from sight because it, or one of its ancestors, is marked as hidden.
- [viewDidUnhide()](viewdidunhide%28%29.md): Invoked when the view is unhidden, either directly, or in response to an ancestor being unhidden

# viewDidHide (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Invoked when the view is hidden, either directly, or in response to an ancestor being hidden.

## Declaration

```objectivec
- (void) viewDidHide;
```

<a id="Discussion"></a>

## Discussion

The view receives this message when its [hiddenOrHasHiddenAncestor](ishiddenorhashiddenancestor.md) property changes from [false](https://developer.apple.com/documentation/swift/false) to [true](https://developer.apple.com/documentation/swift/true). This happens when the view or an ancestor is marked as hidden, or when the view or an ancestor is inserted into a new view hierarchy.

## See Also

### Showing and Hiding the View

- [hidden](ishidden.md): A Boolean value indicating whether the view is hidden.
- [hiddenOrHasHiddenAncestor](ishiddenorhashiddenancestor.md): A Boolean value indicating whether the view is hidden from sight because it, or one of its ancestors, is marked as hidden.
- [viewDidUnhide](viewdidunhide%28%29.md): Invoked when the view is unhidden, either directly, or in response to an ancestor being unhidden
