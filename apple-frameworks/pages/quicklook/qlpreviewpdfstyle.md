> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewpdfstyle](https://developer.apple.com/documentation/quicklook/qlpreviewpdfstyle)

# QLPreviewPDFStyle (Swift)

**Framework:** Quick Look  
**Kind:** Structure  
**Availability:** macOS 10.5+

A value you use to configure the appearance of previews for PDF files.

## Declaration

```swift
struct QLPreviewPDFStyle
```

## Topics

### Creating a Preview Style for PDF Files

- [init(\_:)](qlpreviewpdfstyle/init%28__%29.md): Creates a PDF style instance that configures the layout of previews for PDF files.
- [init(rawValue:)](qlpreviewpdfstyle/init%28rawvalue_%29.md): Creates a PDF style instance that configures the layout of previews for PDF files.
- [rawValue](qlpreviewpdfstyle/rawvalue.md): The raw value that represents the layout of previews for PDF files.

### Styles for PDF Previews

- [kQLPreviewPDFStandardStyle](kqlpreviewpdfstandardstyle.md): The PDF appears in the operating system’s standard style.
- [kQLPreviewPDFPagesWithThumbnailsOnLeftStyle](kqlpreviewpdfpageswiththumbnailsonleftstyle.md): The content of the PDF appears with thumbnails of all pages on the left side of the current page’s content.
- [kQLPreviewPDFPagesWithThumbnailsOnRightStyle](kqlpreviewpdfpageswiththumbnailsonrightstyle.md): The content of the PDF appears with thumbnails of all pages on the right side of the current page’s content.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# QLPreviewPDFStyle (Objective-C)

**Framework:** Quick Look  
**Kind:** Enumeration  
**Availability:** macOS 10.5+

A value you use to configure the appearance of previews for PDF files.

## Declaration

```objectivec
typedef enum { ... } QLPreviewPDFStyle;
```

## Topics

### Styles for PDF Previews

- [kQLPreviewPDFStandardStyle](kqlpreviewpdfstandardstyle.md): The PDF appears in the operating system’s standard style.
- [kQLPreviewPDFPagesWithThumbnailsOnLeftStyle](kqlpreviewpdfpageswiththumbnailsonleftstyle.md): The content of the PDF appears with thumbnails of all pages on the left side of the current page’s content.
- [kQLPreviewPDFPagesWithThumbnailsOnRightStyle](kqlpreviewpdfpageswiththumbnailsonrightstyle.md): The content of the PDF appears with thumbnails of all pages on the right side of the current page’s content.
