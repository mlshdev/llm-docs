> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/kcgpdfcontexttrimbox](https://developer.apple.com/documentation/coregraphics/kcgpdfcontexttrimbox)

# kCGPDFContextTrimBox (Swift)

**Framework:** Core Graphics  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The trim box for the document or for a given page.

## Declaration

```swift
let kCGPDFContextTrimBox: CFString
```

<a id="Discussion"></a>

## Discussion

This key is optional. If present, the value of this key must be a [CFData](../corefoundation/cfdata.md) object that contains a [CGRect](../corefoundation/cgrect.md) (stored by value, not by reference).

## See Also

### Box Keys

- [kCGPDFContextMediaBox](kcgpdfcontextmediabox.md): The media box for the document or for a given page.
- [kCGPDFContextCropBox](kcgpdfcontextcropbox.md): The crop box for the document or for a given page.
- [kCGPDFContextBleedBox](kcgpdfcontextbleedbox.md): The bleed box for the document or for a given page.
- [kCGPDFContextArtBox](kcgpdfcontextartbox.md): The art box for the document or for a given page.

# kCGPDFContextTrimBox (Objective-C)

**Framework:** Core Graphics  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The trim box for the document or for a given page.

## Declaration

```objectivec
extern CFStringRef const kCGPDFContextTrimBox;
```

<a id="Discussion"></a>

## Discussion

This key is optional. If present, the value of this key must be a [CFDataRef](../corefoundation/cfdata.md) object that contains a [CGRect](../corefoundation/cgrect.md) (stored by value, not by reference).

## See Also

### Box Keys

- [kCGPDFContextMediaBox](kcgpdfcontextmediabox.md): The media box for the document or for a given page.
- [kCGPDFContextCropBox](kcgpdfcontextcropbox.md): The crop box for the document or for a given page.
- [kCGPDFContextBleedBox](kcgpdfcontextbleedbox.md): The bleed box for the document or for a given page.
- [kCGPDFContextArtBox](kcgpdfcontextartbox.md): The art box for the document or for a given page.
