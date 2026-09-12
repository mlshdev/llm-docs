> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/setvalue(_:forannotationkey:)](https://developer.apple.com/documentation/pdfkit/pdfannotation/setvalue(_:forannotationkey:))

# setValue(\_:forAnnotationKey:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+

Sets a value in the annotation’s dictionary.

## Declaration

```swift
func setValue(_ value: Any, forAnnotationKey key: PDFAnnotationKey) -> Bool
```

## Parameters

- `value`: The value to set in the attribute’s dictionary.
- `key`: A [PDFAnnotationKey](../pdfannotationkey.md) or appropriate string from the Adobe PDF Specification.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the value sets successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Some keys expect a complex type. For example, the [color](../pdfannotationkey/color.md) key expects an array of zero, one, two, three, or four elements, where each element is a floating-point number from `0.0` to `1.0`. As a convenience, this key accepts an [NSColor](https://developer.apple.com/documentation/appkit/nscolor) or [UIColor](../../uikit/uicolor.md) value. For details about other conveniences, see the individual [PDFAnnotationKey](../pdfannotationkey.md) properties or the `PDFAnnotationUtilities.h` header file.

> **Tip**

>  Set the `PDFKIT_LOG_ANNOTATIONS` environment variable to log key-value assignment failure details.

## See Also

### Modifying Annotation Attributes

- [annotationKeyValues](annotationkeyvalues.md): A dictionary that contains a deep copy of the widget’s properties.
- [value(forAnnotationKey:)](value%28forannotationkey_%29.md): Returns a deep copy of the key-value pairs of properties for the specified key.
- [setBoolean(\_:forAnnotationKey:)](setboolean%28__forannotationkey_%29.md): Sets a Boolean value in the annotation’s dictionary.
- [setRect(\_:forAnnotationKey:)](setrect%28__forannotationkey_%29.md): Sets a rectangle value in the annotation’s dictionary.
- [removeValue(forAnnotationKey:)](removevalue%28forannotationkey_%29.md): Removes a value from the annotation’s dictionary.
- [PDFAnnotationKey](../pdfannotationkey.md): Keys for setting properties of annotations.

# setValue:forAnnotationKey: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+

Sets a value in the annotation’s dictionary.

## Declaration

```objectivec
- (BOOL) setValue:(id) value forAnnotationKey:(PDFAnnotationKey) key;
```

## Parameters

- `value`: The value to set in the attribute’s dictionary.
- `key`: A [PDFAnnotationKey](../pdfannotationkey.md) or appropriate string from the Adobe PDF Specification.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the value sets successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Some keys expect a complex type. For example, the [PDFAnnotationKeyColor](../pdfannotationkey/color.md) key expects an array of zero, one, two, three, or four elements, where each element is a floating-point number from `0.0` to `1.0`. As a convenience, this key accepts an [NSColor](https://developer.apple.com/documentation/appkit/nscolor) or [UIColor](../../uikit/uicolor.md) value. For details about other conveniences, see the individual [PDFAnnotationKey](../pdfannotationkey.md) properties or the `PDFAnnotationUtilities.h` header file.

> **Tip**

>  Set the `PDFKIT_LOG_ANNOTATIONS` environment variable to log key-value assignment failure details.

## See Also

### Modifying Annotation Attributes

- [annotationKeyValues](annotationkeyvalues.md): A dictionary that contains a deep copy of the widget’s properties.
- [valueForAnnotationKey:](value%28forannotationkey_%29.md): Returns a deep copy of the key-value pairs of properties for the specified key.
- [setBoolean:forAnnotationKey:](setboolean%28__forannotationkey_%29.md): Sets a Boolean value in the annotation’s dictionary.
- [setRect:forAnnotationKey:](setrect%28__forannotationkey_%29.md): Sets a rectangle value in the annotation’s dictionary.
- [removeValueForAnnotationKey:](removevalue%28forannotationkey_%29.md): Removes a value from the annotation’s dictionary.
- [PDFAnnotationKey](../pdfannotationkey.md): Keys for setting properties of annotations.
