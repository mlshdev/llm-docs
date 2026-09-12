> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmprojectiontype](https://developer.apple.com/documentation/coremedia/cmprojectiontype)

# CMProjectionType (Swift)

**Framework:** Core Media  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Constants describing the projection surface information in a 3D video buffer or channel.

## Declaration

```swift
enum CMProjectionType
```

## Topics

### Projection Surfaces

- [CMProjectionType.rectangular](cmprojectiontype/rectangular.md): Video content displays on a flat, rectangular 2D surface.
- [CMProjectionType.equirectangular](cmprojectiontype/equirectangular.md): Video content displays as a 360 degree equirectangular projection.
- [CMProjectionType.halfEquirectangular](cmprojectiontype/halfequirectangular.md): Video content displays as a 180 degree equirectangular projection.
- [CMProjectionType.fisheye](cmprojectiontype/fisheye.md): Video content displays as a fisheye projection.

### Enumeration Cases

- [CMProjectionType.parametricImmersive](cmprojectiontype/parametricimmersive.md)

### Initializers

- [init(rawValue:)](cmprojectiontype/init%28rawvalue_%29.md)

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
- [CMStereoViewComponents](cmstereoviewcomponents.md): Constants describing the stereo views contained within a buffer or channel.
- [CMStereoViewInterpretationOptions](cmstereoviewinterpretationoptions.md): Create a set of stereo view interpretation options from a constant.
- [CMPackingType](cmpackingtype.md): The type of packing within each video frame, if any.

# CMProjectionType (Objective-C)

**Framework:** Core Media  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Constants describing the projection surface information in a 3D video buffer or channel.

## Declaration

```objectivec
enum CMProjectionType : uint64_t;
```

## Topics

### Projection Surfaces

- [kCMProjectionType_Rectangular](cmprojectiontype/rectangular.md): Video content displays on a flat, rectangular 2D surface.
- [kCMProjectionType_Equirectangular](cmprojectiontype/equirectangular.md): Video content displays as a 360 degree equirectangular projection.
- [kCMProjectionType_HalfEquirectangular](cmprojectiontype/halfequirectangular.md): Video content displays as a 180 degree equirectangular projection.
- [kCMProjectionType_Fisheye](cmprojectiontype/fisheye.md): Video content displays as a fisheye projection.

### Enumeration Cases

- [kCMProjectionType_ParametricImmersive](cmprojectiontype/parametricimmersive.md)

## See Also

### Metadata

- [CMMetadata](cmmetadata.md): The APIs for working with the framework’s Metadata Identifier Services and Metadata Data Type Registry.
- [CMTag](cmtag-api.md): Types and interfaces for working with Core Media tags.
- [CMTagCollection](cmtagcollection.md): Objective-C types and interfaces for working with Core Media tag collections.
- [CMStereoViewComponents](cmstereoviewcomponents.md): Constants describing the stereo views contained within a buffer or channel.
- [CMStereoViewInterpretationOptions](cmstereoviewinterpretationoptions.md): Create a set of stereo view interpretation options from a constant.
- [CMPackingType](cmpackingtype.md): The type of packing within each video frame, if any.
