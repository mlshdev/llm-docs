> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmformatdescriptiongetmediatype(_:)](https://developer.apple.com/documentation/coremedia/cmformatdescriptiongetmediatype(_:))

# CMFormatDescriptionGetMediaType(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the media type of a format description.

## Declaration

```swift
func CMFormatDescriptionGetMediaType(_ desc: CMFormatDescription) -> CMMediaType
```

## Parameters

- `desc`: A `CMFormatDescription` to examine.

<a id="return-value"></a>

## Return Value

A media type that identifies the format description.

<a id="Discussion"></a>

## Discussion

For example, this function returns [kCMMediaType_Audio](kcmmediatype_audio.md) for a description of an audio stream.

## See Also

### Inspecting Format Descriptions

- [CMFormatDescriptionGetMediaSubType(\_:)](cmformatdescriptiongetmediasubtype%28__%29.md): Returns the media subtype of a format description.
- [CMFormatDescriptionGetExtension(\_:extensionKey:)](cmformatdescriptiongetextension%28__extensionkey_%29.md): Returns an extension from the format description by using an extension key.
- [CMFormatDescriptionGetExtensions(\_:)](cmformatdescriptiongetextensions%28__%29.md): Returns all of the extensions for a format description.
- [CMFormatDescriptionGetTypeID()](cmformatdescriptiongettypeid%28%29.md): Returns the Core Foundation type identifier that identifies format description objects.

# CMFormatDescriptionGetMediaType (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the media type of a format description.

## Declaration

```objectivec
extern CMMediaType CMFormatDescriptionGetMediaType(CMFormatDescriptionRef desc);
```

## Parameters

- `desc`: A `CMFormatDescription` to examine.

<a id="return-value"></a>

## Return Value

A media type that identifies the format description.

<a id="Discussion"></a>

## Discussion

For example, this function returns [kCMMediaType_Audio](kcmmediatype_audio.md) for a description of an audio stream.

## See Also

### Inspecting Format Descriptions

- [CMFormatDescriptionGetMediaSubType](cmformatdescriptiongetmediasubtype%28__%29.md): Returns the media subtype of a format description.
- [CMFormatDescriptionGetExtension](cmformatdescriptiongetextension%28__extensionkey_%29.md): Returns an extension from the format description by using an extension key.
- [CMFormatDescriptionGetExtensions](cmformatdescriptiongetextensions%28__%29.md): Returns all of the extensions for a format description.
- [CMFormatDescriptionGetTypeID](cmformatdescriptiongettypeid%28%29.md): Returns the Core Foundation type identifier that identifies format description objects.
