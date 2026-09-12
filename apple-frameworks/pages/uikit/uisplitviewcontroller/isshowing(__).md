> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontroller/isshowing(_:)](https://developer.apple.com/documentation/uikit/uisplitviewcontroller/isshowing(_:))

# isShowing(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

A Boolean value that indicates whether the split view interface is showing the specified column.

## Declaration

```swift
func isShowing(_ column: UISplitViewController.Column) -> Bool
```

## See Also

### Displaying the child view controllers

- [show(\_:)](show%28__%29.md): Presents the view controller in the specified column of the split view interface.
- [hide(\_:)](hide%28__%29.md): Dismisses the view controller in the specified column of the split view interface.
- [show(\_:sender:)](show%28__sender_%29.md): Presents the specified view controller as the primary view controller in the split view interface.
- [showDetailViewController(\_:sender:)](showdetailviewcontroller%28__sender_%29.md): Presents the specified view controller as the secondary view controller of the split view interface.

# isShowingColumn: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

A Boolean value that indicates whether the split view interface is showing the specified column.

## Declaration

```objectivec
- (BOOL) isShowingColumn:(UISplitViewControllerColumn) column;
```

## See Also

### Displaying the child view controllers

- [showColumn:](show%28__%29.md): Presents the view controller in the specified column of the split view interface.
- [hideColumn:](hide%28__%29.md): Dismisses the view controller in the specified column of the split view interface.
- [showViewController:sender:](show%28__sender_%29.md): Presents the specified view controller as the primary view controller in the split view interface.
- [showDetailViewController:sender:](showdetailviewcontroller%28__sender_%29.md): Presents the specified view controller as the secondary view controller of the split view interface.
