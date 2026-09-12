> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/kqlthumbnailpropertybasebundlepathkey](https://developer.apple.com/documentation/quicklook/kqlthumbnailpropertybasebundlepathkey)

# kQLThumbnailPropertyBaseBundlePathKey (Swift)

**Framework:** Quick Look  
**Kind:** Global Variable  
**Availability:** macOS 10.6+ (deprecated in 12.0)

A path that’s outside of the default security scope for creating a thumbnail.

> Use a QLThumbnailReply in a Thumbnail Extension to provide thumbnails for your file types.

## Declaration

```swift
let kQLThumbnailPropertyBaseBundlePathKey: CFString!
```

<a id="Discussion"></a>

## Discussion

The associated value is a [CFString](../corefoundation/cfstring.md). By default, the Quick Look feature only accepts files within the current document bundle. To generate thumbnails for files at a different location, use `kQLThumbnailPropertyBaseBundlePathKey` with [QLThumbnailRequestSetImageAtURL(\_:\_:\_:)](qlthumbnailrequestsetimageaturl%28______%29.md) or [QLThumbnailRequestSetThumbnailWithURLRepresentation(\_:\_:\_:\_:\_:)](qlthumbnailrequestsetthumbnailwithurlrepresentation%28__________%29.md).

## See Also

### Deprecated constants

- [kQLPreviewContentIDScheme](kqlpreviewcontentidscheme.md): Deprecated. The content ID URL scheme.
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
- [kQLThumbnailPropertyExtensionKey](kqlthumbnailpropertyextensionkey.md): Deprecated. The extension to use as a badge when creating an icon.

# kQLThumbnailPropertyBaseBundlePathKey (Objective-C)

**Framework:** Quick Look  
**Kind:** Global Variable  
**Availability:** macOS 10.6+ (deprecated in 12.0)

A path that’s outside of the default security scope for creating a thumbnail.

> Use a QLThumbnailReply in a Thumbnail Extension to provide thumbnails for your file types.

## Declaration

```objectivec
extern CFStringRef const kQLThumbnailPropertyBaseBundlePathKey;
```

<a id="Discussion"></a>

## Discussion

The associated value is a [CFStringRef](../corefoundation/cfstring.md). By default, the Quick Look feature only accepts files within the current document bundle. To generate thumbnails for files at a different location, use `kQLThumbnailPropertyBaseBundlePathKey` with [QLThumbnailRequestSetImageAtURL](qlthumbnailrequestsetimageaturl%28______%29.md) or [QLThumbnailRequestSetThumbnailWithURLRepresentation](qlthumbnailrequestsetthumbnailwithurlrepresentation%28__________%29.md).

## See Also

### Deprecated constants

- [kQLPreviewContentIDScheme](kqlpreviewcontentidscheme.md): Deprecated. The content ID URL scheme.
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
- [kQLThumbnailPropertyExtensionKey](kqlthumbnailpropertyextensionkey.md): Deprecated. The extension to use as a badge when creating an icon.
