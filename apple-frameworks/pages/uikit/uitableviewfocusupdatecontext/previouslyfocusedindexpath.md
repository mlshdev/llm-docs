> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewfocusupdatecontext/previouslyfocusedindexpath](https://developer.apple.com/documentation/uikit/uitableviewfocusupdatecontext/previouslyfocusedindexpath)

# previouslyFocusedIndexPath (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns the index path of the cell containing the context’s previously focused view.

## Declaration

```swift
var previouslyFocusedIndexPath: IndexPath? { get }
```

<a id="Discussion"></a>

## Discussion

This property returns the index path only when the [previouslyFocusedView](../uifocusupdatecontext/previouslyfocusedview.md) is located within a cell of the table view. Otherwise, it returns `nil`. This can happen if focus is moving into the table view, because the [previouslyFocusedView](../uifocusupdatecontext/previouslyfocusedview.md) isn’t associated with an index path in this table view.

When focus is moving from one table view to another, each table view delegate is called with [previouslyFocusedIndexPath](previouslyfocusedindexpath.md) and [nextFocusedIndexPath](nextfocusedindexpath.md) configured for its specific table view.

## See Also

### Locating focusable items in a table view

- [nextFocusedIndexPath](nextfocusedindexpath.md): Returns the index path of the cell containing the context’s next focused view.

# previouslyFocusedIndexPath (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns the index path of the cell containing the context’s previously focused view.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSIndexPath * previouslyFocusedIndexPath;
```

<a id="Discussion"></a>

## Discussion

This property returns the index path only when the [previouslyFocusedView](../uifocusupdatecontext/previouslyfocusedview.md) is located within a cell of the table view. Otherwise, it returns `nil`. This can happen if focus is moving into the table view, because the [previouslyFocusedView](../uifocusupdatecontext/previouslyfocusedview.md) isn’t associated with an index path in this table view.

When focus is moving from one table view to another, each table view delegate is called with [previouslyFocusedIndexPath](previouslyfocusedindexpath.md) and [nextFocusedIndexPath](nextfocusedindexpath.md) configured for its specific table view.

## See Also

### Locating focusable items in a table view

- [nextFocusedIndexPath](nextfocusedindexpath.md): Returns the index path of the cell containing the context’s next focused view.
