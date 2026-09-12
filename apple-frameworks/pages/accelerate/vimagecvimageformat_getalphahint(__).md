> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecvimageformat_getalphahint(_:)](https://developer.apple.com/documentation/accelerate/vimagecvimageformat_getalphahint(_:))

# vImageCVImageFormat_GetAlphaHint(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the alpha hint of a Core Video image format.

## Declaration

```swift
func vImageCVImageFormat_GetAlphaHint(_ format: vImageConstCVImageFormat) -> Int32
```

## Parameters

- `format`: The Core Video image format to query.

<a id="return-value"></a>

## Return Value

Zero if the alpha hint isn’t opaque, or if the hint isn’t set. Nonzero if the alpha hint is fully opaque, even if the encoded values for alpha in the image aren’t `1.0`.

<a id="Discussion"></a>

## Discussion

The functions that create Core Video image formats, such as [vImageCVImageFormat_CreateWithCVPixelBuffer(\_:)](vimagecvimageformat_createwithcvpixelbuffer%28__%29.md), return a [vImageCVImageFormat](vimagecvimageformat.md). The following code shows how you create a [vImageConstCVImageFormat](vimageconstcvimageformat.md) representation of a [vImageCVImageFormat](vimagecvimageformat.md) instance to pass to [vImageCVImageFormat_GetAlphaHint(\_:)](vimagecvimageformat_getalphahint%28__%29.md):

```swift
let alphaHint = withUnsafeBytes(of: cvImageFormat) { bytes in
    let format = bytes.assumingMemoryBound(
        to: vImageConstCVImageFormat.self).first!
    
    return vImageCVImageFormat_GetAlphaHint(format)
}
```

## See Also

### Related Documentation

- [alphaIsOpaqueHint](vimagecvimageformat/alphaisopaquehint.md): The alpha hint of the Core Video image format.

### Querying and setting the alpha hint

- [vImageCVImageFormat_SetAlphaHint(\_:\_:)](vimagecvimageformat_setalphahint%28____%29.md): Sets the alpha hint of a Core Video image format.

# vImageCVImageFormat_GetAlphaHint (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the alpha hint of a Core Video image format.

## Declaration

```objectivec
int vImageCVImageFormat_GetAlphaHint(vImageConstCVImageFormatRef format);
```

## Parameters

- `format`: The Core Video image format to query.

<a id="return-value"></a>

## Return Value

Zero if the alpha hint isn’t opaque, or if the hint isn’t set. Nonzero if the alpha hint is fully opaque, even if the encoded values for alpha in the image aren’t `1.0`.

<a id="Discussion"></a>

## Discussion

The functions that create Core Video image formats, such as [vImageCVImageFormat_CreateWithCVPixelBuffer](vimagecvimageformat_createwithcvpixelbuffer%28__%29.md), return a [vImageCVImageFormatRef](vimagecvimageformat.md). The following code shows how you create a [vImageConstCVImageFormatRef](vimageconstcvimageformat.md) representation of a [vImageCVImageFormatRef](vimagecvimageformat.md) instance to pass to [vImageCVImageFormat_GetAlphaHint](vimagecvimageformat_getalphahint%28__%29.md):

```swift
let alphaHint = withUnsafeBytes(of: cvImageFormat) { bytes in
    let format = bytes.assumingMemoryBound(
        to: vImageConstCVImageFormat.self).first!
    
    return vImageCVImageFormat_GetAlphaHint(format)
}
```

## See Also

### Querying and setting the alpha hint

- [vImageCVImageFormat_SetAlphaHint](vimagecvimageformat_setalphahint%28____%29.md): Sets the alpha hint of a Core Video image format.
