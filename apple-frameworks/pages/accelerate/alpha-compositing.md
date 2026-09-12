> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/alpha-compositing](https://developer.apple.com/documentation/accelerate/alpha-compositing)

# Alpha compositing (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Composite images together.

## Topics

### Performing nonpremultiplied alpha compositing

- [vImageAlphaBlend_Planar8(\_:\_:\_:\_:\_:\_:\_:)](vimagealphablend_planar8%28______________%29.md): Performs nonpremultiplied alpha compositing of two 8-bit planar buffers.
- [vImageAlphaBlend_PlanarF(\_:\_:\_:\_:\_:\_:\_:)](vimagealphablend_planarf%28______________%29.md): Performs nonpremultiplied alpha compositing of two 8-bit planar buffers.
- [vImageAlphaBlend_ARGB8888(\_:\_:\_:\_:)](vimagealphablend_argb8888%28________%29.md): Performs nonpremultiplied alpha compositing of two 8-bit-per-channel, 4-channel ARGB buffers.
- [vImageAlphaBlend_ARGBFFFF(\_:\_:\_:\_:)](vimagealphablend_argbffff%28________%29.md): Performs nonpremultiplied alpha compositing of two 32-bit-per-channel, 4-channel ARGB buffers.

### Performing premultiplied alpha compositing

- [vImagePremultipliedAlphaBlend_Planar8(\_:\_:\_:\_:\_:)](vimagepremultipliedalphablend_planar8%28__________%29.md): Performs premultiplied alpha compositing of two 8-bit planar buffers.
- [vImagePremultipliedAlphaBlend_PlanarF(\_:\_:\_:\_:\_:)](vimagepremultipliedalphablend_planarf%28__________%29.md): Performs premultiplied alpha compositing of two 32-bit planar buffers.
- [vImagePremultipliedAlphaBlend_ARGB8888(\_:\_:\_:\_:)](vimagepremultipliedalphablend_argb8888%28________%29.md): Performs premultiplied alpha compositing of two 8-bit-per-channel, 4-channel ARGB buffers.
- [vImagePremultipliedAlphaBlend_ARGBFFFF(\_:\_:\_:\_:)](vimagepremultipliedalphablend_argbffff%28________%29.md): Performs premultiplied alpha compositing of two 32-bit-per-channel, 4-channel ARGB buffers.
- [vImagePremultipliedAlphaBlend_BGRA8888(\_:\_:\_:\_:)](vimagepremultipliedalphablend_bgra8888%28________%29.md): Performs premultiplied alpha compositing of two 8-bit-per-channel, 4-channel BGRA buffers.
- [vImagePremultipliedAlphaBlend_BGRAFFFF(\_:\_:\_:\_:)](vimagepremultipliedalphablend_bgraffff%28________%29.md): Performs premultiplied alpha compositing of two 32-bit-per-channel, 4-channel BGRA buffers.

### Performing premultiplied alpha compositing with blend modes

- [vImagePremultipliedAlphaBlendLighten_RGBA8888(\_:\_:\_:\_:)](vimagepremultipliedalphablendlighten_rgba8888%28________%29.md): Performs alpha compositing of two 8-bit-per-channel, 4-channel BGRA buffers using the lighten blend mode.
- [vImagePremultipliedAlphaBlendDarken_RGBA8888(\_:\_:\_:\_:)](vimagepremultipliedalphablenddarken_rgba8888%28________%29.md): Performs alpha compositing of two 8-bit-per-channel, 4-channel BGRA buffers using the darken blend mode.
- [vImagePremultipliedAlphaBlendScreen_RGBA8888(\_:\_:\_:\_:)](vimagepremultipliedalphablendscreen_rgba8888%28________%29.md): Performs alpha compositing of two 8-bit-per-channel, 4-channel BGRA buffers using the screen blend mode.
- [vImagePremultipliedAlphaBlendMultiply_RGBA8888(\_:\_:\_:\_:)](vimagepremultipliedalphablendmultiply_rgba8888%28________%29.md): Performs alpha compositing of two 8-bit-per-channel, 4-channel BGRA buffers using the multiply blend mode.

### Performing premultiplied alpha compositing with a permute

- [vImagePremultipliedAlphaBlendWithPermute_ARGB8888(\_:\_:\_:\_:\_:\_:)](vimagepremultipliedalphablendwithpermute_argb8888%28____________%29.md): Permutes the top 8-bit, 4-channel premultiplied buffer, and composites with the bottom buffer.
- [vImagePremultipliedAlphaBlendWithPermute_RGBA8888(\_:\_:\_:\_:\_:\_:)](vimagepremultipliedalphablendwithpermute_rgba8888%28____________%29.md): Permutes the top 8-bit, 4-channel premultiplied buffer, and composites with the bottom buffer.

### Performing premultiplied alpha compositing with a single alpha value

- [vImagePremultipliedConstAlphaBlend_Planar8(\_:\_:\_:\_:\_:\_:)](vimagepremultipliedconstalphablend_planar8%28____________%29.md): Performs premultiplied alpha compositing of two 8-bit planar buffers and applies an extra alpha value to the top buffer.
- [vImagePremultipliedConstAlphaBlend_PlanarF(\_:\_:\_:\_:\_:\_:)](vimagepremultipliedconstalphablend_planarf%28____________%29.md): Performs premultiplied alpha compositing of two 32-bit planar buffers and applies an extra alpha value to the top buffer.
- [vImagePremultipliedConstAlphaBlend_ARGB8888(\_:\_:\_:\_:\_:)](vimagepremultipliedconstalphablend_argb8888%28__________%29.md): Performs premultiplied alpha compositing of two 8-bit-per-channel, 4-channel interleaved buffers and applies an extra alpha value to the top buffer.
- [vImagePremultipliedConstAlphaBlend_ARGBFFFF(\_:\_:\_:\_:\_:)](vimagepremultipliedconstalphablend_argbffff%28__________%29.md): Performs premultiplied alpha compositing of two 32-bit-per-channel, 4-channel interleaved buffers and applies an extra alpha value to the top buffer.

### Performing nonpremultiplied to premultiplied alpha compositing

- [vImageAlphaBlend_NonpremultipliedToPremultiplied_Planar8(\_:\_:\_:\_:\_:)](vimagealphablend_nonpremultipliedtopremultiplied_planar8%28__________%29.md): Composites a nonpremultiplied 8-bit planar buffer over a premultiplied 8-bit planar buffer and generates a premultiplied result.
- [vImageAlphaBlend_NonpremultipliedToPremultiplied_PlanarF(\_:\_:\_:\_:\_:)](vimagealphablend_nonpremultipliedtopremultiplied_planarf%28__________%29.md): Composites a nonpremultiplied 32-bit planar buffer over a premultiplied 32-bit planar buffer and generates a premultiplied result.
- [vImageAlphaBlend_NonpremultipliedToPremultiplied_ARGB8888(\_:\_:\_:\_:)](vimagealphablend_nonpremultipliedtopremultiplied_argb8888%28________%29.md): Composites a nonpremultiplied 8-bit-per-channel, ARGB buffer over a premultiplied ARGB buffer and generates a premultiplied result.
- [vImageAlphaBlend_NonpremultipliedToPremultiplied_ARGBFFFF(\_:\_:\_:\_:)](vimagealphablend_nonpremultipliedtopremultiplied_argbffff%28________%29.md): Composites a nonpremultiplied 32-bit-per-channel, ARGB buffer over a premultiplied ARGB buffer and generates a premultiplied result.

### Converting from unpremultiplied to premultiplied format

- [vImagePremultiplyData_Planar8(\_:\_:\_:\_:)](vimagepremultiplydata_planar8%28________%29.md): Transforms an 8-bit planar buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_PlanarF(\_:\_:\_:\_:)](vimagepremultiplydata_planarf%28________%29.md): Transforms a 32-bit planar buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_ARGB8888(\_:\_:\_:)](vimagepremultiplydata_argb8888%28______%29.md): Transforms an 8-bit-per-channel, 4-channel ARGB buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_RGBA8888(\_:\_:\_:)](vimagepremultiplydata_rgba8888%28______%29.md): Transforms an 8-bit-per-channel, 4-channel RGBA buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_ARGB16U(\_:\_:\_:)](vimagepremultiplydata_argb16u%28______%29.md): Transforms an unsigned 16-bit-per-channel, 4-channel ARGB buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_RGBA16U(\_:\_:\_:)](vimagepremultiplydata_rgba16u%28______%29.md): Transforms an unsigned 16-bit-per-channel, 4-channel RGBA buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_RGBA16F(\_:\_:\_:)](vimagepremultiplydata_rgba16f%28______%29.md): Transforms a floating-point 16-bit-per-channel, 4-channel RGBA buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_ARGB16Q12(\_:\_:\_:)](vimagepremultiplydata_argb16q12%28______%29.md): Transforms a fixed-point 16-bit-per-channel, 4-channel ARGB buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_RGBA16Q12(\_:\_:\_:)](vimagepremultiplydata_rgba16q12%28______%29.md): Transforms a fixed-point 16-bit-per-channel, 4-channel RGBA buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_ARGBFFFF(\_:\_:\_:)](vimagepremultiplydata_argbffff%28______%29.md): Transforms a floating-point 32-bit-per-channel, 4-channel ARGB buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_RGBAFFFF(\_:\_:\_:)](vimagepremultiplydata_rgbaffff%28______%29.md): Transforms a floating-point 32-bit-per-channel, 4-channel ARGB buffer from nonpremultiplied alpha format to premultiplied alpha format.

