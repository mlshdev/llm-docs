> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecvimageformat_setchromasiting(_:_:)](https://developer.apple.com/documentation/accelerate/vimagecvimageformat_setchromasiting(_:_:))

# vImageCVImageFormat_SetChromaSiting(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Sets the chrominance siting of a Core Video image format.

## Declaration

```swift
func vImageCVImageFormat_SetChromaSiting(_ format: vImageCVImageFormat, _ siting: CFString!) -> vImage_Error
```

## Parameters

- `format`: The Core Video image format to update.
- `siting`: The new siting information for the format.

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

4:2:0 and 4:2:0 YpCbCr image formats that have subsampled chrominance require the position of the chrominance samples relative to the luminance samples.

## See Also

### Related Documentation

- [chromaSiting](vimagecvimageformat/chromasiting-swift.property.md): The chrominance siting of the Core Video image format.

### Querying and setting the chrominance siting

- [vImageCVImageFormat_GetChromaSiting(\_:)](vimagecvimageformat_getchromasiting%28__%29.md): Returns the chrominance siting of a Core Video image format.

# vImageCVImageFormat_SetChromaSiting (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Sets the chrominance siting of a Core Video image format.

## Declaration

```objectivec
vImage_Error vImageCVImageFormat_SetChromaSiting(vImageCVImageFormatRef format, CFStringRef siting);
```

## Parameters

- `format`: The Core Video image format to update.
- `siting`: The new siting information for the format.

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

4:2:0 and 4:2:0 YpCbCr image formats that have subsampled chrominance require the position of the chrominance samples relative to the luminance samples.

## See Also

### Querying and setting the chrominance siting

- [vImageCVImageFormat_GetChromaSiting](vimagecvimageformat_getchromasiting%28__%29.md): Returns the chrominance siting of a Core Video image format.
