> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtisstereomvhevcencodesupported()](https://developer.apple.com/documentation/videotoolbox/vtisstereomvhevcencodesupported())

# VTIsStereoMVHEVCEncodeSupported() (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the system supports MV-HEVC encoding.

## Declaration

```swift
func VTIsStereoMVHEVCEncodeSupported() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the system supports MV-HEVC encoding; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

A return value of [true](https://developer.apple.com/documentation/swift/true) doesn’t guarantee that encoding resources are available at all times.

## See Also

### Encoding Multi-Image Frames

- [VTCompressionSessionEncodeMultiImageFrame(\_:taggedBuffers:presentationTimeStamp:duration:frameProperties:infoFlagsOut:outputHandler:)](vtcompressionsessionencodemultiimageframe%28__taggedbuffers_presentationtimestamp_duration_frameproperties_infoflagsout_outputhandler_%29.md): Passes a multi-image frame to a compression session for encoding and provides a callback to handle the output.

# VTIsStereoMVHEVCEncodeSupported (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the system supports MV-HEVC encoding.

## Declaration

```objectivec
extern Boolean VTIsStereoMVHEVCEncodeSupported();
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the system supports MV-HEVC encoding; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

A return value of [true](https://developer.apple.com/documentation/swift/true) doesn’t guarantee that encoding resources are available at all times.

## See Also

### Encoding Multi-Image Frames

- [VTCompressionSessionEncodeMultiImageFrame](vtcompressionsessionencodemultiimageframe.md): Passes a multi-image frame to a compression session for encoding.
- [VTCompressionSessionEncodeMultiImageFrameWithOutputHandler](vtcompressionsessionencodemultiimageframewithoutputhandler.md): Passes a multi-image frame to a compression session for encoding and provides a callback to handle the output.