### Converting from premultiplied to unpremultiplied format

- [vImageUnpremultiplyData_Planar8(\_:\_:\_:\_:)](vimageunpremultiplydata_planar8%28________%29.md): Transforms an 8-bit planar buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_PlanarF(\_:\_:\_:\_:)](vimageunpremultiplydata_planarf%28________%29.md): Transforms a 32-bit planar buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_ARGB8888(\_:\_:\_:)](vimageunpremultiplydata_argb8888%28______%29.md): Transforms an 8-bit-per-channel, 4-channel ARGB buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_RGBA8888(\_:\_:\_:)](vimageunpremultiplydata_rgba8888%28______%29.md): Transforms an 8-bit-per-channel, 4-channel RGBA buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_ARGB16U(\_:\_:\_:)](vimageunpremultiplydata_argb16u%28______%29.md): Transforms an unsigned 16-bit-per-channel, 4-channel ARGB buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_RGBA16U(\_:\_:\_:)](vimageunpremultiplydata_rgba16u%28______%29.md): Transforms an unsigned 16-bit-per-channel, 4-channel RGBA buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_RGBA16F(\_:\_:\_:)](vimageunpremultiplydata_rgba16f%28______%29.md): Transforms a floating-point 16-bit-per-channel, 4-channel RGBA buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_ARGB16Q12(\_:\_:\_:)](vimageunpremultiplydata_argb16q12%28______%29.md): Transforms a fixed-point 16-bit-per-channel, 4-channel ARGB buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_RGBA16Q12(\_:\_:\_:)](vimageunpremultiplydata_rgba16q12%28______%29.md): Transforms a fixed-point 16-bit-per-channel, 4-channel RGBA buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_ARGBFFFF(\_:\_:\_:)](vimageunpremultiplydata_argbffff%28______%29.md): Transforms a 32-bit-per-channel, 4-channel ARGB buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_RGBAFFFF(\_:\_:\_:)](vimageunpremultiplydata_rgbaffff%28______%29.md): Transforms a 32-bit-per-channel, 4-channel RGBA buffer from premultiplied alpha format to nonpremultiplied alpha format.

