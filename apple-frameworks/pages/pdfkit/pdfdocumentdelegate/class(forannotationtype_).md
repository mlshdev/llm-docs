> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pdfkit/pdfdocumentdelegate/class(forannotationtype:)

# class(forAnnotationType:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Returns a `PDFAnnotation` subclass for an annotation type.

## Declaration

```swift
optional func `class`(forAnnotationType annotationType: String) -> AnyClass
```

## Mentioned In

- [Adding Custom Graphics to a PDF](../adding-custom-graphics-to-a-pdf.md)

## See Also

### Wrapping Document Elements

- [classForPage()](classforpage%28%29.md): Returns a `PDFPage` subclass for a page object.
- [class(forAnnotationClass:)](class%28forannotationclass_%29.md): Deprecated. Returns a `PDFAnnotation` subclass for a class.

# classForAnnotationType: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Returns a `PDFAnnotation` subclass for an annotation type.

## Declaration

```objectivec
- (Class) classForAnnotationType:(NSString *) annotationType;
```

## Mentioned In

- [Adding Custom Graphics to a PDF](../adding-custom-graphics-to-a-pdf.md)

## See Also

### Wrapping Document Elements

- [classForPage](classforpage%28%29.md): Returns a `PDFPage` subclass for a page object.
- [classForAnnotationClass:](class%28forannotationclass_%29.md): Deprecated. Returns a `PDFAnnotation` subclass for a class.
