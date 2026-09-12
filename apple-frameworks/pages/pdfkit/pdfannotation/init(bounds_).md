> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/init(bounds:)](https://developer.apple.com/documentation/pdfkit/pdfannotation/init(bounds:))

# init(bounds:) (Swift)

**Framework:** PDFKit  
**Kind:** Initializer  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Creates a PDF annotation object.

> Use [init(bounds:forType:withProperties:)](init%28bounds_fortype_withproperties_%29.md) instead.

## Declaration

```swift
convenience init(bounds: NSRect)
```

## Parameters

- `bounds`: The bounding box of the annotation in page-space coordinates.

<a id="return-value"></a>

## Return Value

An initialized `PDFAnnotation` instance, or `NULL` if the object can’t initialize.

<a id="Discussion"></a>

## Discussion

Subclasses of `PDFAnnotation` use this method to initialize annotation instances. Provide `bounds` in page-space coordinates. Invoking `initWithBounds:` directly on a `PDFAnnotation` object creates an illegal `NULL` type.

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Deprecated Methods

- [init(dictionary:forPage:)](init%28dictionary_forpage_%29.md): Deprecated.
- [removeAllAppearanceStreams()](removeallappearancestreams%28%29.md): Deprecated.
- [draw(with:)](draw%28with_%29.md): Deprecated. Draws the annotation on its associated page.

# initWithBounds: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Creates a PDF annotation object.

> Use [initWithBounds:forType:withProperties:](init%28bounds_fortype_withproperties_%29.md) instead.

## Declaration

```objectivec
- (instancetype) initWithBounds:(NSRect) bounds;
```

## Parameters

- `bounds`: The bounding box of the annotation in page-space coordinates.

<a id="return-value"></a>

## Return Value

An initialized `PDFAnnotation` instance, or `NULL` if the object can’t initialize.

<a id="Discussion"></a>

## Discussion

Subclasses of `PDFAnnotation` use this method to initialize annotation instances. Provide `bounds` in page-space coordinates. Invoking `initWithBounds:` directly on a `PDFAnnotation` object creates an illegal `NULL` type.

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Deprecated Methods

- [removeAllAppearanceStreams](removeallappearancestreams%28%29.md): Deprecated.
- [drawWithBox:](draw%28with_%29.md): Deprecated. Draws the annotation on its associated page.