### Clipping color values to alpha

- [vImageClipToAlpha_Planar8(\_:\_:\_:\_:)](vimagecliptoalpha_planar8%28________%29.md): Clamps the values of an 8-bit planar buffer to the corresponding alpha values.
- [vImageClipToAlpha_PlanarF(\_:\_:\_:\_:)](vimagecliptoalpha_planarf%28________%29.md): Clamps the values of a 32-bit planar buffer to the corresponding alpha values.
- [vImageClipToAlpha_ARGB8888(\_:\_:\_:)](vimagecliptoalpha_argb8888%28______%29.md): Clamps the values of an 8-bit-per-channel, 4-channel ARGB buffer to the corresponding alpha values.
- [vImageClipToAlpha_RGBA8888(\_:\_:\_:)](vimagecliptoalpha_rgba8888%28______%29.md): Clamps the values of an 8-bit-per-channel, 4-channel RGBA buffer to the corresponding alpha values.
- [vImageClipToAlpha_ARGBFFFF(\_:\_:\_:)](vimagecliptoalpha_argbffff%28______%29.md): Clamps the values of a 32-bit-per-channel, 4-channel ARGB buffer to the corresponding alpha values.
- [vImageClipToAlpha_RGBAFFFF(\_:\_:\_:)](vimagecliptoalpha_rgbaffff%28______%29.md): Clamps the values of a 32-bit-per-channel, 4-channel RGBA buffer to the corresponding alpha values.

