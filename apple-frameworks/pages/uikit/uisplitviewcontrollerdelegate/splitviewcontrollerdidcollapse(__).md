> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontrollerdidcollapse(_:)](https://developer.apple.com/documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontrollerdidcollapse(_:))

# splitViewControllerDidCollapse(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate that the split view controller interface has collapsed.

## Declaration

```swift
optional func splitViewControllerDidCollapse(_ svc: UISplitViewController)
```

## Parameters

- `svc`: The split view controller whose interface has collapsed.

<a id="Discussion"></a>

## Discussion

This delegate method only applies to column-style split view interfaces. For more information, see [Split view styles](../uisplitviewcontroller.md#Split-view-styles).

The split view controller calls this method after its interface has collapsed, meaning that [isCollapsed](../uisplitviewcontroller/iscollapsed.md) is [true](https://developer.apple.com/documentation/swift/true). Use this method to perform any customization associated with the collapsed interface.

## See Also

### Collapsing the interface

- [splitViewController(\_:topColumnForCollapsingToProposedTopColumn:)](splitviewcontroller%28__topcolumnforcollapsingtoproposedtopcolumn_%29.md): Asks the delegate to provide the column to display after the split view interface collapses.
- [splitViewController(\_:willHide:)](splitviewcontroller%28__willhide_%29.md): Tells the delegate that the specified column is about to be hidden.
- [splitViewController(\_:didHide:)](splitviewcontroller%28__didhide_%29.md): Tells the delegate that the system completed hiding the specified column.

# splitViewControllerDidCollapse: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate that the split view controller interface has collapsed.

## Declaration

```objectivec
- (void) splitViewControllerDidCollapse:(UISplitViewController *) svc;
```

## Parameters

- `svc`: The split view controller whose interface has collapsed.

<a id="Discussion"></a>

## Discussion

This delegate method only applies to column-style split view interfaces. For more information, see [Split view styles](../uisplitviewcontroller.md#Split-view-styles).

The split view controller calls this method after its interface has collapsed, meaning that [collapsed](../uisplitviewcontroller/iscollapsed.md) is [true](https://developer.apple.com/documentation/swift/true). Use this method to perform any customization associated with the collapsed interface.

## See Also

### Collapsing the interface

- [splitViewController:topColumnForCollapsingToProposedTopColumn:](splitviewcontroller%28__topcolumnforcollapsingtoproposedtopcolumn_%29.md): Asks the delegate to provide the column to display after the split view interface collapses.
- [splitViewController:willHideColumn:](splitviewcontroller%28__willhide_%29.md): Tells the delegate that the specified column is about to be hidden.
- [splitViewController:didHideColumn:](splitviewcontroller%28__didhide_%29.md): Tells the delegate that the system completed hiding the specified column.
