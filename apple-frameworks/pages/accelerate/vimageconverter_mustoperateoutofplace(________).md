> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconverter_mustoperateoutofplace(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageconverter_mustoperateoutofplace(_:_:_:_:))

# vImageConverter_MustOperateOutOfPlace(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Determines whether a converter is capable of operating in place.

## Declaration

```swift
func vImageConverter_MustOperateOutOfPlace(_ converter: vImageConverter, _ srcs: UnsafePointer<vImage_Buffer>!, _ dests: UnsafePointer<vImage_Buffer>!, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `converter`: The converter to check to determine if it’s capable of operating in place.
- `srcs`: The list of source buffers you plan to use with [vImageConvert_AnyToAny(\_:\_:\_:\_:\_:)](vimageconvert_anytoany%28__________%29.md). This parameter may be `NULL`.
- `dests`: The list of destination buffers you plan to use with [vImageConvert_AnyToAny(\_:\_:\_:\_:\_:)](vimageconvert_anytoany%28__________%29.md). This parameter may be `NULL`.
- `flags`: The flags you’ll pass to [vImageConvert_AnyToAny(\_:\_:\_:\_:\_:)](vimageconvert_anytoany%28__________%29.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md) if the conversion will work in place, [kvImageOutOfPlaceOperationRequired](kvimageoutofplaceoperationrequired.md) if the conversion requires out of place operation; otherwise, one of the error codes that [Data Types and Constants](data-types-and-constants.md) describes.

<a id="Discussion"></a>

## Discussion

Some conversions work if the source and destination image buffer scanlines start at the same address. Others don’t; for those cases, you need to allocate additional storage to hold the destination buffer.

In-place operation is considered to mean `srcs[i].data = dests[i].data` and `srcs[i].rowBytes = dests[i].rowBytes`. Other styles of partial buffer overlap produce undefined behavior.

## See Also

### Querying a converter’s properties

- [vImageConverter_GetSourceBufferOrder(\_:)](vimageconverter_getsourcebufferorder%28__%29.md): Returns a list of vImage source buffer channel names, specifying the order of planes.
- [vImageConverter_GetDestinationBufferOrder(\_:)](vimageconverter_getdestinationbufferorder%28__%29.md): Returns a list of vImage destination buffer channel names, specifying the order of planes.
- [vImageConverter_GetNumberOfSourceBuffers(\_:)](vimageconverter_getnumberofsourcebuffers%28__%29.md): Returns the number of source buffers consumed by the converter.
- [vImageConverter_GetNumberOfDestinationBuffers(\_:)](vimageconverter_getnumberofdestinationbuffers%28__%29.md): Returns the number of destination buffers written to by the converter.

# vImageConverter_MustOperateOutOfPlace (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Determines whether a converter is capable of operating in place.

## Declaration

```objectivec
vImage_Error vImageConverter_MustOperateOutOfPlace(vImageConverterRef const converter, const vImage_Buffer *srcs, const vImage_Buffer *dests, vImage_Flags flags);
```

## Parameters

- `converter`: The converter to check to determine if it’s capable of operating in place.
- `srcs`: The list of source buffers you plan to use with [vImageConvert_AnyToAny](vimageconvert_anytoany%28__________%29.md). This parameter may be `NULL`.
- `dests`: The list of destination buffers you plan to use with [vImageConvert_AnyToAny](vimageconvert_anytoany%28__________%29.md). This parameter may be `NULL`.
- `flags`: The flags you’ll pass to [vImageConvert_AnyToAny](vimageconvert_anytoany%28__________%29.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md) if the conversion will work in place, [kvImageOutOfPlaceOperationRequired](kvimageoutofplaceoperationrequired.md) if the conversion requires out of place operation; otherwise, one of the error codes that [Data Types and Constants](data-types-and-constants.md) describes.

<a id="Discussion"></a>

## Discussion

Some conversions work if the source and destination image buffer scanlines start at the same address. Others don’t; for those cases, you need to allocate additional storage to hold the destination buffer.

In-place operation is considered to mean `srcs[i].data = dests[i].data` and `srcs[i].rowBytes = dests[i].rowBytes`. Other styles of partial buffer overlap produce undefined behavior.

## See Also

### Querying a converter’s properties

- [vImageConverter_GetSourceBufferOrder](vimageconverter_getsourcebufferorder%28__%29.md): Returns a list of vImage source buffer channel names, specifying the order of planes.
- [vImageConverter_GetDestinationBufferOrder](vimageconverter_getdestinationbufferorder%28__%29.md): Returns a list of vImage destination buffer channel names, specifying the order of planes.
- [vImageConverter_GetNumberOfSourceBuffers](vimageconverter_getnumberofsourcebuffers%28__%29.md): Returns the number of source buffers consumed by the converter.
- [vImageConverter_GetNumberOfDestinationBuffers](vimageconverter_getnumberofdestinationbuffers%28__%29.md): Returns the number of destination buffers written to by the converter.
