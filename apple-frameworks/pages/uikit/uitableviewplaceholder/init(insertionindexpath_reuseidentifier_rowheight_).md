> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewplaceholder/init(insertionindexpath:reuseidentifier:rowheight:)](https://developer.apple.com/documentation/uikit/uitableviewplaceholder/init(insertionindexpath:reuseidentifier:rowheight:))

# init(insertionIndexPath:reuseIdentifier:rowHeight:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a placeholder object with the specified index path and cell-related information.

## Declaration

```swift
init(insertionIndexPath: IndexPath, reuseIdentifier: String, rowHeight: CGFloat)
```

## Parameters

- `insertionIndexPath`: The index path at which to insert the placeholder cell.
- `reuseIdentifier`: The reuse identifier to use when dequeueing the cell. A cell with the specified identifier must be registered with the table prior to inserting the placeholder cell. You can register cells in your storyboard file or programmatically.
- `rowHeight`: The initial height of the cell. Specify [automaticDimension](../uitableview/automaticdimension.md) if your table uses estimated row heights and the placeholder cell is self-sizing.

<a id="return-value"></a>

## Return Value

A new placeholder cell object.

# initWithInsertionIndexPath:reuseIdentifier:rowHeight: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a placeholder object with the specified index path and cell-related information.

## Declaration

```objectivec
- (instancetype) initWithInsertionIndexPath:(NSIndexPath *) insertionIndexPath reuseIdentifier:(NSString *) reuseIdentifier rowHeight:(CGFloat) rowHeight;
```

## Parameters

- `insertionIndexPath`: The index path at which to insert the placeholder cell.
- `reuseIdentifier`: The reuse identifier to use when dequeueing the cell. A cell with the specified identifier must be registered with the table prior to inserting the placeholder cell. You can register cells in your storyboard file or programmatically.
- `rowHeight`: The initial height of the cell. Specify [UITableViewAutomaticDimension](../uitableview/automaticdimension.md) if your table uses estimated row heights and the placeholder cell is self-sizing.

<a id="return-value"></a>

## Return Value

A new placeholder cell object.
