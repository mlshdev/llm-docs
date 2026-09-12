> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/convert(_:from:)-4evlx](https://developer.apple.com/documentation/pdfkit/pdfview/convert(_:from:)-4evlx)

# convert(\_:from:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Converts a point from page space to view space.

## Declaration

```swift
func convert(_ point: CGPoint, from page: PDFPage) -> CGPoint
```

```swift
func convert(_ point: NSPoint, from page: PDFPage) -> NSPoint
```

<a id="Discussion"></a>

## Discussion

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page. View space is a coordinate system with the origin at the lower-left corner of the current PDF view.

## See Also

### Converting Page and View Points

- [page(for:nearest:)](page%28for_nearest_%29.md): Returns the page containing a point specified in view coordinates.
- [convert(\_:to:)](convert%28__to_%29-9twqk.md): Converts a point from view space to page space.
- [convert(\_:to:)](convert%28__to_%29-8cp0c.md): Converts a rectangle from view space to page space.
- [convert(\_:from:)](convert%28__from_%29-9xv1z.md): Converts a rectangle from page space to view space.

# convertPoint:fromPage: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Converts a point from page space to view space.

## Declaration

```objectivec
- (CGPoint) convertPoint:(CGPoint) point fromPage:(PDFPage *) page;
```

```objectivec
- (NSPoint) convertPoint:(NSPoint) point fromPage:(PDFPage *) page;
```

<a id="Discussion"></a>

## Discussion

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page. View space is a coordinate system with the origin at the lower-left corner of the current PDF view.

## See Also

### Converting Page and View Points

- [pageForPoint:nearest:](page%28for_nearest_%29.md): Returns the page containing a point specified in view coordinates.
- [convertPoint:toPage:](convert%28__to_%29-9twqk.md): Converts a point from view space to page space.
- [convertRect:toPage:](convert%28__to_%29-8cp0c.md): Converts a rectangle from view space to page space.
- [convertRect:fromPage:](convert%28__from_%29-9xv1z.md): Converts a rectangle from page space to view space.
