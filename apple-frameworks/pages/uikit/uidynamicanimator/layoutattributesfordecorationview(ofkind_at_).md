> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicanimator/layoutattributesfordecorationview(ofkind:at:)](https://developer.apple.com/documentation/uikit/uidynamicanimator/layoutattributesfordecorationview(ofkind:at:))

# layoutAttributesForDecorationView(ofKind:at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A convenience method for returning the layout attributes for a collection view decoration view.

## Declaration

```swift
func layoutAttributesForDecorationView(ofKind decorationViewKind: String, at indexPath: IndexPath) -> UICollectionViewLayoutAttributes?
```

## Parameters

- `decorationViewKind`: The kind identifier for the specified decoration view.
- `indexPath`: The index path for the cell whose decoration view layout attributes you want.

<a id="return-value"></a>

## Return Value

The collection view layout attributes for the specified decoration view.

## See Also

### Working with collection views

- [layoutAttributesForCell(at:)](layoutattributesforcell%28at_%29.md): A convenience method for returning the layout attributes for a collection view cell.
- [layoutAttributesForSupplementaryView(ofKind:at:)](layoutattributesforsupplementaryview%28ofkind_at_%29.md): A convenience method for returning the layout attributes for a collection view supplementary view.

# layoutAttributesForDecorationViewOfKind:atIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

A convenience method for returning the layout attributes for a collection view decoration view.

## Declaration

```objectivec
- (UICollectionViewLayoutAttributes *) layoutAttributesForDecorationViewOfKind:(NSString *) decorationViewKind atIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `decorationViewKind`: The kind identifier for the specified decoration view.
- `indexPath`: The index path for the cell whose decoration view layout attributes you want.

<a id="return-value"></a>

## Return Value

The collection view layout attributes for the specified decoration view.

## See Also

### Working with collection views

- [layoutAttributesForCellAtIndexPath:](layoutattributesforcell%28at_%29.md): A convenience method for returning the layout attributes for a collection view cell.
- [layoutAttributesForSupplementaryViewOfKind:atIndexPath:](layoutattributesforsupplementaryview%28ofkind_at_%29.md): A convenience method for returning the layout attributes for a collection view supplementary view.
