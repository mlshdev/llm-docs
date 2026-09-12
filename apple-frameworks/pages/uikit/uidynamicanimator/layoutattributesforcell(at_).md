> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicanimator/layoutattributesforcell(at:)](https://developer.apple.com/documentation/uikit/uidynamicanimator/layoutattributesforcell(at:))

# layoutAttributesForCell(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A convenience method for returning the layout attributes for a collection view cell.

## Declaration

```swift
func layoutAttributesForCell(at indexPath: IndexPath) -> UICollectionViewLayoutAttributes?
```

## Parameters

- `indexPath`: The index path for the cell whose layout attributes you want.

<a id="return-value"></a>

## Return Value

The collection view layout attributes for the specified collection view cell.

## See Also

### Working with collection views

- [layoutAttributesForDecorationView(ofKind:at:)](layoutattributesfordecorationview%28ofkind_at_%29.md): A convenience method for returning the layout attributes for a collection view decoration view.
- [layoutAttributesForSupplementaryView(ofKind:at:)](layoutattributesforsupplementaryview%28ofkind_at_%29.md): A convenience method for returning the layout attributes for a collection view supplementary view.

# layoutAttributesForCellAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

A convenience method for returning the layout attributes for a collection view cell.

## Declaration

```objectivec
- (UICollectionViewLayoutAttributes *) layoutAttributesForCellAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `indexPath`: The index path for the cell whose layout attributes you want.

<a id="return-value"></a>

## Return Value

The collection view layout attributes for the specified collection view cell.

## See Also

### Working with collection views

- [layoutAttributesForDecorationViewOfKind:atIndexPath:](layoutattributesfordecorationview%28ofkind_at_%29.md): A convenience method for returning the layout attributes for a collection view decoration view.
- [layoutAttributesForSupplementaryViewOfKind:atIndexPath:](layoutattributesforsupplementaryview%28ofkind_at_%29.md): A convenience method for returning the layout attributes for a collection view supplementary view.
