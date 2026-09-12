> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegateflowlayout/collectionview(_:layout:insetforsectionat:)](https://developer.apple.com/documentation/appkit/nscollectionviewdelegateflowlayout/collectionview(_:layout:insetforsectionat:))

# collectionView(\_:layout:insetForSectionAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Asks the delegate for the margins to apply to content in the specified section.

## Declaration

```swift
@MainActor optional func collectionView(_ collectionView: NSCollectionView, layout collectionViewLayout: NSCollectionViewLayout, insetForSectionAt section: Int) -> NSEdgeInsets
```

## Parameters

- `collectionView`: The collection view object displaying the flow layout.
- `collectionViewLayout`: The layout object requesting the information.
- `section`: The index of the section whose margins are needed.

<a id="return-value"></a>

## Return Value

The margins to apply to items in the specified section.

<a id="Discussion"></a>

## Discussion

Implement this method when you want to provide margins for sections in the flow layout. Your implementation can return the same margins for all sections or it can return different margins for different sections. You can also adjust the margins of each section dynamically each time you update the layout. If you do not implement this method, the margins are obtained from the properties of the flow layout object.

The insets you return reflect the spacing between the items and the header and footer views of the section. They also reflect the spacing at the edges of a single row or column. For more information about how insets are applied, see the description of the [sectionInset](../nscollectionviewflowlayout/sectioninset.md) property.

## See Also

### Related Documentation

- [sectionInset](../nscollectionviewflowlayout/sectioninset.md): The margins used to lay out content in a section.

### Getting the Section Spacing

- [collectionView(\_:layout:minimumLineSpacingForSectionAt:)](collectionview%28__layout_minimumlinespacingforsectionat_%29.md): Asks the delegate for the spacing between successive rows or columns of a section.
- [collectionView(\_:layout:minimumInteritemSpacingForSectionAt:)](collectionview%28__layout_minimuminteritemspacingforsectionat_%29.md): Asks the delegate for the spacing between successive items of a single row or column.

# collectionView:layout:insetForSectionAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate for the margins to apply to content in the specified section.

## Declaration

```objectivec
- (NSEdgeInsets) collectionView:(NSCollectionView *) collectionView layout:(NSCollectionViewLayout *) collectionViewLayout insetForSectionAtIndex:(NSInteger) section;
```

## Parameters

- `collectionView`: The collection view object displaying the flow layout.
- `collectionViewLayout`: The layout object requesting the information.
- `section`: The index of the section whose margins are needed.

<a id="return-value"></a>

## Return Value

The margins to apply to items in the specified section.

<a id="Discussion"></a>

## Discussion

Implement this method when you want to provide margins for sections in the flow layout. Your implementation can return the same margins for all sections or it can return different margins for different sections. You can also adjust the margins of each section dynamically each time you update the layout. If you do not implement this method, the margins are obtained from the properties of the flow layout object.

The insets you return reflect the spacing between the items and the header and footer views of the section. They also reflect the spacing at the edges of a single row or column. For more information about how insets are applied, see the description of the [sectionInset](../nscollectionviewflowlayout/sectioninset.md) property.

## See Also

### Related Documentation

- [sectionInset](../nscollectionviewflowlayout/sectioninset.md): The margins used to lay out content in a section.

### Getting the Section Spacing

- [collectionView:layout:minimumLineSpacingForSectionAtIndex:](collectionview%28__layout_minimumlinespacingforsectionat_%29.md): Asks the delegate for the spacing between successive rows or columns of a section.
- [collectionView:layout:minimumInteritemSpacingForSectionAtIndex:](collectionview%28__layout_minimuminteritemspacingforsectionat_%29.md): Asks the delegate for the spacing between successive items of a single row or column.
