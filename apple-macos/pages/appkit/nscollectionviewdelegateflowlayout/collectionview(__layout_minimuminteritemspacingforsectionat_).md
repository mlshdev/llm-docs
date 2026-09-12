> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegateflowlayout/collectionview(_:layout:minimuminteritemspacingforsectionat:)](https://developer.apple.com/documentation/appkit/nscollectionviewdelegateflowlayout/collectionview(_:layout:minimuminteritemspacingforsectionat:))

# collectionView(\_:layout:minimumInteritemSpacingForSectionAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Asks the delegate for the spacing between successive items of a single row or column.

## Declaration

```swift
@MainActor optional func collectionView(_ collectionView: NSCollectionView, layout collectionViewLayout: NSCollectionViewLayout, minimumInteritemSpacingForSectionAt section: Int) -> CGFloat
```

## Parameters

- `collectionView`: The collection view object displaying the flow layout.
- `collectionViewLayout`: The layout object requesting the information.
- `section`: The index of the section whose inter-item spacing is needed.

<a id="return-value"></a>

## Return Value

The minimum space (in points) to apply between successive items in a single row or column.

<a id="Discussion"></a>

## Discussion

Implement this method when you want to provide custom inter-item spacing for sections in the flow layout. Your implementation can return the same spacing for all sections or it can return different spacing for different sections. You can also adjust the inter-item spacing of each section dynamically each time you update the layout. If you do not implement this method, the inter-item spacing is obtained from the properties of the flow layout object.

For a vertically scrolling layout, this value represents the minimum spacing between items in the same row. For a horizontally scrolling layout, this value represents the minimum spacing between items in the same column. The layout object uses this spacing only to compute how many items can fit in a single row or column. The actual spacing may be increased after the number of items has been determined. For more information about how inter-item spacing is applied, see the description of the [minimumInteritemSpacing](../nscollectionviewflowlayout/minimuminteritemspacing.md) property.

## See Also

### Related Documentation

- [minimumInteritemSpacing](../nscollectionviewflowlayout/minimuminteritemspacing.md): The minimum spacing (in points) to use between items in the same row or column.

### Getting the Section Spacing

- [collectionView(\_:layout:insetForSectionAt:)](collectionview%28__layout_insetforsectionat_%29.md): Asks the delegate for the margins to apply to content in the specified section.
- [collectionView(\_:layout:minimumLineSpacingForSectionAt:)](collectionview%28__layout_minimumlinespacingforsectionat_%29.md): Asks the delegate for the spacing between successive rows or columns of a section.

# collectionView:layout:minimumInteritemSpacingForSectionAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate for the spacing between successive items of a single row or column.

## Declaration

```objectivec
- (CGFloat) collectionView:(NSCollectionView *) collectionView layout:(NSCollectionViewLayout *) collectionViewLayout minimumInteritemSpacingForSectionAtIndex:(NSInteger) section;
```

## Parameters

- `collectionView`: The collection view object displaying the flow layout.
- `collectionViewLayout`: The layout object requesting the information.
- `section`: The index of the section whose inter-item spacing is needed.

<a id="return-value"></a>

## Return Value

The minimum space (in points) to apply between successive items in a single row or column.

<a id="Discussion"></a>

## Discussion

Implement this method when you want to provide custom inter-item spacing for sections in the flow layout. Your implementation can return the same spacing for all sections or it can return different spacing for different sections. You can also adjust the inter-item spacing of each section dynamically each time you update the layout. If you do not implement this method, the inter-item spacing is obtained from the properties of the flow layout object.

For a vertically scrolling layout, this value represents the minimum spacing between items in the same row. For a horizontally scrolling layout, this value represents the minimum spacing between items in the same column. The layout object uses this spacing only to compute how many items can fit in a single row or column. The actual spacing may be increased after the number of items has been determined. For more information about how inter-item spacing is applied, see the description of the [minimumInteritemSpacing](../nscollectionviewflowlayout/minimuminteritemspacing.md) property.

## See Also

### Related Documentation

- [minimumInteritemSpacing](../nscollectionviewflowlayout/minimuminteritemspacing.md): The minimum spacing (in points) to use between items in the same row or column.

### Getting the Section Spacing

- [collectionView:layout:insetForSectionAtIndex:](collectionview%28__layout_insetforsectionat_%29.md): Asks the delegate for the margins to apply to content in the specified section.
- [collectionView:layout:minimumLineSpacingForSectionAtIndex:](collectionview%28__layout_minimumlinespacingforsectionat_%29.md): Asks the delegate for the spacing between successive rows or columns of a section.
