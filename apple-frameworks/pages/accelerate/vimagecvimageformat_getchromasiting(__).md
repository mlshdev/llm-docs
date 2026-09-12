> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecvimageformat_getchromasiting(_:)](https://developer.apple.com/documentation/accelerate/vimagecvimageformat_getchromasiting(_:))

# vImageCVImageFormat_GetChromaSiting(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the chrominance siting of a Core Video image format.

## Declaration

```swift
func vImageCVImageFormat_GetChromaSiting(_ format: vImageConstCVImageFormat) -> Unmanaged<CFString>!
```

## Parameters

- `format`: The Core Video image format to query.

<a id="return-value"></a>

## Return Value

A [CFString](../corefoundation/cfstring.md) that describes the positioning of the chrominance samples.

<a id="Discussion"></a>

## Discussion

4:2:0 and 4:2:0 YpCbCr image formats that have subsampled chrominance require the position of the chrominance samples relative to the luminance samples.

The functions that create Core Video image formats, such as [vImageCVImageFormat_CreateWithCVPixelBuffer(\_:)](vimagecvimageformat_createwithcvpixelbuffer%28__%29.md), return a [vImageCVImageFormat](vimagecvimageformat.md). The following code shows how you create a [vImageConstCVImageFormat](vimageconstcvimageformat.md) representation of a [vImageCVImageFormat](vimagecvimageformat.md) instance to pass to [vImageCVImageFormat_GetChromaSiting(\_:)](vimagecvimageformat_getchromasiting%28__%29.md):

```swift
let chromaSiting = withUnsafeBytes(of: cvImageFormat) { bytes in
    let format = bytes.assumingMemoryBound(
        to: vImageConstCVImageFormat.self).first!
    
    return vImageCVImageFormat_GetChromaSiting(format)
}
```

## See Also

### Related Documentation

- [chromaSiting](vimagecvimageformat/chromasiting-swift.property.md): The chrominance siting of the Core Video image format.

### Querying and setting the chrominance siting

- [vImageCVImageFormat_SetChromaSiting(\_:\_:)](vimagecvimageformat_setchromasiting%28____%29.md): Sets the chrominance siting of a Core Video image format.

# vImageCVImageFormat_GetChromaSiting (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the chrominance siting of a Core Video image format.

## Declaration

```objectivec
CFStringRefvImageCVImageFormat_GetChromaSiting(vImageConstCVImageFormatRef format);
```

## Parameters

- `format`: The Core Video image format to query.

<a id="return-value"></a>

## Return Value

A [CFStringRef](../corefoundation/cfstring.md) that describes the positioning of the chrominance samples.

<a id="Discussion"></a>

## Discussion

4:2:0 and 4:2:0 YpCbCr image formats that have subsampled chrominance require the position of the chrominance samples relative to the luminance samples.

The functions that create Core Video image formats, such as [vImageCVImageFormat_CreateWithCVPixelBuffer](vimagecvimageformat_createwithcvpixelbuffer%28__%29.md), return a [vImageCVImageFormatRef](vimagecvimageformat.md). The following code shows how you create a [vImageConstCVImageFormatRef](vimageconstcvimageformat.md) representation of a [vImageCVImageFormatRef](vimagecvimageformat.md) instance to pass to [vImageCVImageFormat_GetChromaSiting](vimagecvimageformat_getchromasiting%28__%29.md):

```swift
let chromaSiting = withUnsafeBytes(of: cvImageFormat) { bytes in
    let format = bytes.assumingMemoryBound(
        to: vImageConstCVImageFormat.self).first!
    
    return vImageCVImageFormat_GetChromaSiting(format)
}
```

## See Also

### Querying and setting the chrominance siting

- [vImageCVImageFormat_SetChromaSiting](vimagecvimageformat_setchromasiting%28____%29.md): Sets the chrominance siting of a Core Video image format.
