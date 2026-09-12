> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/reloaditems(at:)](https://developer.apple.com/documentation/uikit/uicollectionview/reloaditems(at:))

# reloadItems(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Reloads just the items at the specified index paths.

## Declaration

```swift
func reloadItems(at indexPaths: [IndexPath])
```

## Parameters

- `indexPaths`: An array of [NSIndexPath](../../foundation/nsindexpath.md) objects identifying the items you want to update.

<a id="Discussion"></a>

## Discussion

Call this method to selectively reload only the specified items. This causes the collection view to discard any cells associated with those items and redisplay them.

## See Also

### Reloading content

- [hasUncommittedUpdates](hasuncommittedupdates.md): A Boolean value that indicates whether the collection view contains drop placeholders or is reordering its items as part of handling a drop.
- [reconfigureItems(at:)](reconfigureitems%28at_%29.md): Updates the data for the items at the index paths you specify, preserving the existing cells for the items.
- [reloadData()](reloaddata%28%29.md): Reloads all of the data for the collection view.
- [reloadSections(\_:)](reloadsections%28__%29.md): Reloads the data in the specified sections of the collection view.

# reloadItemsAtIndexPaths: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Reloads just the items at the specified index paths.

## Declaration

```objectivec
- (void) reloadItemsAtIndexPaths:(NSArray<NSIndexPath *> *) indexPaths;
```

## Parameters

- `indexPaths`: An array of [NSIndexPath](../../foundation/nsindexpath.md) objects identifying the items you want to update.

<a id="Discussion"></a>

## Discussion

Call this method to selectively reload only the specified items. This causes the collection view to discard any cells associated with those items and redisplay them.

## See Also

### Reloading content

- [hasUncommittedUpdates](hasuncommittedupdates.md): A Boolean value that indicates whether the collection view contains drop placeholders or is reordering its items as part of handling a drop.
- [reconfigureItemsAtIndexPaths:](reconfigureitems%28at_%29.md): Updates the data for the items at the index paths you specify, preserving the existing cells for the items.
- [reloadData](reloaddata%28%29.md): Reloads all of the data for the collection view.
- [reloadSections:](reloadsections%28__%29.md): Reloads the data in the specified sections of the collection view.
