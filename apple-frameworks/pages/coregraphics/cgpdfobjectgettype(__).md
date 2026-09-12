> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfobjectgettype(_:)](https://developer.apple.com/documentation/coregraphics/cgpdfobjectgettype(_:))

# CGPDFObjectGetType(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the PDF type identifier of an object.

## Declaration

```swift
func CGPDFObjectGetType(_ object: CGPDFObjectRef) -> CGPDFObjectType
```

## Parameters

- `object`: A PDF object. If the value if not a PDF object, the behavior is unspecified.

<a id="return-value"></a>

## Return Value

Returns the type of the `object` parameter. See [Abstract Types for PDF Document Content](cgpdfdocument.md#Abstract-Types-for-PDF-Document-Content).

## See Also

### Getting Object Types and Values

- [CGPDFObjectGetValue(\_:\_:\_:)](cgpdfobjectgetvalue%28______%29.md): Returns whether an object is of a given type and if it is, retrieves its value.

# CGPDFObjectGetType (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the PDF type identifier of an object.

## Declaration

```objectivec
extern CGPDFObjectType CGPDFObjectGetType(CGPDFObjectRef object);
```

## Parameters

- `object`: A PDF object. If the value if not a PDF object, the behavior is unspecified.

<a id="return-value"></a>

## Return Value

Returns the type of the `object` parameter. See [Abstract Types for PDF Document Content](cgpdfdocument.md#Abstract-Types-for-PDF-Document-Content).

## See Also

### Getting Object Types and Values

- [CGPDFObjectGetValue](cgpdfobjectgetvalue%28______%29.md): Returns whether an object is of a given type and if it is, retrieves its value.
