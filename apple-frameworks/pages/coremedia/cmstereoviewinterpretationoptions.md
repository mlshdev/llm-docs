> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmstereoviewinterpretationoptions](https://developer.apple.com/documentation/coremedia/cmstereoviewinterpretationoptions)

# CMStereoViewInterpretationOptions (Swift)

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Create a set of stereo view interpretation options from a constant.

## Declaration

```swift
struct CMStereoViewInterpretationOptions
```

## Topics

### Stereo View Options

- [additionalViews](cmstereoviewinterpretationoptions/additionalviews.md): A flag indicating that the video content contains additional views beyond the left or right eye.
- [stereoOrderReversed](cmstereoviewinterpretationoptions/stereoorderreversed.md): Changes the default ordering of eye data, switching it from left-to-right to right-to-left.

### Initializers

- [init(rawValue:)](cmstereoviewinterpretationoptions/init%28rawvalue_%29.md): Create a new option set with a given value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Metadata

- [CMMetadata](cmmetadata.md): The APIs for working with the framework’s Metadata Identifier Services and Metadata Data Type Registry.
- [CMTag](cmtag-api.md): Types and interfaces for working with Core Media tags.
- [CMTag](cmtag-swift.class.md): A tag to set additional metadata on media buffers.
- [CMTypedTag](cmtypedtag.md): A tag to set additional metadata on media buffers, with an associated Swift type for its value.
- [CMTagCollection](cmtagcollection.md): Objective-C types and interfaces for working with Core Media tag collections.
- [CMProjectionType](cmprojectiontype.md): Constants describing the projection surface information in a 3D video buffer or channel.
- [CMStereoViewComponents](cmstereoviewcomponents.md): Constants describing the stereo views contained within a buffer or channel.
- [CMPackingType](cmpackingtype.md): The type of packing within each video frame, if any.

# CMStereoViewInterpretationOptions (Objective-C)

**Framework:** Core Media  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Create a set of stereo view interpretation options from a constant.

## Declaration

```objectivec
enum CMStereoViewInterpretationOptions : uint64_t;
```

## Topics

### Stereo View Options

- [kCMStereoViewInterpretation_AdditionalViews](cmstereoviewinterpretationoptions/additionalviews.md): A flag indicating that the video content contains additional views beyond the left or right eye.
- [kCMStereoViewInterpretation_StereoOrderReversed](cmstereoviewinterpretationoptions/stereoorderreversed.md): Changes the default ordering of eye data, switching it from left-to-right to right-to-left.

### Enumeration Cases

- [kCMStereoViewInterpretation_Default](cmstereoviewinterpretationoptions/kcmstereoviewinterpretation_default.md): The default options for stereo video views.

## See Also

### Metadata

- [CMMetadata](cmmetadata.md): The APIs for working with the framework’s Metadata Identifier Services and Metadata Data Type Registry.
- [CMTag](cmtag-api.md): Types and interfaces for working with Core Media tags.
- [CMTagCollection](cmtagcollection.md): Objective-C types and interfaces for working with Core Media tag collections.
- [CMProjectionType](cmprojectiontype.md): Constants describing the projection surface information in a 3D video buffer or channel.
- [CMStereoViewComponents](cmstereoviewcomponents.md): Constants describing the stereo views contained within a buffer or channel.
- [CMPackingType](cmpackingtype.md): The type of packing within each video frame, if any.
