> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfpage/annotation(at:)](https://developer.apple.com/documentation/pdfkit/pdfpage/annotation(at:))

# annotation(at:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the annotation, if there is one, at the specified point.

## Declaration

```swift
func annotation(at point: CGPoint) -> PDFAnnotation?
```

```swift
func annotation(at point: NSPoint) -> PDFAnnotation?
```

<a id="Discussion"></a>

## Discussion

Use this method for hit-testing based on the current cursor position. If more than one annotation shares the specified point, the frontmost (or topmost) one is returned (the annotations are searched in reverse order of their appearance in the PDF data file). Returns `NULL` if there is no annotation at `point`.

Specify the point in page space. Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Working with Annotations

- [annotations](annotations.md): Returns an array containing the page’s annotations.
- [displaysAnnotations](displaysannotations.md): Returns a Boolean value indicating whether annotations are displayed for the page.
- [addAnnotation(\_:)](addannotation%28__%29.md): Adds the specified annotation object to the page.
- [removeAnnotation(\_:)](removeannotation%28__%29.md): Removes the specified annotation from the page.

# annotationAtPoint: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the annotation, if there is one, at the specified point.

## Declaration

```objectivec
- (PDFAnnotation *) annotationAtPoint:(CGPoint) point;
```

```objectivec
- (PDFAnnotation *) annotationAtPoint:(NSPoint) point;
```

<a id="Discussion"></a>

## Discussion

Use this method for hit-testing based on the current cursor position. If more than one annotation shares the specified point, the frontmost (or topmost) one is returned (the annotations are searched in reverse order of their appearance in the PDF data file). Returns `NULL` if there is no annotation at `point`.

Specify the point in page space. Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Working with Annotations

- [annotations](annotations.md): Returns an array containing the page’s annotations.
- [displaysAnnotations](displaysannotations.md): Returns a Boolean value indicating whether annotations are displayed for the page.
- [addAnnotation:](addannotation%28__%29.md): Adds the specified annotation object to the page.
- [removeAnnotation:](removeannotation%28__%29.md): Removes the specified annotation from the page.