## See Also

### Related Documentation

- [Compositing images with alpha blending](compositing-images-with-alpha-blending.md): Combine two images by using alpha blending to create a single output.
- [Compositing images with vImage blend modes](compositing-images-with-vimage-blend-modes.md): Combine two images by using blend modes to create a single output.

# Alpha compositing (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Composite images together.

## Topics

### Performing nonpremultiplied alpha compositing

- [vImageAlphaBlend_Planar8](vimagealphablend_planar8%28______________%29.md): Performs nonpremultiplied alpha compositing of two 8-bit planar buffers.
- [vImageAlphaBlend_PlanarF](vimagealphablend_planarf%28______________%29.md): Performs nonpremultiplied alpha compositing of two 8-bit planar buffers.
- [vImageAlphaBlend_ARGB8888](vimagealphablend_argb8888%28________%29.md): Performs nonpremultiplied alpha compositing of two 8-bit-per-channel, 4-channel ARGB buffers.
- [vImageAlphaBlend_ARGBFFFF](vimagealphablend_argbffff%28________%29.md): Performs nonpremultiplied alpha compositing of two 32-bit-per-channel, 4-channel ARGB buffers.

### Performing premultiplied alpha compositing

- [vImagePremultipliedAlphaBlend_Planar8](vimagepremultipliedalphablend_planar8%28__________%29.md): Performs premultiplied alpha compositing of two 8-bit planar buffers.
- [vImagePremultipliedAlphaBlend_PlanarF](vimagepremultipliedalphablend_planarf%28__________%29.md): Performs premultiplied alpha compositing of two 32-bit planar buffers.
- [vImagePremultipliedAlphaBlend_ARGB8888](vimagepremultipliedalphablend_argb8888%28________%29.md): Performs premultiplied alpha compositing of two 8-bit-per-channel, 4-channel ARGB buffers.
- [vImagePremultipliedAlphaBlend_ARGBFFFF](vimagepremultipliedalphablend_argbffff%28________%29.md): Performs premultiplied alpha compositing of two 32-bit-per-channel, 4-channel ARGB buffers.
- [vImagePremultipliedAlphaBlend_BGRA8888](vimagepremultipliedalphablend_bgra8888%28________%29.md): Performs premultiplied alpha compositing of two 8-bit-per-channel, 4-channel BGRA buffers.
- [vImagePremultipliedAlphaBlend_RGBA8888](vimagepremultipliedalphablend_rgba8888.md): Performs premultiplied alpha compositing of two 8-bit-per-channel, 4-channel RGBA buffers.
- [vImagePremultipliedAlphaBlend_BGRAFFFF](vimagepremultipliedalphablend_bgraffff%28________%29.md): Performs premultiplied alpha compositing of two 32-bit-per-channel, 4-channel BGRA buffers.
- [vImagePremultipliedAlphaBlend_RGBAFFFF](vimagepremultipliedalphablend_rgbaffff.md): Performs premultiplied alpha compositing of two 32-bit-per-channel, 4-channel RGBA buffers.

### Performing premultiplied alpha compositing with blend modes

- [vImagePremultipliedAlphaBlendLighten_RGBA8888](vimagepremultipliedalphablendlighten_rgba8888%28________%29.md): Performs alpha compositing of two 8-bit-per-channel, 4-channel BGRA buffers using the lighten blend mode.
- [vImagePremultipliedAlphaBlendDarken_RGBA8888](vimagepremultipliedalphablenddarken_rgba8888%28________%29.md): Performs alpha compositing of two 8-bit-per-channel, 4-channel BGRA buffers using the darken blend mode.
- [vImagePremultipliedAlphaBlendScreen_RGBA8888](vimagepremultipliedalphablendscreen_rgba8888%28________%29.md): Performs alpha compositing of two 8-bit-per-channel, 4-channel BGRA buffers using the screen blend mode.
- [vImagePremultipliedAlphaBlendMultiply_RGBA8888](vimagepremultipliedalphablendmultiply_rgba8888%28________%29.md): Performs alpha compositing of two 8-bit-per-channel, 4-channel BGRA buffers using the multiply blend mode.

### Performing premultiplied alpha compositing with a permute

