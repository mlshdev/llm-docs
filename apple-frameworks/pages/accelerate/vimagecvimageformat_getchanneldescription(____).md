> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecvimageformat_getchanneldescription(_:_:)](https://developer.apple.com/documentation/accelerate/vimagecvimageformat_getchanneldescription(_:_:))

# vImageCVImageFormat_GetChannelDescription(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the channel description for a particular channel type.

## Declaration

```swift
func vImageCVImageFormat_GetChannelDescription(_ format: vImageConstCVImageFormat, _ type: vImageBufferTypeCode) -> UnsafePointer<vImageChannelDescription>!
```

## Parameters

- `format`: The Core Video image format to query.
- `type`: The type of the channel that you want information about. For example, [kvImageBufferTypeCode_Luminance](kvimagebuffertypecode_luminance.md).

<a id="return-value"></a>

## Return Value

A pointer to a [vImageChannelDescription](vimagechanneldescription.md) structure that contains the channel description.

<a id="Discussion"></a>

## Discussion

The functions that create Core Video image formats, such as [vImageCVImageFormat_CreateWithCVPixelBuffer(\_:)](vimagecvimageformat_createwithcvpixelbuffer%28__%29.md), return a [vImageCVImageFormat](vimagecvimageformat.md). The following code shows how you create a [vImageConstCVImageFormat](vimageconstcvimageformat.md) representation of a [vImageCVImageFormat](vimagecvimageformat.md) instance to pass to [vImageCVImageFormat_GetChannelDescription(\_:\_:)](vimagecvimageformat_getchanneldescription%28____%29.md):

```swift
let channelDescription = withUnsafeBytes(of: cvImageFormat) { bytes in
    let format = bytes.assumingMemoryBound(
        to: vImageConstCVImageFormat.self).first!
    
    return vImageCVImageFormat_GetChannelDescription(format,
                                                     vImageBufferTypeCode(kvImageBufferTypeCode_Luminance))
}
```

## See Also

### Related Documentation

- [channelDescription(bufferType:)](vimagecvimageformat/channeldescription%28buffertype_%29.md): Returns the range and clamp limits for a specified channel in a Core Video image format.

### Querying and setting channel information

- [vImageCVImageFormat_GetChannelCount(\_:)](vimagecvimageformat_getchannelcount%28__%29.md): Returns the number of channels, including alpha, for the Core Video image format.
- [vImageCVImageFormat_CopyChannelDescription(\_:\_:\_:)](vimagecvimageformat_copychanneldescription%28______%29.md): Copies the channel description for a particular channel type to an image format.
- [vImageCVImageFormat_GetChannelNames(\_:)](vimagecvimageformat_getchannelnames%28__%29.md): Returns the names of the channels of a Core Video image format.
- [vImageChannelDescription](vimagechanneldescription.md): A description of the range and clamp limits for a pixel format.

# vImageCVImageFormat_GetChannelDescription (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the channel description for a particular channel type.

## Declaration

```objectivec
const vImageChannelDescription *vImageCVImageFormat_GetChannelDescription(vImageConstCVImageFormatRef format, vImageBufferTypeCode type);
```

## Parameters

- `format`: The Core Video image format to query.
- `type`: The type of the channel that you want information about. For example, [kvImageBufferTypeCode_Luminance](kvimagebuffertypecode_luminance.md).

<a id="return-value"></a>

## Return Value

A pointer to a [vImageChannelDescription](vimagechanneldescription.md) structure that contains the channel description.

<a id="Discussion"></a>

## Discussion

The functions that create Core Video image formats, such as [vImageCVImageFormat_CreateWithCVPixelBuffer](vimagecvimageformat_createwithcvpixelbuffer%28__%29.md), return a [vImageCVImageFormatRef](vimagecvimageformat.md). The following code shows how you create a [vImageConstCVImageFormatRef](vimageconstcvimageformat.md) representation of a [vImageCVImageFormatRef](vimagecvimageformat.md) instance to pass to [vImageCVImageFormat_GetChannelDescription](vimagecvimageformat_getchanneldescription%28____%29.md):

```swift
let channelDescription = withUnsafeBytes(of: cvImageFormat) { bytes in
    let format = bytes.assumingMemoryBound(
        to: vImageConstCVImageFormat.self).first!
    
    return vImageCVImageFormat_GetChannelDescription(format,
                                                     vImageBufferTypeCode(kvImageBufferTypeCode_Luminance))
}
```

## See Also

### Querying and setting channel information

- [vImageCVImageFormat_GetChannelCount](vimagecvimageformat_getchannelcount%28__%29.md): Returns the number of channels, including alpha, for the Core Video image format.
- [vImageCVImageFormat_CopyChannelDescription](vimagecvimageformat_copychanneldescription%28______%29.md): Copies the channel description for a particular channel type to an image format.
- [vImageCVImageFormat_GetChannelNames](vimagecvimageformat_getchannelnames%28__%29.md): Returns the names of the channels of a Core Video image format.
- [vImageChannelDescription](vimagechanneldescription.md): A description of the range and clamp limits for a pixel format.
