> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecvimageformat_copychanneldescription(_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagecvimageformat_copychanneldescription(_:_:_:))

# vImageCVImageFormat_CopyChannelDescription(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Copies the channel description for a particular channel type to an image format.

## Declaration

```swift
func vImageCVImageFormat_CopyChannelDescription(_ format: vImageCVImageFormat, _ desc: UnsafePointer<vImageChannelDescription>, _ type: vImageBufferTypeCode) -> vImage_Error
```

## Parameters

- `format`: The [vImageCVImageFormat](vimagecvimageformat.md) to copy the channel description into.
- `desc`: A pointer to a new [vImageChannelDescription](vimagechanneldescription.md) to use for the channel type.
- `type`: The type of the channel that you want to set information about, for example, [kvImageBufferTypeCode_Luminance](kvimagebuffertypecode_luminance.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

## See Also

### Querying and setting channel information

- [vImageCVImageFormat_GetChannelCount(\_:)](vimagecvimageformat_getchannelcount%28__%29.md): Returns the number of channels, including alpha, for the Core Video image format.
- [vImageCVImageFormat_GetChannelDescription(\_:\_:)](vimagecvimageformat_getchanneldescription%28____%29.md): Returns the channel description for a particular channel type.
- [vImageCVImageFormat_GetChannelNames(\_:)](vimagecvimageformat_getchannelnames%28__%29.md): Returns the names of the channels of a Core Video image format.
- [vImageChannelDescription](vimagechanneldescription.md): A description of the range and clamp limits for a pixel format.

# vImageCVImageFormat_CopyChannelDescription (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Copies the channel description for a particular channel type to an image format.

## Declaration

```objectivec
vImage_Error vImageCVImageFormat_CopyChannelDescription(vImageCVImageFormatRef format, const vImageChannelDescription *desc, vImageBufferTypeCode type);
```

## Parameters

- `format`: The [vImageCVImageFormatRef](vimagecvimageformat.md) to copy the channel description into.
- `desc`: A pointer to a new [vImageChannelDescription](vimagechanneldescription.md) to use for the channel type.
- `type`: The type of the channel that you want to set information about, for example, [kvImageBufferTypeCode_Luminance](kvimagebuffertypecode_luminance.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

## See Also

### Querying and setting channel information

- [vImageCVImageFormat_GetChannelCount](vimagecvimageformat_getchannelcount%28__%29.md): Returns the number of channels, including alpha, for the Core Video image format.
- [vImageCVImageFormat_GetChannelDescription](vimagecvimageformat_getchanneldescription%28____%29.md): Returns the channel description for a particular channel type.
- [vImageCVImageFormat_GetChannelNames](vimagecvimageformat_getchannelnames%28__%29.md): Returns the names of the channels of a Core Video image format.
- [vImageChannelDescription](vimagechanneldescription.md): A description of the range and clamp limits for a pixel format.
