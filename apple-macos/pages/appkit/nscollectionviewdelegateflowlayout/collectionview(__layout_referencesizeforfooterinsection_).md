> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegateflowlayout/collectionview(_:layout:referencesizeforfooterinsection:)](https://developer.apple.com/documentation/appkit/nscollectionviewdelegateflowlayout/collectionview(_:layout:referencesizeforfooterinsection:))

# collectionView(\_:layout:referenceSizeForFooterInSection:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Asks the delegate for the size of the footer view in the specified section.

## Declaration

```swift
@MainActor optional func collectionView(_ collectionView: NSCollectionView, layout collectionViewLayout: NSCollectionViewLayout, referenceSizeForFooterInSection section: Int) -> NSSize
```

## Parameters

- `collectionView`: The collection view object displaying the flow layout.
- `collectionViewLayout`: The layout object requesting the information.
- `section`: The index of the section whose footer size is requested.

<a id="return-value"></a>

## Return Value

The size of the footer. Return [NSZeroSize](https://developer.apple.com/documentation/foundation/nszerosize) if you do not want a footer added to the section.

<a id="Discussion"></a>

## Discussion

If you implement this method, the flow layout object calls it to obtain the size of the footer in each section and uses that information to set the size of the corresponding views. If you do not implement this method, the footer size is obtained from the properties of the flow layout object.

The flow layout object uses only one of the returned size values. For a vertically scrolling layout, the layout object uses the height value. For a horizontally scrolling layout, the layout object uses the width value. The other value is sized appropriately to match the opposing dimension of the collection view itself. Set the size of the footer to `0` to prevent it from being displayed.

## See Also

### Related Documentation

- [footerReferenceSize](../nscollectionviewflowlayout/footerreferencesize.md): The default size to use for section footers.

### Getting the Header and Footer Sizes

- [collectionView(\_:layout:referenceSizeForHeaderInSection:)](collectionview%28__layout_referencesizeforheaderinsection_%29.md): Asks the delegate for the size of the header view in the specified section.

# collectionView:layout:referenceSizeForFooterInSection: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate for the size of the footer view in the specified section.

## Declaration

```objectivec
- (NSSize) collectionView:(NSCollectionView *) collectionView layout:(NSCollectionViewLayout *) collectionViewLayout referenceSizeForFooterInSection:(NSInteger) section;
```

## Parameters

- `collectionView`: The collection view object displaying the flow layout.
- `collectionViewLayout`: The layout object requesting the information.
- `section`: The index of the section whose footer size is requested.

<a id="return-value"></a>

## Return Value

The size of the footer. Return [NSZeroSize](https://developer.apple.com/documentation/foundation/nszerosize) if you do not want a footer added to the section.

<a id="Discussion"></a>

## Discussion

If you implement this method, the flow layout object calls it to obtain the size of the footer in each section and uses that information to set the size of the corresponding views. If you do not implement this method, the footer size is obtained from the properties of the flow layout object.

The flow layout object uses only one of the returned size values. For a vertically scrolling layout, the layout object uses the height value. For a horizontally scrolling layout, the layout object uses the width value. The other value is sized appropriately to match the opposing dimension of the collection view itself. Set the size of the footer to `0` to prevent it from being displayed.

## See Also

### Related Documentation

- [footerReferenceSize](../nscollectionviewflowlayout/footerreferencesize.md): The default size to use for section footers.

### Getting the Header and Footer Sizes

- [collectionView:layout:referenceSizeForHeaderInSection:](collectionview%28__layout_referencesizeforheaderinsection_%29.md): Asks the delegate for the size of the header view in the specified section.
