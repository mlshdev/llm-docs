> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewflowlayout/headerreferencesize](https://developer.apple.com/documentation/uikit/uicollectionviewflowlayout/headerreferencesize)

# headerReferenceSize (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The default sizes to use for section headers.

## Declaration

```swift
var headerReferenceSize: CGSize { get set }
```

<a id="Discussion"></a>

## Discussion

If the delegate does not implement the [collectionView(\_:layout:referenceSizeForHeaderInSection:)](../uicollectionviewdelegateflowlayout/collectionview%28__layout_referencesizeforheaderinsection_%29.md) method, the flow layout object uses the default header sizes set in this property.

During layout, only the size that corresponds to the appropriate scrolling direction is used. For example, for the vertical scrolling direction, the layout object uses the height value returned by your method. (In that instance, the width of the header would be set to the width of the collection view.) If the size in the appropriate scrolling dimension is 0, no header is added.

The default size values are (0, 0).

## See Also

### Configuring headers and footers

- [footerReferenceSize](footerreferencesize.md): The default sizes to use for section footers.
- [Flow layout supplementary views](../flow-layout-supplementary-views.md): Constants that specify the types of supplementary views that can be presented using a flow layout.

# headerReferenceSize (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The default sizes to use for section headers.

## Declaration

```objectivec
@property (nonatomic) CGSize headerReferenceSize;
```

<a id="Discussion"></a>

## Discussion

If the delegate does not implement the [collectionView:layout:referenceSizeForHeaderInSection:](../uicollectionviewdelegateflowlayout/collectionview%28__layout_referencesizeforheaderinsection_%29.md) method, the flow layout object uses the default header sizes set in this property.

During layout, only the size that corresponds to the appropriate scrolling direction is used. For example, for the vertical scrolling direction, the layout object uses the height value returned by your method. (In that instance, the width of the header would be set to the width of the collection view.) If the size in the appropriate scrolling dimension is 0, no header is added.

The default size values are (0, 0).

## See Also

### Configuring headers and footers

- [footerReferenceSize](footerreferencesize.md): The default sizes to use for section footers.
- [Flow layout supplementary views](../flow-layout-supplementary-views.md): Constants that specify the types of supplementary views that can be presented using a flow layout.
