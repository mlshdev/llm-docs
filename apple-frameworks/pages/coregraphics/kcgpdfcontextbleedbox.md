> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/kcgpdfcontextbleedbox](https://developer.apple.com/documentation/coregraphics/kcgpdfcontextbleedbox)

# kCGPDFContextBleedBox (Swift)

**Framework:** Core Graphics  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The bleed box for the document or for a given page.

## Declaration

```swift
let kCGPDFContextBleedBox: CFString
```

<a id="Discussion"></a>

## Discussion

This key is optional. If present, the value of this key must be a [CFData](../corefoundation/cfdata.md) object that contains a [CGRect](../corefoundation/cgrect.md) (stored by value, not by reference).

## See Also

### Box Keys

- [kCGPDFContextMediaBox](kcgpdfcontextmediabox.md): The media box for the document or for a given page.
- [kCGPDFContextCropBox](kcgpdfcontextcropbox.md): The crop box for the document or for a given page.
- [kCGPDFContextTrimBox](kcgpdfcontexttrimbox.md): The trim box for the document or for a given page.
- [kCGPDFContextArtBox](kcgpdfcontextartbox.md): The art box for the document or for a given page.

# kCGPDFContextBleedBox (Objective-C)

**Framework:** Core Graphics  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The bleed box for the document or for a given page.

## Declaration

```objectivec
extern CFStringRef const kCGPDFContextBleedBox;
```

<a id="Discussion"></a>

## Discussion

This key is optional. If present, the value of this key must be a [CFDataRef](../corefoundation/cfdata.md) object that contains a [CGRect](../corefoundation/cgrect.md) (stored by value, not by reference).

## See Also

### Box Keys

- [kCGPDFContextMediaBox](kcgpdfcontextmediabox.md): The media box for the document or for a given page.
- [kCGPDFContextCropBox](kcgpdfcontextcropbox.md): The crop box for the document or for a given page.
- [kCGPDFContextTrimBox](kcgpdfcontexttrimbox.md): The trim box for the document or for a given page.
- [kCGPDFContextArtBox](kcgpdfcontextartbox.md): The art box for the document or for a given page.
