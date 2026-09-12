> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconverter_getsourcebufferorder(_:)](https://developer.apple.com/documentation/accelerate/vimageconverter_getsourcebufferorder(_:))

# vImageConverter_GetSourceBufferOrder(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a list of vImage source buffer channel names, specifying the order of planes.

## Declaration

```swift
func vImageConverter_GetSourceBufferOrder(_ converter: vImageConverter) -> UnsafePointer<vImageBufferTypeCode>!
```

## Parameters

- `converter`: A valid [vImageConverter](vimageconverter.md) instance to query the source buffer channel names and order of planes.

<a id="return-value"></a>

## Return Value

An array of buffer type codes (see [vImage Buffer Type Codes](1399056-vimage-buffer-type-codes.md)) that ends with [kvImageBufferTypeCode_EndOfList](kvimagebuffertypecode_endoflist.md).

<a id="Discussion"></a>

## Discussion

This function describes the identity of each buffer passed in the `srcs` parameters of [vImageConvert_AnyToAny(\_:\_:\_:\_:\_:)](vimageconvert_anytoany%28__________%29.md), so you can order the buffers correctly. It’s provided for informational purposes, to help you configure image processing pipelines to vImage that aren’t supported through more direct means.

## See Also

### Querying a converter’s properties

- [vImageConverter_MustOperateOutOfPlace(\_:\_:\_:\_:)](vimageconverter_mustoperateoutofplace%28________%29.md): Determines whether a converter is capable of operating in place.
- [vImageConverter_GetDestinationBufferOrder(\_:)](vimageconverter_getdestinationbufferorder%28__%29.md): Returns a list of vImage destination buffer channel names, specifying the order of planes.
- [vImageConverter_GetNumberOfSourceBuffers(\_:)](vimageconverter_getnumberofsourcebuffers%28__%29.md): Returns the number of source buffers consumed by the converter.
- [vImageConverter_GetNumberOfDestinationBuffers(\_:)](vimageconverter_getnumberofdestinationbuffers%28__%29.md): Returns the number of destination buffers written to by the converter.

# vImageConverter_GetSourceBufferOrder (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a list of vImage source buffer channel names, specifying the order of planes.

## Declaration

```objectivec
const vImageBufferTypeCode *vImageConverter_GetSourceBufferOrder(vImageConverterRef converter);
```

## Parameters

- `converter`: A valid [vImageConverterRef](vimageconverter.md) instance to query the source buffer channel names and order of planes.

<a id="return-value"></a>

## Return Value

An array of buffer type codes (see [vImage Buffer Type Codes](1399056-vimage-buffer-type-codes.md)) that ends with [kvImageBufferTypeCode_EndOfList](kvimagebuffertypecode_endoflist.md).

<a id="Discussion"></a>

## Discussion

This function describes the identity of each buffer passed in the `srcs` parameters of [vImageConvert_AnyToAny](vimageconvert_anytoany%28__________%29.md), so you can order the buffers correctly. It’s provided for informational purposes, to help you configure image processing pipelines to vImage that aren’t supported through more direct means.

## See Also

### Querying a converter’s properties

- [vImageConverter_MustOperateOutOfPlace](vimageconverter_mustoperateoutofplace%28________%29.md): Determines whether a converter is capable of operating in place.
- [vImageConverter_GetDestinationBufferOrder](vimageconverter_getdestinationbufferorder%28__%29.md): Returns a list of vImage destination buffer channel names, specifying the order of planes.
- [vImageConverter_GetNumberOfSourceBuffers](vimageconverter_getnumberofsourcebuffers%28__%29.md): Returns the number of source buffers consumed by the converter.
- [vImageConverter_GetNumberOfDestinationBuffers](vimageconverter_getnumberofdestinationbuffers%28__%29.md): Returns the number of destination buffers written to by the converter.
