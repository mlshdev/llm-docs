> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtag-swift.class](https://developer.apple.com/documentation/coremedia/cmtag-swift.class)

# CMTag

**Framework:** Core Media  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A tag to set additional metadata on media buffers.

## Declaration

```swift
class CMTag
```

<a id="overview"></a>

## Overview

The Core Media framework uses tags to describe the properties of media channels. Each tag consists of a category and a value, both of which are 64 bits in size.

> **Important**

>  Tag data can only contain values that can be safely stored on disk. In particular, [CMTag](cmtag-swift.class.md) values can’t contain a pointer. If you need to refer to another media element or in-memory data as part of a tag, use a buffer index or other constant.

It’s recommended to use [CMTypedTag](cmtypedtag.md) instances where possible to preserve type safety.

## Topics

### Creating Tags

- [channelID(\_:)](cmtag-swift.class/channelid%28__%29.md): Creates a new channel ID tag from an integer.
- [mediaSubType(\_:)](cmtag-swift.class/mediasubtype%28__%29.md): Creates a tag containing media subtype metadata.
- [mediaType(\_:)](cmtag-swift.class/mediatype%28__%29.md): Creates a tag containing media type metadata.
- [packingType(\_:)](cmtag-swift.class/packingtype%28__%29.md): Creates a tag containing frame-packing information.
- [pixelFormat(\_:)](cmtag-swift.class/pixelformat%28__%29.md): Creates a tag containing pixel format information.
- [projectionType(\_:)](cmtag-swift.class/projectiontype%28__%29.md): Creates a tag containing projection surface information.
- [stereoView(\_:)](cmtag-swift.class/stereoview%28__%29.md): Creates a tag containing eye information for 3D video.
- [stereoViewInterpretation(\_:)](cmtag-swift.class/stereoviewinterpretation%28__%29.md): Creates a tag containing information on how to interpret stereo view metadata.
- [trackID(\_:)](cmtag-swift.class/trackid%28__%29.md): Creates a tag containing a track ID.
- [videoLayerID(\_:)](cmtag-swift.class/videolayerid%28__%29.md): Creates a tag containing a video layer ID.
- [init(rawCategory:rawTagValue:)](cmtag-swift.class/init%28rawcategory_rawtagvalue_%29.md): Creates a new tag from a category and value.

### Inspecting Tags

- [rawCategory](cmtag-swift.class/rawcategory-swift.property.md): The raw 64-bit representation of the tag’s category.
- [rawTagValue](cmtag-swift.class/rawtagvalue.md): The tag’s contained value.
- [value(onlyIfMatching:)](cmtag-swift.class/value%28onlyifmatching_%29.md): Retrieves a tag’s value as a specific type, if and only if it matches a category.

### Wrapped Values

- [CMTag.Value](cmtag-swift.class/value.md): A wrapper type for a value associated with a tag.

### Type Aliases

- [CMTag.RawCategory](cmtag-swift.class/rawcategory-swift.typealias.md): The raw 64-bit representation of a tag’s category.

## Relationships

### Inherited By

- [CMTypedTag](cmtypedtag.md)

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Metadata

- [CMMetadata](cmmetadata.md): The APIs for working with the framework’s Metadata Identifier Services and Metadata Data Type Registry.
- [CMTag](cmtag-api.md): Types and interfaces for working with Core Media tags.
- [CMTypedTag](cmtypedtag.md): A tag to set additional metadata on media buffers, with an associated Swift type for its value.
- [CMTagCollection](cmtagcollection.md): Objective-C types and interfaces for working with Core Media tag collections.
- [CMProjectionType](cmprojectiontype.md): Constants describing the projection surface information in a 3D video buffer or channel.
- [CMStereoViewComponents](cmstereoviewcomponents.md): Constants describing the stereo views contained within a buffer or channel.
- [CMStereoViewInterpretationOptions](cmstereoviewinterpretationoptions.md): Create a set of stereo view interpretation options from a constant.
- [CMPackingType](cmpackingtype.md): The type of packing within each video frame, if any.
