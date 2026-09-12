> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtag-swift.class/videolayerid(_:)](https://developer.apple.com/documentation/coremedia/cmtag-swift.class/videolayerid(_:))

# videoLayerID(\_:)

**Framework:** Core Media  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a tag containing a video layer ID.

## Declaration

```swift
static func videoLayerID(_ value: Int64) -> CMTypedTag<Int64>
```

## Parameters

- `value`: The video layer ID for this tag.

<a id="return-value"></a>

## Return Value

A new typed tag containing a video layer ID of `value`.

## See Also

### Creating Tags

- [channelID(\_:)](channelid%28__%29.md): Creates a new channel ID tag from an integer.
- [mediaSubType(\_:)](mediasubtype%28__%29.md): Creates a tag containing media subtype metadata.
- [mediaType(\_:)](mediatype%28__%29.md): Creates a tag containing media type metadata.
- [packingType(\_:)](packingtype%28__%29.md): Creates a tag containing frame-packing information.
- [pixelFormat(\_:)](pixelformat%28__%29.md): Creates a tag containing pixel format information.
- [projectionType(\_:)](projectiontype%28__%29.md): Creates a tag containing projection surface information.
- [stereoView(\_:)](stereoview%28__%29.md): Creates a tag containing eye information for 3D video.
- [stereoViewInterpretation(\_:)](stereoviewinterpretation%28__%29.md): Creates a tag containing information on how to interpret stereo view metadata.
- [trackID(\_:)](trackid%28__%29.md): Creates a tag containing a track ID.
- [init(rawCategory:rawTagValue:)](init%28rawcategory_rawtagvalue_%29.md): Creates a new tag from a category and value.
