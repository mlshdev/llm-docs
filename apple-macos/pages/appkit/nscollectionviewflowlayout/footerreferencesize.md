> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewflowlayout/footerreferencesize](https://developer.apple.com/documentation/appkit/nscollectionviewflowlayout/footerreferencesize)

# footerReferenceSize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The default size to use for section footers.

## Declaration

```swift
var footerReferenceSize: NSSize { get set }
```

<a id="Discussion"></a>

## Discussion

If the delegate does not implement the [collectionView(\_:layout:referenceSizeForFooterInSection:)](../nscollectionviewdelegateflowlayout/collectionview%28__layout_referencesizeforfooterinsection_%29.md) method, the flow layout object uses the value of this property as the footer size.

The layout object uses only the value that is appropriate for the current scrolling direction. In other words, the layout object uses only the height value when the content scrolls vertically, setting the width of the footer to the width of the collection view. Similarly, the layout object uses only the width value when the content scrolls horizontally, setting the footer’s height to the height of the collection view. If the size value for the appropriate dimension is `0`, the layout object omits the footer entirely.

The default value of this property is [NSZeroSize](https://developer.apple.com/documentation/foundation/nszerosize).

## See Also

### Configuring the Supplementary Views

- [headerReferenceSize](headerreferencesize.md): The default size to use for section headers.

# footerReferenceSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The default size to use for section footers.

## Declaration

```objectivec
@property NSSize footerReferenceSize;
```

<a id="Discussion"></a>

## Discussion

If the delegate does not implement the [collectionView:layout:referenceSizeForFooterInSection:](../nscollectionviewdelegateflowlayout/collectionview%28__layout_referencesizeforfooterinsection_%29.md) method, the flow layout object uses the value of this property as the footer size.

The layout object uses only the value that is appropriate for the current scrolling direction. In other words, the layout object uses only the height value when the content scrolls vertically, setting the width of the footer to the width of the collection view. Similarly, the layout object uses only the width value when the content scrolls horizontally, setting the footer’s height to the height of the collection view. If the size value for the appropriate dimension is `0`, the layout object omits the footer entirely.

The default value of this property is [NSZeroSize](https://developer.apple.com/documentation/foundation/nszerosize).

## See Also

### Configuring the Supplementary Views

- [headerReferenceSize](headerreferencesize.md): The default size to use for section headers.
