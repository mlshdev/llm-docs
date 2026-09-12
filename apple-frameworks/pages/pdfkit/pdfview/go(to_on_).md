> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/go(to:on:)](https://developer.apple.com/documentation/pdfkit/pdfview/go(to:on:))

# go(to:on:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Navigates to the specified rectangle on the specified page.

## Declaration

```swift
func go(to rect: CGRect, on page: PDFPage)
```

```swift
func go(to rect: NSRect, on page: PDFPage)
```

<a id="Discussion"></a>

## Discussion

If the specified rectangle is already visible, this method does nothing. This allows you to scroll the `PDFView` object to a specific [PDFAnnotation](../pdfannotation.md) or [PDFSelection](../pdfselection.md) object, because both of these objects have bounds methods that return an annotation or selection position in page space.

Note that `rect` is specified in page-space coordinates. Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Using Seek in a Document

- [go(to:)](go%28to_%29-6x8y2.md): Scrolls to the specified page.
- [go(to:)](go%28to_%29-5lh5d.md): Navigates to the specified destination.
- [go(to:)](go%28to_%29-3t5go.md): Scrolls to the first character of the specified selection.

# goToRect:onPage: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Navigates to the specified rectangle on the specified page.

## Declaration

```objectivec
- (void) goToRect:(CGRect) rect onPage:(PDFPage *) page;
```

```objectivec
- (void) goToRect:(NSRect) rect onPage:(PDFPage *) page;
```

<a id="Discussion"></a>

## Discussion

If the specified rectangle is already visible, this method does nothing. This allows you to scroll the `PDFView` object to a specific [PDFAnnotation](../pdfannotation.md) or [PDFSelection](../pdfselection.md) object, because both of these objects have bounds methods that return an annotation or selection position in page space.

Note that `rect` is specified in page-space coordinates. Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Using Seek in a Document

- [goToPage:](go%28to_%29-6x8y2.md): Scrolls to the specified page.
- [goToDestination:](go%28to_%29-5lh5d.md): Navigates to the specified destination.
- [goToSelection:](go%28to_%29-3t5go.md): Scrolls to the first character of the specified selection.
