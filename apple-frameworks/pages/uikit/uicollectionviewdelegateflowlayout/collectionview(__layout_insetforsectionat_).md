> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegateflowlayout/collectionview(_:layout:insetforsectionat:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegateflowlayout/collectionview(_:layout:insetforsectionat:))

# collectionView(\_:layout:insetForSectionAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate for the margins to apply to content in the specified section.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, insetForSectionAt section: Int) -> UIEdgeInsets
```

## Parameters

- `collectionView`: The collection view object displaying the flow layout.
- `collectionViewLayout`: The layout object requesting the information.
- `section`: The index number of the section whose insets are needed.

<a id="return-value"></a>

## Return Value

The margins to apply to items in the section.

<a id="Discussion"></a>

## Discussion

If you do not implement this method, the flow layout uses the value in its [sectionInset](../uicollectionviewflowlayout/sectioninset.md) property to set the margins instead. Your implementation of this method can return a fixed set of margin sizes or return different margin sizes for each section.

Section insets are margins applied only to the items in the section. They represent the distance between the header view and the first line of items and between the last line of items and the footer view. They also indicate the spacing on either side of a single line of items. They do not affect the size of the headers or footers themselves.

## See Also

### Getting the section spacing

- [collectionView(\_:layout:minimumLineSpacingForSectionAt:)](collectionview%28__layout_minimumlinespacingforsectionat_%29.md): Asks the delegate for the spacing between successive rows or columns of a section.
- [collectionView(\_:layout:minimumInteritemSpacingForSectionAt:)](collectionview%28__layout_minimuminteritemspacingforsectionat_%29.md): Asks the delegate for the spacing between successive items in the rows or columns of a section.

# collectionView:layout:insetForSectionAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the delegate for the margins to apply to content in the specified section.

## Declaration

```objectivec
- (UIEdgeInsets) collectionView:(UICollectionView *) collectionView layout:(UICollectionViewLayout *) collectionViewLayout insetForSectionAtIndex:(NSInteger) section;
```

## Parameters

- `collectionView`: The collection view object displaying the flow layout.
- `collectionViewLayout`: The layout object requesting the information.
- `section`: The index number of the section whose insets are needed.

<a id="return-value"></a>

## Return Value

The margins to apply to items in the section.

<a id="Discussion"></a>

## Discussion

If you do not implement this method, the flow layout uses the value in its [sectionInset](../uicollectionviewflowlayout/sectioninset.md) property to set the margins instead. Your implementation of this method can return a fixed set of margin sizes or return different margin sizes for each section.

Section insets are margins applied only to the items in the section. They represent the distance between the header view and the first line of items and between the last line of items and the footer view. They also indicate the spacing on either side of a single line of items. They do not affect the size of the headers or footers themselves.

## See Also

### Getting the section spacing

- [collectionView:layout:minimumLineSpacingForSectionAtIndex:](collectionview%28__layout_minimumlinespacingforsectionat_%29.md): Asks the delegate for the spacing between successive rows or columns of a section.
- [collectionView:layout:minimumInteritemSpacingForSectionAtIndex:](collectionview%28__layout_minimuminteritemspacingforsectionat_%29.md): Asks the delegate for the spacing between successive items in the rows or columns of a section.
