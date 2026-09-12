> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfpageoverlayviewprovider/pdfview(_:willdisplayoverlayview:for:)](https://developer.apple.com/documentation/pdfkit/pdfpageoverlayviewprovider/pdfview(_:willdisplayoverlayview:for:))

# pdfView(\_:willDisplayOverlayView:for:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

## Declaration

```swift
optional func pdfView(_ pdfView: PDFView, willDisplayOverlayView overlayView: UIView, for page: PDFPage)
```

```swift
optional func pdfView(_ pdfView: PDFView, willDisplayOverlayView overlayView: NSView, for page: PDFPage)
```

## See Also

### Instance Methods

- [pdfView(\_:overlayViewFor:)](pdfview%28__overlayviewfor_%29.md)
- [pdfView(\_:willEndDisplayingOverlayView:for:)](pdfview%28__willenddisplayingoverlayview_for_%29.md)

# pdfView:willDisplayOverlayView:forPage: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) pdfView:(PDFView *) pdfView willDisplayOverlayView:(UIView *) overlayView forPage:(PDFPage *) page;
```

```objectivec
- (void) pdfView:(PDFView *) pdfView willDisplayOverlayView:(NSView *) overlayView forPage:(PDFPage *) page;
```

## See Also

### Instance Methods

- [pdfView:overlayViewForPage:](pdfview%28__overlayviewfor_%29.md)
- [pdfView:willEndDisplayingOverlayView:forPage:](pdfview%28__willenddisplayingoverlayview_for_%29.md)
