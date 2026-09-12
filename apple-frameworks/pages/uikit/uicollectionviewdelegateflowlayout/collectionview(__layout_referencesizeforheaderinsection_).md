> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegateflowlayout/collectionview(_:layout:referencesizeforheaderinsection:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegateflowlayout/collectionview(_:layout:referencesizeforheaderinsection:))

# collectionView(\_:layout:referenceSizeForHeaderInSection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate for the size of the header view in the specified section.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, referenceSizeForHeaderInSection section: Int) -> CGSize
```

## Parameters

- `collectionView`: The collection view object displaying the flow layout.
- `collectionViewLayout`: The layout object requesting the information.
- `section`: The index of the section whose header size is being requested.

<a id="return-value"></a>

## Return Value

The size of the header. If you return a value of size (0, 0), no header is added.

<a id="Discussion"></a>

## Discussion

If you do not implement this method, the flow layout uses the value in its [headerReferenceSize](../uicollectionviewflowlayout/headerreferencesize.md) property to set the size of the header.

During layout, only the size that corresponds to the appropriate scrolling direction is used. For example, for the vertical scrolling direction, the layout object uses the height value returned by your method. (In that instance, the width of the header would be set to the width of the collection view.) If the size in the appropriate scrolling dimension is 0, no header is added.

## See Also

### Getting the header and footer sizes

- [collectionView(\_:layout:referenceSizeForFooterInSection:)](collectionview%28__layout_referencesizeforfooterinsection_%29.md): Asks the delegate for the size of the footer view in the specified section.

# collectionView:layout:referenceSizeForHeaderInSection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the delegate for the size of the header view in the specified section.

## Declaration

```objectivec
- (CGSize) collectionView:(UICollectionView *) collectionView layout:(UICollectionViewLayout *) collectionViewLayout referenceSizeForHeaderInSection:(NSInteger) section;
```

## Parameters

- `collectionView`: The collection view object displaying the flow layout.
- `collectionViewLayout`: The layout object requesting the information.
- `section`: The index of the section whose header size is being requested.

<a id="return-value"></a>

## Return Value

The size of the header. If you return a value of size (0, 0), no header is added.

<a id="Discussion"></a>

## Discussion

If you do not implement this method, the flow layout uses the value in its [headerReferenceSize](../uicollectionviewflowlayout/headerreferencesize.md) property to set the size of the header.

During layout, only the size that corresponds to the appropriate scrolling direction is used. For example, for the vertical scrolling direction, the layout object uses the height value returned by your method. (In that instance, the width of the header would be set to the width of the collection view.) If the size in the appropriate scrolling dimension is 0, no header is added.

## See Also

### Getting the header and footer sizes

- [collectionView:layout:referenceSizeForFooterInSection:](collectionview%28__layout_referencesizeforfooterinsection_%29.md): Asks the delegate for the size of the footer view in the specified section.
