> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmformatdescriptiongetmediasubtype(_:)](https://developer.apple.com/documentation/coremedia/cmformatdescriptiongetmediasubtype(_:))

# CMFormatDescriptionGetMediaSubType(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the media subtype of a format description.

## Declaration

```swift
func CMFormatDescriptionGetMediaSubType(_ desc: CMFormatDescription) -> FourCharCode
```

## Parameters

- `desc`: The `CMFormatDescription` to examine.

<a id="return-value"></a>

## Return Value

A media type that identifies the subtype of the `CMFormatDescription`.

<a id="Discussion"></a>

## Discussion

For audio streams, the media subtype is the `asbd.mFormatID`. For video streams, the media subtype is the video codec type. For muxed streams, it’s the format of the muxed stream.

For example, the function returns `aac` for a description of an AAC audio stream, `avc1` for a description of an H.264 video stream, and `mp2t` for a description of an MPEG-2 transport (muxed) stream.  If a media stream doesn’t have subtypes, this API may return `0`.

## See Also

### Inspecting Format Descriptions

- [CMFormatDescriptionGetMediaType(\_:)](cmformatdescriptiongetmediatype%28__%29.md): Returns the media type of a format description.
- [CMFormatDescriptionGetExtension(\_:extensionKey:)](cmformatdescriptiongetextension%28__extensionkey_%29.md): Returns an extension from the format description by using an extension key.
- [CMFormatDescriptionGetExtensions(\_:)](cmformatdescriptiongetextensions%28__%29.md): Returns all of the extensions for a format description.
- [CMFormatDescriptionGetTypeID()](cmformatdescriptiongettypeid%28%29.md): Returns the Core Foundation type identifier that identifies format description objects.

# CMFormatDescriptionGetMediaSubType (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the media subtype of a format description.

## Declaration

```objectivec
extern FourCharCode CMFormatDescriptionGetMediaSubType(CMFormatDescriptionRef desc);
```

## Parameters

- `desc`: The `CMFormatDescription` to examine.

<a id="return-value"></a>

## Return Value

A media type that identifies the subtype of the `CMFormatDescription`.

<a id="Discussion"></a>

## Discussion

For audio streams, the media subtype is the `asbd.mFormatID`. For video streams, the media subtype is the video codec type. For muxed streams, it’s the format of the muxed stream.

For example, the function returns `aac` for a description of an AAC audio stream, `avc1` for a description of an H.264 video stream, and `mp2t` for a description of an MPEG-2 transport (muxed) stream.  If a media stream doesn’t have subtypes, this API may return `0`.

## See Also

### Inspecting Format Descriptions

- [CMFormatDescriptionGetMediaType](cmformatdescriptiongetmediatype%28__%29.md): Returns the media type of a format description.
- [CMFormatDescriptionGetExtension](cmformatdescriptiongetextension%28__extensionkey_%29.md): Returns an extension from the format description by using an extension key.
- [CMFormatDescriptionGetExtensions](cmformatdescriptiongetextensions%28__%29.md): Returns all of the extensions for a format description.
- [CMFormatDescriptionGetTypeID](cmformatdescriptiongettypeid%28%29.md): Returns the Core Foundation type identifier that identifies format description objects.
