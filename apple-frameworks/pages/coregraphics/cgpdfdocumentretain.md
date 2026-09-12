> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfdocumentretain](https://developer.apple.com/documentation/coregraphics/cgpdfdocumentretain)

# CGPDFDocumentRetain

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Increments the retain count of a Core Graphics PDF document.

## Declaration

```objectivec
extern CGPDFDocumentRefCGPDFDocumentRetain(CGPDFDocumentRef document);
```

## Parameters

- `document`: The PDF document to retain.

<a id="return-value"></a>

## Return Value

The same document you passed in as the `document` parameter.

<a id="Discussion"></a>

## Discussion

This function is equivalent to [CFRetain](../corefoundation/cfretain.md), except that it does not cause an error if the `document` parameter is `NULL`.

## See Also

### Retaining and Releasing PDF Documents

- [CGPDFDocumentRelease](cgpdfdocumentrelease.md): Decrements the retain count of a PDF document.
