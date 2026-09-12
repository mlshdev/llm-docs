> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegateflowlayout/collectionview(_:layout:minimumlinespacingforsectionat:)](https://developer.apple.com/documentation/appkit/nscollectionviewdelegateflowlayout/collectionview(_:layout:minimumlinespacingforsectionat:))

# collectionView(\_:layout:minimumLineSpacingForSectionAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Asks the delegate for the spacing between successive rows or columns of a section.

## Declaration

```swift
@MainActor optional func collectionView(_ collectionView: NSCollectionView, layout collectionViewLayout: NSCollectionViewLayout, minimumLineSpacingForSectionAt section: Int) -> CGFloat
```

## Parameters

- `collectionView`: The collection view object displaying the flow layout.
- `collectionViewLayout`: The layout object requesting the information.
- `section`: The index of the section whose line spacing is needed.

<a id="return-value"></a>

## Return Value

The minimum space (in points) to apply between successive lines in a section.

<a id="Discussion"></a>

## Discussion

Implement this method when you want to provide custom line spacing for sections in the flow layout. Your implementation can return the same line spacing for all sections or it can return different line spacing for different sections. You can also adjust the line spacing of each section dynamically each time you update the layout. If you do not implement this method, the line spacing is obtained from the properties of the flow layout object.

For a vertically scrolling layout, this value represents the minimum spacing between successive rows. For a horizontally scrolling layout, this value represents the minimum spacing between successive columns. This spacing is not applied to the space between the header and the first line or between the last line and the footer. For more information about how line spacing is applied, see the description of the [minimumLineSpacing](../nscollectionviewflowlayout/minimumlinespacing.md) property.

## See Also

### Related Documentation

- [minimumLineSpacing](../nscollectionviewflowlayout/minimumlinespacing.md): The minimum spacing (in points) to use between rows or columns.

### Getting the Section Spacing

- [collectionView(\_:layout:insetForSectionAt:)](collectionview%28__layout_insetforsectionat_%29.md): Asks the delegate for the margins to apply to content in the specified section.
- [collectionView(\_:layout:minimumInteritemSpacingForSectionAt:)](collectionview%28__layout_minimuminteritemspacingforsectionat_%29.md): Asks the delegate for the spacing between successive items of a single row or column.

# collectionView:layout:minimumLineSpacingForSectionAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate for the spacing between successive rows or columns of a section.

## Declaration

```objectivec
- (CGFloat) collectionView:(NSCollectionView *) collectionView layout:(NSCollectionViewLayout *) collectionViewLayout minimumLineSpacingForSectionAtIndex:(NSInteger) section;
```

## Parameters

- `collectionView`: The collection view object displaying the flow layout.
- `collectionViewLayout`: The layout object requesting the information.
- `section`: The index of the section whose line spacing is needed.

<a id="return-value"></a>

## Return Value

The minimum space (in points) to apply between successive lines in a section.

<a id="Discussion"></a>

## Discussion

Implement this method when you want to provide custom line spacing for sections in the flow layout. Your implementation can return the same line spacing for all sections or it can return different line spacing for different sections. You can also adjust the line spacing of each section dynamically each time you update the layout. If you do not implement this method, the line spacing is obtained from the properties of the flow layout object.

For a vertically scrolling layout, this value represents the minimum spacing between successive rows. For a horizontally scrolling layout, this value represents the minimum spacing between successive columns. This spacing is not applied to the space between the header and the first line or between the last line and the footer. For more information about how line spacing is applied, see the description of the [minimumLineSpacing](../nscollectionviewflowlayout/minimumlinespacing.md) property.

## See Also

### Related Documentation

- [minimumLineSpacing](../nscollectionviewflowlayout/minimumlinespacing.md): The minimum spacing (in points) to use between rows or columns.

### Getting the Section Spacing

- [collectionView:layout:insetForSectionAtIndex:](collectionview%28__layout_insetforsectionat_%29.md): Asks the delegate for the margins to apply to content in the specified section.
- [collectionView:layout:minimumInteritemSpacingForSectionAtIndex:](collectionview%28__layout_minimuminteritemspacingforsectionat_%29.md): Asks the delegate for the spacing between successive items of a single row or column.
