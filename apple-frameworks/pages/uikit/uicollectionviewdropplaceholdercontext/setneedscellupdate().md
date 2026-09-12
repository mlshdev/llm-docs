> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdropplaceholdercontext/setneedscellupdate()](https://developer.apple.com/documentation/uikit/uicollectionviewdropplaceholdercontext/setneedscellupdate())

# setNeedsCellUpdate() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Updates the contents of the placeholder cell.

## Declaration

```swift
func setNeedsCellUpdate()
```

<a id="Discussion"></a>

## Discussion

Call this method when you want to update the contents of the placeholder cell. When you call this method, UIKit calls the update handler that you originally passed to the `drop(_:toPlaceholderInsertedAt:withReuseIdentifier:cellUpdateHandler:)` method when creating the cell.

## See Also

### Updating the Placeholder Cell

- [commitInsertion(dataSourceUpdates:)](commitinsertion%28datasourceupdates_%29.md): Exchanges the placeholder cell for a cell with the final content.

# setNeedsCellUpdate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Updates the contents of the placeholder cell.

## Declaration

```objectivec
- (void) setNeedsCellUpdate;
```

<a id="Discussion"></a>

## Discussion

Call this method when you want to update the contents of the placeholder cell. When you call this method, UIKit calls the update handler that you originally passed to the `drop(_:toPlaceholderInsertedAt:withReuseIdentifier:cellUpdateHandler:)` method when creating the cell.

## See Also

### Updating the Placeholder Cell

- [commitInsertionWithDataSourceUpdates:](commitinsertion%28datasourceupdates_%29.md): Exchanges the placeholder cell for a cell with the final content.
