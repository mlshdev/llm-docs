> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfbox/artbox](https://developer.apple.com/documentation/coregraphics/cgpdfbox/artbox)

# CGPDFBox.artBox (Swift)

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The page art box—a rectangle, expressed in default user space units, defining the extent of the page’s meaningful content (including potential white space) as intended by the page’s creator.

## Declaration

```swift
case artBox
```

## See Also

### Constants

- [CGPDFBox.mediaBox](mediabox.md): The page media box—a rectangle, expressed in default user space units, that defines the boundaries of the physical medium on which the page is intended to be displayed or printed
- [CGPDFBox.cropBox](cropbox.md): The page crop box—a rectangle, expressed in default user space units, that defines the visible region of default user space. When the page is displayed or printed, its contents are to be clipped to this rectangle.
- [CGPDFBox.bleedBox](bleedbox.md): The page bleed box—a rectangle, expressed in default user space units, that defines the region to which the contents of the page should be clipped when output in a production environment.
- [CGPDFBox.trimBox](trimbox.md): The page trim box—a rectangle, expressed in default user space units, that defines the intended dimensions of the finished page after trimming.

# kCGPDFArtBox (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The page art box—a rectangle, expressed in default user space units, defining the extent of the page’s meaningful content (including potential white space) as intended by the page’s creator.

## Declaration

```objectivec
kCGPDFArtBox
```

## See Also

### Constants

- [kCGPDFMediaBox](mediabox.md): The page media box—a rectangle, expressed in default user space units, that defines the boundaries of the physical medium on which the page is intended to be displayed or printed
- [kCGPDFCropBox](cropbox.md): The page crop box—a rectangle, expressed in default user space units, that defines the visible region of default user space. When the page is displayed or printed, its contents are to be clipped to this rectangle.
- [kCGPDFBleedBox](bleedbox.md): The page bleed box—a rectangle, expressed in default user space units, that defines the region to which the contents of the page should be clipped when output in a production environment.
- [kCGPDFTrimBox](trimbox.md): The page trim box—a rectangle, expressed in default user space units, that defines the intended dimensions of the finished page after trimming.
