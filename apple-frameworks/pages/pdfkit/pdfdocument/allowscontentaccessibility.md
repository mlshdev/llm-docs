> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/allowscontentaccessibility](https://developer.apple.com/documentation/pdfkit/pdfdocument/allowscontentaccessibility)

# allowsContentAccessibility (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value indicating whether you can extract content from the document, but only for the purpose of accessibility.

## Declaration

```swift
var allowsContentAccessibility: Bool { get }
```

## See Also

### Getting Permissions

- [allowsCopying](allowscopying.md): A Boolean value indicating whether the document allows copying of content to the Pasteboard.
- [allowsPrinting](allowsprinting.md): A Boolean value indicating whether the document allows printing.
- [allowsCommenting](allowscommenting.md): A Boolean value indicating whether you can create or modify document annotations, including form field entries.
- [allowsDocumentAssembly](allowsdocumentassembly.md): A Boolean value indicating whether you can manage a document by inserting, deleting, and rotating pages.
- [allowsDocumentChanges](allowsdocumentchanges.md): A Boolean value indicating whether you can modify the document contents except for document attributes.
- [allowsFormFieldEntry](allowsformfieldentry.md): A Boolean value indicating whether you can modify form field entries even if you can’t edit document annotations.

# allowsContentAccessibility (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value indicating whether you can extract content from the document, but only for the purpose of accessibility.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL allowsContentAccessibility;
```

## See Also

### Getting Permissions

- [allowsCopying](allowscopying.md): A Boolean value indicating whether the document allows copying of content to the Pasteboard.
- [allowsPrinting](allowsprinting.md): A Boolean value indicating whether the document allows printing.
- [allowsCommenting](allowscommenting.md): A Boolean value indicating whether you can create or modify document annotations, including form field entries.
- [allowsDocumentAssembly](allowsdocumentassembly.md): A Boolean value indicating whether you can manage a document by inserting, deleting, and rotating pages.
- [allowsDocumentChanges](allowsdocumentchanges.md): A Boolean value indicating whether you can modify the document contents except for document attributes.
- [allowsFormFieldEntry](allowsformfieldentry.md): A Boolean value indicating whether you can modify form field entries even if you can’t edit document annotations.
