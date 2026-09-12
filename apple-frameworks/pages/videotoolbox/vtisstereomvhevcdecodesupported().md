> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtisstereomvhevcdecodesupported()](https://developer.apple.com/documentation/videotoolbox/vtisstereomvhevcdecodesupported())

# VTIsStereoMVHEVCDecodeSupported() (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the system supports MV-HEVC decoding.

## Declaration

```swift
func VTIsStereoMVHEVCDecodeSupported() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the system supports MV-HEVC decoding; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

A return value of [true](https://developer.apple.com/documentation/swift/true) doesn’t guarantee that decoding resources are available at all times.

## See Also

### Decoding Multi-Image Frames

- [VTDecompressionMultiImageCapableOutputHandler](vtdecompressionmultiimagecapableoutputhandler.md): A type alias for callback that the system invokes when it finishes decompressing a frame.

# VTIsStereoMVHEVCDecodeSupported (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the system supports MV-HEVC decoding.

## Declaration

```objectivec
extern Boolean VTIsStereoMVHEVCDecodeSupported();
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the system supports MV-HEVC decoding; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

A return value of [true](https://developer.apple.com/documentation/swift/true) doesn’t guarantee that decoding resources are available at all times.

## See Also

### Decoding Multi-Image Frames

- [VTDecompressionSessionSetMultiImageCallback](vtdecompressionsessionsetmultiimagecallback.md): Provides a callback capable of receiving multiple images for individual frame decoding requests.
- [VTDecompressionSessionDecodeFrameWithMultiImageCapableOutputHandler](vtdecompressionsessiondecodeframewithmultiimagecapableoutputhandler.md): Decompresses a multi-image frame and calls the specified output handler upon completion.
- [VTDecompressionMultiImageCapableOutputHandler](vtdecompressionmultiimagecapableoutputhandler.md): A type alias for callback that the system invokes when it finishes decompressing a frame.
