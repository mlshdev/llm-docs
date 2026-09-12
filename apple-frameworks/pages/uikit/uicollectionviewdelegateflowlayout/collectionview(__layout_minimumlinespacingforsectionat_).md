> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegateflowlayout/collectionview(_:layout:minimumlinespacingforsectionat:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegateflowlayout/collectionview(_:layout:minimumlinespacingforsectionat:))

# collectionView(\_:layout:minimumLineSpacingForSectionAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate for the spacing between successive rows or columns of a section.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, minimumLineSpacingForSectionAt section: Int) -> CGFloat
```

## Parameters

- `collectionView`: The collection view object displaying the flow layout.
- `collectionViewLayout`: The layout object requesting the information.
- `section`: The index number of the section whose line spacing is needed.

<a id="return-value"></a>

## Return Value

The minimum space (measured in points) to apply between successive lines in a section.

<a id="Discussion"></a>

## Discussion

If you do not implement this method, the flow layout uses the value in its [minimumLineSpacing](../uicollectionviewflowlayout/minimumlinespacing.md) property to set the space between lines instead. Your implementation of this method can return a fixed value or return different spacing values for each section.

For a vertically scrolling grid, this value represents the minimum spacing between successive rows. For a horizontally scrolling grid, this value represents the minimum spacing between successive columns. This spacing is not applied to the space between the header and the first line or between the last line and the footer.

## See Also

### Getting the section spacing

- [collectionView(\_:layout:insetForSectionAt:)](collectionview%28__layout_insetforsectionat_%29.md): Asks the delegate for the margins to apply to content in the specified section.
- [collectionView(\_:layout:minimumInteritemSpacingForSectionAt:)](collectionview%28__layout_minimuminteritemspacingforsectionat_%29.md): Asks the delegate for the spacing between successive items in the rows or columns of a section.

# collectionView:layout:minimumLineSpacingForSectionAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the delegate for the spacing between successive rows or columns of a section.

## Declaration

```objectivec
- (CGFloat) collectionView:(UICollectionView *) collectionView layout:(UICollectionViewLayout *) collectionViewLayout minimumLineSpacingForSectionAtIndex:(NSInteger) section;
```

## Parameters

- `collectionView`: The collection view object displaying the flow layout.
- `collectionViewLayout`: The layout object requesting the information.
- `section`: The index number of the section whose line spacing is needed.

<a id="return-value"></a>

## Return Value

The minimum space (measured in points) to apply between successive lines in a section.

<a id="Discussion"></a>

## Discussion

If you do not implement this method, the flow layout uses the value in its [minimumLineSpacing](../uicollectionviewflowlayout/minimumlinespacing.md) property to set the space between lines instead. Your implementation of this method can return a fixed value or return different spacing values for each section.

For a vertically scrolling grid, this value represents the minimum spacing between successive rows. For a horizontally scrolling grid, this value represents the minimum spacing between successive columns. This spacing is not applied to the space between the header and the first line or between the last line and the footer.

## See Also

### Getting the section spacing

- [collectionView:layout:insetForSectionAtIndex:](collectionview%28__layout_insetforsectionat_%29.md): Asks the delegate for the margins to apply to content in the specified section.
- [collectionView:layout:minimumInteritemSpacingForSectionAtIndex:](collectionview%28__layout_minimuminteritemspacingforsectionat_%29.md): Asks the delegate for the spacing between successive items in the rows or columns of a section.
