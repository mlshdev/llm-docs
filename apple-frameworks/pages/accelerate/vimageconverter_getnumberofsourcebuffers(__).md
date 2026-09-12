> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconverter_getnumberofsourcebuffers(_:)](https://developer.apple.com/documentation/accelerate/vimageconverter_getnumberofsourcebuffers(_:))

# vImageConverter_GetNumberOfSourceBuffers(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the number of source buffers consumed by the converter.

## Declaration

```swift
func vImageConverter_GetNumberOfSourceBuffers(_ converter: vImageConverter) -> UInt
```

## Parameters

- `converter`: A valid converter to query the number of source buffers.

<a id="return-value"></a>

## Return Value

The number of source buffers.

<a id="Discussion"></a>

## Discussion

This function is for video formats that are planar data formats with data in more than one plane.

## See Also

### Querying a converter’s properties

- [vImageConverter_MustOperateOutOfPlace(\_:\_:\_:\_:)](vimageconverter_mustoperateoutofplace%28________%29.md): Determines whether a converter is capable of operating in place.
- [vImageConverter_GetSourceBufferOrder(\_:)](vimageconverter_getsourcebufferorder%28__%29.md): Returns a list of vImage source buffer channel names, specifying the order of planes.
- [vImageConverter_GetDestinationBufferOrder(\_:)](vimageconverter_getdestinationbufferorder%28__%29.md): Returns a list of vImage destination buffer channel names, specifying the order of planes.
- [vImageConverter_GetNumberOfDestinationBuffers(\_:)](vimageconverter_getnumberofdestinationbuffers%28__%29.md): Returns the number of destination buffers written to by the converter.

# vImageConverter_GetNumberOfSourceBuffers (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the number of source buffers consumed by the converter.

## Declaration

```objectivec
unsigned long vImageConverter_GetNumberOfSourceBuffers(vImageConverterRef const converter);
```

## Parameters

- `converter`: A valid converter to query the number of source buffers.

<a id="return-value"></a>

## Return Value

The number of source buffers.

<a id="Discussion"></a>

## Discussion

This function is for video formats that are planar data formats with data in more than one plane.

## See Also

### Querying a converter’s properties

- [vImageConverter_MustOperateOutOfPlace](vimageconverter_mustoperateoutofplace%28________%29.md): Determines whether a converter is capable of operating in place.
- [vImageConverter_GetSourceBufferOrder](vimageconverter_getsourcebufferorder%28__%29.md): Returns a list of vImage source buffer channel names, specifying the order of planes.
- [vImageConverter_GetDestinationBufferOrder](vimageconverter_getdestinationbufferorder%28__%29.md): Returns a list of vImage destination buffer channel names, specifying the order of planes.
- [vImageConverter_GetNumberOfDestinationBuffers](vimageconverter_getnumberofdestinationbuffers%28__%29.md): Returns the number of destination buffers written to by the converter.
