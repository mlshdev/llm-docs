> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/medialibrary/mlmediaobject/url](https://developer.apple.com/documentation/medialibrary/mlmediaobject/url)

# url (Swift)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

The location of the media object.

## Declaration

```swift
var url: URL? { get }
```

<a id="Discussion"></a>

## Discussion

This property is provided as a security-scoped URL. In order to gain access to the file that this URL refers to, the caller must call [startAccessingSecurityScopedResource()](https://developer.apple.com/documentation/foundation/nsurl/startaccessingsecurityscopedresource%28%29) before and [stopAccessingSecurityScopedResource()](https://developer.apple.com/documentation/foundation/nsurl/stopaccessingsecurityscopedresource%28%29) after using the URL to access the file. For more information about security-scoped URLs, see [NSURL](https://developer.apple.com/documentation/foundation/nsurl).

## See Also

### Accessing Object Attributes

- [attributes](attributes.md): Deprecated. A dictionary of attributes describing the media object.
- [mediaType](mediatype.md): Deprecated. The media object’s type of media (image, audio, or movie).
- [contentType](contenttype.md): Deprecated. The UTI associated with the media object.
- [name](name.md): Deprecated. The name of the media object.
- [originalURL](originalurl.md): Deprecated. The location of the original media object, if [url](url.md) is not the original location.
- [fileSize](filesize.md): Deprecated. The size, in bytes, of the media object.
- [modificationDate](modificationdate.md): Deprecated. The date and time when the media object was last altered.
- [thumbnailURL](thumbnailurl.md): Deprecated. The location of the media object’s thumbnail image.
- [artworkImage](artworkimage.md): Deprecated. Album artwork associated with the media object.

# URL (Objective-C)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

The location of the media object.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSURL * URL;
```

<a id="Discussion"></a>

## Discussion

This property is provided as a security-scoped URL. In order to gain access to the file that this URL refers to, the caller must call [startAccessingSecurityScopedResource](https://developer.apple.com/documentation/foundation/nsurl/startaccessingsecurityscopedresource%28%29) before and [stopAccessingSecurityScopedResource](https://developer.apple.com/documentation/foundation/nsurl/stopaccessingsecurityscopedresource%28%29) after using the URL to access the file. For more information about security-scoped URLs, see [NSURL](https://developer.apple.com/documentation/foundation/nsurl).

## See Also

### Accessing Object Attributes

- [attributes](attributes.md): Deprecated. A dictionary of attributes describing the media object.
- [mediaType](mediatype.md): Deprecated. The media object’s type of media (image, audio, or movie).
- [contentType](contenttype.md): Deprecated. The UTI associated with the media object.
- [name](name.md): Deprecated. The name of the media object.
- [originalURL](originalurl.md): Deprecated. The location of the original media object, if [URL](url.md) is not the original location.
- [fileSize](filesize.md): Deprecated. The size, in bytes, of the media object.
- [modificationDate](modificationdate.md): Deprecated. The date and time when the media object was last altered.
- [thumbnailURL](thumbnailurl.md): Deprecated. The location of the media object’s thumbnail image.
- [artworkImage](artworkimage.md): Deprecated. Album artwork associated with the media object.
