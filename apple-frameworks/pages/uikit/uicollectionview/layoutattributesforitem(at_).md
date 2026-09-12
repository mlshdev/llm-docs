> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/layoutattributesforitem(at:)](https://developer.apple.com/documentation/uikit/uicollectionview/layoutattributesforitem(at:))

# layoutAttributesForItem(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Gets the layout information for the item at the specified index path.

## Declaration

```swift
func layoutAttributesForItem(at indexPath: IndexPath) -> UICollectionViewLayoutAttributes?
```

## Parameters

- `indexPath`: The index path of the item.

<a id="return-value"></a>

## Return Value

The layout attributes for the item or `nil` if no item exists at the specified path.

<a id="Discussion"></a>

## Discussion

Use this method to retrieve the layout information for a particular item. You should always use this method instead of querying the layout object directly.

## See Also

### Getting layout information

- [layoutAttributesForSupplementaryElement(ofKind:at:)](layoutattributesforsupplementaryelement%28ofkind_at_%29.md): Gets the layout information for the specified supplementary view.

# layoutAttributesForItemAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Gets the layout information for the item at the specified index path.

## Declaration

```objectivec
- (UICollectionViewLayoutAttributes *) layoutAttributesForItemAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `indexPath`: The index path of the item.

<a id="return-value"></a>

## Return Value

The layout attributes for the item or `nil` if no item exists at the specified path.

<a id="Discussion"></a>

## Discussion

Use this method to retrieve the layout information for a particular item. You should always use this method instead of querying the layout object directly.

## See Also

### Getting layout information

- [layoutAttributesForSupplementaryElementOfKind:atIndexPath:](layoutattributesforsupplementaryelement%28ofkind_at_%29.md): Gets the layout information for the specified supplementary view.
