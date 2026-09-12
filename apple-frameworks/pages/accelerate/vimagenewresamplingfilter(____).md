> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagenewresamplingfilter(_:_:)](https://developer.apple.com/documentation/accelerate/vimagenewresamplingfilter(_:_:))

# vImageNewResamplingFilter(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a resampling filter object that corresponds to the default kernel supplied by the vImage framework.

## Declaration

```swift
func vImageNewResamplingFilter(_ scale: Float, _ flags: vImage_Flags) -> ResamplingFilter!
```

## Parameters

- `scale`: A scale factor to associated with the resampling filter object. Shear functions to which you pass the resampling filter object use this factor when performing a shear operation. The shear function applies the scale factor  to the entire image, in a direction appropriate to the shear function, either horizontal or vertical.
- `flags`: The options to use when creating the resampling filter object. You must set exactly one of the following flags to specify how vImage handles pixel locations beyond the edge of the source image:  [kvImageBackgroundColorFill](kvimagebackgroundcolorfill.md) or [kvImageEdgeExtend](kvimageedgeextend.md).

  Set the [kvImageHighQualityResampling](kvimagehighqualityresampling.md) flag if you want vImage to use a higher quality, but slower, resampling filter.

  If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md).

  This function ignores the [kvImageLeaveAlphaUnchanged](kvimageleavealphaunchanged.md) flag.

<a id="return-value"></a>

## Return Value

A pointer to a newly created resampling filter object; otherwise `NULL`.

<a id="Discussion"></a>

## Discussion

This function creates a reusable resampling filter object  that you can pass to a shear function. The resampling filter encapsulated by the object is the default kernel for vImage This function allocates the memory needed for the resampling filter object. To deallocate this memory, call the function [vImageDestroyResamplingFilter(\_:)](vimagedestroyresamplingfilter%28__%29.md). Don’t attempt to deallocate the memory yourself.

## See Also

### Resampling filters

- [vImageNewResamplingFilterForFunctionUsingBuffer(\_:\_:\_:\_:\_:\_:)](vimagenewresamplingfilterforfunctionusingbuffer%28____________%29.md): Creates a resampling filter object that encapsulates a resampling kernel function that you provide.
- [vImageGetResamplingFilterExtent(\_:\_:)](vimagegetresamplingfilterextent%28____%29.md): Returns the maximum sampling radius for a resampling filter.
- [vImageGetResamplingFilterSize(\_:\_:\_:\_:)](vimagegetresamplingfiltersize%28________%29.md): Returns the minimum size, in bytes, for the buffer needed by the new resampling filter function.
- [vImageDestroyResamplingFilter(\_:)](vimagedestroyresamplingfilter%28__%29.md): Disposes of a resampling filter object.

# vImageNewResamplingFilter (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a resampling filter object that corresponds to the default kernel supplied by the vImage framework.

## Declaration

```objectivec
ResamplingFiltervImageNewResamplingFilter(float scale, vImage_Flags flags);
```

## Parameters

- `scale`: A scale factor to associated with the resampling filter object. Shear functions to which you pass the resampling filter object use this factor when performing a shear operation. The shear function applies the scale factor  to the entire image, in a direction appropriate to the shear function, either horizontal or vertical.
- `flags`: The options to use when creating the resampling filter object. You must set exactly one of the following flags to specify how vImage handles pixel locations beyond the edge of the source image:  [kvImageBackgroundColorFill](kvimagebackgroundcolorfill.md) or [kvImageEdgeExtend](kvimageedgeextend.md).

  Set the [kvImageHighQualityResampling](kvimagehighqualityresampling.md) flag if you want vImage to use a higher quality, but slower, resampling filter.

  If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md).

  This function ignores the [kvImageLeaveAlphaUnchanged](kvimageleavealphaunchanged.md) flag.

<a id="return-value"></a>

## Return Value

A pointer to a newly created resampling filter object; otherwise `NULL`.

<a id="Discussion"></a>

## Discussion

This function creates a reusable resampling filter object  that you can pass to a shear function. The resampling filter encapsulated by the object is the default kernel for vImage This function allocates the memory needed for the resampling filter object. To deallocate this memory, call the function [vImageDestroyResamplingFilter](vimagedestroyresamplingfilter%28__%29.md). Don’t attempt to deallocate the memory yourself.

## See Also

### Resampling filters

- [vImageNewResamplingFilterForFunctionUsingBuffer](vimagenewresamplingfilterforfunctionusingbuffer%28____________%29.md): Creates a resampling filter object that encapsulates a resampling kernel function that you provide.
- [vImageGetResamplingFilterExtent](vimagegetresamplingfilterextent%28____%29.md): Returns the maximum sampling radius for a resampling filter.
- [vImageGetResamplingFilterSize](vimagegetresamplingfiltersize%28________%29.md): Returns the minimum size, in bytes, for the buffer needed by the new resampling filter function.
- [vImageDestroyResamplingFilter](vimagedestroyresamplingfilter%28__%29.md): Disposes of a resampling filter object.
