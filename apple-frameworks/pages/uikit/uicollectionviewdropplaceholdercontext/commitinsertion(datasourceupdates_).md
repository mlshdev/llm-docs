> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdropplaceholdercontext/commitinsertion(datasourceupdates:)](https://developer.apple.com/documentation/uikit/uicollectionviewdropplaceholdercontext/commitinsertion(datasourceupdates:))

# commitInsertion(dataSourceUpdates:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Exchanges the placeholder cell for a cell with the final content.

## Declaration

```swift
func commitInsertion(dataSourceUpdates: (IndexPath) -> Void) -> Bool
```

## Parameters

- `dataSourceUpdates`: The handler block to execute as part of committing your changes. Use this block to update your collection view’s data source with the actual data that you received. This block has no return value and takes the following parameter:

  - **insertionIndexPath**: The location at which to insert any items. Always use this index path for the insertion point instead of any cached values.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the placeholder was replaced by your content or [false](https://developer.apple.com/documentation/swift/false) if the placeholder was no longer in the collection view.

## Mentioned In

- [Supporting Drag and Drop in Collection Views](../supporting-drag-and-drop-in-collection-views.md)

<a id="Discussion"></a>

## Discussion

When you receive the actual data for a cell, call this method to remove the corresponding placeholder cell and insert the actual cell. If the placeholder cell is still present in the collection view, this method calls the `dataSourceUpdates` handler. Use that handler block to update the data source object of the collection view. Do not update the collection view itself. This method automatically updates the collection view, creating a new cell for your data.

If the placeholder cell is no longer present, this method does not execute your `dataSourceUpdates` block.

## See Also

### Updating the Placeholder Cell

- [setNeedsCellUpdate()](setneedscellupdate%28%29.md): Updates the contents of the placeholder cell.

# commitInsertionWithDataSourceUpdates: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Exchanges the placeholder cell for a cell with the final content.

## Declaration

```objectivec
- (BOOL) commitInsertionWithDataSourceUpdates:(void (^)(NSIndexPath *insertionIndexPath)) dataSourceUpdates;
```

## Parameters

- `dataSourceUpdates`: The handler block to execute as part of committing your changes. Use this block to update your collection view’s data source with the actual data that you received. This block has no return value and takes the following parameter:

  - **insertionIndexPath**: The location at which to insert any items. Always use this index path for the insertion point instead of any cached values.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the placeholder was replaced by your content or [false](https://developer.apple.com/documentation/swift/false) if the placeholder was no longer in the collection view.

## Mentioned In

- [Supporting Drag and Drop in Collection Views](../supporting-drag-and-drop-in-collection-views.md)

<a id="Discussion"></a>

## Discussion

When you receive the actual data for a cell, call this method to remove the corresponding placeholder cell and insert the actual cell. If the placeholder cell is still present in the collection view, this method calls the `dataSourceUpdates` handler. Use that handler block to update the data source object of the collection view. Do not update the collection view itself. This method automatically updates the collection view, creating a new cell for your data.

If the placeholder cell is no longer present, this method does not execute your `dataSourceUpdates` block.

## See Also

### Updating the Placeholder Cell

- [setNeedsCellUpdate](setneedscellupdate%28%29.md): Updates the contents of the placeholder cell.
