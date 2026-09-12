> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/color-transforms](https://developer.apple.com/documentation/colorsync/color-transforms)

# Color transforms (Swift)

**Framework:** ColorSync  
**Kind:** API Collection

Convert color from one profile’s color space to another.

<a id="Overview"></a>

## Overview

A [ColorSyncTransform](colorsynctransform.md) precomputes the conversion between a sequence of profiles. Color conversion requires significant computation, so the way you apply a transform affects performance. To convert pixels directly, call [ColorSyncTransformConvert(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](colorsynctransformconvert%28________________________%29.md). For production code or large buffers, get better performance by extracting a ColorSync *code fragment* with [ColorSyncCreateCodeFragment(\_:\_:)](colorsynccreatecodefragment%28____%29.md) and running it through [vImage](../accelerate/vimage.md). Describe the layout of your pixel buffers with the pixel-format constants in [Pixel format and data layout](pixel-format.md).

## Topics

### Representing transforms

- [ColorSyncTransform](colorsynctransform.md): A reference to a color transform that converts color data between profiles.

### Creating and applying a transform

- [ColorSyncTransformCreate(\_:\_:)](colorsynctransformcreate%28____%29.md): Creates a color transform from a sequence of profiles.
- [ColorSyncTransformConvert(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](colorsynctransformconvert%28________________________%29.md): Converts color data from a source layout to a destination layout using a color transform.
- [ColorSyncTransformGetProfileSequence(\_:)](colorsynctransformgetprofilesequence%28__%29.md): Returns the profile sequence used to create a color transform.
- [ColorSyncTransformCopyProperty(\_:\_:\_:)](colorsynctransformcopyproperty%28______%29.md): Copies a property from a color transform.
- [ColorSyncTransformSetProperty(\_:\_:\_:)](colorsynctransformsetproperty%28______%29.md): Sets a property on a color transform.
- [ColorSyncTransformGetTypeID()](colorsynctransformgettypeid%28%29.md): Returns the type identifier for the `ColorSyncTransform` opaque type.

### Choosing rendering intents

- [kColorSyncRenderingIntent](kcolorsyncrenderingintent.md): A key for the rendering intent to use for the profile in a profile-sequence dictionary.
- [kColorSyncRenderingIntentPerceptual](kcolorsyncrenderingintentperceptual.md): A [kColorSyncRenderingIntent](kcolorsyncrenderingintent.md) value selecting the perceptual rendering intent.
- [kColorSyncRenderingIntentRelative](kcolorsyncrenderingintentrelative.md): A [kColorSyncRenderingIntent](kcolorsyncrenderingintent.md) value selecting the media-relative colorimetric rendering intent.
- [kColorSyncRenderingIntentSaturation](kcolorsyncrenderingintentsaturation.md): A [kColorSyncRenderingIntent](kcolorsyncrenderingintent.md) value selecting the saturation rendering intent.
- [kColorSyncRenderingIntentAbsolute](kcolorsyncrenderingintentabsolute.md): A [kColorSyncRenderingIntent](kcolorsyncrenderingintent.md) value selecting the ICC-absolute colorimetric rendering intent.
- [kColorSyncRenderingIntentUseProfileHeader](kcolorsyncrenderingintentuseprofileheader.md): A [kColorSyncRenderingIntent](kcolorsyncrenderingintent.md) value selecting the rendering intent stored in the profile header.

### Proofing and gamut checking

- [ColorSyncProfileCreateLink(\_:\_:)](colorsyncprofilecreatelink%28____%29.md): Creates a device link profile from an array of profiles.
- [kColorSyncTransformDeviceToDevice](kcolorsynctransformdevicetodevice.md): A [kColorSyncTransformTag](kcolorsynctransformtag.md) value selecting the device-to-device conversion direction.
- [kColorSyncTransformGamutCheck](kcolorsynctransformgamutcheck.md): A [kColorSyncTransformTag](kcolorsynctransformtag.md) value that checks whether colors fall outside the destination gamut.

### Accessing transform properties

- [kColorSyncProfile](kcolorsyncprofile.md): A key for the profile object in a profile-sequence dictionary passed to [ColorSyncTransformCreate(\_:\_:)](colorsynctransformcreate%28____%29.md).
- [kColorSyncTransformCreator](kcolorsynctransformcreator.md): A key for the name of the CMM that created the transform.
- [kColorSyncTransformDeviceToPCS](kcolorsynctransformdevicetopcs.md): A [kColorSyncTransformTag](kcolorsynctransformtag.md) value selecting the device-to-PCS conversion direction.
- [kColorSyncTransformDstSpace](kcolorsynctransformdstspace.md): A key for the transform’s destination color space.
- [kColorSyncTransformInfo](kcolorsynctransforminfo.md): A key for a dictionary of information about the transform.
- [kColorSyncTransformPCSToDevice](kcolorsynctransformpcstodevice.md): A [kColorSyncTransformTag](kcolorsynctransformtag.md) value selecting the PCS-to-device conversion direction.
- [kColorSyncTransformPCSToPCS](kcolorsynctransformpcstopcs.md): A [kColorSyncTransformTag](kcolorsynctransformtag.md) value selecting the PCS-to-PCS conversion direction.
- [kColorSyncTransformProfileSequnce](kcolorsynctransformprofilesequnce.md): A key for the profile sequence used to create the transform.
- [kColorSyncTransformSrcSpace](kcolorsynctransformsrcspace.md): A key for the transform’s source color space.
- [kColorSyncTransformTag](kcolorsynctransformtag.md): A key for the tag identifying which tags of the profile to use in a profile-sequence dictionary.

### Extracting a conversion for vImage

- [ColorSyncCreateCodeFragment(\_:\_:)](colorsynccreatecodefragment%28____%29.md): Creates a code fragment from a sequence of profiles.
- [kColorSyncTransformCodeFragmentType](kcolorsynctransformcodefragmenttype.md): A key for the type of code fragment to create, or that the framework created.
- [kColorSyncTransformCodeFragmentMD5](kcolorsynctransformcodefragmentmd5.md): A key for the MD5 checksum of the code fragment.

### Reading conversion data sets

- [kColorSyncTransformFullConversionData](kcolorsynctransformfullconversiondata.md): A key for the full-conversion code fragment, containing all non-`NULL` components from the profile sequence.
- [kColorSyncTransformParametricConversionData](kcolorsynctransformparametricconversiondata.md): A key for the parametric code fragment, consisting only of parametric curves, matrices, and BPC components.
- [kColorSyncTransformSimplifiedConversionData](kcolorsynctransformsimplifiedconversiondata.md): A key for the simplified code fragment, collapsing the full conversion into one multi-dimensional table.
- [kColorSyncConversionBPC](kcolorsyncconversionbpc.md): A key for a black point compensation component, represented as a `CFArray` of `Float32` `CFNumber`s.
- [kColorSyncFixedPointRange](kcolorsyncfixedpointrange.md): A key for the fixed-point range of the conversion data.

### Reading curves and matrices

- [kColorSyncConversionParamCurve0](kcolorsyncconversionparamcurve0.md): A key for a parametric tone rendering curve of type 0, represented as a `CFArray` of seven `Float32` `CFNumber`s.
- [kColorSyncConversionParamCurve1](kcolorsyncconversionparamcurve1.md): A key for a parametric tone rendering curve of type 1, represented as a `CFArray` of seven `Float32` `CFNumber`s.
- [kColorSyncConversionParamCurve2](kcolorsyncconversionparamcurve2.md): A key for a parametric tone rendering curve of type 2, represented as a `CFArray` of seven `Float32` `CFNumber`s.
- [kColorSyncConversionParamCurve3](kcolorsyncconversionparamcurve3.md): A key for a parametric tone rendering curve of type 3, represented as a `CFArray` of seven `Float32` `CFNumber`s.
- [kColorSyncConversionParamCurve4](kcolorsyncconversionparamcurve4.md): A key for a parametric tone rendering curve of type 4, represented as a `CFArray` of seven `Float32` `CFNumber`s.
- [kColorSyncConversionMatrix](kcolorsyncconversionmatrix.md): A key for a conversion matrix component, represented as a `CFArray` of three `CFArray`s of four `Float32` `CFNumber`s.

### Reading lookup tables

- [kColorSyncConversion1DLut](kcolorsyncconversion1dlut.md): A key for a one-dimensional lookup table with interpolation, represented as `CFData` containing a `Float32` table.
- [kColorSyncConversion3DLut](kcolorsyncconversion3dlut.md): A key for a three-dimensional lookup table with interpolation, represented as `CFData`.
- [kColorSyncConversionNDLut](kcolorsyncconversionndlut.md): A key for a multi-dimensional lookup table with interpolation, represented as `CFData` for N inputs and M outputs.
- [kColorSyncConversionGridPoints](kcolorsyncconversiongridpoints.md): A key for the number of grid points in a lookup table.
- [kColorSyncConversionChannelID](kcolorsyncconversionchannelid.md): A key for the identifier of the channel a conversion component applies to.
- [kColorSyncConversionInpChan](kcolorsyncconversioninpchan.md): A key for the number of input channels of a lookup table.
- [kColorSyncConversionOutChan](kcolorsyncconversionoutchan.md): A key for the number of output channels of a lookup table.

### Setting conversion quality

- [kColorSyncBestQuality](kcolorsyncbestquality.md): A [kColorSyncConvertQuality](kcolorsyncconvertquality.md) value that does not coalesce profile transforms; the default.
- [kColorSyncBlackPointCompensation](kcolorsyncblackpointcompensation.md): A key whose `CFBooleanRef` value enables or disables black point compensation.
- [kColorSyncConvertQuality](kcolorsyncconvertquality.md): A key for the quality of the conversion performed by the transform.
- [kColorSyncDraftQuality](kcolorsyncdraftquality.md): A [kColorSyncConvertQuality](kcolorsyncconvertquality.md) value that coalesces all transforms and does not interpolate.
- [kColorSyncNormalQuality](kcolorsyncnormalquality.md): A [kColorSyncConvertQuality](kcolorsyncconvertquality.md) value that coalesces all transforms.

### Handling HDR and extended range

- [kColorSyncExtendedRange](kcolorsyncextendedrange.md): A key whose `CFBooleanRef` value enables or disables extended range.
- [kColorSyncConvertUseExtendedRange](kcolorsyncconvertuseextendedrange.md): A key whose `CFBooleanRef` value allows float data to exceed the `[0.0, 1.0]` range.
- [kColorSyncTransformUseITU709OETF](kcolorsynctransformuseitu709oetf.md): A key whose `CFBooleanRef` value uses the ITU-R BT.709 opto-electronic transfer function.
- [kColorSyncHDRDerivative](kcolorsynchdrderivative.md): A key for the HDR derivative to apply to the profile in a profile-sequence dictionary.
- [kColorSyncPQDerivative](kcolorsyncpqderivative.md): A [kColorSyncHDRDerivative](kcolorsynchdrderivative.md) value selecting the PQ HDR derivative.
- [kColorSyncHLGDerivative](kcolorsynchlgderivative.md): A [kColorSyncHDRDerivative](kcolorsynchdrderivative.md) value selecting the HLG HDR derivative.

### Choosing a color management module

- [kColorSyncPreferredCMM](kcolorsyncpreferredcmm.md): A key whose value is the [ColorSyncCMM](colorsynccmm.md) of the preferred CMM.

## See Also

### Color conversion

- [Pixel format and data layout](pixel-format.md): Describe the memory layout of the pixel buffers a color transform reads and writes.

# Color transforms (Objective-C)

**Framework:** ColorSync  
**Kind:** API Collection

Convert color from one profile’s color space to another.

<a id="Overview"></a>

## Overview

A [ColorSyncTransformRef](colorsynctransform.md) precomputes the conversion between a sequence of profiles. Color conversion requires significant computation, so the way you apply a transform affects performance. To convert pixels directly, call [ColorSyncTransformConvert](colorsynctransformconvert%28________________________%29.md). For production code or large buffers, get better performance by extracting a ColorSync *code fragment* with [ColorSyncCreateCodeFragment](colorsynccreatecodefragment%28____%29.md) and running it through [vImage](../accelerate/vimage.md). Describe the layout of your pixel buffers with the pixel-format constants in [Pixel format and data layout](pixel-format.md).

## Topics

### Representing transforms

- [ColorSyncTransformRef](colorsynctransform.md): A reference to a color transform that converts color data between profiles.

### Creating and applying a transform

- [ColorSyncTransformCreate](colorsynctransformcreate%28____%29.md): Creates a color transform from a sequence of profiles.
- [ColorSyncTransformConvert](colorsynctransformconvert%28________________________%29.md): Converts color data from a source layout to a destination layout using a color transform.
- [ColorSyncTransformGetProfileSequence](colorsynctransformgetprofilesequence%28__%29.md): Returns the profile sequence used to create a color transform.
- [ColorSyncTransformCopyProperty](colorsynctransformcopyproperty%28______%29.md): Copies a property from a color transform.
- [ColorSyncTransformSetProperty](colorsynctransformsetproperty%28______%29.md): Sets a property on a color transform.
- [ColorSyncTransformGetTypeID](colorsynctransformgettypeid%28%29.md): Returns the type identifier for the `ColorSyncTransform` opaque type.

### Choosing rendering intents

- [kColorSyncRenderingIntent](kcolorsyncrenderingintent.md): A key for the rendering intent to use for the profile in a profile-sequence dictionary.
- [kColorSyncRenderingIntentPerceptual](kcolorsyncrenderingintentperceptual.md): A [kColorSyncRenderingIntent](kcolorsyncrenderingintent.md) value selecting the perceptual rendering intent.
- [kColorSyncRenderingIntentRelative](kcolorsyncrenderingintentrelative.md): A [kColorSyncRenderingIntent](kcolorsyncrenderingintent.md) value selecting the media-relative colorimetric rendering intent.
- [kColorSyncRenderingIntentSaturation](kcolorsyncrenderingintentsaturation.md): A [kColorSyncRenderingIntent](kcolorsyncrenderingintent.md) value selecting the saturation rendering intent.
- [kColorSyncRenderingIntentAbsolute](kcolorsyncrenderingintentabsolute.md): A [kColorSyncRenderingIntent](kcolorsyncrenderingintent.md) value selecting the ICC-absolute colorimetric rendering intent.
- [kColorSyncRenderingIntentUseProfileHeader](kcolorsyncrenderingintentuseprofileheader.md): A [kColorSyncRenderingIntent](kcolorsyncrenderingintent.md) value selecting the rendering intent stored in the profile header.

### Proofing and gamut checking

- [ColorSyncProfileCreateLink](colorsyncprofilecreatelink%28____%29.md): Creates a device link profile from an array of profiles.
- [kColorSyncTransformDeviceToDevice](kcolorsynctransformdevicetodevice.md): A [kColorSyncTransformTag](kcolorsynctransformtag.md) value selecting the device-to-device conversion direction.
- [kColorSyncTransformGamutCheck](kcolorsynctransformgamutcheck.md): A [kColorSyncTransformTag](kcolorsynctransformtag.md) value that checks whether colors fall outside the destination gamut.

### Accessing transform properties

- [kColorSyncProfile](kcolorsyncprofile.md): A key for the profile object in a profile-sequence dictionary passed to [ColorSyncTransformCreate](colorsynctransformcreate%28____%29.md).
- [kColorSyncTransformCreator](kcolorsynctransformcreator.md): A key for the name of the CMM that created the transform.
- [kColorSyncTransformDeviceToPCS](kcolorsynctransformdevicetopcs.md): A [kColorSyncTransformTag](kcolorsynctransformtag.md) value selecting the device-to-PCS conversion direction.
- [kColorSyncTransformDstSpace](kcolorsynctransformdstspace.md): A key for the transform’s destination color space.
- [kColorSyncTransformInfo](kcolorsynctransforminfo.md): A key for a dictionary of information about the transform.
- [kColorSyncTransformPCSToDevice](kcolorsynctransformpcstodevice.md): A [kColorSyncTransformTag](kcolorsynctransformtag.md) value selecting the PCS-to-device conversion direction.
- [kColorSyncTransformPCSToPCS](kcolorsynctransformpcstopcs.md): A [kColorSyncTransformTag](kcolorsynctransformtag.md) value selecting the PCS-to-PCS conversion direction.
- [kColorSyncTransformProfileSequnce](kcolorsynctransformprofilesequnce.md): A key for the profile sequence used to create the transform.
- [kColorSyncTransformSrcSpace](kcolorsynctransformsrcspace.md): A key for the transform’s source color space.
- [kColorSyncTransformTag](kcolorsynctransformtag.md): A key for the tag identifying which tags of the profile to use in a profile-sequence dictionary.

### Extracting a conversion for vImage

- [ColorSyncCreateCodeFragment](colorsynccreatecodefragment%28____%29.md): Creates a code fragment from a sequence of profiles.
- [kColorSyncTransformCodeFragmentType](kcolorsynctransformcodefragmenttype.md): A key for the type of code fragment to create, or that the framework created.
- [kColorSyncTransformCodeFragmentMD5](kcolorsynctransformcodefragmentmd5.md): A key for the MD5 checksum of the code fragment.

### Reading conversion data sets

- [kColorSyncTransformFullConversionData](kcolorsynctransformfullconversiondata.md): A key for the full-conversion code fragment, containing all non-`NULL` components from the profile sequence.
- [kColorSyncTransformParametricConversionData](kcolorsynctransformparametricconversiondata.md): A key for the parametric code fragment, consisting only of parametric curves, matrices, and BPC components.
- [kColorSyncTransformSimplifiedConversionData](kcolorsynctransformsimplifiedconversiondata.md): A key for the simplified code fragment, collapsing the full conversion into one multi-dimensional table.
- [kColorSyncConversionBPC](kcolorsyncconversionbpc.md): A key for a black point compensation component, represented as a `CFArray` of `Float32` `CFNumber`s.
- [kColorSyncFixedPointRange](kcolorsyncfixedpointrange.md): A key for the fixed-point range of the conversion data.

### Reading curves and matrices

- [kColorSyncConversionParamCurve0](kcolorsyncconversionparamcurve0.md): A key for a parametric tone rendering curve of type 0, represented as a `CFArray` of seven `Float32` `CFNumber`s.
- [kColorSyncConversionParamCurve1](kcolorsyncconversionparamcurve1.md): A key for a parametric tone rendering curve of type 1, represented as a `CFArray` of seven `Float32` `CFNumber`s.
- [kColorSyncConversionParamCurve2](kcolorsyncconversionparamcurve2.md): A key for a parametric tone rendering curve of type 2, represented as a `CFArray` of seven `Float32` `CFNumber`s.
- [kColorSyncConversionParamCurve3](kcolorsyncconversionparamcurve3.md): A key for a parametric tone rendering curve of type 3, represented as a `CFArray` of seven `Float32` `CFNumber`s.
- [kColorSyncConversionParamCurve4](kcolorsyncconversionparamcurve4.md): A key for a parametric tone rendering curve of type 4, represented as a `CFArray` of seven `Float32` `CFNumber`s.
- [kColorSyncConversionMatrix](kcolorsyncconversionmatrix.md): A key for a conversion matrix component, represented as a `CFArray` of three `CFArray`s of four `Float32` `CFNumber`s.

### Reading lookup tables

- [kColorSyncConversion1DLut](kcolorsyncconversion1dlut.md): A key for a one-dimensional lookup table with interpolation, represented as `CFData` containing a `Float32` table.
- [kColorSyncConversion3DLut](kcolorsyncconversion3dlut.md): A key for a three-dimensional lookup table with interpolation, represented as `CFData`.
- [kColorSyncConversionNDLut](kcolorsyncconversionndlut.md): A key for a multi-dimensional lookup table with interpolation, represented as `CFData` for N inputs and M outputs.
- [kColorSyncConversionGridPoints](kcolorsyncconversiongridpoints.md): A key for the number of grid points in a lookup table.
- [kColorSyncConversionChannelID](kcolorsyncconversionchannelid.md): A key for the identifier of the channel a conversion component applies to.
- [kColorSyncConversionInpChan](kcolorsyncconversioninpchan.md): A key for the number of input channels of a lookup table.
- [kColorSyncConversionOutChan](kcolorsyncconversionoutchan.md): A key for the number of output channels of a lookup table.

### Setting conversion quality

- [kColorSyncBestQuality](kcolorsyncbestquality.md): A [kColorSyncConvertQuality](kcolorsyncconvertquality.md) value that does not coalesce profile transforms; the default.
- [kColorSyncBlackPointCompensation](kcolorsyncblackpointcompensation.md): A key whose `CFBooleanRef` value enables or disables black point compensation.
- [kColorSyncConvertQuality](kcolorsyncconvertquality.md): A key for the quality of the conversion performed by the transform.
- [kColorSyncDraftQuality](kcolorsyncdraftquality.md): A [kColorSyncConvertQuality](kcolorsyncconvertquality.md) value that coalesces all transforms and does not interpolate.
- [kColorSyncNormalQuality](kcolorsyncnormalquality.md): A [kColorSyncConvertQuality](kcolorsyncconvertquality.md) value that coalesces all transforms.

### Handling HDR and extended range

- [kColorSyncExtendedRange](kcolorsyncextendedrange.md): A key whose `CFBooleanRef` value enables or disables extended range.
- [kColorSyncConvertUseExtendedRange](kcolorsyncconvertuseextendedrange.md): A key whose `CFBooleanRef` value allows float data to exceed the `[0.0, 1.0]` range.
- [kColorSyncTransformUseITU709OETF](kcolorsynctransformuseitu709oetf.md): A key whose `CFBooleanRef` value uses the ITU-R BT.709 opto-electronic transfer function.
- [kColorSyncHDRDerivative](kcolorsynchdrderivative.md): A key for the HDR derivative to apply to the profile in a profile-sequence dictionary.
- [kColorSyncPQDerivative](kcolorsyncpqderivative.md): A [kColorSyncHDRDerivative](kcolorsynchdrderivative.md) value selecting the PQ HDR derivative.
- [kColorSyncHLGDerivative](kcolorsynchlgderivative.md): A [kColorSyncHDRDerivative](kcolorsynchdrderivative.md) value selecting the HLG HDR derivative.

### Choosing a color management module

- [kColorSyncPreferredCMM](kcolorsyncpreferredcmm.md): A key whose value is the [ColorSyncCMMRef](colorsynccmm.md) of the preferred CMM.

### Iterating asynchronously

- [COLORSYNC_ITERATE_ASYNC](colorsync_iterate_async.md)

## See Also

### Color conversion

- [Pixel format and data layout](pixel-format.md): Describe the memory layout of the pixel buffers a color transform reads and writes.
