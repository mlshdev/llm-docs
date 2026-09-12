> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/page(for:nearest:)](https://developer.apple.com/documentation/pdfkit/pdfview/page(for:nearest:))

# page(for:nearest:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the page containing a point specified in view coordinates.

## Declaration

```swift
func page(for point: CGPoint, nearest: Bool) -> PDFPage?
```

```swift
func page(for point: NSPoint, nearest: Bool) -> PDFPage?
```

<a id="Discussion"></a>

## Discussion

Returns `NULL` if there’s no page at the specified point and `nearest` is set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Converting Page and View Points

- [convert(\_:to:)](convert%28__to_%29-9twqk.md): Converts a point from view space to page space.
- [convert(\_:to:)](convert%28__to_%29-8cp0c.md): Converts a rectangle from view space to page space.
- [convert(\_:from:)](convert%28__from_%29-4evlx.md): Converts a point from page space to view space.
- [convert(\_:from:)](convert%28__from_%29-9xv1z.md): Converts a rectangle from page space to view space.

# pageForPoint:nearest: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the page containing a point specified in view coordinates.

## Declaration

```objectivec
- (PDFPage *) pageForPoint:(CGPoint) point nearest:(BOOL) nearest;
```

```objectivec
- (PDFPage *) pageForPoint:(NSPoint) point nearest:(BOOL) nearest;
```

<a id="Discussion"></a>

## Discussion

Returns `NULL` if there’s no page at the specified point and `nearest` is set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Converting Page and View Points

- [convertPoint:toPage:](convert%28__to_%29-9twqk.md): Converts a point from view space to page space.
- [convertRect:toPage:](convert%28__to_%29-8cp0c.md): Converts a rectangle from view space to page space.
- [convertPoint:fromPage:](convert%28__from_%29-4evlx.md): Converts a point from page space to view space.
- [convertRect:fromPage:](convert%28__from_%29-9xv1z.md): Converts a rectangle from page space to view space.
