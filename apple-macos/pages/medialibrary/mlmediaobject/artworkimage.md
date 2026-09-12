> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/medialibrary/mlmediaobject/artworkimage](https://developer.apple.com/documentation/medialibrary/mlmediaobject/artworkimage)

# artworkImage (Swift)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

Album artwork associated with the media object.

## Declaration

```swift
@NSCopying var artworkImage: NSImage? { get }
```

<a id="Discussion"></a>

## Discussion

Applies to iTunes media only. Returns `nil` if not applicable or not available.

## See Also

### Accessing Object Attributes

- [attributes](attributes.md): Deprecated. A dictionary of attributes describing the media object.
- [mediaType](mediatype.md): Deprecated. The media object’s type of media (image, audio, or movie).
- [contentType](contenttype.md): Deprecated. The UTI associated with the media object.
- [name](name.md): Deprecated. The name of the media object.
- [url](url.md): Deprecated. The location of the media object.
- [originalURL](originalurl.md): Deprecated. The location of the original media object, if [url](url.md) is not the original location.
- [fileSize](filesize.md): Deprecated. The size, in bytes, of the media object.
- [modificationDate](modificationdate.md): Deprecated. The date and time when the media object was last altered.
- [thumbnailURL](thumbnailurl.md): Deprecated. The location of the media object’s thumbnail image.

# artworkImage (Objective-C)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

Album artwork associated with the media object.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSImage * artworkImage;
```

<a id="Discussion"></a>

## Discussion

Applies to iTunes media only. Returns `nil` if not applicable or not available.

## See Also

### Accessing Object Attributes

- [attributes](attributes.md): Deprecated. A dictionary of attributes describing the media object.
- [mediaType](mediatype.md): Deprecated. The media object’s type of media (image, audio, or movie).
- [contentType](contenttype.md): Deprecated. The UTI associated with the media object.
- [name](name.md): Deprecated. The name of the media object.
- [URL](url.md): Deprecated. The location of the media object.
- [originalURL](originalurl.md): Deprecated. The location of the original media object, if [URL](url.md) is not the original location.
- [fileSize](filesize.md): Deprecated. The size, in bytes, of the media object.
- [modificationDate](modificationdate.md): Deprecated. The date and time when the media object was last altered.
- [thumbnailURL](thumbnailurl.md): Deprecated. The location of the media object’s thumbnail image.
