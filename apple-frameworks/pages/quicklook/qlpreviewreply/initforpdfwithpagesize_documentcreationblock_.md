> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quicklook/qlpreviewreply/initforpdfwithpagesize:documentcreationblock:

# initForPDFWithPageSize:documentCreationBlock:

**Interface language:** Objective-C

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initForPDFWithPageSize:(CGSize) defaultPageSize documentCreationBlock:(PDFDocument * (^)(QLPreviewReply *reply, NSError **error)) documentCreationBlock;
```

## Parameters

- `defaultPageSize`: The size of your pages in the document. If the page size varies, use the first page’s size.
- `documentCreationBlock`: Create and return the PDFDocument. Heavy lifting should be done inside of the documentCreationBlock instead of when creating the QLPreviewReply. The QLPreviewReply passed into this block is the same as the one created by this method and is provided for convenience for any further updates to its properties during document creation. Return the PDFDocument if successfully created. Populate error if unsuccessful.

<a id="discussion"></a>

## Discussion

Use this method to provide a preview with a PDFDocument
