> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfpage/thumbnail(of:for:)](https://developer.apple.com/documentation/pdfkit/pdfpage/thumbnail(of:for:))

# thumbnail(of:for:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
func thumbnail(of size: CGSize, for box: PDFDisplayBox) -> UIImage
```

```swift
func thumbnail(of size: NSSize, for box: PDFDisplayBox) -> NSImage
```

## See Also

### Instance Methods

- [draw(with:to:)](draw%28with_to_%29.md)
- [transform(\_:for:)](transform%28__for_%29.md)
- [transform(for:)](transform%28for_%29.md)

# thumbnailOfSize:forBox: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (UIImage *) thumbnailOfSize:(CGSize) size forBox:(PDFDisplayBox) box;
```

```objectivec
- (NSImage *) thumbnailOfSize:(NSSize) size forBox:(PDFDisplayBox) box;
```

## See Also

### Instance Methods

- [drawWithBox:toContext:](draw%28with_to_%29.md)
- [transformContext:forBox:](transform%28__for_%29.md)
- [transformForBox:](transform%28for_%29.md)
