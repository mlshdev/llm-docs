> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfthumbnailview/allowsmultipleselection](https://developer.apple.com/documentation/pdfkit/pdfthumbnailview/allowsmultipleselection)

# allowsMultipleSelection (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns a Boolean value indicating whether users can select multiple thumbnails in the thumbnail view at one time.

## Declaration

```swift
var allowsMultipleSelection: Bool { get set }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if users can select multiple thumbnails simultaneously, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

By default, `PDFThumbnailView` allows only a single thumbnail to be selected at one time. When this is the case, you can get the PDF page that corresponds to the selected thumbnail using the `PDFView` method [currentPage](../pdfview/currentpage.md).

When multiple selections are enabled, however, you must use [selectedPages](selectedpages.md) to get the pages that correspond to the set of selected thumbnails.

## See Also

### Managing the Behavior of a Thumbnail View

- [allowsDragging](allowsdragging.md): Returns a Boolean value indicating whether users can drag thumbnails (that is, re-order pages in the document) within the thumbnail view.
- [selectedPages](selectedpages.md): Returns an array of PDF pages that correspond to the selected thumbnails in the thumbnail view.

# allowsMultipleSelection (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns a Boolean value indicating whether users can select multiple thumbnails in the thumbnail view at one time.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsMultipleSelection;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if users can select multiple thumbnails simultaneously, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

By default, `PDFThumbnailView` allows only a single thumbnail to be selected at one time. When this is the case, you can get the PDF page that corresponds to the selected thumbnail using the `PDFView` method [currentPage](../pdfview/currentpage.md).

When multiple selections are enabled, however, you must use [selectedPages](selectedpages.md) to get the pages that correspond to the set of selected thumbnails.

## See Also

### Managing the Behavior of a Thumbnail View

- [allowsDragging](allowsdragging.md): Returns a Boolean value indicating whether users can drag thumbnails (that is, re-order pages in the document) within the thumbnail view.
- [selectedPages](selectedpages.md): Returns an array of PDF pages that correspond to the selected thumbnails in the thumbnail view.
