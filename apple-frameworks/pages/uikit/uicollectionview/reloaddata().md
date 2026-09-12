> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/reloaddata()](https://developer.apple.com/documentation/uikit/uicollectionview/reloaddata())

# reloadData() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Reloads all of the data for the collection view.

## Declaration

```swift
func reloadData()
```

<a id="Discussion"></a>

## Discussion

Call this method sparingly when you need to reload all of the items in the collection view. This causes the collection view to discard any currently visible items (including placeholders) and recreate items based on the current state of the data source object. For efficiency, the collection view only displays those cells and supplementary views that are visible. If the collection data shrinks as a result of the reload, the collection view adjusts its scrolling offsets accordingly.

You shouldn’t call this method in the middle of animation blocks where items are being inserted or deleted. Insertions and deletions automatically cause the collection’s data to be updated appropriately.

## See Also

### Reloading content

- [hasUncommittedUpdates](hasuncommittedupdates.md): A Boolean value that indicates whether the collection view contains drop placeholders or is reordering its items as part of handling a drop.
- [reconfigureItems(at:)](reconfigureitems%28at_%29.md): Updates the data for the items at the index paths you specify, preserving the existing cells for the items.
- [reloadSections(\_:)](reloadsections%28__%29.md): Reloads the data in the specified sections of the collection view.
- [reloadItems(at:)](reloaditems%28at_%29.md): Reloads just the items at the specified index paths.

# reloadData (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Reloads all of the data for the collection view.

## Declaration

```objectivec
- (void) reloadData;
```

<a id="Discussion"></a>

## Discussion

Call this method sparingly when you need to reload all of the items in the collection view. This causes the collection view to discard any currently visible items (including placeholders) and recreate items based on the current state of the data source object. For efficiency, the collection view only displays those cells and supplementary views that are visible. If the collection data shrinks as a result of the reload, the collection view adjusts its scrolling offsets accordingly.

You shouldn’t call this method in the middle of animation blocks where items are being inserted or deleted. Insertions and deletions automatically cause the collection’s data to be updated appropriately.

## See Also

### Reloading content

- [hasUncommittedUpdates](hasuncommittedupdates.md): A Boolean value that indicates whether the collection view contains drop placeholders or is reordering its items as part of handling a drop.
- [reconfigureItemsAtIndexPaths:](reconfigureitems%28at_%29.md): Updates the data for the items at the index paths you specify, preserving the existing cells for the items.
- [reloadSections:](reloadsections%28__%29.md): Reloads the data in the specified sections of the collection view.
- [reloadItemsAtIndexPaths:](reloaditems%28at_%29.md): Reloads just the items at the specified index paths.
