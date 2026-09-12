> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/init(bounds:fortype:withproperties:)](https://developer.apple.com/documentation/pdfkit/pdfannotation/init(bounds:fortype:withproperties:))

# init(bounds:forType:withProperties:) (Swift)

**Framework:** PDFKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a PDF annotation with the specified bounds, type, and optional properties.

## Declaration

```swift
init(bounds: CGRect, forType annotationType: PDFAnnotationSubtype, withProperties properties: [AnyHashable : Any]?)
```

```swift
init(bounds: NSRect, forType annotationType: PDFAnnotationSubtype, withProperties properties: [AnyHashable : Any]?)
```

## Parameters

- `bounds`: The bounding box of the annotation, in page-space coordinates.
- `annotationType`: The subtype of the annotation, such as text, link, or line.
- `properties`: A dictionary that contains properties of the annotation.

## See Also

### Creating an Annotation

- [PDFAnnotationSubtype](../pdfannotationsubtype.md): The type of annotation, such as circle, text, or ink.

# initWithBounds:forType:withProperties: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a PDF annotation with the specified bounds, type, and optional properties.

## Declaration

```objectivec
- (instancetype) initWithBounds:(CGRect) bounds forType:(PDFAnnotationSubtype) annotationType withProperties:(NSDictionary *) properties;
```

```objectivec
- (instancetype) initWithBounds:(NSRect) bounds forType:(PDFAnnotationSubtype) annotationType withProperties:(NSDictionary *) properties;
```

## Parameters

- `bounds`: The bounding box of the annotation, in page-space coordinates.
- `annotationType`: The subtype of the annotation, such as text, link, or line.
- `properties`: A dictionary that contains properties of the annotation.

## See Also

### Creating an Annotation

- [PDFAnnotationSubtype](../pdfannotationsubtype.md): The type of annotation, such as circle, text, or ink.
