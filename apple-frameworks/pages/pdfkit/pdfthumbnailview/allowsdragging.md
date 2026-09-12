> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfthumbnailview/allowsdragging](https://developer.apple.com/documentation/pdfkit/pdfthumbnailview/allowsdragging)

# allowsDragging (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns a Boolean value indicating whether users can drag thumbnails (that is, re-order pages in the document) within the thumbnail view.

## Declaration

```swift
var allowsDragging: Bool { get set }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if users can re-order pages by dragging thumbnails, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Managing the Behavior of a Thumbnail View

- [allowsMultipleSelection](allowsmultipleselection.md): Returns a Boolean value indicating whether users can select multiple thumbnails in the thumbnail view at one time.
- [selectedPages](selectedpages.md): Returns an array of PDF pages that correspond to the selected thumbnails in the thumbnail view.

# allowsDragging (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns a Boolean value indicating whether users can drag thumbnails (that is, re-order pages in the document) within the thumbnail view.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsDragging;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if users can re-order pages by dragging thumbnails, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Managing the Behavior of a Thumbnail View

- [allowsMultipleSelection](allowsmultipleselection.md): Returns a Boolean value indicating whether users can select multiple thumbnails in the thumbnail view at one time.
- [selectedPages](selectedpages.md): Returns an array of PDF pages that correspond to the selected thumbnails in the thumbnail view.
