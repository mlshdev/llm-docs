> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/compression-properties](https://developer.apple.com/documentation/videotoolbox/compression-properties)

# Compression Properties

**Interface languages:** Swift, Objective-C

**Framework:** Video Toolbox  
**Kind:** API Collection

Properties that you use to configure a compression session.

<a id="overview"></a>

## Overview

> **Note**

>  Video encoders may not support all compression property keys.

## Topics

### Bitstream Configuration

- [kVTCompressionPropertyKey_Depth](kvtcompressionpropertykey_depth.md): The pixel depth of the encoded video.
- [kVTCompressionPropertyKey_H264EntropyMode](kvtcompressionpropertykey_h264entropymode.md): The entropy encoding mode for H.264 compression.
- [kVTCompressionPropertyKey_HDRMetadataInsertionMode](kvtcompressionpropertykey_hdrmetadatainsertionmode.md)
- [kVTCompressionPropertyKey_OutputBitDepth](kvtcompressionpropertykey_outputbitdepth.md)
- [kVTCompressionPropertyKey_PreserveAlphaChannel](kvtcompressionpropertykey_preservealphachannel.md): A key that specifies whether to encode the alpha channel of input video frames.
- [kVTCompressionPropertyKey_PreserveDynamicHDRMetadata](kvtcompressionpropertykey_preservedynamichdrmetadata.md): Specifies whether to preserve dynamic HDR metadata on the input pixel buffer.
- [kVTCompressionPropertyKey_ProfileLevel](kvtcompressionpropertykey_profilelevel.md): The profile and level for the encoded bitstream.

### Buffers

- [kVTCompressionPropertyKey_NumberOfPendingFrames](kvtcompressionpropertykey_numberofpendingframes.md): The number of pending frames in the compression session.
- [kVTCompressionPropertyKey_PixelBufferPoolIsShared](kvtcompressionpropertykey_pixelbufferpoolisshared.md): A Boolean value indicating whether the common pixel buffer pool is shared between the video encoder and the session client.
- [kVTCompressionPropertyKey_VideoEncoderPixelBufferAttributes](kvtcompressionpropertykey_videoencoderpixelbufferattributes.md): The video encoder’s pixel buffer attributes for the compression session.

### Camera Calibration

- [kVTCompressionPropertyKey_CameraCalibrationDataLensCollection](kvtcompressionpropertykey_cameracalibrationdatalenscollection.md)
- [kVTCompressionPropertyCameraCalibrationKey_ExtrinsicOrientationQuaternion](kvtcompressionpropertycameracalibrationkey_extrinsicorientationquaternion.md)
- [kVTCompressionPropertyCameraCalibrationKey_ExtrinsicOriginSource](kvtcompressionpropertycameracalibrationkey_extrinsicoriginsource.md)
- [kVTCompressionPropertyCameraCalibrationKey_IntrinsicMatrix](kvtcompressionpropertycameracalibrationkey_intrinsicmatrix.md)
- [kVTCompressionPropertyCameraCalibrationKey_IntrinsicMatrixProjectionOffset](kvtcompressionpropertycameracalibrationkey_intrinsicmatrixprojectionoffset.md)
- [kVTCompressionPropertyCameraCalibrationKey_IntrinsicMatrixReferenceDimensions](kvtcompressionpropertycameracalibrationkey_intrinsicmatrixreferencedimensions.md)
- [kVTCompressionPropertyCameraCalibrationKey_LensAlgorithmKind](kvtcompressionpropertycameracalibrationkey_lensalgorithmkind.md)
- [kVTCompressionPropertyCameraCalibrationKey_LensDistortions](kvtcompressionpropertycameracalibrationkey_lensdistortions.md)
- [kVTCompressionPropertyCameraCalibrationKey_LensDomain](kvtcompressionpropertycameracalibrationkey_lensdomain.md)
- [kVTCompressionPropertyCameraCalibrationKey_LensFrameAdjustmentsPolynomialX](kvtcompressionpropertycameracalibrationkey_lensframeadjustmentspolynomialx.md)
- [kVTCompressionPropertyCameraCalibrationKey_LensFrameAdjustmentsPolynomialY](kvtcompressionpropertycameracalibrationkey_lensframeadjustmentspolynomialy.md)
- [kVTCompressionPropertyCameraCalibrationKey_LensIdentifier](kvtcompressionpropertycameracalibrationkey_lensidentifier.md)
- [kVTCompressionPropertyCameraCalibrationKey_LensRole](kvtcompressionpropertycameracalibrationkey_lensrole.md)
- [kVTCompressionPropertyCameraCalibrationKey_RadialAngleLimit](kvtcompressionpropertycameracalibrationkey_radialanglelimit.md)

### Clean Aperture and Pixel Aspect Ratio

- [kVTCompressionPropertyKey_AspectRatio16x9](kvtcompressionpropertykey_aspectratio16x9.md): A Boolean value indicating whether the DV video stream should have the 16x9 flag set.
- [kVTCompressionPropertyKey_CleanAperture](kvtcompressionpropertykey_cleanaperture.md): The clean aperture for encoded frames.
- [kVTCompressionPropertyKey_FieldCount](kvtcompressionpropertykey_fieldcount.md): The field count indicating whether the frames should be encoded progressive (1) or interlaced (2).
- [kVTCompressionPropertyKey_FieldDetail](kvtcompressionpropertykey_fielddetail.md): Field ordering for encoded interlaced frames.
- [kVTCompressionPropertyKey_PixelAspectRatio](kvtcompressionpropertykey_pixelaspectratio.md): The pixel aspect ratio for encoded frames.
- [kVTCompressionPropertyKey_ProgressiveScan](kvtcompressionpropertykey_progressivescan.md): A Boolean value indicating whether the DV video stream should have the progressive flag set.

### Color

- [kVTCompressionPropertyKey_AlphaChannelMode](kvtcompressionpropertykey_alphachannelmode.md)
- [kVTCompressionPropertyKey_ColorPrimaries](kvtcompressionpropertykey_colorprimaries.md): The color primaries for compressed content.
- [kVTCompressionPropertyKey_ContentLightLevelInfo](kvtcompressionpropertykey_contentlightlevelinfo.md)
- [kVTCompressionPropertyKey_GammaLevel](kvtcompressionpropertykey_gammalevel.md)
- [kVTCompressionPropertyKey_ICCProfile](kvtcompressionpropertykey_iccprofile.md): The ICC profile for compressed content.
- [kVTCompressionPropertyKey_MasteringDisplayColorVolume](kvtcompressionpropertykey_masteringdisplaycolorvolume.md)
- [kVTCompressionPropertyKey_TransferFunction](kvtcompressionpropertykey_transferfunction.md): The transfer function for compressed content.
- [kVTCompressionPropertyKey_YCbCrMatrix](kvtcompressionpropertykey_ycbcrmatrix.md): The YCbCr matrix for compressed content.

### Compression Presets

- [kVTCompressionPreset_Balanced](kvtcompressionpreset_balanced.md)
- [kVTCompressionPreset_HighQuality](kvtcompressionpreset_highquality.md)
- [kVTCompressionPreset_HighSpeed](kvtcompressionpreset_highspeed.md)
- [kVTCompressionPreset_VideoConferencing](kvtcompressionpreset_videoconferencing.md)
- [kVTCompressionPropertyKey_SupportedPresetDictionaries](kvtcompressionpropertykey_supportedpresetdictionaries.md)

### Encoder Selection

- [kVTCompressionPropertyKey_EncoderID](kvtcompressionpropertykey_encoderid.md): Specifies a particular video encoder by its ID string.
- [kVTVideoEncoderSpecification_EnableHardwareAcceleratedVideoEncoder](kvtvideoencoderspecification_enablehardwareacceleratedvideoencoder.md): A Boolean value indicating whether hardware-accelerated video encoding is allowed, if available.
- [kVTVideoEncoderSpecification_EnableLowLatencyRateControl](kvtvideoencoderspecification_enablelowlatencyratecontrol.md): Specifies to select an encoder that supports low-latency operation and enables low-latency mode.
- [kVTVideoEncoderSpecification_EncoderID](kvtvideoencoderspecification_encoderid.md): A key that indicates a particular video encoder to use.
- [kVTVideoEncoderSpecification_PreferredEncoderGPURegistryID](kvtvideoencoderspecification_preferredencodergpuregistryid.md)
- [kVTVideoEncoderSpecification_RequiredEncoderGPURegistryID](kvtvideoencoderspecification_requiredencodergpuregistryid.md)
- [kVTVideoEncoderSpecification_RequireHardwareAcceleratedVideoEncoder](kvtvideoencoderspecification_requirehardwareacceleratedvideoencoder.md): A Boolean value indicating whether hardware-accelerated encoding is required.

### Encoding Hints

- [kVTCompressionPropertyKey_ExpectedDuration](kvtcompressionpropertykey_expectedduration.md): The expected total duration of the compression session, if known.
- [kVTCompressionPropertyKey_ExpectedFrameRate](kvtcompressionpropertykey_expectedframerate.md): The expected frame rate, if known.
- [kVTCompressionPropertyKey_MaximumRealTimeFrameRate](kvtcompressionpropertykey_maximumrealtimeframerate.md): A value that specifies the maximum real time rate at which frames can be submitted to a compression session.
- [kVTCompressionPropertyKey_PrioritizeEncodingSpeedOverQuality](kvtcompressionpropertykey_prioritizeencodingspeedoverquality.md): A hint for the video encoder to maximize its speed during encoding, sacrificing quality if needed.
- [kVTCompressionPropertyKey_ReferenceBufferCount](kvtcompressionpropertykey_referencebuffercount.md)
- [kVTCompressionPropertyKey_SourceFrameCount](kvtcompressionpropertykey_sourceframecount.md): The number of source frames, if known.
- [kVTCompressionPropertyKey_SuggestedLookAheadFrameCount](kvtcompressionpropertykey_suggestedlookaheadframecount.md): A value that requests that the encoder retain the specified number of frames during encoding.

### Frame Dependency

- [kVTCompressionPropertyKey_AllowFrameReordering](kvtcompressionpropertykey_allowframereordering.md): A Boolean value that indicates whether frame reordering is enabled.
- [kVTCompressionPropertyKey_AllowOpenGOP](kvtcompressionpropertykey_allowopengop.md): Enables Open GOP (Group Of Pictures) encoding.
- [kVTCompressionPropertyKey_AllowTemporalCompression](kvtcompressionpropertykey_allowtemporalcompression.md): A Boolean value indicating whether temporal compression is enabled.
- [kVTCompressionPropertyKey_MaxKeyFrameInterval](kvtcompressionpropertykey_maxkeyframeinterval.md): The maximum interval between key frames, also known as the key frame rate.
- [kVTCompressionPropertyKey_MaxKeyFrameIntervalDuration](kvtcompressionpropertykey_maxkeyframeintervalduration.md): The maximum duration from one key frame to the next in seconds.

### Hardware Acceleration

- [kVTCompressionPropertyKey_UsingGPURegistryID](kvtcompressionpropertykey_usinggpuregistryid.md)
- [kVTCompressionPropertyKey_UsingHardwareAcceleratedVideoEncoder](kvtcompressionpropertykey_usinghardwareacceleratedvideoencoder.md): A Boolean value indicating whether a hardware-accelerated video encoder is used.

### Long-Term Reference

- [kVTCompressionPropertyKey_EnableLTR](kvtcompressionpropertykey_enableltr.md): Enables Long Term Reference (LTR) frames during encoding.
- [kVTEncodeFrameOptionKey_AcknowledgedLTRTokens](kvtencodeframeoptionkey_acknowledgedltrtokens.md): Enable Long Term Reference (LTR) frames during encoding.
- [kVTEncodeFrameOptionKey_ForceLTRRefresh](kvtencodeframeoptionkey_forceltrrefresh.md): A Boolean value that indicates whether to force Long Term Reference (LTR).
- [kVTSampleAttachmentKey_RequireLTRAcknowledgementToken](kvtsampleattachmentkey_requireltracknowledgementtoken.md): A number value that contains a unique token for this Long Term Reference (LTR).

### Multipass Storage

- [kVTCompressionPropertyKey_MultiPassStorage](kvtcompressionpropertykey_multipassstorage.md): A property key that enables multipass compression and provides storage for encoder private data.

### Multiview Compression

- [kVTCompressionPropertyKey_MVHEVCLeftAndRightViewIDs](kvtcompressionpropertykey_mvhevcleftandrightviewids.md): Specifies which view identifier corresponds to the left eye and right eye.
- [kVTCompressionPropertyKey_MVHEVCVideoLayerIDs](kvtcompressionpropertykey_mvhevcvideolayerids.md): The identifiers of the video layers to encode in a multiview encoding operation.
- [kVTCompressionPropertyKey_MVHEVCViewIDs](kvtcompressionpropertykey_mvhevcviewids.md): The identifiers of the views corresponding to the video layers in a multiview encoding operation.

### Parallelization

- [kVTCompressionPropertyKey_RecommendedParallelizationLimit](kvtcompressionpropertykey_recommendedparallelizationlimit.md): The recommended number of compression sessions to instantiate in a parallel encoding configuration.
- [kVTCompressionPropertyKey_RecommendedParallelizedSubdivisionMinimumDuration](kvtcompressionpropertykey_recommendedparallelizedsubdivisionminimumduration.md): The recommended minimum duration for a given subdivision in a parallel encoding configuration.
- [kVTCompressionPropertyKey_RecommendedParallelizedSubdivisionMinimumFrameCount](kvtcompressionpropertykey_recommendedparallelizedsubdivisionminimumframecount.md): The recommended minimum number of video frames for a given subdivision in a parallel encoding configuration.

### Per-Frame Configuration

- [kVTEncodeFrameOptionKey_BaseFrameQP](kvtencodeframeoptionkey_baseframeqp.md)
- [kVTEncodeFrameOptionKey_ForceKeyFrame](kvtencodeframeoptionkey_forcekeyframe.md): Boolean value indicating whether the current frame is forced to be a key frame.

### Precompression Processing

- [kVTCompressionPropertyKey_PixelTransferProperties](kvtcompressionpropertykey_pixeltransferproperties.md): Properties for configuring a pixel transfer session.

### Quality Metrics

- [kVTCompressionPropertyKey_CalculateMeanSquaredError](kvtcompressionpropertykey_calculatemeansquarederror.md)
- [kVTSampleAttachmentKey_QualityMetrics](kvtsampleattachmentkey_qualitymetrics.md)
- [kVTSampleAttachmentQualityMetricsKey_ChromaBlueMeanSquaredError](kvtsampleattachmentqualitymetricskey_chromabluemeansquarederror.md)
- [kVTSampleAttachmentQualityMetricsKey_ChromaRedMeanSquaredError](kvtsampleattachmentqualitymetricskey_chromaredmeansquarederror.md)
- [kVTSampleAttachmentQualityMetricsKey_LumaMeanSquaredError](kvtsampleattachmentqualitymetricskey_lumameansquarederror.md)

### Quantization

- [kVTCompressionPropertyKey_MaxAllowedFrameQP](kvtcompressionpropertykey_maxallowedframeqp.md): The maximum allowed encoded frame QP (Quantization Parameter).
- [kVTCompressionPropertyKey_MinAllowedFrameQP](kvtcompressionpropertykey_minallowedframeqp.md): The minimum allowed encoded frame QP (Quantization Parameter).
- [kVTCompressionPropertyKey_SpatialAdaptiveQPLevel](kvtcompressionpropertykey_spatialadaptiveqplevel.md): A value that controls spatial adaptation of the quantization parameter (QP) based on per-frame statistics.
- [kVTCompressionPropertyKey_SupportsBaseFrameQP](kvtcompressionpropertykey_supportsbaseframeqp.md): A value that indicates whether the encoder supports base frame QP requests.

### Rate Control

- [kVTCompressionPropertyKey_AverageBitRate](kvtcompressionpropertykey_averagebitrate.md): The long-term desired average bit rate in bits per second.
- [kVTCompressionPropertyKey_ConstantBitRate](kvtcompressionpropertykey_constantbitrate.md): Requires that the encoder use a Constant Bit Rate algorithm.
- [kVTCompressionPropertyKey_DataRateLimits](kvtcompressionpropertykey_dataratelimits.md): Zero, one, or two hard limits on data rate.
- [kVTCompressionPropertyKey_EstimatedAverageBytesPerFrame](kvtcompressionpropertykey_estimatedaveragebytesperframe.md): An estimate of the expected size in bytes of a single encoded frame based on the current configuration.
- [kVTCompressionPropertyKey_MoreFramesAfterEnd](kvtcompressionpropertykey_moreframesafterend.md): A Boolean value indicating whether and how a compression session concatenates frames with other compressed frames to form a longer series.
- [kVTCompressionPropertyKey_MoreFramesBeforeStart](kvtcompressionpropertykey_moreframesbeforestart.md): A Boolean value that indicates whether and how a compression session concatenates frames with other compressed frames to form a longer series.
- [kVTCompressionPropertyKey_Quality](kvtcompressionpropertykey_quality.md): The desired compression quality.
- [kVTCompressionPropertyKey_TargetQualityForAlpha](kvtcompressionpropertykey_targetqualityforalpha.md): The target quality to use for encoding the alpha channel.
- [kVTCompressionPropertyKey_VariableBitRate](kvtcompressionpropertykey_variablebitrate.md)
- [kVTCompressionPropertyKey_VBVBufferDuration](kvtcompressionpropertykey_vbvbufferduration.md)
- [kVTCompressionPropertyKey_VBVInitialDelayPercentage](kvtcompressionpropertykey_vbvinitialdelaypercentage.md)
- [kVTCompressionPropertyKey_VBVMaxBitRate](kvtcompressionpropertykey_vbvmaxbitrate.md)

### Runtime Restrictions

- [kVTCompressionPropertyKey_MaxFrameDelayCount](kvtcompressionpropertykey_maxframedelaycount.md): The maximum number of frames that a compressor is allowed to hold before it must output a compressed frame.
- [kVTCompressionPropertyKey_MaxH264SliceBytes](kvtcompressionpropertykey_maxh264slicebytes.md): The maximum slice size for H.264 encoding.
- [kVTCompressionPropertyKey_MaximizePowerEfficiency](kvtcompressionpropertykey_maximizepowerefficiency.md)
- [kVTCompressionPropertyKey_RealTime](kvtcompressionpropertykey_realtime.md): A Boolean value indicating whether it’s recommended that the video encoder perform compression in real time.

### Temporal Scalability

- [kVTCompressionPropertyKey_BaseLayerBitRateFraction](kvtcompressionpropertykey_baselayerbitratefraction.md)
- [kVTCompressionPropertyKey_BaseLayerFrameRate](kvtcompressionpropertykey_baselayerframerate.md)
- [kVTCompressionPropertyKey_BaseLayerFrameRateFraction](kvtcompressionpropertykey_baselayerframeratefraction.md)

### Video Extended Usage (VEXU) Signaling

- [kVTCompressionPropertyKey_HasLeftStereoEyeView](kvtcompressionpropertykey_hasleftstereoeyeview.md)
- [kVTCompressionPropertyKey_HasRightStereoEyeView](kvtcompressionpropertykey_hasrightstereoeyeview.md)
- [kVTCompressionPropertyKey_HeroEye](kvtcompressionpropertykey_heroeye.md): A value that indicates which eye is the primary eye when rendering in 2D.
- [kVTCompressionPropertyKey_HorizontalDisparityAdjustment](kvtcompressionpropertykey_horizontaldisparityadjustment.md): A value that indicates a relative shift of the left and right images, which changes the zero parallax plane.
- [kVTCompressionPropertyKey_HorizontalFieldOfView](kvtcompressionpropertykey_horizontalfieldofview.md)
- [kVTCompressionPropertyKey_ProjectionKind](kvtcompressionpropertykey_projectionkind.md): A value that indicates the projection kind.
- [kVTCompressionPropertyKey_StereoCameraBaseline](kvtcompressionpropertykey_stereocamerabaseline.md): A value that specifies the distance between centers of the lenses of the camera system.
- [kVTCompressionPropertyKey_ViewPackingKind](kvtcompressionpropertykey_viewpackingkind.md): A value that indicates the view packing kind.
