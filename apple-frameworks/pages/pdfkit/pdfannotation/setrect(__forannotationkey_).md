> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/setrect(_:forannotationkey:)](https://developer.apple.com/documentation/pdfkit/pdfannotation/setrect(_:forannotationkey:))

# setRect(\_:forAnnotationKey:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+

Sets a rectangle value in the annotation’s dictionary.

## Declaration

```swift
func setRect(_ value: CGRect, forAnnotationKey key: PDFAnnotationKey) -> Bool
```

```swift
func setRect(_ value: NSRect, forAnnotationKey key: PDFAnnotationKey) -> Bool
```

## Parameters

- `value`: The rectangle value to set in the annotation’s dictionary.
- `key`: A [PDFAnnotationKey](../pdfannotationkey.md) or appropriate string from the Adobe PDF Specification.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the value sets successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Modifying Annotation Attributes

- [annotationKeyValues](annotationkeyvalues.md): A dictionary that contains a deep copy of the widget’s properties.
- [value(forAnnotationKey:)](value%28forannotationkey_%29.md): Returns a deep copy of the key-value pairs of properties for the specified key.
- [setValue(\_:forAnnotationKey:)](setvalue%28__forannotationkey_%29.md): Sets a value in the annotation’s dictionary.
- [setBoolean(\_:forAnnotationKey:)](setboolean%28__forannotationkey_%29.md): Sets a Boolean value in the annotation’s dictionary.
- [removeValue(forAnnotationKey:)](removevalue%28forannotationkey_%29.md): Removes a value from the annotation’s dictionary.
- [PDFAnnotationKey](../pdfannotationkey.md): Keys for setting properties of annotations.

# setRect:forAnnotationKey: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+

Sets a rectangle value in the annotation’s dictionary.

## Declaration

```objectivec
- (BOOL) setRect:(CGRect) value forAnnotationKey:(PDFAnnotationKey) key;
```

```objectivec
- (BOOL) setRect:(NSRect) value forAnnotationKey:(PDFAnnotationKey) key;
```

## Parameters

- `value`: The rectangle value to set in the annotation’s dictionary.
- `key`: A [PDFAnnotationKey](../pdfannotationkey.md) or appropriate string from the Adobe PDF Specification.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the value sets successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Modifying Annotation Attributes

- [annotationKeyValues](annotationkeyvalues.md): A dictionary that contains a deep copy of the widget’s properties.
- [valueForAnnotationKey:](value%28forannotationkey_%29.md): Returns a deep copy of the key-value pairs of properties for the specified key.
- [setValue:forAnnotationKey:](setvalue%28__forannotationkey_%29.md): Sets a value in the annotation’s dictionary.
- [setBoolean:forAnnotationKey:](setboolean%28__forannotationkey_%29.md): Sets a Boolean value in the annotation’s dictionary.
- [removeValueForAnnotationKey:](removevalue%28forannotationkey_%29.md): Removes a value from the annotation’s dictionary.
- [PDFAnnotationKey](../pdfannotationkey.md): Keys for setting properties of annotations.
