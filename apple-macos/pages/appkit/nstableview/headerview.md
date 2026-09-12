> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/headerview](https://developer.apple.com/documentation/appkit/nstableview/headerview)

# headerView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The view object used to draw headers over columns.

## Declaration

```swift
var headerView: NSTableHeaderView? { get set }
```

<a id="Discussion"></a>

## Discussion

To configure a table without a header view or to remove the table view’s current header view, set the value of this property to `nil`. For more information about header views, see [NSTableHeaderView](../nstableheaderview.md).

## See Also

### Setting Auxiliary Views

- [cornerView](cornerview.md): The view used to draw the area to the right of the column headers and above the vertical scroller of the enclosing scroll view.

# headerView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The view object used to draw headers over columns.

## Declaration

```objectivec
@property (strong, nullable) NSTableHeaderView * headerView;
```

<a id="Discussion"></a>

## Discussion

To configure a table without a header view or to remove the table view’s current header view, set the value of this property to `nil`. For more information about header views, see [NSTableHeaderView](../nstableheaderview.md).

## See Also

### Setting Auxiliary Views

- [cornerView](cornerview.md): The view used to draw the area to the right of the column headers and above the vertical scroller of the enclosing scroll view.
