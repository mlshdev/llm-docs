> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate](https://developer.apple.com/documentation/accelerate)

# Accelerate (Swift)

**Framework:** Accelerate  
**Kind:** Framework  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Make large-scale mathematical computations and image calculations, optimized for high performance and low energy consumption.

<a id="overview"></a>

## Overview

Accelerate provides high-performance, energy-efficient computation on the CPU by leveraging its vector-processing capability. The following Accelerate libraries abstract that capability so that code written for them executes appropriate instructions for the processor available at runtime:

- **[BNNS](accelerate/bnns-library.md)**: Subroutines for constructing and running neural networks for both training and inference.
- **[vImage](accelerate/vimage-library.md)**: A wide range of image-processing functions, including Core Graphics and Core Video interoperation, format conversion, and image manipulation.
- **[vDSP](accelerate/vdsp-library.md)**: Digital signal processing functions, including 1D and 2D fast Fourier transforms, biquadratic filtering, vector and matrix arithmetic, convolution, and type conversion.
- **[vForce](accelerate/vforce-library.md)**: Functions for performing arithmetic and transcendental functions on vectors.
- **[Sparse Solvers](accelerate/sparse-solvers-library.md), [BLAS](accelerate/blas-library.md), and LAPACK**: Libraries for performing linear algebra on sparse and dense matrices.

Although not part of the Accelerate framework, the following libraries are closely related:

- **[Apple Archive](applearchive.md)**: A framework for performing multithreaded lossless compression of directories, files, and data.
- **[Compression](compression.md)**: Algorithms for lossless data compression that support LZMESH, LZRAVEN, LZFSE, LZ4, LZMA, and ZLIB algorithms.
- **[simd](accelerate/simd-library.md)**: A module for performing computations on small vectors and matrices.
- **[Spatial](spatial.md)**: Spatial is a lightweight 3D mathematical library that provides a simple API for working with 3D primitives.

## Topics

### Neural Networks

- [Training a neural network to recognize digits](accelerate/training-a-neural-network-to-recognize-digits.md): Build a simple neural network and train it to recognize randomly generated numbers.
- [BNNS](accelerate/bnns-library.md): Implement and run neural networks for training and inference.

### Directories, Files, and Data Archives

- [Compressing single files](accelerate/compressing-single-files.md): Compress a single file and store the result on the file system.
- [Decompressing single files](accelerate/decompressing-single-files.md): Recreate a single file from a compressed file.
- [Compressing file system directories](accelerate/compressing-file-system-directories.md): Compress the contents of an entire directory and store the result on the file system.
- [Decompressing and extracting an archived directory](accelerate/decompressing-and-extracting-an-archived-directory.md): Recreate an entire file system directory from an archive file.
- [Compressing and saving a string to the file system](accelerate/compressing-and-saving-a-string-to-the-file-system.md): Compress the contents of a Unicode string and store the result on the file system.
- [Decompressing and parsing an archived string](accelerate/decompressing-and-parsing-an-archived-string.md): Recreate a string from an archive file.

### Compression

- [Compressing and decompressing files with stream compression](accelerate/compressing-and-decompressing-files-with-stream-compression.md): Perform compression for all files and decompression for files with supported extension types.
- [Compressing and decompressing data with buffer compression](accelerate/compressing-and-decompressing-data-with-buffer-compression.md): Compress a string, write it to the file system, and decompress the same file using buffer compression.
- [Compressing and decompressing data with input and output filters](accelerate/compressing-and-decompressing-data-with-input-and-output-filters.md): Compress and decompress streamed or from-memory data, using input and output filters.

### Image Processing Essentials

- [Converting bitmap data between Core Graphics images and vImage buffers](accelerate/converting-bitmap-data-between-core-graphics-images-and-vimage-buffers.md): Pass image data between Core Graphics and vImage to create and manipulate images.
- [Creating and Populating Buffers from Core Graphics Images](accelerate/creating-and-populating-buffers-from-core-graphics-images.md): Initialize vImage buffers from Core Graphics images.
- [Creating a Core Graphics Image from a vImage Buffer](accelerate/creating-a-core-graphics-image-from-a-vimage-buffer.md): Create displayable representations of vImage buffers.
- [Building a Basic Image-Processing Workflow](accelerate/building-a-basic-image-processing-workflow.md): Resize an image with vImage.
- [Applying geometric transforms to images](accelerate/applying-geometric-transforms-to-images.md): Reflect, shear, rotate, and scale image buffers using vImage.
- [Compositing images with alpha blending](accelerate/compositing-images-with-alpha-blending.md): Combine two images by using alpha blending to create a single output.
- [Compositing images with vImage blend modes](accelerate/compositing-images-with-vimage-blend-modes.md): Combine two images by using blend modes to create a single output.
- [Applying vImage operations to regions of interest](accelerate/applying-vimage-operations-to-regions-of-interest.md): Limit the effect of vImage operations to rectangular regions of interest.
- [Optimizing image-processing performance](accelerate/optimizing-image-processing-performance.md): Improve your app’s performance by converting image buffer formats from interleaved to planar.
- [vImage](accelerate/vimage-library.md): Manipulate large images using the CPU’s vector processor.

### Signal Processing Essentials

- [Controlling vDSP operations with stride](accelerate/controlling-vdsp-operations-with-stride.md): Operate selectively on the elements of a vector at regular intervals.
- [Using linear interpolation to construct new data points](accelerate/using-linear-interpolation-to-construct-new-data-points.md): Fill the gaps in arrays of numerical data using linear interpolation.
- [Using vDSP for vector-based arithmetic](accelerate/using-vdsp-for-vector-based-arithmetic.md): Increase the performance of common mathematical tasks with vDSP vector-vector and vector-scalar operations.
- [Resampling a signal with decimation](accelerate/resampling-a-signal-with-decimation.md): Reduce the sample rate of a signal by specifying a decimation factor and applying a custom antialiasing filter.
- [vDSP](accelerate/vdsp-library.md): Perform basic arithmetic operations and common digital signal processing (DSP) routines on large vectors.

### Fourier and Cosine Transforms

- [Understanding data packing for Fourier transforms](accelerate/understanding-data-packing-for-fourier-transforms.md): Format source data for the vDSP Fourier functions, and interpret the results.
- [Finding the component frequencies in a composite sine wave](accelerate/finding-the-component-frequencies-in-a-composite-sine-wave.md): Use 1D fast Fourier transform to compute the frequency components of a signal.
- [Performing Fourier transforms on interleaved-complex data](accelerate/performing-fourier-transforms-on-interleaved-complex-data.md): Optimize discrete Fourier transform (DFT) performance with the vDSP interleaved DFT routines.
- [Reducing spectral leakage with windowing](accelerate/reducing-spectral-leakage-with-windowing.md): Multiply signal data by window sequence values when performing transforms with noninteger period signals.
- [Signal extraction from noise](accelerate/signal-extraction-from-noise.md): Use Accelerate’s discrete cosine transform to remove noise from a signal.
- [Performing Fourier Transforms on Multiple Signals](accelerate/performing-fourier-transforms-on-multiple-signals.md): Use Accelerate’s multiple-signal fast Fourier transform (FFT) functions to transform multiple signals with a single function call.
- [Halftone descreening with 2D fast Fourier transform](accelerate/halftone-descreening-with-2d-fast-fourier-transform.md): Reduce or remove periodic artifacts from images.
- [Fast Fourier transforms](accelerate/fast-fourier-transforms.md): Transform vectors and matrices of temporal and spatial domain complex values to the frequency domain, and vice versa.
- [Discrete Fourier transforms](accelerate/discrete-fourier-transforms.md): Transform vectors of temporal and spatial domain complex values to the frequency domain, and vice versa.
- [Discrete Cosine transforms](accelerate/discrete-cosine-transforms.md): Transform vectors of temporal and spatial domain real values to the frequency domain, and vice versa.

### Core Video Interoperation

- [Using vImage pixel buffers to generate video effects](accelerate/using-vimage-pixel-buffers-to-generate-video-effects.md): Render real-time video effects with the vImage Pixel Buffer.
- [Integrating vImage pixel buffers into a Core Image workflow](accelerate/integrating-vimage-pixel-buffers-into-a-core-image-workflow.md): Share image data between Core Video pixel buffers and vImage buffers to integrate vImage operations into a Core Image workflow.
- [Applying vImage operations to video sample buffers](accelerate/applying-vimage-operations-to-video-sample-buffers.md): Use the vImage convert-any-to-any functionality to perform real-time image processing of video frames streamed from your device’s camera.
- [Improving the quality of quantized images with dithering](accelerate/improving-the-quality-of-quantized-images-with-dithering.md): Apply dithering to simulate colors that are unavailable in reduced bit depths.
- [Core Video interoperability](accelerate/core-video-interoperability.md): Pass image data between Core Video and vImage.

### Vectors, Matrices, and Quaternions

- [Working with Vectors](accelerate/working-with-vectors.md): Use vectors to calculate geometric values, calculate dot products and cross products, and interpolate between values.
- [Working with Matrices](accelerate/working-with-matrices.md): Solve simultaneous equations and transform points in space.
- [Working with Quaternions](accelerate/working-with-quaternions.md): Rotate points around the surface of a sphere, and interpolate between them.
- [Rotating a cube by transforming its vertices](accelerate/rotating-a-cube-by-transforming-its-vertices.md): Rotate a cube through a series of keyframes using quaternion interpolation to transition between them.
- [simd](accelerate/simd-library.md): Perform computations on small vectors and matrices.
- [vForce](accelerate/vforce-library.md): Perform transcendental and trigonometric functions on vectors of any length.

### Audio Processing

- [Visualizing sound as an audio spectrogram](accelerate/visualizing-sound-as-an-audio-spectrogram.md): Share image data between vDSP and vImage to visualize audio that a device microphone captures.
- [Applying biquadratic filters to a music loop](accelerate/applying-biquadratic-filters-to-a-music-loop.md): Change the frequency response of an audio signal using a cascaded biquadratic filter.
- [Equalizing audio with discrete cosine transforms (DCTs)](accelerate/equalizing-audio-with-discrete-cosine-transforms-dcts.md): Change the frequency response of an audio signal by manipulating frequency-domain data.
- [Biquadratic IIR filters](accelerate/biquadratic-iir-filters.md): Apply biquadratic filters to single-channel and multichannel data.
- [Discrete Cosine transforms](accelerate/discrete-cosine-transforms.md): Transform vectors of temporal and spatial domain real values to the frequency domain, and vice versa.

### Conversion Between Image Formats

- [Building a basic image conversion workflow](accelerate/building-a-basic-image-conversion-workflow.md): Learn the fundamentals of the convert-any-to-any function by converting a CMYK image to an RGB image.
- [Converting color images to grayscale](accelerate/converting-color-images-to-grayscale.md): Convert an RGB image to grayscale using matrix multiplication.
- [Applying color transforms to images with a multidimensional lookup table](accelerate/applying-color-transforms-to-images-with-a-multidimensional-lookup-table.md): Precompute translation values to optimize color space conversion and other pointwise operations.
- [Building a basic image conversion workflow](accelerate/building-a-basic-image-conversion-workflow.md): Learn the fundamentals of the convert-any-to-any function by converting a CMYK image to an RGB image.
- [Converting luminance and chrominance planes to an ARGB image](accelerate/converting-luminance-and-chrominance-planes-to-an-argb-image.md): Create a displayable ARGB image using the luminance and chrominance information from your device’s camera.
- [Conversion](accelerate/conversion.md): Convert an image to a different format.

### Image Resampling

- [Resampling in vImage](accelerate/resampling-in-vimage.md): Learn how vImage resamples image data during geometric operations.
- [Reducing artifacts with custom resampling filters](accelerate/reducing-artifacts-with-custom-resampling-filters.md): Implement custom linear interpolation to prevent the ringing effects associated with scaling an image with the default Lanczos algorithm.
- [Image shearing](accelerate/image-shearing.md): Shear images horizontally and vertically.

### Convolution and Morphology

- [Blurring an image](accelerate/blurring-an-image.md): Filter an image by convolving it with custom and high-speed kernels.
- [Adding a bokeh effect to images](accelerate/adding-a-bokeh-effect-to-images.md): Simulate a bokeh effect by applying dilation.
- [Convolution](accelerate/convolution.md): Apply a convolution kernel to an image.
- [Morphology](accelerate/morphology.md): Dilate and erode images.

### Color and Tone Adjustment

- [Adjusting the brightness and contrast of an image](accelerate/adjusting-the-brightness-and-contrast-of-an-image.md): Use a gamma function to apply a linear or exponential curve.
- [Adjusting saturation and applying tone mapping](accelerate/adjusting-saturation-and-applying-tone-mapping.md): Convert an RGB image to discrete luminance and chrominance channels, and apply color and contrast treatments.
- [Applying tone curve adjustments to images](accelerate/applying-tone-curve-adjustments-to-images.md): Use the vImage library’s polynomial transform to apply tone curve adjustments to images.
- [Adjusting the hue of an image](accelerate/adjusting-the-hue-of-an-image.md): Convert an image to L\*a\*b\* color space and apply hue adjustment.
- [Specifying histograms with vImage](accelerate/specifying-histograms-with-vimage.md): Calculate the histogram of one image, and apply it to a second image.
- [Enhancing image contrast with histogram manipulation](accelerate/enhancing-image-contrast-with-histogram-manipulation.md): Enhance and adjust the contrast of an image with histogram equalization and contrast stretching.
- [Histogram](accelerate/histogram.md): Calculate or manipulate an image’s histogram.

### vImage / vDSP Interoperability

- [Finding the sharpest image in a sequence of captured images](accelerate/finding-the-sharpest-image-in-a-sequence-of-captured-images.md): Share image data between vDSP and vImage to compute the sharpest image from a bracketed photo sequence.
- [Visualizing sound as an audio spectrogram](accelerate/visualizing-sound-as-an-audio-spectrogram.md): Share image data between vDSP and vImage to visualize audio that a device microphone captures.

### Sparse Matrices

- [Creating sparse matrices](accelerate/creating-sparse-matrices.md): Create sparse matrices for factorization and solving systems.
- [Solving systems using direct methods](accelerate/solving-systems-using-direct-methods.md): Use direct methods to solve systems of equations where the coefficient matrix is sparse.
- [Solving systems using iterative methods](accelerate/solving-systems-using-iterative-methods.md): Use iterative methods to solve systems of equations where the coefficient matrix is sparse.
- [Creating a sparse matrix from coordinate format arrays](accelerate/creating-a-sparse-matrix-from-coordinate-format-arrays.md): Use separate coordinate format arrays to create sparse matrices.
- [Sparse Solvers](accelerate/sparse-solvers-library.md): Solve systems of equations where the coefficient matrix is sparse.

### Arithmetic and Transcendental Functions

- [vecLib](accelerate/veclib.md): Perform computations on large vectors.

### Linear Algebra

- [Solving systems of linear equations with LAPACK](accelerate/solving-systems-of-linear-equations-with-lapack.md): Select the optimal LAPACK routine to solve a system of linear equations.
- [Finding an interpolating polynomial using the Vandermonde method](accelerate/finding-an-interpolating-polynomial-using-the-vandermonde-method.md): Use LAPACK to solve a linear system and find an interpolating polynomial to construct new points between a series of known data points.
- [Compressing an image using linear algebra](accelerate/compressing-an-image-using-linear-algebra.md): Reduce the storage size of an image using singular value decomposition (SVD).
- [BLAS](accelerate/blas-library.md): Perform common linear algebra operations with Apple’s implementation of the Basic Linear Algebra Subprograms (BLAS).

### Definite Integration

- [Quadrature](accelerate/quadrature-collection.md): Approximate the definite integral of a function over a finite or infinite interval.

### Macros

- [Macros](accelerate/macros.md)

### Functions

- [clarf1f\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](accelerate/clarf1f_%28__________________%29.md)
- [clarf1l\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](accelerate/clarf1l_%28__________________%29.md)
- [dlarf1f\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](accelerate/dlarf1f_%28__________________%29.md)
- [dlarf1l\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](accelerate/dlarf1l_%28__________________%29.md)
- [slarf1f\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](accelerate/slarf1f_%28__________________%29.md)
- [slarf1l\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](accelerate/slarf1l_%28__________________%29.md)
- [zlarf1f\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](accelerate/zlarf1f_%28__________________%29.md)
- [zlarf1l\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](accelerate/zlarf1l_%28__________________%29.md)

# Accelerate (Objective-C)

**Framework:** Accelerate  
**Kind:** Framework  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Make large-scale mathematical computations and image calculations, optimized for high performance and low energy consumption.

<a id="overview"></a>

## Overview

Accelerate provides high-performance, energy-efficient computation on the CPU by leveraging its vector-processing capability. The following Accelerate libraries abstract that capability so that code written for them executes appropriate instructions for the processor available at runtime:

- **[BNNS](accelerate/bnns-library.md)**: Subroutines for constructing and running neural networks for both training and inference.
- **[vImage](accelerate/vimage-library.md)**: A wide range of image-processing functions, including Core Graphics and Core Video interoperation, format conversion, and image manipulation.
- **[vDSP](accelerate/vdsp-library.md)**: Digital signal processing functions, including 1D and 2D fast Fourier transforms, biquadratic filtering, vector and matrix arithmetic, convolution, and type conversion.
- **[vForce](accelerate/vforce-library.md)**: Functions for performing arithmetic and transcendental functions on vectors.
- **[Sparse Solvers](accelerate/sparse-solvers-library.md), [BLAS](accelerate/blas-library.md), and LAPACK**: Libraries for performing linear algebra on sparse and dense matrices.

Although not part of the Accelerate framework, the following libraries are closely related:

- **[Apple Archive](applearchive.md)**: A framework for performing multithreaded lossless compression of directories, files, and data.
- **[Compression](compression.md)**: Algorithms for lossless data compression that support LZMESH, LZRAVEN, LZFSE, LZ4, LZMA, and ZLIB algorithms.
- **[simd](accelerate/simd-library.md)**: A module for performing computations on small vectors and matrices.
- **[Spatial](spatial.md)**: Spatial is a lightweight 3D mathematical library that provides a simple API for working with 3D primitives.

## Topics

### Neural Networks

- [Training a neural network to recognize digits](accelerate/training-a-neural-network-to-recognize-digits.md): Build a simple neural network and train it to recognize randomly generated numbers.
- [BNNS](accelerate/bnns-library.md): Implement and run neural networks for training and inference.

### Directories, Files, and Data Archives

- [Compressing single files](accelerate/compressing-single-files.md): Compress a single file and store the result on the file system.
- [Decompressing single files](accelerate/decompressing-single-files.md): Recreate a single file from a compressed file.
- [Compressing file system directories](accelerate/compressing-file-system-directories.md): Compress the contents of an entire directory and store the result on the file system.
- [Decompressing and extracting an archived directory](accelerate/decompressing-and-extracting-an-archived-directory.md): Recreate an entire file system directory from an archive file.
- [Compressing and saving a string to the file system](accelerate/compressing-and-saving-a-string-to-the-file-system.md): Compress the contents of a Unicode string and store the result on the file system.
- [Decompressing and parsing an archived string](accelerate/decompressing-and-parsing-an-archived-string.md): Recreate a string from an archive file.

### Compression

- [Compressing and decompressing files with stream compression](accelerate/compressing-and-decompressing-files-with-stream-compression.md): Perform compression for all files and decompression for files with supported extension types.
- [Compressing and decompressing data with buffer compression](accelerate/compressing-and-decompressing-data-with-buffer-compression.md): Compress a string, write it to the file system, and decompress the same file using buffer compression.
- [Compressing and decompressing data with input and output filters](accelerate/compressing-and-decompressing-data-with-input-and-output-filters.md): Compress and decompress streamed or from-memory data, using input and output filters.

### Image Processing Essentials

- [Converting bitmap data between Core Graphics images and vImage buffers](accelerate/converting-bitmap-data-between-core-graphics-images-and-vimage-buffers.md): Pass image data between Core Graphics and vImage to create and manipulate images.
- [Creating and Populating Buffers from Core Graphics Images](accelerate/creating-and-populating-buffers-from-core-graphics-images.md): Initialize vImage buffers from Core Graphics images.
- [Creating a Core Graphics Image from a vImage Buffer](accelerate/creating-a-core-graphics-image-from-a-vimage-buffer.md): Create displayable representations of vImage buffers.
- [Building a Basic Image-Processing Workflow](accelerate/building-a-basic-image-processing-workflow.md): Resize an image with vImage.
- [Applying geometric transforms to images](accelerate/applying-geometric-transforms-to-images.md): Reflect, shear, rotate, and scale image buffers using vImage.
- [Compositing images with alpha blending](accelerate/compositing-images-with-alpha-blending.md): Combine two images by using alpha blending to create a single output.
- [Compositing images with vImage blend modes](accelerate/compositing-images-with-vimage-blend-modes.md): Combine two images by using blend modes to create a single output.
- [Applying vImage operations to regions of interest](accelerate/applying-vimage-operations-to-regions-of-interest.md): Limit the effect of vImage operations to rectangular regions of interest.
- [Optimizing image-processing performance](accelerate/optimizing-image-processing-performance.md): Improve your app’s performance by converting image buffer formats from interleaved to planar.
- [vImage](accelerate/vimage-library.md): Manipulate large images using the CPU’s vector processor.

### Signal Processing Essentials

- [Controlling vDSP operations with stride](accelerate/controlling-vdsp-operations-with-stride.md): Operate selectively on the elements of a vector at regular intervals.
- [Using linear interpolation to construct new data points](accelerate/using-linear-interpolation-to-construct-new-data-points.md): Fill the gaps in arrays of numerical data using linear interpolation.
- [Using vDSP for vector-based arithmetic](accelerate/using-vdsp-for-vector-based-arithmetic.md): Increase the performance of common mathematical tasks with vDSP vector-vector and vector-scalar operations.
- [Resampling a signal with decimation](accelerate/resampling-a-signal-with-decimation.md): Reduce the sample rate of a signal by specifying a decimation factor and applying a custom antialiasing filter.
- [vDSP](accelerate/vdsp-library.md): Perform basic arithmetic operations and common digital signal processing (DSP) routines on large vectors.

### Fourier and Cosine Transforms

- [Understanding data packing for Fourier transforms](accelerate/understanding-data-packing-for-fourier-transforms.md): Format source data for the vDSP Fourier functions, and interpret the results.
- [Finding the component frequencies in a composite sine wave](accelerate/finding-the-component-frequencies-in-a-composite-sine-wave.md): Use 1D fast Fourier transform to compute the frequency components of a signal.
- [Performing Fourier transforms on interleaved-complex data](accelerate/performing-fourier-transforms-on-interleaved-complex-data.md): Optimize discrete Fourier transform (DFT) performance with the vDSP interleaved DFT routines.
- [Reducing spectral leakage with windowing](accelerate/reducing-spectral-leakage-with-windowing.md): Multiply signal data by window sequence values when performing transforms with noninteger period signals.
- [Signal extraction from noise](accelerate/signal-extraction-from-noise.md): Use Accelerate’s discrete cosine transform to remove noise from a signal.
- [Performing Fourier Transforms on Multiple Signals](accelerate/performing-fourier-transforms-on-multiple-signals.md): Use Accelerate’s multiple-signal fast Fourier transform (FFT) functions to transform multiple signals with a single function call.
- [Halftone descreening with 2D fast Fourier transform](accelerate/halftone-descreening-with-2d-fast-fourier-transform.md): Reduce or remove periodic artifacts from images.
- [Fast Fourier transforms](accelerate/fast-fourier-transforms.md): Transform vectors and matrices of temporal and spatial domain complex values to the frequency domain, and vice versa.
- [Discrete Fourier transforms](accelerate/discrete-fourier-transforms.md): Transform vectors of temporal and spatial domain complex values to the frequency domain, and vice versa.
- [Discrete Cosine transforms](accelerate/discrete-cosine-transforms.md): Transform vectors of temporal and spatial domain real values to the frequency domain, and vice versa.

### Core Video Interoperation

- [Integrating vImage pixel buffers into a Core Image workflow](accelerate/integrating-vimage-pixel-buffers-into-a-core-image-workflow.md): Share image data between Core Video pixel buffers and vImage buffers to integrate vImage operations into a Core Image workflow.
- [Applying vImage operations to video sample buffers](accelerate/applying-vimage-operations-to-video-sample-buffers.md): Use the vImage convert-any-to-any functionality to perform real-time image processing of video frames streamed from your device’s camera.
- [Improving the quality of quantized images with dithering](accelerate/improving-the-quality-of-quantized-images-with-dithering.md): Apply dithering to simulate colors that are unavailable in reduced bit depths.
- [Core Video interoperability](accelerate/core-video-interoperability.md): Pass image data between Core Video and vImage.

### Vectors, Matrices, and Quaternions

- [Working with Vectors](accelerate/working-with-vectors.md): Use vectors to calculate geometric values, calculate dot products and cross products, and interpolate between values.
- [Working with Matrices](accelerate/working-with-matrices.md): Solve simultaneous equations and transform points in space.
- [Working with Quaternions](accelerate/working-with-quaternions.md): Rotate points around the surface of a sphere, and interpolate between them.
- [Rotating a cube by transforming its vertices](accelerate/rotating-a-cube-by-transforming-its-vertices.md): Rotate a cube through a series of keyframes using quaternion interpolation to transition between them.
- [simd](accelerate/simd-library.md): Perform computations on small vectors and matrices.
- [vForce](accelerate/vforce-library.md): Perform transcendental and trigonometric functions on vectors of any length.

### Audio Processing

- [Equalizing audio with discrete cosine transforms (DCTs)](accelerate/equalizing-audio-with-discrete-cosine-transforms-dcts.md): Change the frequency response of an audio signal by manipulating frequency-domain data.
- [Biquadratic IIR filters](accelerate/biquadratic-iir-filters.md): Apply biquadratic filters to single-channel and multichannel data.
- [Discrete Cosine transforms](accelerate/discrete-cosine-transforms.md): Transform vectors of temporal and spatial domain real values to the frequency domain, and vice versa.

### Conversion Between Image Formats

- [Building a basic image conversion workflow](accelerate/building-a-basic-image-conversion-workflow.md): Learn the fundamentals of the convert-any-to-any function by converting a CMYK image to an RGB image.
- [Converting color images to grayscale](accelerate/converting-color-images-to-grayscale.md): Convert an RGB image to grayscale using matrix multiplication.
- [Applying color transforms to images with a multidimensional lookup table](accelerate/applying-color-transforms-to-images-with-a-multidimensional-lookup-table.md): Precompute translation values to optimize color space conversion and other pointwise operations.
- [Building a basic image conversion workflow](accelerate/building-a-basic-image-conversion-workflow.md): Learn the fundamentals of the convert-any-to-any function by converting a CMYK image to an RGB image.
- [Converting luminance and chrominance planes to an ARGB image](accelerate/converting-luminance-and-chrominance-planes-to-an-argb-image.md): Create a displayable ARGB image using the luminance and chrominance information from your device’s camera.
- [Conversion](accelerate/conversion.md): Convert an image to a different format.

### Image Resampling

- [Resampling in vImage](accelerate/resampling-in-vimage.md): Learn how vImage resamples image data during geometric operations.
- [Reducing artifacts with custom resampling filters](accelerate/reducing-artifacts-with-custom-resampling-filters.md): Implement custom linear interpolation to prevent the ringing effects associated with scaling an image with the default Lanczos algorithm.
- [Image shearing](accelerate/image-shearing.md): Shear images horizontally and vertically.

### Convolution and Morphology

- [Blurring an image](accelerate/blurring-an-image.md): Filter an image by convolving it with custom and high-speed kernels.
- [Adding a bokeh effect to images](accelerate/adding-a-bokeh-effect-to-images.md): Simulate a bokeh effect by applying dilation.
- [Convolution](accelerate/convolution.md): Apply a convolution kernel to an image.
- [Morphology](accelerate/morphology.md): Dilate and erode images.

### Color and Tone Adjustment

- [Adjusting the brightness and contrast of an image](accelerate/adjusting-the-brightness-and-contrast-of-an-image.md): Use a gamma function to apply a linear or exponential curve.
- [Applying tone curve adjustments to images](accelerate/applying-tone-curve-adjustments-to-images.md): Use the vImage library’s polynomial transform to apply tone curve adjustments to images.
- [Specifying histograms with vImage](accelerate/specifying-histograms-with-vimage.md): Calculate the histogram of one image, and apply it to a second image.
- [Enhancing image contrast with histogram manipulation](accelerate/enhancing-image-contrast-with-histogram-manipulation.md): Enhance and adjust the contrast of an image with histogram equalization and contrast stretching.
- [Histogram](accelerate/histogram.md): Calculate or manipulate an image’s histogram.

### Sparse Matrices

- [Creating sparse matrices](accelerate/creating-sparse-matrices.md): Create sparse matrices for factorization and solving systems.
- [Solving systems using direct methods](accelerate/solving-systems-using-direct-methods.md): Use direct methods to solve systems of equations where the coefficient matrix is sparse.
- [Solving systems using iterative methods](accelerate/solving-systems-using-iterative-methods.md): Use iterative methods to solve systems of equations where the coefficient matrix is sparse.
- [Creating a sparse matrix from coordinate format arrays](accelerate/creating-a-sparse-matrix-from-coordinate-format-arrays.md): Use separate coordinate format arrays to create sparse matrices.
- [Sparse Solvers](accelerate/sparse-solvers-library.md): Solve systems of equations where the coefficient matrix is sparse.

### Arithmetic and Transcendental Functions

- [vecLib](accelerate/veclib.md): Perform computations on large vectors.

### Linear Algebra

- [Solving systems of linear equations with LAPACK](accelerate/solving-systems-of-linear-equations-with-lapack.md): Select the optimal LAPACK routine to solve a system of linear equations.
- [Finding an interpolating polynomial using the Vandermonde method](accelerate/finding-an-interpolating-polynomial-using-the-vandermonde-method.md): Use LAPACK to solve a linear system and find an interpolating polynomial to construct new points between a series of known data points.
- [BLAS](accelerate/blas-library.md): Perform common linear algebra operations with Apple’s implementation of the Basic Linear Algebra Subprograms (BLAS).

### Definite Integration

- [Quadrature](accelerate/quadrature-collection.md): Approximate the definite integral of a function over a finite or infinite interval.

### Macros

- [Macros](accelerate/macros.md)
- [SPARSE_CHECK_VALID_MATRIX_STRUCTURE_COMMON](accelerate/sparse_check_valid_matrix_structure_common.md)

### Functions

- [clarf1f\_](accelerate/clarf1f_%28__________________%29.md)
- [clarf1l\_](accelerate/clarf1l_%28__________________%29.md)
- [dlarf1f\_](accelerate/dlarf1f_%28__________________%29.md)
- [dlarf1l\_](accelerate/dlarf1l_%28__________________%29.md)
- [slarf1f\_](accelerate/slarf1f_%28__________________%29.md)
- [slarf1l\_](accelerate/slarf1l_%28__________________%29.md)
- [sparse_inner_product_dense_double_complex](accelerate/sparse_inner_product_dense_double_complex.md)
- [sparse_inner_product_dense_float_complex](accelerate/sparse_inner_product_dense_float_complex.md)
- [sparse_inner_product_sparse_double_complex](accelerate/sparse_inner_product_sparse_double_complex.md)
- [sparse_inner_product_sparse_float_complex](accelerate/sparse_inner_product_sparse_float_complex.md)
- [sparse_insert_entry_double_complex](accelerate/sparse_insert_entry_double_complex.md)
- [sparse_insert_entry_float_complex](accelerate/sparse_insert_entry_float_complex.md)
- [sparse_matrix_product_dense_double_complex](accelerate/sparse_matrix_product_dense_double_complex.md)
- [sparse_matrix_product_dense_float_complex](accelerate/sparse_matrix_product_dense_float_complex.md)
- [sparse_matrix_product_sparse_double_complex](accelerate/sparse_matrix_product_sparse_double_complex.md)
- [sparse_matrix_product_sparse_float_complex](accelerate/sparse_matrix_product_sparse_float_complex.md)
- [sparse_matrix_trace_double_complex](accelerate/sparse_matrix_trace_double_complex.md)
- [sparse_matrix_trace_float_complex](accelerate/sparse_matrix_trace_float_complex.md)
- [sparse_matrix_triangular_solve_dense_double_complex](accelerate/sparse_matrix_triangular_solve_dense_double_complex.md)
- [sparse_matrix_triangular_solve_dense_float_complex](accelerate/sparse_matrix_triangular_solve_dense_float_complex.md)
- [sparse_matrix_vector_product_dense_double_complex](accelerate/sparse_matrix_vector_product_dense_double_complex.md)
- [sparse_matrix_vector_product_dense_float_complex](accelerate/sparse_matrix_vector_product_dense_float_complex.md)
- [sparse_outer_product_dense_double_complex](accelerate/sparse_outer_product_dense_double_complex.md)
- [sparse_outer_product_dense_float_complex](accelerate/sparse_outer_product_dense_float_complex.md)
- [sparse_vector_add_with_scale_dense_double_complex](accelerate/sparse_vector_add_with_scale_dense_double_complex.md)
- [sparse_vector_add_with_scale_dense_float_complex](accelerate/sparse_vector_add_with_scale_dense_float_complex.md)
- [sparse_vector_triangular_solve_dense_double_complex](accelerate/sparse_vector_triangular_solve_dense_double_complex.md)
- [sparse_vector_triangular_solve_dense_float_complex](accelerate/sparse_vector_triangular_solve_dense_float_complex.md)
- [zlarf1f\_](accelerate/zlarf1f_%28__________________%29.md)
- [zlarf1l\_](accelerate/zlarf1l_%28__________________%29.md)
