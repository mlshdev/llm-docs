> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/hasuncommittedupdates](https://developer.apple.com/documentation/uikit/uicollectionview/hasuncommittedupdates)

# hasUncommittedUpdates (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the collection view contains drop placeholders or is reordering its items as part of handling a drop.

## Declaration

```swift
var hasUncommittedUpdates: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), avoid making any significant changes to the collection view. Specifically, don’t reload the collection view’s data, as doing so deletes all placeholders and recreates items from the data source.

## See Also

### Reloading content

- [reconfigureItems(at:)](reconfigureitems%28at_%29.md): Updates the data for the items at the index paths you specify, preserving the existing cells for the items.
- [reloadData()](reloaddata%28%29.md): Reloads all of the data for the collection view.
- [reloadSections(\_:)](reloadsections%28__%29.md): Reloads the data in the specified sections of the collection view.
- [reloadItems(at:)](reloaditems%28at_%29.md): Reloads just the items at the specified index paths.

# hasUncommittedUpdates (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the collection view contains drop placeholders or is reordering its items as part of handling a drop.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasUncommittedUpdates;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), avoid making any significant changes to the collection view. Specifically, don’t reload the collection view’s data, as doing so deletes all placeholders and recreates items from the data source.

## See Also

### Reloading content

- [reconfigureItemsAtIndexPaths:](reconfigureitems%28at_%29.md): Updates the data for the items at the index paths you specify, preserving the existing cells for the items.
- [reloadData](reloaddata%28%29.md): Reloads all of the data for the collection view.
- [reloadSections:](reloadsections%28__%29.md): Reloads the data in the specified sections of the collection view.
- [reloadItemsAtIndexPaths:](reloaditems%28at_%29.md): Reloads just the items at the specified index paths.
