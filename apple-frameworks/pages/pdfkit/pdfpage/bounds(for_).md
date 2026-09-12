> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfpage/bounds(for:)](https://developer.apple.com/documentation/pdfkit/pdfpage/bounds(for:))

# bounds(for:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the bounds for the specified PDF display box.

## Declaration

```swift
func bounds(for box: PDFDisplayBox) -> CGRect
```

```swift
func bounds(for box: PDFDisplayBox) -> NSRect
```

<a id="Discussion"></a>

## Discussion

The [PDFDisplayBox](../pdfdisplaybox.md) enumeration defines the various box types.

Note that only the media box is required for a PDF. If you request the bounds for the crop box, but the PDF does not include a crop box, the bounds for the media box are returned instead. If you request the bounds for other box types, and the PDF does not includes these types, the bounds for the crop box are returned instead.

The coordinates for the box are in page space, so you might need to transform the points if the page has a rotation on it. Also, note that the bounds `boundsForBox` returns are intersected with the page’s media box.

`boundsForBox` throws a range exception if `box` is not in range.

## See Also

### Related Documentation

- [PDFPage](../pdfpage.md): `PDFPage`, a subclass of `NSObject`, defines methods used to render PDF pages and work with annotations, text, and selections.

### Getting Information About a Page

- [document](document.md): Returns the `PDFDocument` object with which the page is associated.
- [label](label.md): Returns the label for the page.
- [setBounds(\_:for:)](setbounds%28__for_%29.md): Sets the bounds for the specified box.
- [rotation](rotation.md): Sets the rotation angle for the page in degrees.

# boundsForBox: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the bounds for the specified PDF display box.

## Declaration

```objectivec
- (CGRect) boundsForBox:(PDFDisplayBox) box;
```

```objectivec
- (NSRect) boundsForBox:(PDFDisplayBox) box;
```

<a id="Discussion"></a>

## Discussion

The [PDFDisplayBox](../pdfdisplaybox.md) enumeration defines the various box types.

Note that only the media box is required for a PDF. If you request the bounds for the crop box, but the PDF does not include a crop box, the bounds for the media box are returned instead. If you request the bounds for other box types, and the PDF does not includes these types, the bounds for the crop box are returned instead.

The coordinates for the box are in page space, so you might need to transform the points if the page has a rotation on it. Also, note that the bounds `boundsForBox` returns are intersected with the page’s media box.

`boundsForBox` throws a range exception if `box` is not in range.

## See Also

### Related Documentation

- [PDFPage](../pdfpage.md): `PDFPage`, a subclass of `NSObject`, defines methods used to render PDF pages and work with annotations, text, and selections.

### Getting Information About a Page

- [document](document.md): Returns the `PDFDocument` object with which the page is associated.
- [label](label.md): Returns the label for the page.
- [setBounds:forBox:](setbounds%28__for_%29.md): Sets the bounds for the specified box.
- [rotation](rotation.md): Sets the rotation angle for the page in degrees.
