> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/kqlpreviewcontentidscheme](https://developer.apple.com/documentation/quicklook/kqlpreviewcontentidscheme)

# kQLPreviewContentIDScheme (Swift)

**Framework:** Quick Look  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 12.0)

The content ID URL scheme.

> Use a QLPreviewingController in a Preview Extension to provide previews for your file types.

## Declaration

```swift
let kQLPreviewContentIDScheme: CFString!
```

<a id="Discussion"></a>

## Discussion

The `cid` URL scheme permits the HTML of a mail message to refer to the images or other data included in the message. For more information, read [RFC 2111](https://www.rfc-archive.org/getrfc.php?rfc=2111).

## See Also

### Deprecated constants

- [kQLPreviewPropertyCursorKey](kqlpreviewpropertycursorkey.md): Deprecated.
- [kQLPreviewOptionCursorKey](kqlpreviewoptioncursorkey.md): Deprecated.
- [kQLPreviewPropertyAttachmentDataKey](kqlpreviewpropertyattachmentdatakey.md): Deprecated. Attachment data for a preview.
- [kQLPreviewPropertyAttachmentsKey](kqlpreviewpropertyattachmentskey.md): Deprecated. A list of attachments or sub-resources.
- [kQLPreviewPropertyBaseBundlePathKey](kqlpreviewpropertybasebundlepathkey.md): Deprecated. A path that’s outside of the default security scope for creating a preview.
- [kQLPreviewPropertyDisplayNameKey](kqlpreviewpropertydisplaynamekey.md): Deprecated. A custom display name for the preview panel.
- [kQLPreviewPropertyHeightKey](kqlpreviewpropertyheightkey.md): Deprecated. The height in points of the preview.
- [kQLPreviewPropertyMIMETypeKey](kqlpreviewpropertymimetypekey.md): Deprecated. The web content or attachment mime type.
- [kQLPreviewPropertyPDFStyleKey](kqlpreviewpropertypdfstylekey.md): Deprecated. The preferred way to display PDF content.
- [kQLPreviewPropertyStringEncodingKey](kqlpreviewpropertystringencodingkey.md): Deprecated. The string encoding of the preview data.
- [kQLPreviewPropertyTextEncodingNameKey](kqlpreviewpropertytextencodingnamekey.md): The encoding of the web content or attachment text.
- [kQLPreviewPropertyWidthKey](kqlpreviewpropertywidthkey.md): Deprecated. The width in points of the preview.
- [kQLThumbnailPropertyBadgeImageKey](kqlthumbnailpropertybadgeimagekey.md): Deprecated. An image to use for generating the badge for a file’s icon.
- [kQLThumbnailPropertyBaseBundlePathKey](kqlthumbnailpropertybasebundlepathkey.md): Deprecated. A path that’s outside of the default security scope for creating a thumbnail.
- [kQLThumbnailPropertyExtensionKey](kqlthumbnailpropertyextensionkey.md): Deprecated. The extension to use as a badge when creating an icon.

# kQLPreviewContentIDScheme (Objective-C)

**Framework:** Quick Look  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 12.0)

The content ID URL scheme.

> Use a QLPreviewingController in a Preview Extension to provide previews for your file types.

## Declaration

```objectivec
extern CFStringRef const kQLPreviewContentIDScheme;
```

<a id="Discussion"></a>

## Discussion

The `cid` URL scheme permits the HTML of a mail message to refer to the images or other data included in the message. For more information, read [RFC 2111](https://www.rfc-archive.org/getrfc.php?rfc=2111).

## See Also

### Deprecated constants

- [kQLPreviewPropertyCursorKey](kqlpreviewpropertycursorkey.md): Deprecated.
- [kQLPreviewOptionCursorKey](kqlpreviewoptioncursorkey.md): Deprecated.
- [kQLPreviewPropertyAttachmentDataKey](kqlpreviewpropertyattachmentdatakey.md): Deprecated. Attachment data for a preview.
- [kQLPreviewPropertyAttachmentsKey](kqlpreviewpropertyattachmentskey.md): Deprecated. A list of attachments or sub-resources.
- [kQLPreviewPropertyBaseBundlePathKey](kqlpreviewpropertybasebundlepathkey.md): Deprecated. A path that’s outside of the default security scope for creating a preview.
- [kQLPreviewPropertyDisplayNameKey](kqlpreviewpropertydisplaynamekey.md): Deprecated. A custom display name for the preview panel.
- [kQLPreviewPropertyHeightKey](kqlpreviewpropertyheightkey.md): Deprecated. The height in points of the preview.
- [kQLPreviewPropertyMIMETypeKey](kqlpreviewpropertymimetypekey.md): Deprecated. The web content or attachment mime type.
- [kQLPreviewPropertyPDFStyleKey](kqlpreviewpropertypdfstylekey.md): Deprecated. The preferred way to display PDF content.
- [kQLPreviewPropertyStringEncodingKey](kqlpreviewpropertystringencodingkey.md): Deprecated. The string encoding of the preview data.
- [kQLPreviewPropertyTextEncodingNameKey](kqlpreviewpropertytextencodingnamekey.md): The encoding of the web content or attachment text.
- [kQLPreviewPropertyWidthKey](kqlpreviewpropertywidthkey.md): Deprecated. The width in points of the preview.
- [kQLThumbnailPropertyBadgeImageKey](kqlthumbnailpropertybadgeimagekey.md): Deprecated. An image to use for generating the badge for a file’s icon.
- [kQLThumbnailPropertyBaseBundlePathKey](kqlthumbnailpropertybasebundlepathkey.md): Deprecated. A path that’s outside of the default security scope for creating a thumbnail.
- [kQLThumbnailPropertyExtensionKey](kqlthumbnailpropertyextensionkey.md): Deprecated. The extension to use as a badge when creating an icon.
