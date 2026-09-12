> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmpackingtype](https://developer.apple.com/documentation/coremedia/cmpackingtype)

# CMPackingType (Swift)

**Framework:** Core Media  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The type of packing within each video frame, if any.

## Declaration

```swift
enum CMPackingType
```

<a id="overview"></a>

## Overview

Frame-packed video contains both the left and right eye images on a single video track. With frame-packed video, use the appropriate Frame Arrangement.

## Topics

### Frame Arrangement

- [CMPackingType.none](cmpackingtype/none.md): Each frame contains only a single image, and isn’t frame-packed.
- [CMPackingType.sideBySide](cmpackingtype/sidebyside.md): The video contains packed frames that have a left eye image on the left and right eye image on the right.
- [CMPackingType.overUnder](cmpackingtype/overunder.md): The video contains packed frames that have a left eye image on the top and right eye image on the bottom.

### Initializers

- [init(rawValue:)](cmpackingtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Metadata

- [CMMetadata](cmmetadata.md): The APIs for working with the framework’s Metadata Identifier Services and Metadata Data Type Registry.
- [CMTag](cmtag-api.md): Types and interfaces for working with Core Media tags.
- [CMTag](cmtag-swift.class.md): A tag to set additional metadata on media buffers.
- [CMTypedTag](cmtypedtag.md): A tag to set additional metadata on media buffers, with an associated Swift type for its value.
- [CMTagCollection](cmtagcollection.md): Objective-C types and interfaces for working with Core Media tag collections.
- [CMProjectionType](cmprojectiontype.md): Constants describing the projection surface information in a 3D video buffer or channel.
- [CMStereoViewComponents](cmstereoviewcomponents.md): Constants describing the stereo views contained within a buffer or channel.
- [CMStereoViewInterpretationOptions](cmstereoviewinterpretationoptions.md): Create a set of stereo view interpretation options from a constant.

# CMPackingType (Objective-C)

**Framework:** Core Media  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The type of packing within each video frame, if any.

## Declaration

```objectivec
enum CMPackingType : uint64_t;
```

<a id="overview"></a>

## Overview

Frame-packed video contains both the left and right eye images on a single video track. With frame-packed video, use the appropriate Frame Arrangement.

## Topics

### Frame Arrangement

- [kCMPackingType_None](cmpackingtype/none.md): Each frame contains only a single image, and isn’t frame-packed.
- [kCMPackingType_SideBySide](cmpackingtype/sidebyside.md): The video contains packed frames that have a left eye image on the left and right eye image on the right.
- [kCMPackingType_OverUnder](cmpackingtype/overunder.md): The video contains packed frames that have a left eye image on the top and right eye image on the bottom.

## See Also

### Metadata

- [CMMetadata](cmmetadata.md): The APIs for working with the framework’s Metadata Identifier Services and Metadata Data Type Registry.
- [CMTag](cmtag-api.md): Types and interfaces for working with Core Media tags.
- [CMTagCollection](cmtagcollection.md): Objective-C types and interfaces for working with Core Media tag collections.
- [CMProjectionType](cmprojectiontype.md): Constants describing the projection surface information in a 3D video buffer or channel.
- [CMStereoViewComponents](cmstereoviewcomponents.md): Constants describing the stereo views contained within a buffer or channel.
- [CMStereoViewInterpretationOptions](cmstereoviewinterpretationoptions.md): Create a set of stereo view interpretation options from a constant.
