> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/rememberslastfocusedindexpath](https://developer.apple.com/documentation/uikit/uitableview/rememberslastfocusedindexpath)

# remembersLastFocusedIndexPath (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the table view automatically returns the focus to the cell at the last focused index path.

## Declaration

```swift
var remembersLastFocusedIndexPath: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the table view remembers which index path was focused when focus leaves the table view, and automatically redirects focus back to that index path if focus moves back into the table view. By default, this property is set to [false](https://developer.apple.com/documentation/swift/false).

The effects of this property may be ignored during or immediately after a view controller transition, such as a presentation dismissal or navigation stack pop. In such cases, the view controller attempts to restore focus to the item that was focused prior to the transition (for example, prior to the view controller being presented or pushed), which can take precedence over the effects of this property. To learn how to control or disable this behavior in the view controller, see [restoresFocusAfterTransition](../uiviewcontroller/restoresfocusaftertransition.md).

## See Also

### Working with focus

- [allowsFocus](allowsfocus.md): A Boolean value that determines whether the table view allows its cells to become focused.
- [allowsFocusDuringEditing](allowsfocusduringediting.md): A Boolean value that determines whether the table view allows its cells to become focused in edit mode.
- [selectionFollowsFocus](selectionfollowsfocus.md): A Boolean value that triggers an automatic selection when focus moves to a cell.

# remembersLastFocusedIndexPath (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the table view automatically returns the focus to the cell at the last focused index path.

## Declaration

```objectivec
@property (nonatomic) BOOL remembersLastFocusedIndexPath;
```

<a id="Discussion"></a>

## Discussion

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the table view remembers which index path was focused when focus leaves the table view, and automatically redirects focus back to that index path if focus moves back into the table view. By default, this property is set to [false](https://developer.apple.com/documentation/swift/false).

The effects of this property may be ignored during or immediately after a view controller transition, such as a presentation dismissal or navigation stack pop. In such cases, the view controller attempts to restore focus to the item that was focused prior to the transition (for example, prior to the view controller being presented or pushed), which can take precedence over the effects of this property. To learn how to control or disable this behavior in the view controller, see [restoresFocusAfterTransition](../uiviewcontroller/restoresfocusaftertransition.md).

## See Also

### Working with focus

- [allowsFocus](allowsfocus.md): A Boolean value that determines whether the table view allows its cells to become focused.
- [allowsFocusDuringEditing](allowsfocusduringediting.md): A Boolean value that determines whether the table view allows its cells to become focused in edit mode.
- [selectionFollowsFocus](selectionfollowsfocus.md): A Boolean value that triggers an automatic selection when focus moves to a cell.
