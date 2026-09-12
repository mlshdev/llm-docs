> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/kqlpreviewpropertyheightkey](https://developer.apple.com/documentation/quicklook/kqlpreviewpropertyheightkey)

# kQLPreviewPropertyHeightKey (Swift)

**Framework:** Quick Look  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 12.0)

The height in points of the preview.

> Use the preferredContentSize property of your QLPreviewingController in a Preview Extension.

## Declaration

```swift
let kQLPreviewPropertyHeightKey: CFString!
```

<a id="Discussion"></a>

## Discussion

Note that this property is a hint; Quick Look may set the height automatically for some types of previews. You must encapsulate the value in a [CFNumber](../corefoundation/cfnumber.md) object.

## See Also

### Deprecated constants

- [kQLPreviewContentIDScheme](kqlpreviewcontentidscheme.md): Deprecated. The content ID URL scheme.
- [kQLPreviewPropertyCursorKey](kqlpreviewpropertycursorkey.md): Deprecated.
- [kQLPreviewOptionCursorKey](kqlpreviewoptioncursorkey.md): Deprecated.
- [kQLPreviewPropertyAttachmentDataKey](kqlpreviewpropertyattachmentdatakey.md): Deprecated. Attachment data for a preview.
- [kQLPreviewPropertyAttachmentsKey](kqlpreviewpropertyattachmentskey.md): Deprecated. A list of attachments or sub-resources.
- [kQLPreviewPropertyBaseBundlePathKey](kqlpreviewpropertybasebundlepathkey.md): Deprecated. A path that’s outside of the default security scope for creating a preview.
- [kQLPreviewPropertyDisplayNameKey](kqlpreviewpropertydisplaynamekey.md): Deprecated. A custom display name for the preview panel.
- [kQLPreviewPropertyMIMETypeKey](kqlpreviewpropertymimetypekey.md): Deprecated. The web content or attachment mime type.
- [kQLPreviewPropertyPDFStyleKey](kqlpreviewpropertypdfstylekey.md): Deprecated. The preferred way to display PDF content.
- [kQLPreviewPropertyStringEncodingKey](kqlpreviewpropertystringencodingkey.md): Deprecated. The string encoding of the preview data.
- [kQLPreviewPropertyTextEncodingNameKey](kqlpreviewpropertytextencodingnamekey.md): The encoding of the web content or attachment text.
- [kQLPreviewPropertyWidthKey](kqlpreviewpropertywidthkey.md): Deprecated. The width in points of the preview.
- [kQLThumbnailPropertyBadgeImageKey](kqlthumbnailpropertybadgeimagekey.md): Deprecated. An image to use for generating the badge for a file’s icon.
- [kQLThumbnailPropertyBaseBundlePathKey](kqlthumbnailpropertybasebundlepathkey.md): Deprecated. A path that’s outside of the default security scope for creating a thumbnail.
- [kQLThumbnailPropertyExtensionKey](kqlthumbnailpropertyextensionkey.md): Deprecated. The extension to use as a badge when creating an icon.

# kQLPreviewPropertyHeightKey (Objective-C)

**Framework:** Quick Look  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 12.0)

The height in points of the preview.

> Use the preferredContentSize property of your QLPreviewingController in a Preview Extension.

## Declaration

```objectivec
extern CFStringRef const kQLPreviewPropertyHeightKey;
```

<a id="Discussion"></a>

## Discussion

Note that this property is a hint; Quick Look may set the height automatically for some types of previews. You must encapsulate the value in a [CFNumberRef](../corefoundation/cfnumber.md) object.

## See Also

### Deprecated constants

- [kQLPreviewContentIDScheme](kqlpreviewcontentidscheme.md): Deprecated. The content ID URL scheme.
- [kQLPreviewPropertyCursorKey](kqlpreviewpropertycursorkey.md): Deprecated.
- [kQLPreviewOptionCursorKey](kqlpreviewoptioncursorkey.md): Deprecated.
- [kQLPreviewPropertyAttachmentDataKey](kqlpreviewpropertyattachmentdatakey.md): Deprecated. Attachment data for a preview.
- [kQLPreviewPropertyAttachmentsKey](kqlpreviewpropertyattachmentskey.md): Deprecated. A list of attachments or sub-resources.
- [kQLPreviewPropertyBaseBundlePathKey](kqlpreviewpropertybasebundlepathkey.md): Deprecated. A path that’s outside of the default security scope for creating a preview.
- [kQLPreviewPropertyDisplayNameKey](kqlpreviewpropertydisplaynamekey.md): Deprecated. A custom display name for the preview panel.
- [kQLPreviewPropertyMIMETypeKey](kqlpreviewpropertymimetypekey.md): Deprecated. The web content or attachment mime type.
- [kQLPreviewPropertyPDFStyleKey](kqlpreviewpropertypdfstylekey.md): Deprecated. The preferred way to display PDF content.
- [kQLPreviewPropertyStringEncodingKey](kqlpreviewpropertystringencodingkey.md): Deprecated. The string encoding of the preview data.
- [kQLPreviewPropertyTextEncodingNameKey](kqlpreviewpropertytextencodingnamekey.md): The encoding of the web content or attachment text.
- [kQLPreviewPropertyWidthKey](kqlpreviewpropertywidthkey.md): Deprecated. The width in points of the preview.
- [kQLThumbnailPropertyBadgeImageKey](kqlthumbnailpropertybadgeimagekey.md): Deprecated. An image to use for generating the badge for a file’s icon.
- [kQLThumbnailPropertyBaseBundlePathKey](kqlthumbnailpropertybasebundlepathkey.md): Deprecated. A path that’s outside of the default security scope for creating a thumbnail.
- [kQLThumbnailPropertyExtensionKey](kqlthumbnailpropertyextensionkey.md): Deprecated. The extension to use as a badge when creating an icon.
