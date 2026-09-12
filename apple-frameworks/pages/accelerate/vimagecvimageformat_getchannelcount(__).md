> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecvimageformat_getchannelcount(_:)](https://developer.apple.com/documentation/accelerate/vimagecvimageformat_getchannelcount(_:))

# vImageCVImageFormat_GetChannelCount(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the number of channels, including alpha, for the Core Video image format.

## Declaration

```swift
func vImageCVImageFormat_GetChannelCount(_ format: vImageConstCVImageFormat) -> UInt32
```

## Parameters

- `format`: The Core Video image format to query.

<a id="return-value"></a>

## Return Value

The number of channels.

<a id="Discussion"></a>

## Discussion

This function returns the number of interleaved or planar channels.

The functions that create Core Video image formats, such as [vImageCVImageFormat_CreateWithCVPixelBuffer(\_:)](vimagecvimageformat_createwithcvpixelbuffer%28__%29.md), return a [vImageCVImageFormat](vimagecvimageformat.md). The following code shows how you create a [vImageConstCVImageFormat](vimageconstcvimageformat.md) representation of a [vImageCVImageFormat](vimagecvimageformat.md) instance to pass to [vImageCVImageFormat_GetChannelCount(\_:)](vimagecvimageformat_getchannelcount%28__%29.md):

```swift
let channelCount = withUnsafeBytes(of: cvImageFormat) { bytes in
    let format = bytes.assumingMemoryBound(
        to: vImageConstCVImageFormat.self).first!
    
    return vImageCVImageFormat_GetChannelCount(format)
}
```

## See Also

### Related Documentation

- [channelCount](vimagecvimageformat/channelcount.md): The number of channels, including alpha, for the Core Video image format.

### Querying and setting channel information

- [vImageCVImageFormat_GetChannelDescription(\_:\_:)](vimagecvimageformat_getchanneldescription%28____%29.md): Returns the channel description for a particular channel type.
- [vImageCVImageFormat_CopyChannelDescription(\_:\_:\_:)](vimagecvimageformat_copychanneldescription%28______%29.md): Copies the channel description for a particular channel type to an image format.
- [vImageCVImageFormat_GetChannelNames(\_:)](vimagecvimageformat_getchannelnames%28__%29.md): Returns the names of the channels of a Core Video image format.
- [vImageChannelDescription](vimagechanneldescription.md): A description of the range and clamp limits for a pixel format.

# vImageCVImageFormat_GetChannelCount (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the number of channels, including alpha, for the Core Video image format.

## Declaration

```objectivec
uint32_t vImageCVImageFormat_GetChannelCount(vImageConstCVImageFormatRef format);
```

## Parameters

- `format`: The Core Video image format to query.

<a id="return-value"></a>

## Return Value

The number of channels.

<a id="Discussion"></a>

## Discussion

This function returns the number of interleaved or planar channels.

The functions that create Core Video image formats, such as [vImageCVImageFormat_CreateWithCVPixelBuffer](vimagecvimageformat_createwithcvpixelbuffer%28__%29.md), return a [vImageCVImageFormatRef](vimagecvimageformat.md). The following code shows how you create a [vImageConstCVImageFormatRef](vimageconstcvimageformat.md) representation of a [vImageCVImageFormatRef](vimagecvimageformat.md) instance to pass to [vImageCVImageFormat_GetChannelCount](vimagecvimageformat_getchannelcount%28__%29.md):

```swift
let channelCount = withUnsafeBytes(of: cvImageFormat) { bytes in
    let format = bytes.assumingMemoryBound(
        to: vImageConstCVImageFormat.self).first!
    
    return vImageCVImageFormat_GetChannelCount(format)
}
```

## See Also

### Querying and setting channel information

- [vImageCVImageFormat_GetChannelDescription](vimagecvimageformat_getchanneldescription%28____%29.md): Returns the channel description for a particular channel type.
- [vImageCVImageFormat_CopyChannelDescription](vimagecvimageformat_copychanneldescription%28______%29.md): Copies the channel description for a particular channel type to an image format.
- [vImageCVImageFormat_GetChannelNames](vimagecvimageformat_getchannelnames%28__%29.md): Returns the names of the channels of a Core Video image format.
- [vImageChannelDescription](vimagechanneldescription.md): A description of the range and clamp limits for a pixel format.
