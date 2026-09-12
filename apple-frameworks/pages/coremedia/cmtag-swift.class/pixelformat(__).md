> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtag-swift.class/pixelformat(_:)](https://developer.apple.com/documentation/coremedia/cmtag-swift.class/pixelformat(_:))

# pixelFormat(\_:)

**Framework:** Core Media  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a tag containing pixel format information.

## Declaration

```swift
static func pixelFormat(_ value: OSType) -> CMTypedTag<OSType>
```

## Parameters

- `value`: The pixel format for this tag. Use a constant from the framework that renders video content. For example, rendering to a [CVPixelBuffer](../../corevideo/cvpixelbuffer-q2e.md) should use a constant from [Pixel Format Identifiers](../../corevideo/pixel-format-identifiers.md).

<a id="return-value"></a>

## Return Value

A new typed tag containing the pixel format represented by `value`.

## See Also

### Creating Tags

- [channelID(\_:)](channelid%28__%29.md): Creates a new channel ID tag from an integer.
- [mediaSubType(\_:)](mediasubtype%28__%29.md): Creates a tag containing media subtype metadata.
- [mediaType(\_:)](mediatype%28__%29.md): Creates a tag containing media type metadata.
- [packingType(\_:)](packingtype%28__%29.md): Creates a tag containing frame-packing information.
- [projectionType(\_:)](projectiontype%28__%29.md): Creates a tag containing projection surface information.
- [stereoView(\_:)](stereoview%28__%29.md): Creates a tag containing eye information for 3D video.
- [stereoViewInterpretation(\_:)](stereoviewinterpretation%28__%29.md): Creates a tag containing information on how to interpret stereo view metadata.
- [trackID(\_:)](trackid%28__%29.md): Creates a tag containing a track ID.
- [videoLayerID(\_:)](videolayerid%28__%29.md): Creates a tag containing a video layer ID.
- [init(rawCategory:rawTagValue:)](init%28rawcategory_rawtagvalue_%29.md): Creates a new tag from a category and value.
