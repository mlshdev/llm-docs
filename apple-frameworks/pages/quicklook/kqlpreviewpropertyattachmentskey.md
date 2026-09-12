> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/kqlpreviewpropertyattachmentskey](https://developer.apple.com/documentation/quicklook/kqlpreviewpropertyattachmentskey)

# kQLPreviewPropertyAttachmentsKey (Swift)

**Framework:** Quick Look  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 12.0)

A list of attachments or sub-resources.

> Use a QLPreviewingController in a Preview Extension to provide previews for your file types.

## Declaration

```swift
let kQLPreviewPropertyAttachmentsKey: CFString!
```

<a id="Discussion"></a>

## Discussion

The value is a [CFDictionary](../corefoundation/cfdictionary.md) object. The keys of the dictionary are the attachment identifiers ([CFString](../corefoundation/cfstring.md) objects) that can be referenced with the `cid:id` URL. The dictionary’s values are themselves dictionaries that use the [kQLPreviewPropertyAttachmentDataKey](kqlpreviewpropertyattachmentdatakey.md), [kQLPreviewPropertyMIMETypeKey](kqlpreviewpropertymimetypekey.md) and [kQLPreviewPropertyTextEncodingNameKey](kqlpreviewpropertytextencodingnamekey.md) properties.

## See Also

### Deprecated constants

- [kQLPreviewContentIDScheme](kqlpreviewcontentidscheme.md): Deprecated. The content ID URL scheme.
- [kQLPreviewPropertyCursorKey](kqlpreviewpropertycursorkey.md): Deprecated.
- [kQLPreviewOptionCursorKey](kqlpreviewoptioncursorkey.md): Deprecated.
- [kQLPreviewPropertyAttachmentDataKey](kqlpreviewpropertyattachmentdatakey.md): Deprecated. Attachment data for a preview.
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

# kQLPreviewPropertyAttachmentsKey (Objective-C)

**Framework:** Quick Look  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 12.0)

A list of attachments or sub-resources.

> Use a QLPreviewingController in a Preview Extension to provide previews for your file types.

## Declaration

```objectivec
extern CFStringRef const kQLPreviewPropertyAttachmentsKey;
```

<a id="Discussion"></a>

## Discussion

The value is a [CFDictionaryRef](../corefoundation/cfdictionary.md) object. The keys of the dictionary are the attachment identifiers ([CFStringRef](../corefoundation/cfstring.md) objects) that can be referenced with the `cid:id` URL. The dictionary’s values are themselves dictionaries that use the [kQLPreviewPropertyAttachmentDataKey](kqlpreviewpropertyattachmentdatakey.md), [kQLPreviewPropertyMIMETypeKey](kqlpreviewpropertymimetypekey.md) and [kQLPreviewPropertyTextEncodingNameKey](kqlpreviewpropertytextencodingnamekey.md) properties.

## See Also

### Deprecated constants

- [kQLPreviewContentIDScheme](kqlpreviewcontentidscheme.md): Deprecated. The content ID URL scheme.
- [kQLPreviewPropertyCursorKey](kqlpreviewpropertycursorkey.md): Deprecated.
- [kQLPreviewOptionCursorKey](kqlpreviewoptioncursorkey.md): Deprecated.
- [kQLPreviewPropertyAttachmentDataKey](kqlpreviewpropertyattachmentdatakey.md): Deprecated. Attachment data for a preview.
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
