> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegateflowlayout/collectionview(_:layout:referencesizeforheaderinsection:)](https://developer.apple.com/documentation/appkit/nscollectionviewdelegateflowlayout/collectionview(_:layout:referencesizeforheaderinsection:))

# collectionView(\_:layout:referenceSizeForHeaderInSection:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Asks the delegate for the size of the header view in the specified section.

## Declaration

```swift
@MainActor optional func collectionView(_ collectionView: NSCollectionView, layout collectionViewLayout: NSCollectionViewLayout, referenceSizeForHeaderInSection section: Int) -> NSSize
```

## Parameters

- `collectionView`: The collection view object displaying the flow layout.
- `collectionViewLayout`: The layout object requesting the information.
- `section`: The index of the section whose header size is requested.

<a id="return-value"></a>

## Return Value

The size of the header. Return [NSZeroSize](https://developer.apple.com/documentation/foundation/nszerosize) if you do not want a header added to the section.

<a id="Discussion"></a>

## Discussion

If you implement this method, the flow layout object calls it to obtain the size of the header in each section and uses that information to set the size of the corresponding views. If you do not implement this method, the header size is obtained from the properties of the flow layout object.

The flow layout object uses only one of the returned size values. For a vertically scrolling layout, the layout object uses the height value. For a horizontally scrolling layout, the layout object uses the width value. The other value is sized appropriately to match the opposing dimension of the collection view itself. Set the size of the header to `0` to prevent it from being displayed.

## See Also

### Related Documentation

- [headerReferenceSize](../nscollectionviewflowlayout/headerreferencesize.md): The default size to use for section headers.

### Getting the Header and Footer Sizes

- [collectionView(\_:layout:referenceSizeForFooterInSection:)](collectionview%28__layout_referencesizeforfooterinsection_%29.md): Asks the delegate for the size of the footer view in the specified section.

# collectionView:layout:referenceSizeForHeaderInSection: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate for the size of the header view in the specified section.

## Declaration

```objectivec
- (NSSize) collectionView:(NSCollectionView *) collectionView layout:(NSCollectionViewLayout *) collectionViewLayout referenceSizeForHeaderInSection:(NSInteger) section;
```

## Parameters

- `collectionView`: The collection view object displaying the flow layout.
- `collectionViewLayout`: The layout object requesting the information.
- `section`: The index of the section whose header size is requested.

<a id="return-value"></a>

## Return Value

The size of the header. Return [NSZeroSize](https://developer.apple.com/documentation/foundation/nszerosize) if you do not want a header added to the section.

<a id="Discussion"></a>

## Discussion

If you implement this method, the flow layout object calls it to obtain the size of the header in each section and uses that information to set the size of the corresponding views. If you do not implement this method, the header size is obtained from the properties of the flow layout object.

The flow layout object uses only one of the returned size values. For a vertically scrolling layout, the layout object uses the height value. For a horizontally scrolling layout, the layout object uses the width value. The other value is sized appropriately to match the opposing dimension of the collection view itself. Set the size of the header to `0` to prevent it from being displayed.

## See Also

### Related Documentation

- [headerReferenceSize](../nscollectionviewflowlayout/headerreferencesize.md): The default size to use for section headers.

### Getting the Header and Footer Sizes

- [collectionView:layout:referenceSizeForFooterInSection:](collectionview%28__layout_referencesizeforfooterinsection_%29.md): Asks the delegate for the size of the footer view in the specified section.
