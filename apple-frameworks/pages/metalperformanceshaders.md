> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders](https://developer.apple.com/documentation/metalperformanceshaders)

# Metal Performance Shaders (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Framework  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Optimize graphics and compute performance with kernels that are fine-tuned for the unique characteristics of each Metal GPU family.

<a id="overview"></a>

## Overview

The Metal Performance Shaders framework contains a collection of highly optimized compute and graphics shaders that are designed to integrate easily and efficiently into your Metal app. These data-parallel primitives are specially tuned to take advantage of the unique hardware characteristics of each GPU family to ensure optimal performance.

Apps adopting the Metal Performance Shaders framework achieve great performance without needing to create and maintain hand-written shaders for each GPU family. Metal Performance Shaders can be used along with your app’s existing Metal resources (such as the [MTLCommandBuffer](metal/mtlcommandbuffer.md), [MTLTexture](metal/mtltexture.md), and [MTLBuffer](metal/mtlbuffer.md) objects) and shaders.

The Metal Performance Shaders framework supports the following functionality:

- Apply high-performance filters to, and extract statistical and histogram data from images.
- Implement and run neural networks for machine learning training and inference.
- Solve systems of equations, factorize matrices and multiply matrices and vectors.
- Accelerate ray tracing with high-performance ray-geometry intersection testing.

## Topics

### Fundamentals

- [The MPSKernel Class](metalperformanceshaders/the-mpskernel-class.md)
- [Tuning Hints](metalperformanceshaders/tuning-hints.md)

### Device Support

- [MPSSupportsMTLDevice(\_:)](metalperformanceshaders/mpssupportsmtldevice%28__%29.md): Determines whether the Metal Performance Shaders framework supports a Metal device.

### Image Filters

- [Image Filters](metalperformanceshaders/image-filters.md): Apply high-performance filters to, and extract statistical and histogram data from images.

### Neural Networks

Implement and run deep learning using previously obtained training data.

- [Training a Neural Network with Metal Performance Shaders](metalperformanceshaders/training-a-neural-network-with-metal-performance-shaders.md): Use an MPS neural network graph to train a simple neural network digit classifier.
- [MPSImage](metalperformanceshaders/mpsimage.md): A texture that may have more than four channels for use in convolutional neural networks.
- [MPSTemporaryImage](metalperformanceshaders/mpstemporaryimage.md): A texture for use in convolutional neural networks that stores transient data to be used and discarded promptly.
- [Objects that Simplify the Creation of Neural Networks](metalperformanceshaders/objects-that-simplify-the-creation-of-neural-networks.md): Simplify the creation of neural networks using networks of filter, image, and state nodes.
- [Convolutional Neural Network Kernels](metalperformanceshaders/convolutional-neural-network-kernels.md): Build neural networks with layers.
- [Recurrent Neural Networks](metalperformanceshaders/recurrent-neural-networks.md): Create recurrent neural networks.

### Matrices and Vectors

- [Matrices and Vectors](metalperformanceshaders/matrices-and-vectors.md): Solve systems of equations, factorize matrices and multiply matrices and vectors.

### Kernel Base Classes

- [MPSKernel](metalperformanceshaders/mpskernel.md): A standard interface for Metal Performance Shaders kernels.

### Keyed Archivers

- [NSKeyedArchiver](foundation/nskeyedarchiver.md): An encoder that stores an object’s data to an archive referenced by keys.
- [MPSKeyedUnarchiver](metalperformanceshaders/mpskeyedunarchiver.md): A keyed archiver that supports Metal Performance Shaders kernel decoding.
- [MPSDeviceProvider](metalperformanceshaders/mpsdeviceprovider.md): An interface that enables the setting of a Metal device for unarchived objects.

### Ray Tracing

- [Accelerating ray tracing and motion blur using Metal](metal/accelerating-ray-tracing-and-motion-blur-using-metal.md): Generate ray-traced images with motion blur using GPU-based parallel processing.
- [MPSRayIntersector](metalperformanceshaders/mpsrayintersector.md): Deprecated. A kernel that performs intersection tests between rays and geometry.
- [MPSAccelerationStructureGroup](metalperformanceshaders/mpsaccelerationstructuregroup.md): Deprecated. A group of acceleration structures.
- [MPSInstanceAccelerationStructure](metalperformanceshaders/mpsinstanceaccelerationstructure.md): Deprecated. An acceleration structure built over instances of other acceleration structures.
- [MPSTriangleAccelerationStructure](metalperformanceshaders/mpstriangleaccelerationstructure.md): Deprecated. An acceleration structure built over triangles.
- [MPSAccelerationStructure](metalperformanceshaders/mpsaccelerationstructure.md): Deprecated. The base class for data structures that are built over geometry and used to accelerate ray tracing.

### Articles

- [MetalPerformanceShaders Constants](metalperformanceshaders/metalperformanceshaders-constants.md)
- [MetalPerformanceShaders Data Types](metalperformanceshaders/metalperformanceshaders-data-types.md)
- [MetalPerformanceShaders Enumerations](metalperformanceshaders/metalperformanceshaders-enumerations.md)
- [MetalPerformanceShaders Functions](metalperformanceshaders/metalperformanceshaders-functions.md)
- [MetalPerformanceShaders Structures](metalperformanceshaders/metalperformanceshaders-structures.md)

### Classes

- [MPSCNNConvolutionTransposeGradient](metalperformanceshaders/mpscnnconvolutiontransposegradient.md)
- [MPSCNNConvolutionTransposeGradientNode](metalperformanceshaders/mpscnnconvolutiontransposegradientnode.md)
- [MPSCNNConvolutionTransposeGradientState](metalperformanceshaders/mpscnnconvolutiontransposegradientstate.md)
- [MPSCNNConvolutionTransposeGradientStateNode](metalperformanceshaders/mpscnnconvolutiontransposegradientstatenode.md)
- [MPSCNNFullyConnectedGradientNode](metalperformanceshaders/mpscnnfullyconnectedgradientnode.md)
- [MPSCNNGroupNormalization](metalperformanceshaders/mpscnngroupnormalization.md)
- [MPSCNNGroupNormalizationGradient](metalperformanceshaders/mpscnngroupnormalizationgradient.md)
- [MPSCNNGroupNormalizationGradientNode](metalperformanceshaders/mpscnngroupnormalizationgradientnode.md)
- [MPSCNNGroupNormalizationGradientState](metalperformanceshaders/mpscnngroupnormalizationgradientstate.md)
- [MPSCNNGroupNormalizationNode](metalperformanceshaders/mpscnngroupnormalizationnode.md)
- [MPSCNNMultiaryKernel](metalperformanceshaders/mpscnnmultiarykernel.md)
- [MPSCNNNeuronGeLUNode](metalperformanceshaders/mpscnnneurongelunode.md)
- [MPSCommandBuffer](metalperformanceshaders/mpscommandbuffer.md)
- [MPSFColorConversion](metalperformanceshaders/mpsfcolorconversion.md)
- [MPSFunction](metalperformanceshaders/mpsfunction.md)
- [MPSImageCanny](metalperformanceshaders/mpsimagecanny.md)
- [MPSImageEDLines](metalperformanceshaders/mpsimageedlines.md)
- [MPSImageNormalizedHistogram](metalperformanceshaders/mpsimagenormalizedhistogram.md): A filter that computes the normalized histogram of an image.
- [MPSMatrixRandom](metalperformanceshaders/mpsmatrixrandom.md)
- [MPSMatrixRandomDistributionDescriptor](metalperformanceshaders/mpsmatrixrandomdistributiondescriptor.md)
- [MPSMatrixRandomMTGP32](metalperformanceshaders/mpsmatrixrandommtgp32.md)
- [MPSMatrixRandomPhilox](metalperformanceshaders/mpsmatrixrandomphilox.md)
- [MPSNDArray](metalperformanceshaders/mpsndarray.md)
- [MPSNDArrayAffineInt4Dequantize](metalperformanceshaders/mpsndarrayaffineint4dequantize.md)
- [MPSNDArrayAffineQuantizationDescriptor](metalperformanceshaders/mpsndarrayaffinequantizationdescriptor.md)
- [MPSNDArrayBinaryKernel](metalperformanceshaders/mpsndarraybinarykernel.md)
- [MPSNDArrayBinaryPrimaryGradientKernel](metalperformanceshaders/mpsndarraybinaryprimarygradientkernel.md)
- [MPSNDArrayBinarySecondaryGradientKernel](metalperformanceshaders/mpsndarraybinarysecondarygradientkernel.md)
- [MPSNDArrayDescriptor](metalperformanceshaders/mpsndarraydescriptor.md)
- [MPSNDArrayGather](metalperformanceshaders/mpsndarraygather.md)
- [MPSNDArrayGatherGradient](metalperformanceshaders/mpsndarraygathergradient.md)
- [MPSNDArrayGatherGradientState](metalperformanceshaders/mpsndarraygathergradientstate.md)
- [MPSNDArrayGradientState](metalperformanceshaders/mpsndarraygradientstate.md)
- [MPSNDArrayIdentity](metalperformanceshaders/mpsndarrayidentity.md)
- [MPSNDArrayLUTDequantize](metalperformanceshaders/mpsndarraylutdequantize.md)
- [MPSNDArrayLUTQuantizationDescriptor](metalperformanceshaders/mpsndarraylutquantizationdescriptor.md)
- [MPSNDArrayMatrixMultiplication](metalperformanceshaders/mpsndarraymatrixmultiplication.md)
- [MPSNDArrayMultiaryBase](metalperformanceshaders/mpsndarraymultiarybase.md)
- [MPSNDArrayMultiaryGradientKernel](metalperformanceshaders/mpsndarraymultiarygradientkernel.md)
- [MPSNDArrayMultiaryKernel](metalperformanceshaders/mpsndarraymultiarykernel.md)
- [MPSNDArrayQuantizationDescriptor](metalperformanceshaders/mpsndarrayquantizationdescriptor.md)
- [MPSNDArrayQuantizedMatrixMultiplication](metalperformanceshaders/mpsndarrayquantizedmatrixmultiplication.md)
- [MPSNDArrayStridedSlice](metalperformanceshaders/mpsndarraystridedslice.md)
- [MPSNDArrayStridedSliceGradient](metalperformanceshaders/mpsndarraystridedslicegradient.md)
- [MPSNDArrayUnaryGradientKernel](metalperformanceshaders/mpsndarrayunarygradientkernel.md)
- [MPSNDArrayUnaryKernel](metalperformanceshaders/mpsndarrayunarykernel.md)
- [MPSNDArrayVectorLUTDequantize](metalperformanceshaders/mpsndarrayvectorlutdequantize.md)
- [MPSNNCompare](metalperformanceshaders/mpsnncompare.md)
- [MPSNNComparisonNode](metalperformanceshaders/mpsnncomparisonnode.md)
- [MPSNNCropAndResizeBilinear](metalperformanceshaders/mpsnncropandresizebilinear.md): A cropping and bilinear resizing filter.
- [MPSNNForwardLoss](metalperformanceshaders/mpsnnforwardloss.md)
- [MPSNNForwardLossNode](metalperformanceshaders/mpsnnforwardlossnode.md)
- [MPSNNGramMatrixCalculation](metalperformanceshaders/mpsnngrammatrixcalculation.md)
- [MPSNNGramMatrixCalculationGradient](metalperformanceshaders/mpsnngrammatrixcalculationgradient.md)
- [MPSNNGramMatrixCalculationGradientNode](metalperformanceshaders/mpsnngrammatrixcalculationgradientnode.md)
- [MPSNNGramMatrixCalculationNode](metalperformanceshaders/mpsnngrammatrixcalculationnode.md)
- [MPSNNGridSample](metalperformanceshaders/mpsnngridsample.md)
- [MPSNNInitialGradient](metalperformanceshaders/mpsnninitialgradient.md)
- [MPSNNInitialGradientNode](metalperformanceshaders/mpsnninitialgradientnode.md)
- [MPSNNLocalCorrelation](metalperformanceshaders/mpsnnlocalcorrelation.md)
- [MPSNNLossGradient](metalperformanceshaders/mpsnnlossgradient.md)
- [MPSNNLossGradientNode](metalperformanceshaders/mpsnnlossgradientnode.md)
- [MPSNNMultiaryGradientState](metalperformanceshaders/mpsnnmultiarygradientstate.md)
- [MPSNNMultiaryGradientStateNode](metalperformanceshaders/mpsnnmultiarygradientstatenode.md)
- [MPSNNPad](metalperformanceshaders/mpsnnpad.md)
- [MPSNNPadGradient](metalperformanceshaders/mpsnnpadgradient.md)
- [MPSNNPadGradientNode](metalperformanceshaders/mpsnnpadgradientnode.md)
- [MPSNNPadNode](metalperformanceshaders/mpsnnpadnode.md)
- [MPSNNReductionColumnMaxNode](metalperformanceshaders/mpsnnreductioncolumnmaxnode.md)
- [MPSNNReductionColumnMeanNode](metalperformanceshaders/mpsnnreductioncolumnmeannode.md)
- [MPSNNReductionColumnMinNode](metalperformanceshaders/mpsnnreductioncolumnminnode.md)
- [MPSNNReductionColumnSumNode](metalperformanceshaders/mpsnnreductioncolumnsumnode.md)
- [MPSNNReductionFeatureChannelsArgumentMaxNode](metalperformanceshaders/mpsnnreductionfeaturechannelsargumentmaxnode.md)
- [MPSNNReductionFeatureChannelsArgumentMinNode](metalperformanceshaders/mpsnnreductionfeaturechannelsargumentminnode.md)
- [MPSNNReductionFeatureChannelsMaxNode](metalperformanceshaders/mpsnnreductionfeaturechannelsmaxnode.md)
- [MPSNNReductionFeatureChannelsMeanNode](metalperformanceshaders/mpsnnreductionfeaturechannelsmeannode.md)
- [MPSNNReductionFeatureChannelsMinNode](metalperformanceshaders/mpsnnreductionfeaturechannelsminnode.md)
- [MPSNNReductionFeatureChannelsSumNode](metalperformanceshaders/mpsnnreductionfeaturechannelssumnode.md)
- [MPSNNReductionRowMaxNode](metalperformanceshaders/mpsnnreductionrowmaxnode.md)
- [MPSNNReductionRowMeanNode](metalperformanceshaders/mpsnnreductionrowmeannode.md)
- [MPSNNReductionRowMinNode](metalperformanceshaders/mpsnnreductionrowminnode.md)
- [MPSNNReductionRowSumNode](metalperformanceshaders/mpsnnreductionrowsumnode.md)
- [MPSNNReductionSpatialMeanGradientNode](metalperformanceshaders/mpsnnreductionspatialmeangradientnode.md)
- [MPSNNReductionSpatialMeanNode](metalperformanceshaders/mpsnnreductionspatialmeannode.md)
- [MPSNNReshapeGradient](metalperformanceshaders/mpsnnreshapegradient.md)
- [MPSNNReshapeGradientNode](metalperformanceshaders/mpsnnreshapegradientnode.md)
- [MPSNNReshapeNode](metalperformanceshaders/mpsnnreshapenode.md)
- [MPSNNResizeBilinear](metalperformanceshaders/mpsnnresizebilinear.md): A bilinear resizing filter.
- [MPSNNUnaryReductionNode](metalperformanceshaders/mpsnnunaryreductionnode.md)
- [MPSPolygonAccelerationStructure](metalperformanceshaders/mpspolygonaccelerationstructure.md): Deprecated.
- [MPSPolygonBuffer](metalperformanceshaders/mpspolygonbuffer.md): Deprecated.
- [MPSPredicate](metalperformanceshaders/mpspredicate.md)
- [MPSQuadrilateralAccelerationStructure](metalperformanceshaders/mpsquadrilateralaccelerationstructure.md): Deprecated.
- [MPSSVGF](metalperformanceshaders/mpssvgf.md)
- [MPSSVGFDefaultTextureAllocator](metalperformanceshaders/mpssvgfdefaulttextureallocator.md)
- [MPSSVGFDenoiser](metalperformanceshaders/mpssvgfdenoiser.md)
- [MPSStateResourceList](metalperformanceshaders/mpsstateresourcelist.md): An interface for objects that define resources for Metal Performance Shaders state containers.
- [MPSTemporalAA](metalperformanceshaders/mpstemporalaa.md)
- [MPSTemporaryNDArray](metalperformanceshaders/mpstemporaryndarray.md)

### Protocols

- [MPSCNNGroupNormalizationDataSource](metalperformanceshaders/mpscnngroupnormalizationdatasource.md)
- [MPSHeapProvider](metalperformanceshaders/mpsheapprovider.md)
- [MPSNDArrayAllocator](metalperformanceshaders/mpsndarrayallocator.md)
- [MPSNNGramMatrixCallback](metalperformanceshaders/mpsnngrammatrixcallback.md)
- [MPSNNLossCallback](metalperformanceshaders/mpsnnlosscallback.md)
- [MPSSVGFTextureAllocator](metalperformanceshaders/mpssvgftextureallocator.md)

### Structures

- [MPSFColorConversionOptions](metalperformanceshaders/mpsfcolorconversionoptions.md)
- [MPSFunctions_AABB](metalperformanceshaders/mpsfunctions_aabb.md)
- [MPSOrigin](metalperformanceshaders/mpsorigin.md): A position in an image used as the source origin.
- [MPSSize](metalperformanceshaders/mpssize.md): A size of a region in an image.

### Variables

- [MPSCustomKernelIndexDestIndex](metalperformanceshaders/mpscustomkernelindexdestindex.md)
- [MPSCustomKernelIndexSrc0Index](metalperformanceshaders/mpscustomkernelindexsrc0index.md)
- [MPSCustomKernelIndexSrc1Index](metalperformanceshaders/mpscustomkernelindexsrc1index.md)
- [MPSCustomKernelIndexSrc2Index](metalperformanceshaders/mpscustomkernelindexsrc2index.md)
- [MPSCustomKernelIndexSrc3Index](metalperformanceshaders/mpscustomkernelindexsrc3index.md)
- [MPSCustomKernelIndexSrc4Index](metalperformanceshaders/mpscustomkernelindexsrc4index.md)
- [MPSCustomKernelIndexUserDataIndex](metalperformanceshaders/mpscustomkernelindexuserdataindex.md)
- [MPSDeviceCapsLast](metalperformanceshaders/mpsdevicecapslast.md)
- [MPSDeviceCapsNull](metalperformanceshaders/mpsdevicecapsnull.md)
- [MPSDeviceIsAppleDevice](metalperformanceshaders/mpsdeviceisappledevice.md)
- [MPSDeviceSupportsBFloat16Arithmetic](metalperformanceshaders/mpsdevicesupportsbfloat16arithmetic.md)
- [MPSDeviceSupportsFloat16BicubicFiltering](metalperformanceshaders/mpsdevicesupportsfloat16bicubicfiltering.md)
- [MPSDeviceSupportsFloat32Filtering](metalperformanceshaders/mpsdevicesupportsfloat32filtering.md)
- [MPSDeviceSupportsNorm16BicubicFiltering](metalperformanceshaders/mpsdevicesupportsnorm16bicubicfiltering.md)
- [MPSDeviceSupportsQuadShuffle](metalperformanceshaders/mpsdevicesupportsquadshuffle.md)
- [MPSDeviceSupportsReadWriteTextures](metalperformanceshaders/mpsdevicesupportsreadwritetextures.md)
- [MPSDeviceSupportsReadableArrayOfTextures](metalperformanceshaders/mpsdevicesupportsreadablearrayoftextures.md)
- [MPSDeviceSupportsSimdReduction](metalperformanceshaders/mpsdevicesupportssimdreduction.md)
- [MPSDeviceSupportsSimdShuffle](metalperformanceshaders/mpsdevicesupportssimdshuffle.md)
- [MPSDeviceSupportsSimdShuffleAndFill](metalperformanceshaders/mpsdevicesupportssimdshuffleandfill.md)
- [MPSDeviceSupportsSimdgroupBarrier](metalperformanceshaders/mpsdevicesupportssimdgroupbarrier.md)
- [MPSDeviceSupportsWritableArrayOfTextures](metalperformanceshaders/mpsdevicesupportswritablearrayoftextures.md)
- [MPSFColorConversion_h](metalperformanceshaders/mpsfcolorconversion_h.md)
- [MPSFunctions_AABB_SDR](metalperformanceshaders/mpsfunctions_aabb_sdr.md)
- [MPSFunctions_AABB_Unbounded](metalperformanceshaders/mpsfunctions_aabb_unbounded.md)
- [MPSImageType2d](metalperformanceshaders/mpsimagetype2d.md)
- [MPSImageType2d_array](metalperformanceshaders/mpsimagetype2d_array.md)
- [MPSImageType2d_array_noAlpha](metalperformanceshaders/mpsimagetype2d_array_noalpha.md)
- [MPSImageType2d_noAlpha](metalperformanceshaders/mpsimagetype2d_noalpha.md)
- [MPSImageTypeArray2d](metalperformanceshaders/mpsimagetypearray2d.md)
- [MPSImageTypeArray2d_array](metalperformanceshaders/mpsimagetypearray2d_array.md)
- [MPSImageTypeArray2d_array_noAlpha](metalperformanceshaders/mpsimagetypearray2d_array_noalpha.md)
- [MPSImageTypeArray2d_noAlpha](metalperformanceshaders/mpsimagetypearray2d_noalpha.md)
- [MPSImageType_ArrayMask](metalperformanceshaders/mpsimagetype_arraymask.md)
- [MPSImageType_BatchMask](metalperformanceshaders/mpsimagetype_batchmask.md)
- [MPSImageType_bitCount](metalperformanceshaders/mpsimagetype_bitcount.md)
- [MPSImageType_mask](metalperformanceshaders/mpsimagetype_mask.md)
- [MPSImageType_noAlpha](metalperformanceshaders/mpsimagetype_noalpha.md)
- [MPSImageType_texelFormatBFloat16](metalperformanceshaders/mpsimagetype_texelformatbfloat16.md)
- [MPSImageType_texelFormatFloat16](metalperformanceshaders/mpsimagetype_texelformatfloat16.md)
- [MPSImageType_texelFormatMask](metalperformanceshaders/mpsimagetype_texelformatmask.md)
- [MPSImageType_texelFormatShift](metalperformanceshaders/mpsimagetype_texelformatshift.md)
- [MPSImageType_texelFormatStandard](metalperformanceshaders/mpsimagetype_texelformatstandard.md)
- [MPSImageType_texelFormatUnorm8](metalperformanceshaders/mpsimagetype_texelformatunorm8.md)
- [MPSImageType_typeMask](metalperformanceshaders/mpsimagetype_typemask.md)
- [MPSRectNoClip](metalperformanceshaders/mpsrectnoclip.md)

### Type Aliases

- [MPSPackedFloat3](metalperformanceshaders/mpspackedfloat3-swift.typealias.md): A packed three-element vector.

## See Also

### Related Documentation

- [Metal](metal.md): Render advanced 3D graphics and compute data in parallel with graphics processors.
- [Metal Programming Guide](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014221)

# Metal Performance Shaders (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Framework  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Optimize graphics and compute performance with kernels that are fine-tuned for the unique characteristics of each Metal GPU family.

<a id="overview"></a>

## Overview

The Metal Performance Shaders framework contains a collection of highly optimized compute and graphics shaders that are designed to integrate easily and efficiently into your Metal app. These data-parallel primitives are specially tuned to take advantage of the unique hardware characteristics of each GPU family to ensure optimal performance.

Apps adopting the Metal Performance Shaders framework achieve great performance without needing to create and maintain hand-written shaders for each GPU family. Metal Performance Shaders can be used along with your app’s existing Metal resources (such as the [MTLCommandBuffer](metal/mtlcommandbuffer.md), [MTLTexture](metal/mtltexture.md), and [MTLBuffer](metal/mtlbuffer.md) objects) and shaders.

The Metal Performance Shaders framework supports the following functionality:

- Apply high-performance filters to, and extract statistical and histogram data from images.
- Implement and run neural networks for machine learning training and inference.
- Solve systems of equations, factorize matrices and multiply matrices and vectors.
- Accelerate ray tracing with high-performance ray-geometry intersection testing.

## Topics

### Fundamentals

- [The MPSKernel Class](metalperformanceshaders/the-mpskernel-class.md)
- [Tuning Hints](metalperformanceshaders/tuning-hints.md)

### Device Support

- [MPSSupportsMTLDevice](metalperformanceshaders/mpssupportsmtldevice%28__%29.md): Determines whether the Metal Performance Shaders framework supports a Metal device.

### Image Filters

- [Image Filters](metalperformanceshaders/image-filters.md): Apply high-performance filters to, and extract statistical and histogram data from images.

### Neural Networks

Implement and run deep learning using previously obtained training data.

- [Training a Neural Network with Metal Performance Shaders](metalperformanceshaders/training-a-neural-network-with-metal-performance-shaders.md): Use an MPS neural network graph to train a simple neural network digit classifier.
- [MPSImage](metalperformanceshaders/mpsimage.md): A texture that may have more than four channels for use in convolutional neural networks.
- [MPSTemporaryImage](metalperformanceshaders/mpstemporaryimage.md): A texture for use in convolutional neural networks that stores transient data to be used and discarded promptly.
- [Objects that Simplify the Creation of Neural Networks](metalperformanceshaders/objects-that-simplify-the-creation-of-neural-networks.md): Simplify the creation of neural networks using networks of filter, image, and state nodes.
- [Convolutional Neural Network Kernels](metalperformanceshaders/convolutional-neural-network-kernels.md): Build neural networks with layers.
- [Recurrent Neural Networks](metalperformanceshaders/recurrent-neural-networks.md): Create recurrent neural networks.

### Matrices and Vectors

- [Matrices and Vectors](metalperformanceshaders/matrices-and-vectors.md): Solve systems of equations, factorize matrices and multiply matrices and vectors.

### Kernel Base Classes

- [MPSKernel](metalperformanceshaders/mpskernel.md): A standard interface for Metal Performance Shaders kernels.

### Keyed Archivers

- [NSKeyedArchiver](foundation/nskeyedarchiver.md): An encoder that stores an object’s data to an archive referenced by keys.
- [MPSKeyedUnarchiver](metalperformanceshaders/mpskeyedunarchiver.md): A keyed archiver that supports Metal Performance Shaders kernel decoding.
- [MPSDeviceProvider](metalperformanceshaders/mpsdeviceprovider.md): An interface that enables the setting of a Metal device for unarchived objects.

### Ray Tracing

- [Accelerating ray tracing and motion blur using Metal](metal/accelerating-ray-tracing-and-motion-blur-using-metal.md): Generate ray-traced images with motion blur using GPU-based parallel processing.
- [MPSRayIntersector](metalperformanceshaders/mpsrayintersector.md): Deprecated. A kernel that performs intersection tests between rays and geometry.
- [MPSAccelerationStructureGroup](metalperformanceshaders/mpsaccelerationstructuregroup.md): Deprecated. A group of acceleration structures.
- [MPSInstanceAccelerationStructure](metalperformanceshaders/mpsinstanceaccelerationstructure.md): Deprecated. An acceleration structure built over instances of other acceleration structures.
- [MPSTriangleAccelerationStructure](metalperformanceshaders/mpstriangleaccelerationstructure.md): Deprecated. An acceleration structure built over triangles.
- [MPSAccelerationStructure](metalperformanceshaders/mpsaccelerationstructure.md): Deprecated. The base class for data structures that are built over geometry and used to accelerate ray tracing.

### Articles

- [MetalPerformanceShaders Constants](metalperformanceshaders/metalperformanceshaders-constants.md)
- [MetalPerformanceShaders Data Types](metalperformanceshaders/metalperformanceshaders-data-types.md)
- [MetalPerformanceShaders Enumerations](metalperformanceshaders/metalperformanceshaders-enumerations.md)
- [MetalPerformanceShaders Functions](metalperformanceshaders/metalperformanceshaders-functions.md)
- [MetalPerformanceShaders Structures](metalperformanceshaders/metalperformanceshaders-structures.md)

### Classes

- [MPSCNNConvolutionTransposeGradient](metalperformanceshaders/mpscnnconvolutiontransposegradient.md)
- [MPSCNNConvolutionTransposeGradientNode](metalperformanceshaders/mpscnnconvolutiontransposegradientnode.md)
- [MPSCNNConvolutionTransposeGradientState](metalperformanceshaders/mpscnnconvolutiontransposegradientstate.md)
- [MPSCNNConvolutionTransposeGradientStateNode](metalperformanceshaders/mpscnnconvolutiontransposegradientstatenode.md)
- [MPSCNNFullyConnectedGradientNode](metalperformanceshaders/mpscnnfullyconnectedgradientnode.md)
- [MPSCNNGroupNormalization](metalperformanceshaders/mpscnngroupnormalization.md)
- [MPSCNNGroupNormalizationGradient](metalperformanceshaders/mpscnngroupnormalizationgradient.md)
- [MPSCNNGroupNormalizationGradientNode](metalperformanceshaders/mpscnngroupnormalizationgradientnode.md)
- [MPSCNNGroupNormalizationGradientState](metalperformanceshaders/mpscnngroupnormalizationgradientstate.md)
- [MPSCNNGroupNormalizationNode](metalperformanceshaders/mpscnngroupnormalizationnode.md)
- [MPSCNNMultiaryKernel](metalperformanceshaders/mpscnnmultiarykernel.md)
- [MPSCNNNeuronGeLUNode](metalperformanceshaders/mpscnnneurongelunode.md)
- [MPSCommandBuffer](metalperformanceshaders/mpscommandbuffer.md)
- [MPSFColorConversion](metalperformanceshaders/mpsfcolorconversion.md)
- [MPSFunction](metalperformanceshaders/mpsfunction.md)
- [MPSImageCanny](metalperformanceshaders/mpsimagecanny.md)
- [MPSImageEDLines](metalperformanceshaders/mpsimageedlines.md)
- [MPSImageNormalizedHistogram](metalperformanceshaders/mpsimagenormalizedhistogram.md): A filter that computes the normalized histogram of an image.
- [MPSMatrixRandom](metalperformanceshaders/mpsmatrixrandom.md)
- [MPSMatrixRandomDistributionDescriptor](metalperformanceshaders/mpsmatrixrandomdistributiondescriptor.md)
- [MPSMatrixRandomMTGP32](metalperformanceshaders/mpsmatrixrandommtgp32.md)
- [MPSMatrixRandomPhilox](metalperformanceshaders/mpsmatrixrandomphilox.md)
- [MPSNDArray](metalperformanceshaders/mpsndarray.md)
- [MPSNDArrayAffineInt4Dequantize](metalperformanceshaders/mpsndarrayaffineint4dequantize.md)
- [MPSNDArrayAffineQuantizationDescriptor](metalperformanceshaders/mpsndarrayaffinequantizationdescriptor.md)
- [MPSNDArrayBinaryKernel](metalperformanceshaders/mpsndarraybinarykernel.md)
- [MPSNDArrayBinaryPrimaryGradientKernel](metalperformanceshaders/mpsndarraybinaryprimarygradientkernel.md)
- [MPSNDArrayBinarySecondaryGradientKernel](metalperformanceshaders/mpsndarraybinarysecondarygradientkernel.md)
- [MPSNDArrayDescriptor](metalperformanceshaders/mpsndarraydescriptor.md)
- [MPSNDArrayGather](metalperformanceshaders/mpsndarraygather.md)
- [MPSNDArrayGatherGradient](metalperformanceshaders/mpsndarraygathergradient.md)
- [MPSNDArrayGatherGradientState](metalperformanceshaders/mpsndarraygathergradientstate.md)
- [MPSNDArrayGradientState](metalperformanceshaders/mpsndarraygradientstate.md)
- [MPSNDArrayIdentity](metalperformanceshaders/mpsndarrayidentity.md)
- [MPSNDArrayLUTDequantize](metalperformanceshaders/mpsndarraylutdequantize.md)
- [MPSNDArrayLUTQuantizationDescriptor](metalperformanceshaders/mpsndarraylutquantizationdescriptor.md)
- [MPSNDArrayMatrixMultiplication](metalperformanceshaders/mpsndarraymatrixmultiplication.md)
- [MPSNDArrayMultiaryBase](metalperformanceshaders/mpsndarraymultiarybase.md)
- [MPSNDArrayMultiaryGradientKernel](metalperformanceshaders/mpsndarraymultiarygradientkernel.md)
- [MPSNDArrayMultiaryKernel](metalperformanceshaders/mpsndarraymultiarykernel.md)
- [MPSNDArrayQuantizationDescriptor](metalperformanceshaders/mpsndarrayquantizationdescriptor.md)
- [MPSNDArrayQuantizedMatrixMultiplication](metalperformanceshaders/mpsndarrayquantizedmatrixmultiplication.md)
- [MPSNDArrayStridedSlice](metalperformanceshaders/mpsndarraystridedslice.md)
- [MPSNDArrayStridedSliceGradient](metalperformanceshaders/mpsndarraystridedslicegradient.md)
- [MPSNDArrayUnaryGradientKernel](metalperformanceshaders/mpsndarrayunarygradientkernel.md)
- [MPSNDArrayUnaryKernel](metalperformanceshaders/mpsndarrayunarykernel.md)
- [MPSNDArrayVectorLUTDequantize](metalperformanceshaders/mpsndarrayvectorlutdequantize.md)
- [MPSNNCompare](metalperformanceshaders/mpsnncompare.md)
- [MPSNNComparisonNode](metalperformanceshaders/mpsnncomparisonnode.md)
- [MPSNNCropAndResizeBilinear](metalperformanceshaders/mpsnncropandresizebilinear.md): A cropping and bilinear resizing filter.
- [MPSNNForwardLoss](metalperformanceshaders/mpsnnforwardloss.md)
- [MPSNNForwardLossNode](metalperformanceshaders/mpsnnforwardlossnode.md)
- [MPSNNGramMatrixCalculation](metalperformanceshaders/mpsnngrammatrixcalculation.md)
- [MPSNNGramMatrixCalculationGradient](metalperformanceshaders/mpsnngrammatrixcalculationgradient.md)
- [MPSNNGramMatrixCalculationGradientNode](metalperformanceshaders/mpsnngrammatrixcalculationgradientnode.md)
- [MPSNNGramMatrixCalculationNode](metalperformanceshaders/mpsnngrammatrixcalculationnode.md)
- [MPSNNGridSample](metalperformanceshaders/mpsnngridsample.md)
- [MPSNNInitialGradient](metalperformanceshaders/mpsnninitialgradient.md)
- [MPSNNInitialGradientNode](metalperformanceshaders/mpsnninitialgradientnode.md)
- [MPSNNLocalCorrelation](metalperformanceshaders/mpsnnlocalcorrelation.md)
- [MPSNNLossGradient](metalperformanceshaders/mpsnnlossgradient.md)
- [MPSNNLossGradientNode](metalperformanceshaders/mpsnnlossgradientnode.md)
- [MPSNNMultiaryGradientState](metalperformanceshaders/mpsnnmultiarygradientstate.md)
- [MPSNNMultiaryGradientStateNode](metalperformanceshaders/mpsnnmultiarygradientstatenode.md)
- [MPSNNPad](metalperformanceshaders/mpsnnpad.md)
- [MPSNNPadGradient](metalperformanceshaders/mpsnnpadgradient.md)
- [MPSNNPadGradientNode](metalperformanceshaders/mpsnnpadgradientnode.md)
- [MPSNNPadNode](metalperformanceshaders/mpsnnpadnode.md)
- [MPSNNReductionColumnMaxNode](metalperformanceshaders/mpsnnreductioncolumnmaxnode.md)
- [MPSNNReductionColumnMeanNode](metalperformanceshaders/mpsnnreductioncolumnmeannode.md)
- [MPSNNReductionColumnMinNode](metalperformanceshaders/mpsnnreductioncolumnminnode.md)
- [MPSNNReductionColumnSumNode](metalperformanceshaders/mpsnnreductioncolumnsumnode.md)
- [MPSNNReductionFeatureChannelsArgumentMaxNode](metalperformanceshaders/mpsnnreductionfeaturechannelsargumentmaxnode.md)
- [MPSNNReductionFeatureChannelsArgumentMinNode](metalperformanceshaders/mpsnnreductionfeaturechannelsargumentminnode.md)
- [MPSNNReductionFeatureChannelsMaxNode](metalperformanceshaders/mpsnnreductionfeaturechannelsmaxnode.md)
- [MPSNNReductionFeatureChannelsMeanNode](metalperformanceshaders/mpsnnreductionfeaturechannelsmeannode.md)
- [MPSNNReductionFeatureChannelsMinNode](metalperformanceshaders/mpsnnreductionfeaturechannelsminnode.md)
- [MPSNNReductionFeatureChannelsSumNode](metalperformanceshaders/mpsnnreductionfeaturechannelssumnode.md)
- [MPSNNReductionRowMaxNode](metalperformanceshaders/mpsnnreductionrowmaxnode.md)
- [MPSNNReductionRowMeanNode](metalperformanceshaders/mpsnnreductionrowmeannode.md)
- [MPSNNReductionRowMinNode](metalperformanceshaders/mpsnnreductionrowminnode.md)
- [MPSNNReductionRowSumNode](metalperformanceshaders/mpsnnreductionrowsumnode.md)
- [MPSNNReductionSpatialMeanGradientNode](metalperformanceshaders/mpsnnreductionspatialmeangradientnode.md)
- [MPSNNReductionSpatialMeanNode](metalperformanceshaders/mpsnnreductionspatialmeannode.md)
- [MPSNNReshapeGradient](metalperformanceshaders/mpsnnreshapegradient.md)
- [MPSNNReshapeGradientNode](metalperformanceshaders/mpsnnreshapegradientnode.md)
- [MPSNNReshapeNode](metalperformanceshaders/mpsnnreshapenode.md)
- [MPSNNResizeBilinear](metalperformanceshaders/mpsnnresizebilinear.md): A bilinear resizing filter.
- [MPSNNUnaryReductionNode](metalperformanceshaders/mpsnnunaryreductionnode.md)
- [MPSPolygonAccelerationStructure](metalperformanceshaders/mpspolygonaccelerationstructure.md): Deprecated.
- [MPSPolygonBuffer](metalperformanceshaders/mpspolygonbuffer.md): Deprecated.
- [MPSPredicate](metalperformanceshaders/mpspredicate.md)
- [MPSQuadrilateralAccelerationStructure](metalperformanceshaders/mpsquadrilateralaccelerationstructure.md): Deprecated.
- [MPSSVGF](metalperformanceshaders/mpssvgf.md)
- [MPSSVGFDefaultTextureAllocator](metalperformanceshaders/mpssvgfdefaulttextureallocator.md)
- [MPSSVGFDenoiser](metalperformanceshaders/mpssvgfdenoiser.md)
- [MPSStateResourceList](metalperformanceshaders/mpsstateresourcelist.md): An interface for objects that define resources for Metal Performance Shaders state containers.
- [MPSTemporalAA](metalperformanceshaders/mpstemporalaa.md)
- [MPSTemporaryNDArray](metalperformanceshaders/mpstemporaryndarray.md)

### Protocols

- [MPSCNNGroupNormalizationDataSource](metalperformanceshaders/mpscnngroupnormalizationdatasource.md)
- [MPSHeapProvider](metalperformanceshaders/mpsheapprovider.md)
- [MPSNDArrayAllocator](metalperformanceshaders/mpsndarrayallocator.md)
- [MPSNNGramMatrixCallback](metalperformanceshaders/mpsnngrammatrixcallback.md)
- [MPSNNLossCallback](metalperformanceshaders/mpsnnlosscallback.md)
- [MPSSVGFTextureAllocator](metalperformanceshaders/mpssvgftextureallocator.md)

### Structures

- [MPSFunctions_AABB](metalperformanceshaders/mpsfunctions_aabb.md)
- [MPSOrigin](metalperformanceshaders/mpsorigin.md): A position in an image used as the source origin.
- [MPSSize](metalperformanceshaders/mpssize.md): A size of a region in an image.

### Variables

- [MPSFunctions_AABB_SDR](metalperformanceshaders/mpsfunctions_aabb_sdr.md)
- [MPSFunctions_AABB_Unbounded](metalperformanceshaders/mpsfunctions_aabb_unbounded.md)
- [MPSRectNoClip](metalperformanceshaders/mpsrectnoclip.md)

### Macros

- [MHDR_AVAILABILITY_v1](metalperformanceshaders/mhdr_availability_v1.md)
- [MPSFColorConversion_h](metalperformanceshaders/mpsfcolorconversion_h.md)
- [MPSF_AVAILABILITY_v1](metalperformanceshaders/mpsf_availability_v1.md)
- [MPSF_AVAILABLE_STARTING](metalperformanceshaders/mpsf_available_starting.md)
- [MPS_ALWAYS_INLINE](metalperformanceshaders/mps_always_inline.md)
- [MPS_AVAILABLE_STARTING](metalperformanceshaders/mps_available_starting.md)
- [MPS_AVAILABLE_STARTING_BUT_DEPRECATED](metalperformanceshaders/mps_available_starting_but_deprecated.md)
- [MPS_CLASS_AVAILABLE_STARTING](metalperformanceshaders/mps_class_available_starting.md)
- [MPS_ENUM_AVAILABLE_STARTING](metalperformanceshaders/mps_enum_available_starting.md)
- [MPS_ENUM_AVAILABLE_STARTING_BUT_DEPRECATED](metalperformanceshaders/mps_enum_available_starting_but_deprecated.md)
- [MPS_SWIFT_NAME](metalperformanceshaders/mps_swift_name.md)
- [MPS_UNAVAILABLE](metalperformanceshaders/mps_unavailable.md)

### Enumerations

- [MPSFColorConversionOptions](metalperformanceshaders/mpsfcolorconversionoptions.md)

## See Also

### Related Documentation

- [Metal](metal.md): Render advanced 3D graphics and compute data in parallel with graphics processors.
- [Metal Programming Guide](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014221)
