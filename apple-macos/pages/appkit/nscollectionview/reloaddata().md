> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/reloaddata()](https://developer.apple.com/documentation/appkit/nscollectionview/reloaddata())

# reloadData() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Reloads all of the data for the collection view.

## Declaration

```swift
func reloadData()
```

<a id="Discussion"></a>

## Discussion

Call this method when the data in your data source object changes or when you want to force the collection view to update its contents. When you call this method, the collection view discards any currently visible items and views and redisplays them. For efficiency, the collection view displays only the items and supplementary views that are visible after reloading the data. If the collection view’s size changes as a result of reloading the data, the collection view adjusts its scrolling offsets accordingly.

Do not call this method in the middle of animation blocks where items are being inserted or deleted. The methods used to insert and delete items automatically update the collection view’s contents.

## See Also

### Reloading Content

- [reloadSections(\_:)](reloadsections%28__%29.md): Reloads the data in the specified sections of the collection view.
- [reloadItems(at:)](reloaditems%28at_%29.md): Reloads only the specified items.

# reloadData (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Reloads all of the data for the collection view.

## Declaration

```objectivec
- (void) reloadData;
```

<a id="Discussion"></a>

## Discussion

Call this method when the data in your data source object changes or when you want to force the collection view to update its contents. When you call this method, the collection view discards any currently visible items and views and redisplays them. For efficiency, the collection view displays only the items and supplementary views that are visible after reloading the data. If the collection view’s size changes as a result of reloading the data, the collection view adjusts its scrolling offsets accordingly.

Do not call this method in the middle of animation blocks where items are being inserted or deleted. The methods used to insert and delete items automatically update the collection view’s contents.

## See Also

### Reloading Content

- [reloadSections:](reloadsections%28__%29.md): Reloads the data in the specified sections of the collection view.
- [reloadItemsAtIndexPaths:](reloaditems%28at_%29.md): Reloads only the specified items.
