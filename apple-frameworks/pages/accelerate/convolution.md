> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/convolution](https://developer.apple.com/documentation/accelerate/convolution)

# Convolution (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Apply a convolution kernel to an image.

<a id="overview"></a>

## Overview

*Convolution* is a common image-processing technique that changes the value of a pixel according to the values of its surrounding pixels. Many common image filters, such as blurring, detecting edges, sharpening, and embossing, derive from convolution.

*Kernels* form the basis of convolution operations. Kernels are arrays or matrices of weights that indicate the influence of a pixel’s neighbors on its final value. To calculate the value of each transformed pixel, a convolution operation adds the products of each surrounding pixel value with the corresponding kernel value. During a convolution operation, the kernel passes over every pixel in the image, repeating this procedure, and then applies the effect to the entire image.

## Topics

### Convolving an 8-bit image with 32-bit weights

- [vImageConvolveFloatKernel_ARGB8888(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvolvefloatkernel_argb8888%28______________________%29.md): Convolves an 8-bit-per-channel, 4-channel interleaved image using 32-bit weights.

### Convolving with separable filter kernels

- [vImageSepConvolve_Planar8(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimagesepconvolve_planar8%28________________________%29.md): Convolves an 8-bit planar image by separate horizontal and vertical separable kernels.
- [vImageSepConvolve_Planar16U(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimagesepconvolve_planar16u%28________________________%29.md): Convolves an unsigned 16-bit planar image by separate horizontal and vertical separable kernels.
- [vImageSepConvolve_Planar16F(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimagesepconvolve_planar16f%28________________________%29.md): Convolves a floating-point 16-bit planar image by separate horizontal and vertical separable kernels.
- [vImageSepConvolve_PlanarF(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimagesepconvolve_planarf%28________________________%29.md): Convolves a floating-point 32-bit planar image by separate horizontal and vertical separable kernels.
- [vImageSepConvolve_Planar8to16U(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimagesepconvolve_planar8to16u%28__________________________%29.md): Convolves an 8-bit planar image by separate horizontal and vertical separable kernels, and writes the result to an unsigned 16-bit planar destination.
- [vImageSepConvolve_ARGB8888(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimagesepconvolve_argb8888%28________________________%29.md): Convolves an 8-bit-per-channel, 4-channel interleaved image by separate horizontal and vertical separable kernels.

### Convolving without bias

- [vImageConvolve_Planar8(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvolve_planar8%28______________________%29.md): Convolves an 8-bit planar image by a 2D kernel and divides the pixel values by a divisor.
- [vImageConvolve_Planar16F(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvolve_planar16f%28____________________%29.md): Convolves a floating-point 16-bit planar image by a 2D kernel.
- [vImageConvolve_PlanarF(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvolve_planarf%28____________________%29.md): Convolves a floating-point 32-bit planar image by a 2D kernel.
- [vImageConvolve_ARGB8888(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvolve_argb8888%28______________________%29.md): Convolves an 8-bit-per-channel, 4-channel interleaved image by a 2D kernel and divides the pixel values by a divisor.
- [vImageConvolve_ARGB16F(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvolve_argb16f%28____________________%29.md): Convolves a floating-point 16-bit-per-channel, 4-channel interleaved image by a 2D kernel, then divides the pixel values by a divisor.
- [vImageConvolve_ARGBFFFF(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvolve_argbffff%28____________________%29.md): Convolves a floating-point 32-bit-per-channel, 4-channel interleaved image by a 2D kernel, then divides the pixel values by a divisor.

### Convolving with bias

- [vImageConvolveWithBias_Planar8(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvolvewithbias_planar8%28________________________%29.md): Convolves an 8-bit planar image by a 2D kernel and adds a bias.
- [vImageConvolveWithBias_Planar16F(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvolvewithbias_planar16f%28______________________%29.md): Convolves a floating-point 16-bit planar image by a 2D kernel and adds a bias.
- [vImageConvolveWithBias_PlanarF(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvolvewithbias_planarf%28______________________%29.md): Convolves a floating-point 32-bit planar image by a 2D kernel and adds a bias.
- [vImageConvolveWithBias_ARGB8888(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvolvewithbias_argb8888%28________________________%29.md): Convolves an 8-bit-per-channel, 4-channel interleaved image by a 2D kernel and adds a bias.
- [vImageConvolveWithBias_ARGB16F(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvolvewithbias_argb16f%28______________________%29.md): Convolves a floating-point 16-bit-per-channel, 4-channel interleaved image by a 2D kernel and adds a bias.
- [vImageConvolveWithBias_ARGBFFFF(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvolvewithbias_argbffff%28______________________%29.md): Convolves a floating-point 32-bit-per-channel, 4-channel interleaved image by a 2D kernel and adds a bias.

### Convolving with multiple kernels

- [vImageConvolveMultiKernel_ARGB8888(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvolvemultikernel_argb8888%28________________________%29.md): Convolves each channel of an 8-bit-per-channel, 4-channel interleaved image by one of the four 2D kernels.
- [vImageConvolveMultiKernel_ARGBFFFF(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageconvolvemultikernel_argbffff%28______________________%29.md): Convolves each channel of a floating-point 32-bit-per-channel, 4-channel interleaved image by one of the four 2D kernels.

### Convolving with high-speed box and tent filters

- [vImageBoxConvolve_Planar8(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageboxconvolve_planar8%28__________________%29.md): Applies a box filter to an 8-bit planar source image.
- [vImageBoxConvolve_ARGB8888(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimageboxconvolve_argb8888%28__________________%29.md): Applies a box filter to an 8-bit-per-channel, 4-channel interleaved source image.
- [vImageTentConvolve_Planar8(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimagetentconvolve_planar8%28__________________%29.md): Applies a tent filter to an 8-bit planar source image.
- [vImageTentConvolve_ARGB8888(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimagetentconvolve_argb8888%28__________________%29.md): Applies a tent filter to an 8-bit-per-channel, 4-channel interleaved source image.

### Deconvolving

- [vImageRichardsonLucyDeConvolve_Planar8(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimagerichardsonlucydeconvolve_planar8%28________________________________%29.md): Deconvolves an 8-bit planar image.
- [vImageRichardsonLucyDeConvolve_PlanarF(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimagerichardsonlucydeconvolve_planarf%28____________________________%29.md): Deconvolves a floating-point 32-bit planar image.
- [vImageRichardsonLucyDeConvolve_ARGB8888(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimagerichardsonlucydeconvolve_argb8888%28________________________________%29.md): Deconvolves an 8-bit-per-channel, 4-channel interleaved image.
- [vImageRichardsonLucyDeConvolve_ARGBFFFF(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](vimagerichardsonlucydeconvolve_argbffff%28____________________________%29.md): Deconvolves a floating-point 32-bit-per-channel, 4-channel interleaved image.

## See Also

### Convolution and Morphology

- [Blurring an image](blurring-an-image.md): Filter an image by convolving it with custom and high-speed kernels.
- [Adding a bokeh effect to images](adding-a-bokeh-effect-to-images.md): Simulate a bokeh effect by applying dilation.
- [Morphology](morphology.md): Dilate and erode images.

# Convolution (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Apply a convolution kernel to an image.

<a id="overview"></a>

## Overview

*Convolution* is a common image-processing technique that changes the value of a pixel according to the values of its surrounding pixels. Many common image filters, such as blurring, detecting edges, sharpening, and embossing, derive from convolution.

*Kernels* form the basis of convolution operations. Kernels are arrays or matrices of weights that indicate the influence of a pixel’s neighbors on its final value. To calculate the value of each transformed pixel, a convolution operation adds the products of each surrounding pixel value with the corresponding kernel value. During a convolution operation, the kernel passes over every pixel in the image, repeating this procedure, and then applies the effect to the entire image.

## Topics

### Convolving an 8-bit image with 32-bit weights

- [vImageConvolveFloatKernel_ARGB8888](vimageconvolvefloatkernel_argb8888%28______________________%29.md): Convolves an 8-bit-per-channel, 4-channel interleaved image using 32-bit weights.

### Convolving with separable filter kernels

- [vImageSepConvolve_Planar8](vimagesepconvolve_planar8%28________________________%29.md): Convolves an 8-bit planar image by separate horizontal and vertical separable kernels.
- [vImageSepConvolve_Planar16U](vimagesepconvolve_planar16u%28________________________%29.md): Convolves an unsigned 16-bit planar image by separate horizontal and vertical separable kernels.
- [vImageSepConvolve_Planar16F](vimagesepconvolve_planar16f%28________________________%29.md): Convolves a floating-point 16-bit planar image by separate horizontal and vertical separable kernels.
- [vImageSepConvolve_PlanarF](vimagesepconvolve_planarf%28________________________%29.md): Convolves a floating-point 32-bit planar image by separate horizontal and vertical separable kernels.
- [vImageSepConvolve_Planar8to16U](vimagesepconvolve_planar8to16u%28__________________________%29.md): Convolves an 8-bit planar image by separate horizontal and vertical separable kernels, and writes the result to an unsigned 16-bit planar destination.
- [vImageSepConvolve_ARGB8888](vimagesepconvolve_argb8888%28________________________%29.md): Convolves an 8-bit-per-channel, 4-channel interleaved image by separate horizontal and vertical separable kernels.

### Convolving without bias

- [vImageConvolve_Planar8](vimageconvolve_planar8%28______________________%29.md): Convolves an 8-bit planar image by a 2D kernel and divides the pixel values by a divisor.
- [vImageConvolve_Planar16F](vimageconvolve_planar16f%28____________________%29.md): Convolves a floating-point 16-bit planar image by a 2D kernel.
- [vImageConvolve_PlanarF](vimageconvolve_planarf%28____________________%29.md): Convolves a floating-point 32-bit planar image by a 2D kernel.
- [vImageConvolve_ARGB8888](vimageconvolve_argb8888%28______________________%29.md): Convolves an 8-bit-per-channel, 4-channel interleaved image by a 2D kernel and divides the pixel values by a divisor.
- [vImageConvolve_ARGB16F](vimageconvolve_argb16f%28____________________%29.md): Convolves a floating-point 16-bit-per-channel, 4-channel interleaved image by a 2D kernel, then divides the pixel values by a divisor.
- [vImageConvolve_ARGBFFFF](vimageconvolve_argbffff%28____________________%29.md): Convolves a floating-point 32-bit-per-channel, 4-channel interleaved image by a 2D kernel, then divides the pixel values by a divisor.

### Convolving with bias

- [vImageConvolveWithBias_Planar8](vimageconvolvewithbias_planar8%28________________________%29.md): Convolves an 8-bit planar image by a 2D kernel and adds a bias.
- [vImageConvolveWithBias_Planar16F](vimageconvolvewithbias_planar16f%28______________________%29.md): Convolves a floating-point 16-bit planar image by a 2D kernel and adds a bias.
- [vImageConvolveWithBias_PlanarF](vimageconvolvewithbias_planarf%28______________________%29.md): Convolves a floating-point 32-bit planar image by a 2D kernel and adds a bias.
- [vImageConvolveWithBias_ARGB8888](vimageconvolvewithbias_argb8888%28________________________%29.md): Convolves an 8-bit-per-channel, 4-channel interleaved image by a 2D kernel and adds a bias.
- [vImageConvolveWithBias_ARGB16F](vimageconvolvewithbias_argb16f%28______________________%29.md): Convolves a floating-point 16-bit-per-channel, 4-channel interleaved image by a 2D kernel and adds a bias.
- [vImageConvolveWithBias_ARGBFFFF](vimageconvolvewithbias_argbffff%28______________________%29.md): Convolves a floating-point 32-bit-per-channel, 4-channel interleaved image by a 2D kernel and adds a bias.

### Convolving with multiple kernels

- [vImageConvolveMultiKernel_ARGB8888](vimageconvolvemultikernel_argb8888%28________________________%29.md): Convolves each channel of an 8-bit-per-channel, 4-channel interleaved image by one of the four 2D kernels.
- [vImageConvolveMultiKernel_ARGBFFFF](vimageconvolvemultikernel_argbffff%28______________________%29.md): Convolves each channel of a floating-point 32-bit-per-channel, 4-channel interleaved image by one of the four 2D kernels.

### Convolving with high-speed box and tent filters

- [vImageBoxConvolve_Planar8](vimageboxconvolve_planar8%28__________________%29.md): Applies a box filter to an 8-bit planar source image.
- [vImageBoxConvolve_ARGB8888](vimageboxconvolve_argb8888%28__________________%29.md): Applies a box filter to an 8-bit-per-channel, 4-channel interleaved source image.
- [vImageTentConvolve_Planar8](vimagetentconvolve_planar8%28__________________%29.md): Applies a tent filter to an 8-bit planar source image.
- [vImageTentConvolve_ARGB8888](vimagetentconvolve_argb8888%28__________________%29.md): Applies a tent filter to an 8-bit-per-channel, 4-channel interleaved source image.

### Deconvolving

- [vImageRichardsonLucyDeConvolve_Planar8](vimagerichardsonlucydeconvolve_planar8%28________________________________%29.md): Deconvolves an 8-bit planar image.
- [vImageRichardsonLucyDeConvolve_PlanarF](vimagerichardsonlucydeconvolve_planarf%28____________________________%29.md): Deconvolves a floating-point 32-bit planar image.
- [vImageRichardsonLucyDeConvolve_ARGB8888](vimagerichardsonlucydeconvolve_argb8888%28________________________________%29.md): Deconvolves an 8-bit-per-channel, 4-channel interleaved image.
- [vImageRichardsonLucyDeConvolve_ARGBFFFF](vimagerichardsonlucydeconvolve_argbffff%28____________________________%29.md): Deconvolves a floating-point 32-bit-per-channel, 4-channel interleaved image.

## See Also

### Convolution and Morphology

- [Blurring an image](blurring-an-image.md): Filter an image by convolving it with custom and high-speed kernels.
- [Adding a bokeh effect to images](adding-a-bokeh-effect-to-images.md): Simulate a bokeh effect by applying dilation.
- [Morphology](morphology.md): Dilate and erode images.
