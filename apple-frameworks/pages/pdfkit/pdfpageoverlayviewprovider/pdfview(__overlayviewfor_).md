> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfpageoverlayviewprovider/pdfview(_:overlayviewfor:)](https://developer.apple.com/documentation/pdfkit/pdfpageoverlayviewprovider/pdfview(_:overlayviewfor:))

# pdfView(\_:overlayViewFor:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

## Declaration

```swift
func pdfView(_ view: PDFView, overlayViewFor page: PDFPage) -> UIView?
```

```swift
func pdfView(_ view: PDFView, overlayViewFor page: PDFPage) -> NSView?
```

## See Also

### Instance Methods

- [pdfView(\_:willDisplayOverlayView:for:)](pdfview%28__willdisplayoverlayview_for_%29.md)
- [pdfView(\_:willEndDisplayingOverlayView:for:)](pdfview%28__willenddisplayingoverlayview_for_%29.md)

# pdfView:overlayViewForPage: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

## Declaration

```objectivec
- (UIView *) pdfView:(PDFView *) view overlayViewForPage:(PDFPage *) page;
```

```objectivec
- (NSView *) pdfView:(PDFView *) view overlayViewForPage:(PDFPage *) page;
```

## See Also

### Instance Methods

- [pdfView:willDisplayOverlayView:forPage:](pdfview%28__willdisplayoverlayview_for_%29.md)
- [pdfView:willEndDisplayingOverlayView:forPage:](pdfview%28__willenddisplayingoverlayview_for_%29.md)
