> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewreply/initforpdfwithpagesize:documentcreationblock:](https://developer.apple.com/documentation/quicklookui/qlpreviewreply/initforpdfwithpagesize:documentcreationblock:)

# initForPDFWithPageSize:documentCreationBlock:

**Interface language:** Objective-C

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

## Declaration

```objectivec
- (instancetype) initForPDFWithPageSize:(CGSize) defaultPageSize documentCreationBlock:(PDFDocument * (^)(QLPreviewReply *reply, NSError **error)) documentCreationBlock;
```

## Parameters

- `defaultPageSize`: The size of your pages in the document. If the page size varies, use the first page’s size.
- `documentCreationBlock`: Create and return the PDFDocument. Heavy lifting should be done inside of the documentCreationBlock instead of when creating the QLPreviewReply. The QLPreviewReply passed into this block is the same as the one created by this method and is provided for convenience for any further updates to its properties during document creation. Return the PDFDocument if successfully created. Populate error if unsuccessful.

<a id="Discussion"></a>

## Discussion

Use this method to provide a preview with a PDFDocument
