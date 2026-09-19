> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pdfkit/pdfdocumentdelegate/class(forannotationclass:)

# class(forAnnotationClass:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+ (deprecated in 10.12)

Returns a `PDFAnnotation` subclass for a class.

## Declaration

```swift
optional func `class`(forAnnotationClass annotationClass: AnyClass) -> AnyClass
```

## See Also

### Wrapping Document Elements

- [classForPage()](classforpage%28%29.md): Returns a `PDFPage` subclass for a page object.
- [class(forAnnotationType:)](class%28forannotationtype_%29.md): Returns a `PDFAnnotation` subclass for an annotation type.

# classForAnnotationClass: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+ (deprecated in 10.12)

Returns a `PDFAnnotation` subclass for a class.

## Declaration

```objectivec
- (Class) classForAnnotationClass:(Class) annotationClass;
```

## See Also

### Wrapping Document Elements

- [classForPage](classforpage%28%29.md): Returns a `PDFPage` subclass for a page object.
- [classForAnnotationType:](class%28forannotationtype_%29.md): Returns a `PDFAnnotation` subclass for an annotation type.