- [vImagePremultipliedAlphaBlendWithPermute_ARGB8888](vimagepremultipliedalphablendwithpermute_argb8888%28____________%29.md): Permutes the top 8-bit, 4-channel premultiplied buffer, and composites with the bottom buffer.
- [vImagePremultipliedAlphaBlendWithPermute_RGBA8888](vimagepremultipliedalphablendwithpermute_rgba8888%28____________%29.md): Permutes the top 8-bit, 4-channel premultiplied buffer, and composites with the bottom buffer.

### Performing premultiplied alpha compositing with a single alpha value

- [vImagePremultipliedConstAlphaBlend_Planar8](vimagepremultipliedconstalphablend_planar8%28____________%29.md): Performs premultiplied alpha compositing of two 8-bit planar buffers and applies an extra alpha value to the top buffer.
- [vImagePremultipliedConstAlphaBlend_PlanarF](vimagepremultipliedconstalphablend_planarf%28____________%29.md): Performs premultiplied alpha compositing of two 32-bit planar buffers and applies an extra alpha value to the top buffer.
- [vImagePremultipliedConstAlphaBlend_ARGB8888](vimagepremultipliedconstalphablend_argb8888%28__________%29.md): Performs premultiplied alpha compositing of two 8-bit-per-channel, 4-channel interleaved buffers and applies an extra alpha value to the top buffer.
- [vImagePremultipliedConstAlphaBlend_ARGBFFFF](vimagepremultipliedconstalphablend_argbffff%28__________%29.md): Performs premultiplied alpha compositing of two 32-bit-per-channel, 4-channel interleaved buffers and applies an extra alpha value to the top buffer.

### Performing nonpremultiplied to premultiplied alpha compositing

- [vImageAlphaBlend_NonpremultipliedToPremultiplied_Planar8](vimagealphablend_nonpremultipliedtopremultiplied_planar8%28__________%29.md): Composites a nonpremultiplied 8-bit planar buffer over a premultiplied 8-bit planar buffer and generates a premultiplied result.
- [vImageAlphaBlend_NonpremultipliedToPremultiplied_PlanarF](vimagealphablend_nonpremultipliedtopremultiplied_planarf%28__________%29.md): Composites a nonpremultiplied 32-bit planar buffer over a premultiplied 32-bit planar buffer and generates a premultiplied result.
- [vImageAlphaBlend_NonpremultipliedToPremultiplied_ARGB8888](vimagealphablend_nonpremultipliedtopremultiplied_argb8888%28________%29.md): Composites a nonpremultiplied 8-bit-per-channel, ARGB buffer over a premultiplied ARGB buffer and generates a premultiplied result.
- [vImageAlphaBlend_NonpremultipliedToPremultiplied_ARGBFFFF](vimagealphablend_nonpremultipliedtopremultiplied_argbffff%28________%29.md): Composites a nonpremultiplied 32-bit-per-channel, ARGB buffer over a premultiplied ARGB buffer and generates a premultiplied result.

### Converting from unpremultiplied to premultiplied format

- [vImagePremultiplyData_Planar8](vimagepremultiplydata_planar8%28________%29.md): Transforms an 8-bit planar buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_PlanarF](vimagepremultiplydata_planarf%28________%29.md): Transforms a 32-bit planar buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_ARGB8888](vimagepremultiplydata_argb8888%28______%29.md): Transforms an 8-bit-per-channel, 4-channel ARGB buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_RGBA8888](vimagepremultiplydata_rgba8888%28______%29.md): Transforms an 8-bit-per-channel, 4-channel RGBA buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_BGRA8888](vimagepremultiplydata_bgra8888.md): Transforms an 8-bit-per-channel, 4-channel BGRA buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_ARGB16U](vimagepremultiplydata_argb16u%28______%29.md): Transforms an unsigned 16-bit-per-channel, 4-channel ARGB buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_RGBA16U](vimagepremultiplydata_rgba16u%28______%29.md): Transforms an unsigned 16-bit-per-channel, 4-channel RGBA buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_RGBA16F](vimagepremultiplydata_rgba16f%28______%29.md): Transforms a floating-point 16-bit-per-channel, 4-channel RGBA buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_ARGB16Q12](vimagepremultiplydata_argb16q12%28______%29.md): Transforms a fixed-point 16-bit-per-channel, 4-channel ARGB buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_RGBA16Q12](vimagepremultiplydata_rgba16q12%28______%29.md): Transforms a fixed-point 16-bit-per-channel, 4-channel RGBA buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_ARGBFFFF](vimagepremultiplydata_argbffff%28______%29.md): Transforms a floating-point 32-bit-per-channel, 4-channel ARGB buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_RGBAFFFF](vimagepremultiplydata_rgbaffff%28______%29.md): Transforms a floating-point 32-bit-per-channel, 4-channel ARGB buffer from nonpremultiplied alpha format to premultiplied alpha format.
- [vImagePremultiplyData_BGRAFFFF](vimagepremultiplydata_bgraffff.md): Transforms a floating-point 32-bit-per-channel, 4-channel BGRA buffer from nonpremultiplied alpha format to premultiplied alpha format.

