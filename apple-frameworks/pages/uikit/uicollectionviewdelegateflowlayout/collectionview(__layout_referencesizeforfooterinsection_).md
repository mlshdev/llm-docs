> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegateflowlayout/collectionview(_:layout:referencesizeforfooterinsection:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegateflowlayout/collectionview(_:layout:referencesizeforfooterinsection:))

# collectionView(\_:layout:referenceSizeForFooterInSection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate for the size of the footer view in the specified section.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, referenceSizeForFooterInSection section: Int) -> CGSize
```

## Parameters

- `collectionView`: The collection view object displaying the flow layout.
- `collectionViewLayout`: The layout object requesting the information.
- `section`: The index of the section whose footer size is being requested.

<a id="return-value"></a>

## Return Value

The size of the footer. If you return a value of size (0, 0), no footer is added.

<a id="Discussion"></a>

## Discussion

If you do not implement this method, the flow layout uses the value in its [footerReferenceSize](../uicollectionviewflowlayout/footerreferencesize.md) property to set the size of the footer.

During layout, only the size that corresponds to the appropriate scrolling direction is used. For example, for the vertical scrolling direction, the layout object uses the height value specified by this property. (In that instance, the width of the footer would be set to the width of the collection view.) If the size in the appropriate scrolling dimension is 0, no footer is added.

## See Also

### Getting the header and footer sizes

- [collectionView(\_:layout:referenceSizeForHeaderInSection:)](collectionview%28__layout_referencesizeforheaderinsection_%29.md): Asks the delegate for the size of the header view in the specified section.

# collectionView:layout:referenceSizeForFooterInSection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the delegate for the size of the footer view in the specified section.

## Declaration

```objectivec
- (CGSize) collectionView:(UICollectionView *) collectionView layout:(UICollectionViewLayout *) collectionViewLayout referenceSizeForFooterInSection:(NSInteger) section;
```

## Parameters

- `collectionView`: The collection view object displaying the flow layout.
- `collectionViewLayout`: The layout object requesting the information.
- `section`: The index of the section whose footer size is being requested.

<a id="return-value"></a>

## Return Value

The size of the footer. If you return a value of size (0, 0), no footer is added.

<a id="Discussion"></a>

## Discussion

If you do not implement this method, the flow layout uses the value in its [footerReferenceSize](../uicollectionviewflowlayout/footerreferencesize.md) property to set the size of the footer.

During layout, only the size that corresponds to the appropriate scrolling direction is used. For example, for the vertical scrolling direction, the layout object uses the height value specified by this property. (In that instance, the width of the footer would be set to the width of the collection view.) If the size in the appropriate scrolling dimension is 0, no footer is added.

## See Also

### Getting the header and footer sizes

- [collectionView:layout:referenceSizeForHeaderInSection:](collectionview%28__layout_referencesizeforheaderinsection_%29.md): Asks the delegate for the size of the header view in the specified section.
