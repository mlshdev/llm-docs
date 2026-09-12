> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtag-swift.class/init(rawcategory:rawtagvalue:)](https://developer.apple.com/documentation/coremedia/cmtag-swift.class/init(rawcategory:rawtagvalue:))

# init(rawCategory:rawTagValue:)

**Framework:** Core Media  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a new tag from a category and value.

## Declaration

```swift
init(rawCategory: CMTag.RawCategory, rawTagValue: CMTag.Value)
```

## Parameters

- `rawCategory`: The category of the created tag.
- `rawTagValue`: The value of the created tag.

<a id="Discussion"></a>

## Discussion

> **Important**

>  To ensure that your tags have a valid category, create new [CMTag](../cmtag-swift.class.md) instances with a static method listed in Creating Tags.

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
- [videoLayerID(\_:)](videolayerid%28__%29.md): Creates a tag containing a video layer ID.
