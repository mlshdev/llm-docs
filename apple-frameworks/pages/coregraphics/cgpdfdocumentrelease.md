> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfdocumentrelease](https://developer.apple.com/documentation/coregraphics/cgpdfdocumentrelease)

# CGPDFDocumentRelease

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Decrements the retain count of a PDF document.

## Declaration

```objectivec
extern void CGPDFDocumentRelease(CGPDFDocumentRef document);
```

## Parameters

- `document`: The PDF document to release.

<a id="Discussion"></a>

## Discussion

This function is equivalent to [CFRelease](../corefoundation/cfrelease.md), except that it does not cause an error if the `document` parameter is `NULL`.

## See Also

### Retaining and Releasing PDF Documents

- [CGPDFDocumentRetain](cgpdfdocumentretain.md): Increments the retain count of a Core Graphics PDF document.
