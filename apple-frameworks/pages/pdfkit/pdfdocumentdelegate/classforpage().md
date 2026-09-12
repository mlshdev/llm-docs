> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocumentdelegate/classforpage()](https://developer.apple.com/documentation/pdfkit/pdfdocumentdelegate/classforpage())

# classForPage() (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 11.0+ · visionOS 1.0+

Returns a `PDFPage` subclass for a page object.

## Declaration

```swift
optional func classForPage() -> AnyClass
```

## Mentioned In

- [Adding Custom Graphics to a PDF](../adding-custom-graphics-to-a-pdf.md)

## See Also

### Wrapping Document Elements

- [class(forAnnotationClass:)](class%28forannotationclass_%29.md): Deprecated. Returns a `PDFAnnotation` subclass for a class.
- [class(forAnnotationType:)](class%28forannotationtype_%29.md): Returns a `PDFAnnotation` subclass for an annotation type.

# classForPage (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 11.0+ · visionOS 1.0+

Returns a `PDFPage` subclass for a page object.

## Declaration

```objectivec
- (Class) classForPage;
```

## Mentioned In

- [Adding Custom Graphics to a PDF](../adding-custom-graphics-to-a-pdf.md)

## See Also

### Wrapping Document Elements

- [classForAnnotationClass:](class%28forannotationclass_%29.md): Deprecated. Returns a `PDFAnnotation` subclass for a class.
- [classForAnnotationType:](class%28forannotationtype_%29.md): Returns a `PDFAnnotation` subclass for an annotation type.
