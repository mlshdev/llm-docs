> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewreply/initwithdataofcontenttype:contentsize:datacreationblock:](https://developer.apple.com/documentation/quicklookui/qlpreviewreply/initwithdataofcontenttype:contentsize:datacreationblock:)

# initWithDataOfContentType:contentSize:dataCreationBlock:

**Interface language:** Objective-C

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

## Declaration

```objectivec
- (instancetype) initWithDataOfContentType:(UTType *) contentType contentSize:(CGSize) contentSize dataCreationBlock:(NSData * (^)(QLPreviewReply *reply, NSError **error)) dataCreationBlock;
```

## Parameters

- `contentType`: The content type of the data.
- `contentSize`: A hint for the size you would like to display your content at. If your content has an intrinsic size built in, such as images and PDFs, that will be used as the final size, but providing the correct size here will allow QuickLook to present loading UI at the correct size before you are finished creating the data. QuickLook will use a default size if NSZeroSize is passed in.
- `dataCreationBlock`: Create and return data representing the file preview. Supported types include: UTTypeImage, UTTypePDF, UTTypeHTML, UTTypeXML, UTTypePlainText, UTTypeRTF. Heavy lifting should be done inside of the dataCreationBlock instead of when creating the QLPreviewReply. The QLPreviewReply passed into this block is the same as the one created by this method and is provided for convenience for any further updates to its properties, such as attachments, during the data generation. Return the data if successful. Populate error if unsuccessful.

<a id="Discussion"></a>

## Discussion

Use this method to provide a preview with data of a supported format.
