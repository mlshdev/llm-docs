> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewflowlayout/headerreferencesize](https://developer.apple.com/documentation/appkit/nscollectionviewflowlayout/headerreferencesize)

# headerReferenceSize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The default size to use for section headers.

## Declaration

```swift
var headerReferenceSize: NSSize { get set }
```

<a id="Discussion"></a>

## Discussion

If the delegate does not implement the [collectionView(\_:layout:referenceSizeForHeaderInSection:)](../nscollectionviewdelegateflowlayout/collectionview%28__layout_referencesizeforheaderinsection_%29.md) method, the flow layout object uses the value of this property as the header size.

The layout object uses only the value that is appropriate for the current scrolling direction. In other words, the layout object uses only the height value when the content scrolls vertically, setting the width of the header to the width of the collection view. Similarly, the layout object uses only the width value when the content scrolls horizontally, setting the header’s height to the height of the collection view. If the size value for the appropriate dimension is `0`, the layout object omits the header entirely.

The default value of this property is [NSZeroSize](https://developer.apple.com/documentation/foundation/nszerosize).

## See Also

### Configuring the Supplementary Views

- [footerReferenceSize](footerreferencesize.md): The default size to use for section footers.

# headerReferenceSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The default size to use for section headers.

## Declaration

```objectivec
@property NSSize headerReferenceSize;
```

<a id="Discussion"></a>

## Discussion

If the delegate does not implement the [collectionView:layout:referenceSizeForHeaderInSection:](../nscollectionviewdelegateflowlayout/collectionview%28__layout_referencesizeforheaderinsection_%29.md) method, the flow layout object uses the value of this property as the header size.

The layout object uses only the value that is appropriate for the current scrolling direction. In other words, the layout object uses only the height value when the content scrolls vertically, setting the width of the header to the width of the collection view. Similarly, the layout object uses only the width value when the content scrolls horizontally, setting the header’s height to the height of the collection view. If the size value for the appropriate dimension is `0`, the layout object omits the header entirely.

The default value of this property is [NSZeroSize](https://developer.apple.com/documentation/foundation/nszerosize).

## See Also

### Configuring the Supplementary Views

- [footerReferenceSize](footerreferencesize.md): The default size to use for section footers.
