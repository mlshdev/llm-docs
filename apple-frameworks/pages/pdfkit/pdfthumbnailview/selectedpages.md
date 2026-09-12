> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfthumbnailview/selectedpages](https://developer.apple.com/documentation/pdfkit/pdfthumbnailview/selectedpages)

# selectedPages (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Returns an array of PDF pages that correspond to the selected thumbnails in the thumbnail view.

## Declaration

```swift
var selectedPages: [PDFPage]? { get }
```

<a id="return-value"></a>

## Return Value

An array of PDF pages that correspond to the thumbnails selected in the thumbnail view.

<a id="Discussion"></a>

## Discussion

If the thumbnail view allows multiple selections (if [allowsMultipleSelection](allowsmultipleselection.md) returns [true](https://developer.apple.com/documentation/swift/true)), you can use this method to get the PDF pages that correspond to the selected thumbnails.

## See Also

### Managing the Behavior of a Thumbnail View

- [allowsDragging](allowsdragging.md): Returns a Boolean value indicating whether users can drag thumbnails (that is, re-order pages in the document) within the thumbnail view.
- [allowsMultipleSelection](allowsmultipleselection.md): Returns a Boolean value indicating whether users can select multiple thumbnails in the thumbnail view at one time.

# selectedPages (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Returns an array of PDF pages that correspond to the selected thumbnails in the thumbnail view.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSArray<PDFPage *> * selectedPages;
```

<a id="return-value"></a>

## Return Value

An array of PDF pages that correspond to the thumbnails selected in the thumbnail view.

<a id="Discussion"></a>

## Discussion

If the thumbnail view allows multiple selections (if [allowsMultipleSelection](allowsmultipleselection.md) returns [true](https://developer.apple.com/documentation/swift/true)), you can use this method to get the PDF pages that correspond to the selected thumbnails.

## See Also

### Managing the Behavior of a Thumbnail View

- [allowsDragging](allowsdragging.md): Returns a Boolean value indicating whether users can drag thumbnails (that is, re-order pages in the document) within the thumbnail view.
- [allowsMultipleSelection](allowsmultipleselection.md): Returns a Boolean value indicating whether users can select multiple thumbnails in the thumbnail view at one time.
