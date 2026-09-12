> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/image-shearing](https://developer.apple.com/documentation/accelerate/image-shearing)

# Image shearing (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Shear images horizontally and vertically.

## Topics

### Shearing an image horizontally

- [Single-precision horizontal shearing](single-precision-horizontal-shearing.md): Apply single-precision horizontal shearing to images.
- [Double-precision horizontal shearing](double-precision-horizontal-shearing.md): Apply double-precision horizontal shearing to images.

### Shearing an image vertically

- [Single-precision vertical shearing](single-precision-vertical-shearing.md): Apply single-precision vertical shearing to images.
- [Double-precision vertical shearing](double-precision-vertical-shearing.md): Apply double-precision vertical shearing to images.

### Resampling filters

- [vImageNewResamplingFilter(\_:\_:)](vimagenewresamplingfilter%28____%29.md): Creates a resampling filter object that corresponds to the default kernel supplied by the vImage framework.
- [vImageNewResamplingFilterForFunctionUsingBuffer(\_:\_:\_:\_:\_:\_:)](vimagenewresamplingfilterforfunctionusingbuffer%28____________%29.md): Creates a resampling filter object that encapsulates a resampling kernel function that you provide.
- [vImageGetResamplingFilterExtent(\_:\_:)](vimagegetresamplingfilterextent%28____%29.md): Returns the maximum sampling radius for a resampling filter.
- [vImageGetResamplingFilterSize(\_:\_:\_:\_:)](vimagegetresamplingfiltersize%28________%29.md): Returns the minimum size, in bytes, for the buffer needed by the new resampling filter function.
- [vImageDestroyResamplingFilter(\_:)](vimagedestroyresamplingfilter%28__%29.md): Disposes of a resampling filter object.

## See Also

### Image Resampling

- [Resampling in vImage](resampling-in-vimage.md): Learn how vImage resamples image data during geometric operations.
- [Reducing artifacts with custom resampling filters](reducing-artifacts-with-custom-resampling-filters.md): Implement custom linear interpolation to prevent the ringing effects associated with scaling an image with the default Lanczos algorithm.

# Image shearing (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Shear images horizontally and vertically.

## Topics

### Shearing an image horizontally

- [Single-precision horizontal shearing](single-precision-horizontal-shearing.md): Apply single-precision horizontal shearing to images.
- [Double-precision horizontal shearing](double-precision-horizontal-shearing.md): Apply double-precision horizontal shearing to images.

### Shearing an image vertically

- [Single-precision vertical shearing](single-precision-vertical-shearing.md): Apply single-precision vertical shearing to images.
- [Double-precision vertical shearing](double-precision-vertical-shearing.md): Apply double-precision vertical shearing to images.

### Resampling filters

- [vImageNewResamplingFilter](vimagenewresamplingfilter%28____%29.md): Creates a resampling filter object that corresponds to the default kernel supplied by the vImage framework.
- [vImageNewResamplingFilterForFunctionUsingBuffer](vimagenewresamplingfilterforfunctionusingbuffer%28____________%29.md): Creates a resampling filter object that encapsulates a resampling kernel function that you provide.
- [vImageGetResamplingFilterExtent](vimagegetresamplingfilterextent%28____%29.md): Returns the maximum sampling radius for a resampling filter.
- [vImageGetResamplingFilterSize](vimagegetresamplingfiltersize%28________%29.md): Returns the minimum size, in bytes, for the buffer needed by the new resampling filter function.
- [vImageDestroyResamplingFilter](vimagedestroyresamplingfilter%28__%29.md): Disposes of a resampling filter object.

## See Also

### Image Resampling

- [Resampling in vImage](resampling-in-vimage.md): Learn how vImage resamples image data during geometric operations.
- [Reducing artifacts with custom resampling filters](reducing-artifacts-with-custom-resampling-filters.md): Implement custom linear interpolation to prevent the ringing effects associated with scaling an image with the default Lanczos algorithm.
