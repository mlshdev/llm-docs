> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/reloadsections(_:)](https://developer.apple.com/documentation/uikit/uicollectionview/reloadsections(_:))

# reloadSections(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Reloads the data in the specified sections of the collection view.

## Declaration

```swift
func reloadSections(_ sections: IndexSet)
```

## Parameters

- `sections`: The indexes of the sections to reload.

<a id="Discussion"></a>

## Discussion

Call this method to selectively reload only the items in the specified sections. This causes the collection view to discard any cells associated with those items and redisplay them. This method also discards any placeholders in the specified sections.

## See Also

### Reloading content

- [hasUncommittedUpdates](hasuncommittedupdates.md): A Boolean value that indicates whether the collection view contains drop placeholders or is reordering its items as part of handling a drop.
- [reconfigureItems(at:)](reconfigureitems%28at_%29.md): Updates the data for the items at the index paths you specify, preserving the existing cells for the items.
- [reloadData()](reloaddata%28%29.md): Reloads all of the data for the collection view.
- [reloadItems(at:)](reloaditems%28at_%29.md): Reloads just the items at the specified index paths.

# reloadSections: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Reloads the data in the specified sections of the collection view.

## Declaration

```objectivec
- (void) reloadSections:(NSIndexSet *) sections;
```

## Parameters

- `sections`: The indexes of the sections to reload.

<a id="Discussion"></a>

## Discussion

Call this method to selectively reload only the items in the specified sections. This causes the collection view to discard any cells associated with those items and redisplay them. This method also discards any placeholders in the specified sections.

## See Also

### Reloading content

- [hasUncommittedUpdates](hasuncommittedupdates.md): A Boolean value that indicates whether the collection view contains drop placeholders or is reordering its items as part of handling a drop.
- [reconfigureItemsAtIndexPaths:](reconfigureitems%28at_%29.md): Updates the data for the items at the index paths you specify, preserving the existing cells for the items.
- [reloadData](reloaddata%28%29.md): Reloads all of the data for the collection view.
- [reloadItemsAtIndexPaths:](reloaditems%28at_%29.md): Reloads just the items at the specified index paths.
