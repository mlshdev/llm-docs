> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/reloadsections(_:)](https://developer.apple.com/documentation/appkit/nscollectionview/reloadsections(_:))

# reloadSections(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Reloads the data in the specified sections of the collection view.

## Declaration

```swift
func reloadSections(_ sections: IndexSet)
```

## Parameters

- `sections`: The indexes of the sections that you want to reload. Specifying `nil` for this parameter raises an exception.

<a id="Discussion"></a>

## Discussion

Call this method when the data for the specified sections changes or when you want to force the appearance of those sections to be updated. When you call this method, the collection view discards visible elements in the section along with any cached attributes for those elements. For efficiency, it then asks the layout object to provide fresh attributes for only the visible items and views and requests new views for those elements.

Do not call this method in the middle of animation blocks where items are being inserted or deleted. The methods used to insert and delete items automatically update the collection view’s contents.

## See Also

### Reloading Content

- [reloadData()](reloaddata%28%29.md): Reloads all of the data for the collection view.
- [reloadItems(at:)](reloaditems%28at_%29.md): Reloads only the specified items.

# reloadSections: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Reloads the data in the specified sections of the collection view.

## Declaration

```objectivec
- (void) reloadSections:(NSIndexSet *) sections;
```

## Parameters

- `sections`: The indexes of the sections that you want to reload. Specifying `nil` for this parameter raises an exception.

<a id="Discussion"></a>

## Discussion

Call this method when the data for the specified sections changes or when you want to force the appearance of those sections to be updated. When you call this method, the collection view discards visible elements in the section along with any cached attributes for those elements. For efficiency, it then asks the layout object to provide fresh attributes for only the visible items and views and requests new views for those elements.

Do not call this method in the middle of animation blocks where items are being inserted or deleted. The methods used to insert and delete items automatically update the collection view’s contents.

## See Also

### Reloading Content

- [reloadData](reloaddata%28%29.md): Reloads all of the data for the collection view.
- [reloadItemsAtIndexPaths:](reloaditems%28at_%29.md): Reloads only the specified items.
