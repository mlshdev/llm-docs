> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/removevalue(forannotationkey:)](https://developer.apple.com/documentation/pdfkit/pdfannotation/removevalue(forannotationkey:))

# removeValue(forAnnotationKey:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+

Removes a value from the annotation’s dictionary.

## Declaration

```swift
func removeValue(forAnnotationKey key: PDFAnnotationKey)
```

## Parameters

- `key`: A [PDFAnnotationKey](../pdfannotationkey.md) or appropriate string from the Adobe PDF Specification.

## See Also

### Modifying Annotation Attributes

- [annotationKeyValues](annotationkeyvalues.md): A dictionary that contains a deep copy of the widget’s properties.
- [value(forAnnotationKey:)](value%28forannotationkey_%29.md): Returns a deep copy of the key-value pairs of properties for the specified key.
- [setValue(\_:forAnnotationKey:)](setvalue%28__forannotationkey_%29.md): Sets a value in the annotation’s dictionary.
- [setBoolean(\_:forAnnotationKey:)](setboolean%28__forannotationkey_%29.md): Sets a Boolean value in the annotation’s dictionary.
- [setRect(\_:forAnnotationKey:)](setrect%28__forannotationkey_%29.md): Sets a rectangle value in the annotation’s dictionary.
- [PDFAnnotationKey](../pdfannotationkey.md): Keys for setting properties of annotations.

# removeValueForAnnotationKey: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+

Removes a value from the annotation’s dictionary.

## Declaration

```objectivec
- (void) removeValueForAnnotationKey:(PDFAnnotationKey) key;
```

## Parameters

- `key`: A [PDFAnnotationKey](../pdfannotationkey.md) or appropriate string from the Adobe PDF Specification.

## See Also

### Modifying Annotation Attributes

- [annotationKeyValues](annotationkeyvalues.md): A dictionary that contains a deep copy of the widget’s properties.
- [valueForAnnotationKey:](value%28forannotationkey_%29.md): Returns a deep copy of the key-value pairs of properties for the specified key.
- [setValue:forAnnotationKey:](setvalue%28__forannotationkey_%29.md): Sets a value in the annotation’s dictionary.
- [setBoolean:forAnnotationKey:](setboolean%28__forannotationkey_%29.md): Sets a Boolean value in the annotation’s dictionary.
- [setRect:forAnnotationKey:](setrect%28__forannotationkey_%29.md): Sets a rectangle value in the annotation’s dictionary.
- [PDFAnnotationKey](../pdfannotationkey.md): Keys for setting properties of annotations.
