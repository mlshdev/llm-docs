> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfpage/displaysannotations](https://developer.apple.com/documentation/pdfkit/pdfpage/displaysannotations)

# displaysAnnotations (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns a Boolean value indicating whether annotations are displayed for the page.

## Declaration

```swift
var displaysAnnotations: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the page will draw annotations when a drawing method is called.

## See Also

### Related Documentation

- [draw(with:)](draw%28with_%29.md): Deprecated. Draws the page within the specified box.

### Working with Annotations

- [annotations](annotations.md): Returns an array containing the page’s annotations.
- [addAnnotation(\_:)](addannotation%28__%29.md): Adds the specified annotation object to the page.
- [removeAnnotation(\_:)](removeannotation%28__%29.md): Removes the specified annotation from the page.
- [annotation(at:)](annotation%28at_%29.md): Returns the annotation, if there is one, at the specified point.

# displaysAnnotations (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns a Boolean value indicating whether annotations are displayed for the page.

## Declaration

```objectivec
@property (nonatomic) BOOL displaysAnnotations;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the page will draw annotations when a drawing method is called.

## See Also

### Related Documentation

- [drawWithBox:](draw%28with_%29.md): Deprecated. Draws the page within the specified box.

### Working with Annotations

- [annotations](annotations.md): Returns an array containing the page’s annotations.
- [addAnnotation:](addannotation%28__%29.md): Adds the specified annotation object to the page.
- [removeAnnotation:](removeannotation%28__%29.md): Removes the specified annotation from the page.
- [annotationAtPoint:](annotation%28at_%29.md): Returns the annotation, if there is one, at the specified point.
