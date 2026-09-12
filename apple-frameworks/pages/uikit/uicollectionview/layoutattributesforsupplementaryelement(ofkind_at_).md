> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/layoutattributesforsupplementaryelement(ofkind:at:)](https://developer.apple.com/documentation/uikit/uicollectionview/layoutattributesforsupplementaryelement(ofkind:at:))

# layoutAttributesForSupplementaryElement(ofKind:at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Gets the layout information for the specified supplementary view.

## Declaration

```swift
func layoutAttributesForSupplementaryElement(ofKind kind: String, at indexPath: IndexPath) -> UICollectionViewLayoutAttributes?
```

## Parameters

- `kind`: A string specifying the kind of supplementary view whose layout attributes you want. Layout classes are responsible for defining the kinds of supplementary views they support.
- `indexPath`: The index path of the supplementary view. The interpretation of this value depends on how the layout implements the view. For example, a view associated with a section might contain just a section value.

<a id="return-value"></a>

## Return Value

The layout attributes of the supplementary view or `nil` if the specified supplementary view does not exist.

<a id="Discussion"></a>

## Discussion

Use this method to retrieve the layout information for a particular supplementary view. You should always use this method instead of querying the layout object directly.

## See Also

### Getting layout information

- [layoutAttributesForItem(at:)](layoutattributesforitem%28at_%29.md): Gets the layout information for the item at the specified index path.

# layoutAttributesForSupplementaryElementOfKind:atIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Gets the layout information for the specified supplementary view.

## Declaration

```objectivec
- (UICollectionViewLayoutAttributes *) layoutAttributesForSupplementaryElementOfKind:(NSString *) kind atIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `kind`: A string specifying the kind of supplementary view whose layout attributes you want. Layout classes are responsible for defining the kinds of supplementary views they support.
- `indexPath`: The index path of the supplementary view. The interpretation of this value depends on how the layout implements the view. For example, a view associated with a section might contain just a section value.

<a id="return-value"></a>

## Return Value

The layout attributes of the supplementary view or `nil` if the specified supplementary view does not exist.

<a id="Discussion"></a>

## Discussion

Use this method to retrieve the layout information for a particular supplementary view. You should always use this method instead of querying the layout object directly.

## See Also

### Getting layout information

- [layoutAttributesForItemAtIndexPath:](layoutattributesforitem%28at_%29.md): Gets the layout information for the item at the specified index path.
