> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicanimator/layoutattributesforsupplementaryview(ofkind:at:)](https://developer.apple.com/documentation/uikit/uidynamicanimator/layoutattributesforsupplementaryview(ofkind:at:))

# layoutAttributesForSupplementaryView(ofKind:at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A convenience method for returning the layout attributes for a collection view supplementary view.

## Declaration

```swift
func layoutAttributesForSupplementaryView(ofKind kind: String, at indexPath: IndexPath) -> UICollectionViewLayoutAttributes?
```

## Parameters

- `kind`: A string that identifies the type of supplementary view whose layout attributes you want.
- `indexPath`: The index path for the cell whose supplementary view layout attributes you want.

<a id="return-value"></a>

## Return Value

The collection view layout attributes for the specified supplementary view.

## See Also

### Working with collection views

- [layoutAttributesForCell(at:)](layoutattributesforcell%28at_%29.md): A convenience method for returning the layout attributes for a collection view cell.
- [layoutAttributesForDecorationView(ofKind:at:)](layoutattributesfordecorationview%28ofkind_at_%29.md): A convenience method for returning the layout attributes for a collection view decoration view.

# layoutAttributesForSupplementaryViewOfKind:atIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

A convenience method for returning the layout attributes for a collection view supplementary view.

## Declaration

```objectivec
- (UICollectionViewLayoutAttributes *) layoutAttributesForSupplementaryViewOfKind:(NSString *) kind atIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `kind`: A string that identifies the type of supplementary view whose layout attributes you want.
- `indexPath`: The index path for the cell whose supplementary view layout attributes you want.

<a id="return-value"></a>

## Return Value

The collection view layout attributes for the specified supplementary view.

## See Also

### Working with collection views

- [layoutAttributesForCellAtIndexPath:](layoutattributesforcell%28at_%29.md): A convenience method for returning the layout attributes for a collection view cell.
- [layoutAttributesForDecorationViewOfKind:atIndexPath:](layoutattributesfordecorationview%28ofkind_at_%29.md): A convenience method for returning the layout attributes for a collection view decoration view.
