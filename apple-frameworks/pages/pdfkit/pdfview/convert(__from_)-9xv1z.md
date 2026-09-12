> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/convert(_:from:)-9xv1z](https://developer.apple.com/documentation/pdfkit/pdfview/convert(_:from:)-9xv1z)

# convert(\_:from:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Converts a rectangle from page space to view space.

## Declaration

```swift
func convert(_ rect: CGRect, from page: PDFPage) -> CGRect
```

```swift
func convert(_ rect: NSRect, from page: PDFPage) -> NSRect
```

<a id="Discussion"></a>

## Discussion

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page. View space is a coordinate system with the origin at the lower-left corner of the current PDF view.

## See Also

### Converting Page and View Points

- [page(for:nearest:)](page%28for_nearest_%29.md): Returns the page containing a point specified in view coordinates.
- [convert(\_:to:)](convert%28__to_%29-9twqk.md): Converts a point from view space to page space.
- [convert(\_:to:)](convert%28__to_%29-8cp0c.md): Converts a rectangle from view space to page space.
- [convert(\_:from:)](convert%28__from_%29-4evlx.md): Converts a point from page space to view space.

# convertRect:fromPage: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Converts a rectangle from page space to view space.

## Declaration

```objectivec
- (CGRect) convertRect:(CGRect) rect fromPage:(PDFPage *) page;
```

```objectivec
- (NSRect) convertRect:(NSRect) rect fromPage:(PDFPage *) page;
```

<a id="Discussion"></a>

## Discussion

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page. View space is a coordinate system with the origin at the lower-left corner of the current PDF view.

## See Also

### Converting Page and View Points

- [pageForPoint:nearest:](page%28for_nearest_%29.md): Returns the page containing a point specified in view coordinates.
- [convertPoint:toPage:](convert%28__to_%29-9twqk.md): Converts a point from view space to page space.
- [convertRect:toPage:](convert%28__to_%29-8cp0c.md): Converts a rectangle from view space to page space.
- [convertPoint:fromPage:](convert%28__from_%29-4evlx.md): Converts a point from page space to view space.
