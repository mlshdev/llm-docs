> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/reloaditems(at:)](https://developer.apple.com/documentation/appkit/nscollectionview/reloaditems(at:))

# reloadItems(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Reloads only the specified items.

## Declaration

```swift
func reloadItems(at indexPaths: Set<IndexPath>)
```

## Parameters

- `indexPaths`: The index paths of the specific items that you want to reload. Specifying `nil` for this parameter raises an exception.

<a id="Discussion"></a>

## Discussion

Call this method to update specific items in your collection view. You call this method when the underlying data for those items changes and you want to update the visual appearance of those items. When you call this method, the collection view discards the specified items and asks your data source to provide new ones. For efficiency, the collection view requests only the items that are visible.

## See Also

### Reloading Content

- [reloadData()](reloaddata%28%29.md): Reloads all of the data for the collection view.
- [reloadSections(\_:)](reloadsections%28__%29.md): Reloads the data in the specified sections of the collection view.

# reloadItemsAtIndexPaths: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Reloads only the specified items.

## Declaration

```objectivec
- (void) reloadItemsAtIndexPaths:(NSSet<NSIndexPath *> *) indexPaths;
```

## Parameters

- `indexPaths`: The index paths of the specific items that you want to reload. Specifying `nil` for this parameter raises an exception.

<a id="Discussion"></a>

## Discussion

Call this method to update specific items in your collection view. You call this method when the underlying data for those items changes and you want to update the visual appearance of those items. When you call this method, the collection view discards the specified items and asks your data source to provide new ones. For efficiency, the collection view requests only the items that are visible.

## See Also

### Reloading Content

- [reloadData](reloaddata%28%29.md): Reloads all of the data for the collection view.
- [reloadSections:](reloadsections%28__%29.md): Reloads the data in the specified sections of the collection view.