### Converting from premultiplied to unpremultiplied format

- [vImageUnpremultiplyData_Planar8](vimageunpremultiplydata_planar8%28________%29.md): Transforms an 8-bit planar buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_PlanarF](vimageunpremultiplydata_planarf%28________%29.md): Transforms a 32-bit planar buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_ARGB8888](vimageunpremultiplydata_argb8888%28______%29.md): Transforms an 8-bit-per-channel, 4-channel ARGB buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_RGBA8888](vimageunpremultiplydata_rgba8888%28______%29.md): Transforms an 8-bit-per-channel, 4-channel RGBA buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_BGRA8888](vimageunpremultiplydata_bgra8888.md): Transforms an 8-bit-per-channel, 4-channel BGRA buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_ARGB16U](vimageunpremultiplydata_argb16u%28______%29.md): Transforms an unsigned 16-bit-per-channel, 4-channel ARGB buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_RGBA16U](vimageunpremultiplydata_rgba16u%28______%29.md): Transforms an unsigned 16-bit-per-channel, 4-channel RGBA buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_RGBA16F](vimageunpremultiplydata_rgba16f%28______%29.md): Transforms a floating-point 16-bit-per-channel, 4-channel RGBA buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_ARGB16Q12](vimageunpremultiplydata_argb16q12%28______%29.md): Transforms a fixed-point 16-bit-per-channel, 4-channel ARGB buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_RGBA16Q12](vimageunpremultiplydata_rgba16q12%28______%29.md): Transforms a fixed-point 16-bit-per-channel, 4-channel RGBA buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_ARGBFFFF](vimageunpremultiplydata_argbffff%28______%29.md): Transforms a 32-bit-per-channel, 4-channel ARGB buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_RGBAFFFF](vimageunpremultiplydata_rgbaffff%28______%29.md): Transforms a 32-bit-per-channel, 4-channel RGBA buffer from premultiplied alpha format to nonpremultiplied alpha format.
- [vImageUnpremultiplyData_BGRAFFFF](vimageunpremultiplydata_bgraffff.md): Transforms a 32-bit-per-channel, 4-channel BGRA buffer from premultiplied alpha format to nonpremultiplied alpha format.

### Clipping color values to alpha

- [vImageClipToAlpha_Planar8](vimagecliptoalpha_planar8%28________%29.md): Clamps the values of an 8-bit planar buffer to the corresponding alpha values.
- [vImageClipToAlpha_PlanarF](vimagecliptoalpha_planarf%28________%29.md): Clamps the values of a 32-bit planar buffer to the corresponding alpha values.
- [vImageClipToAlpha_ARGB8888](vimagecliptoalpha_argb8888%28______%29.md): Clamps the values of an 8-bit-per-channel, 4-channel ARGB buffer to the corresponding alpha values.
- [vImageClipToAlpha_RGBA8888](vimagecliptoalpha_rgba8888%28______%29.md): Clamps the values of an 8-bit-per-channel, 4-channel RGBA buffer to the corresponding alpha values.
- [vImageClipToAlpha_ARGBFFFF](vimagecliptoalpha_argbffff%28______%29.md): Clamps the values of a 32-bit-per-channel, 4-channel ARGB buffer to the corresponding alpha values.
- [vImageClipToAlpha_RGBAFFFF](vimagecliptoalpha_rgbaffff%28______%29.md): Clamps the values of a 32-bit-per-channel, 4-channel RGBA buffer to the corresponding alpha values.

## See Also

### Related Documentation

- [Compositing images with alpha blending](compositing-images-with-alpha-blending.md): Combine two images by using alpha blending to create a single output.
- [Compositing images with vImage blend modes](compositing-images-with-vimage-blend-modes.md): Combine two images by using blend modes to create a single output.
