> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/medialibrary/mlmediaobject/attributes](https://developer.apple.com/documentation/medialibrary/mlmediaobject/attributes)

# attributes (Swift)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

A dictionary of attributes describing the media object.

## Declaration

```swift
var attributes: [String : Any] { get }
```

<a id="Discussion"></a>

## Discussion

For a list of possible object attribute keys, see [Media Object Attribute Keys](../media-object-attribute-keys.md).

## See Also

### Accessing Object Attributes

- [mediaType](mediatype.md): Deprecated. The media object’s type of media (image, audio, or movie).
- [contentType](contenttype.md): Deprecated. The UTI associated with the media object.
- [name](name.md): Deprecated. The name of the media object.
- [url](url.md): Deprecated. The location of the media object.
- [originalURL](originalurl.md): Deprecated. The location of the original media object, if [url](url.md) is not the original location.
- [fileSize](filesize.md): Deprecated. The size, in bytes, of the media object.
- [modificationDate](modificationdate.md): Deprecated. The date and time when the media object was last altered.
- [thumbnailURL](thumbnailurl.md): Deprecated. The location of the media object’s thumbnail image.
- [artworkImage](artworkimage.md): Deprecated. Album artwork associated with the media object.

# attributes (Objective-C)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

A dictionary of attributes describing the media object.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,id> * attributes;
```

<a id="Discussion"></a>

## Discussion

For a list of possible object attribute keys, see [Media Object Attribute Keys](../media-object-attribute-keys.md).

## See Also

### Accessing Object Attributes

- [mediaType](mediatype.md): Deprecated. The media object’s type of media (image, audio, or movie).
- [contentType](contenttype.md): Deprecated. The UTI associated with the media object.
- [name](name.md): Deprecated. The name of the media object.
- [URL](url.md): Deprecated. The location of the media object.
- [originalURL](originalurl.md): Deprecated. The location of the original media object, if [URL](url.md) is not the original location.
- [fileSize](filesize.md): Deprecated. The size, in bytes, of the media object.
- [modificationDate](modificationdate.md): Deprecated. The date and time when the media object was last altered.
- [thumbnailURL](thumbnailurl.md): Deprecated. The location of the media object’s thumbnail image.
- [artworkImage](artworkimage.md): Deprecated. Album artwork associated with the media object.
