> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfbox](https://developer.apple.com/documentation/coregraphics/cgpdfbox)

# CGPDFBox (Swift)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Box types for a PDF page.

## Declaration

```swift
enum CGPDFBox
```

## Topics

### Constants

- [CGPDFBox.mediaBox](cgpdfbox/mediabox.md): The page media box—a rectangle, expressed in default user space units, that defines the boundaries of the physical medium on which the page is intended to be displayed or printed
- [CGPDFBox.cropBox](cgpdfbox/cropbox.md): The page crop box—a rectangle, expressed in default user space units, that defines the visible region of default user space. When the page is displayed or printed, its contents are to be clipped to this rectangle.
- [CGPDFBox.bleedBox](cgpdfbox/bleedbox.md): The page bleed box—a rectangle, expressed in default user space units, that defines the region to which the contents of the page should be clipped when output in a production environment.
- [CGPDFBox.trimBox](cgpdfbox/trimbox.md): The page trim box—a rectangle, expressed in default user space units, that defines the intended dimensions of the finished page after trimming.
- [CGPDFBox.artBox](cgpdfbox/artbox.md): The page art box—a rectangle, expressed in default user space units, defining the extent of the page’s meaningful content (including potential white space) as intended by the page’s creator.

### Initializers

- [init(rawValue:)](cgpdfbox/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CGPDFBox (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Box types for a PDF page.

## Declaration

```objectivec
enum CGPDFBox : int32_t;
```

## Topics

### Constants

- [kCGPDFMediaBox](cgpdfbox/mediabox.md): The page media box—a rectangle, expressed in default user space units, that defines the boundaries of the physical medium on which the page is intended to be displayed or printed
- [kCGPDFCropBox](cgpdfbox/cropbox.md): The page crop box—a rectangle, expressed in default user space units, that defines the visible region of default user space. When the page is displayed or printed, its contents are to be clipped to this rectangle.
- [kCGPDFBleedBox](cgpdfbox/bleedbox.md): The page bleed box—a rectangle, expressed in default user space units, that defines the region to which the contents of the page should be clipped when output in a production environment.
- [kCGPDFTrimBox](cgpdfbox/trimbox.md): The page trim box—a rectangle, expressed in default user space units, that defines the intended dimensions of the finished page after trimming.
- [kCGPDFArtBox](cgpdfbox/artbox.md): The page art box—a rectangle, expressed in default user space units, defining the extent of the page’s meaningful content (including potential white space) as intended by the page’s creator.
