> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfpage/annotations](https://developer.apple.com/documentation/pdfkit/pdfpage/annotations)

# annotations (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns an array containing the page’s annotations.

## Declaration

```swift
var annotations: [PDFAnnotation] { get }
```

<a id="Discussion"></a>

## Discussion

The elements of the array will most likely be typed to subclasses of the [PDFAnnotation](../pdfannotation.md) class.

## See Also

### Working with Annotations

- [displaysAnnotations](displaysannotations.md): Returns a Boolean value indicating whether annotations are displayed for the page.
- [addAnnotation(\_:)](addannotation%28__%29.md): Adds the specified annotation object to the page.
- [removeAnnotation(\_:)](removeannotation%28__%29.md): Removes the specified annotation from the page.
- [annotation(at:)](annotation%28at_%29.md): Returns the annotation, if there is one, at the specified point.

# annotations (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns an array containing the page’s annotations.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<PDFAnnotation *> * annotations;
```

<a id="Discussion"></a>

## Discussion

The elements of the array will most likely be typed to subclasses of the [PDFAnnotation](../pdfannotation.md) class.

## See Also

### Working with Annotations

- [displaysAnnotations](displaysannotations.md): Returns a Boolean value indicating whether annotations are displayed for the page.
- [addAnnotation:](addannotation%28__%29.md): Adds the specified annotation object to the page.
- [removeAnnotation:](removeannotation%28__%29.md): Removes the specified annotation from the page.
- [annotationAtPoint:](annotation%28at_%29.md): Returns the annotation, if there is one, at the specified point.
