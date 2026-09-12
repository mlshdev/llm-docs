> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/dng-image-properties](https://developer.apple.com/documentation/imageio/dng-image-properties)

# DNG Image Properties

**Interface languages:** Swift, Objective-C

**Framework:** Image I/O  
**Kind:** API Collection

Metadata keys for the Digital Negative (DNG) archival format.

<a id="overview"></a>

## Overview

For more information about the DNG format, see *Digital Negative (DNG) Specification* at [www.adobe.com](https://www.adobe.com).

## Topics

### Dictionary

- [kCGImagePropertyDNGDictionary](kcgimagepropertydngdictionary.md): A dictionary of key-value pairs for an image that uses the Digital Negative (DNG) archival format.

### Quality

- [kCGImagePropertyDNGBaselineSharpness](kcgimagepropertydngbaselinesharpness.md): The amount of sharpening required for this camera model.
- [kCGImagePropertyDNGLinearResponseLimit](kcgimagepropertydnglinearresponselimit.md): The fraction of the encoding range, above which the response may become significantly non-linear.
- [kCGImagePropertyDNGChromaBlurRadius](kcgimagepropertydngchromablurradius.md): A hint to the DNG reader about how much chroma blur to apply to the image.
- [kCGImagePropertyDNGAntiAliasStrength](kcgimagepropertydngantialiasstrength.md): A hint to the DNG reader about how strong the camera’s antialias filter is.
- [kCGImagePropertyDNGShadowScale](kcgimagepropertydngshadowscale.md): A tag that Adobe Camera Raw uses to control the sensitivity of its Shadows slider.
- [kCGImagePropertyDNGBestQualityScale](kcgimagepropertydngbestqualityscale.md): The scale factor to apply to the default scale to achieve the best quality image size.
- [kCGImagePropertyDNGDefaultScale](kcgimagepropertydngdefaultscale.md): The default scale factors for each direction to convert the image to square pixels.
- [kCGImagePropertyDNGLinearizationTable](kcgimagepropertydnglinearizationtable.md): A lookup table that maps stored values into linear values.

### Exposure

- [kCGImagePropertyDNGBaselineExposure](kcgimagepropertydngbaselineexposure.md): The amount by which to adjust the zero point of the exposure, specified in EV units.
- [kCGImagePropertyDNGBaselineNoise](kcgimagepropertydngbaselinenoise.md): The relative noise level of the camera model at an ISO of 100.
- [kCGImagePropertyDNGBaselineExposureOffset](kcgimagepropertydngbaselineexposureoffset.md): The amount of EV units to add to the baseline exposure during image rendering.

### Color Balance

- [kCGImagePropertyDNGAnalogBalance](kcgimagepropertydnganalogbalance.md): The analog or digital gain that applies to the stored raw values.
- [kCGImagePropertyDNGAsShotNeutral](kcgimagepropertydngasshotneutral.md): The selected white balance at the time of capture, encoded as the coordinates of a neutral color in linear reference space values.
- [kCGImagePropertyDNGAsShotWhiteXY](kcgimagepropertydngasshotwhitexy.md): The selected white balance at the time of capture, encoded as x-y chromaticity coordinates.
- [kCGImagePropertyDNGBayerGreenSplit](kcgimagepropertydngbayergreensplit.md): A value that specifies how closely green pixels in the blue/green rows track the green pixels in red/green rows.
- [kCGImagePropertyDNGForwardMatrix1](kcgimagepropertydngforwardmatrix1.md): A matrix that maps white balanced camera colors to XYZ D50 colors.
- [kCGImagePropertyDNGForwardMatrix2](kcgimagepropertydngforwardmatrix2.md): A matrix that maps white balanced camera colors to XYZ D50 colors.
- [kCGImagePropertyDNGDefaultBlackRender](kcgimagepropertydngdefaultblackrender.md): A hint to the raw converter about how to handle the black point during rendering.

### Color Calibration

- [kCGImagePropertyDNGBlackLevelRepeatDim](kcgimagepropertydngblacklevelrepeatdim.md): The repeat pattern size for the black level tag.
- [kCGImagePropertyDNGBlackLevel](kcgimagepropertydngblacklevel.md): The zero light encoding level, specified as a repeating pattern.
- [kCGImagePropertyDNGBlackLevelDeltaH](kcgimagepropertydngblackleveldeltah.md): The difference between the zero-light encoding level for each column and the baseline zero-light encoding level.
- [kCGImagePropertyDNGBlackLevelDeltaV](kcgimagepropertydngblackleveldeltav.md): The difference between the zero-light encodoing level for each row and the baseline zero-light encoding level.
- [kCGImagePropertyDNGWhiteLevel](kcgimagepropertydngwhitelevel.md): The saturated encoding level for the raw sample values.
- [kCGImagePropertyDNGCalibrationIlluminant1](kcgimagepropertydngcalibrationilluminant1.md): The illuminant for the first set of color calibration tags.
- [kCGImagePropertyDNGCalibrationIlluminant2](kcgimagepropertydngcalibrationilluminant2.md): The illuminant for an optional second set of color calibration tags.
- [kCGImagePropertyDNGColorMatrix1](kcgimagepropertydngcolormatrix1.md): A transformation matrix that converts XYZ values to reference camera native color spaces, under the first calibration illuminant.
- [kCGImagePropertyDNGColorMatrix2](kcgimagepropertydngcolormatrix2.md): A transformation matrix that converts XYZ values to reference camera native color spaces, under the second calibration illuminant.
- [kCGImagePropertyDNGCameraCalibration1](kcgimagepropertydngcameracalibration1.md): A matrix that transforms reference camera native space values to camera-native space values under the first calibration illuminant.
- [kCGImagePropertyDNGCameraCalibration2](kcgimagepropertydngcameracalibration2.md): A matrix that transforms reference camera native space values to camera-native space values under the second calibration illuminant.
- [kCGImagePropertyDNGReductionMatrix1](kcgimagepropertydngreductionmatrix1.md): A reduction matrix that converts color camera-native space values to XYZ values, under the first calibration illuminant.
- [kCGImagePropertyDNGReductionMatrix2](kcgimagepropertydngreductionmatrix2.md): A reduction matrix that converts color camera-native space values to XYZ values, under the second calibration illuminant.
- [kCGImagePropertyDNGAsShotICCProfile](kcgimagepropertydngasshoticcprofile.md): A profile that specifies default color rendering from camera color-space coordinates into the ICC profile space.
- [kCGImagePropertyDNGAsShotPreProfileMatrix](kcgimagepropertydngasshotpreprofilematrix.md): A matrix to apply to the camera color-space coordinates before processing values through the ICC profile.
- [kCGImagePropertyDNGCurrentICCProfile](kcgimagepropertydngcurrenticcprofile.md): A profile that specifies default color rendering from camera color-space coordinates into the ICC profile space.
- [kCGImagePropertyDNGCurrentPreProfileMatrix](kcgimagepropertydngcurrentpreprofilematrix.md): A matrix to apply to the current camera color-space coordinates before processing values through the ICC profile.
- [kCGImagePropertyDNGColorimetricReference](kcgimagepropertydngcolorimetricreference.md): The colorimetric reference for the CIE XYZ values.
- [kCGImagePropertyDNGCameraCalibrationSignature](kcgimagepropertydngcameracalibrationsignature.md): A string to match against the profile calibration signature for the selected camera profile.
- [kCGImagePropertyDNGProfileCalibrationSignature](kcgimagepropertydngprofilecalibrationsignature.md): A string that describes the calibration for the current profile.

### Crop Data

- [kCGImagePropertyDNGActiveArea](kcgimagepropertydngactivearea.md): The rectangle that defines the non-masked pixels of the sensor.
- [kCGImagePropertyDNGMaskedAreas](kcgimagepropertydngmaskedareas.md): A list of non-overlapping rectangles that contain fully masked pixels in the image.
- [kCGImagePropertyDNGDefaultCropOrigin](kcgimagepropertydngdefaultcroporigin.md): The origin of the final image area, relative to the top-left corner of the active area rectangle.
- [kCGImagePropertyDNGDefaultCropSize](kcgimagepropertydngdefaultcropsize.md): The size of the final image area, in raw image coordinates.
- [kCGImagePropertyDNGDefaultUserCrop](kcgimagepropertydngdefaultusercrop.md): A default user-crop rectangle in relative coordinates.

### RAW Data

- [kCGImagePropertyDNGOriginalRawFileName](kcgimagepropertydngoriginalrawfilename.md): The file name of the original raw file.
- [kCGImagePropertyDNGOriginalRawFileData](kcgimagepropertydngoriginalrawfiledata.md): The compressed contents of the original raw file.
- [kCGImagePropertyDNGNoiseReductionApplied](kcgimagepropertydngnoisereductionapplied.md): The amount of noise reduction applied to the raw data on a scale of 0.0 to 1.0.
- [kCGImagePropertyDNGNewRawImageDigest](kcgimagepropertydngnewrawimagedigest.md): An MD5 digest of the raw image data.
- [kCGImagePropertyDNGOriginalRawFileDigest](kcgimagepropertydngoriginalrawfiledigest.md): An MD5 digest of the data stored for the original raw file data.
- [kCGImagePropertyDNGRawImageDigest](kcgimagepropertydngrawimagedigest.md): A modified MD5 digest of the raw image data.
- [kCGImagePropertyDNGOriginalDefaultFinalSize](kcgimagepropertydngoriginaldefaultfinalsize.md): THe default final size of the larger original file that was the source of this proxy.
- [kCGImagePropertyDNGOriginalBestQualityFinalSize](kcgimagepropertydngoriginalbestqualityfinalsize.md): The best-quality final size of the larger original file that was the source of this proxy.
- [kCGImagePropertyDNGOriginalDefaultCropSize](kcgimagepropertydngoriginaldefaultcropsize.md): The default crop size of the larger original file that was the source of this proxy.
- [kCGImagePropertyDNGRawToPreviewGain](kcgimagepropertydngrawtopreviewgain.md): The gain between the main raw IFD and the preview IFD that contains this tag.
- [kCGImagePropertyDNGNoiseProfile](kcgimagepropertydngnoiseprofile.md): The amount of noise in the raw image.
- [kCGImagePropertyDNGCFALayout](kcgimagepropertydngcfalayout.md): The spatial layout of the CFA.
- [kCGImagePropertyDNGCFAPlaneColor](kcgimagepropertydngcfaplanecolor.md): A mapping between the values in the CFA pattern tag and the plane numbers in linear raw space.
- [kCGImagePropertyDNGOpcodeList1](kcgimagepropertydngopcodelist1.md): The list of opcodes to apply to the raw image, as read directly from the file.
- [kCGImagePropertyDNGOpcodeList2](kcgimagepropertydngopcodelist2.md): THe list of opcodes to apply to the raw image, after mapping it to linear reference values.
- [kCGImagePropertyDNGOpcodeList3](kcgimagepropertydngopcodelist3.md): The list of opcodes to apply to the raw image, after demosaicing it.
- [kCGImagePropertyDNGWarpRectilinear](kcgimagepropertydngwarprectilinear.md): An opcode to apply a warp to an image to correct for geometric distortion and lateral chromatic aberration for rectilinear lenses.
- [kCGImagePropertyDNGWarpFisheye](kcgimagepropertydngwarpfisheye.md): An opcode to unwrap an image captued with a fisheye lens and map it to a perspective projection.
- [kCGImagePropertyDNGFixVignetteRadial](kcgimagepropertydngfixvignetteradial.md): An opcode to apply a gain function to an image to correct vignetting.

### Image File Data

- [kCGImagePropertyDNGPrivateData](kcgimagepropertydngprivatedata.md): Private data that manufacturers may store with an image and use in their own converters.
- [kCGImagePropertyDNGMakerNoteSafety](kcgimagepropertydngmakernotesafety.md): A Boolean value that tells the DNG reader whether the EXIF MakerNote tag is safe to preserve.
- [kCGImagePropertyDNGRawDataUniqueID](kcgimagepropertydngrawdatauniqueid.md): A 16-byte unique identifier for the raw image data.
- [kCGImagePropertyDNGSubTileBlockSize](kcgimagepropertydngsubtileblocksize.md): The size of rectangular blocks that tiles use to group pixels.
- [kCGImagePropertyDNGRowInterleaveFactor](kcgimagepropertydngrowinterleavefactor.md): The number of interleaved fields for the rows of the image.
- [kCGImagePropertyDNGBackwardVersion](kcgimagepropertydngbackwardversion.md): The oldest version for which a file is compatible.
- [kCGImagePropertyDNGVersion](kcgimagepropertydngversion.md): An encoding of the four-tier version number.

### Profile Data

- [kCGImagePropertyDNGExtraCameraProfiles](kcgimagepropertydngextracameraprofiles.md): A list of file offsets to extra camera profiles.
- [kCGImagePropertyDNGAsShotProfileName](kcgimagepropertydngasshotprofilename.md): A string containing the name of the “as shot” camera profile, if any.
- [kCGImagePropertyDNGProfileHueSatMapDims](kcgimagepropertydngprofilehuesatmapdims.md): The number of input samples in each dimension of the hue/saturation/value mapping tables.
- [kCGImagePropertyDNGProfileHueSatMapData1](kcgimagepropertydngprofilehuesatmapdata1.md): The data for the first hue/saturation/value mapping table.
- [kCGImagePropertyDNGProfileHueSatMapData2](kcgimagepropertydngprofilehuesatmapdata2.md): The data for the second hue/saturation/value mapping table.
- [kCGImagePropertyDNGProfileHueSatMapEncoding](kcgimagepropertydngprofilehuesatmapencoding.md): The encoding option to use when indexing into a 3D look table during raw conversion.
- [kCGImagePropertyDNGProfileToneCurve](kcgimagepropertydngprofiletonecurve.md): The default tone curve to apply when processing the image as a starting point for user adjustments.
- [kCGImagePropertyDNGProfileName](kcgimagepropertydngprofilename.md): A string containing the name of the camera profile.
- [kCGImagePropertyDNGProfileEmbedPolicy](kcgimagepropertydngprofileembedpolicy.md): The usage rules for the camera profile.
- [kCGImagePropertyDNGProfileCopyright](kcgimagepropertydngprofilecopyright.md): The copyright information for the camera profile.
- [kCGImagePropertyDNGProfileLookTableDims](kcgimagepropertydngprofilelooktabledims.md): The number of input samples in each dimentsion of a default “look” table.
- [kCGImagePropertyDNGProfileLookTableData](kcgimagepropertydngprofilelooktabledata.md): The default “look” table to apply when processing the image as a starting point for user adjustment.
- [kCGImagePropertyDNGProfileLookTableEncoding](kcgimagepropertydngprofilelooktableencoding.md): The encoding option to use when indexing into a 3D look table during raw conversion.

### Preview

- [kCGImagePropertyDNGPreviewApplicationName](kcgimagepropertydngpreviewapplicationname.md): The name of the app that created the preview stored in the IFD.
- [kCGImagePropertyDNGPreviewApplicationVersion](kcgimagepropertydngpreviewapplicationversion.md): The version number of the app that created the preview stored in the IFD.
- [kCGImagePropertyDNGPreviewSettingsName](kcgimagepropertydngpreviewsettingsname.md): The name of the conversion settings for the preview.
- [kCGImagePropertyDNGPreviewSettingsDigest](kcgimagepropertydngpreviewsettingsdigest.md): A unique ID of the conversion settings used to render the preview.
- [kCGImagePropertyDNGPreviewColorSpace](kcgimagepropertydngpreviewcolorspace.md): The color space associated with the rendered preview.
- [kCGImagePropertyDNGPreviewDateTime](kcgimagepropertydngpreviewdatetime.md): The date and time for the render of the preview.

### Camera Details

- [kCGImagePropertyDNGLensInfo](kcgimagepropertydnglensinfo.md): Information about the lens used for the image.
- [kCGImagePropertyDNGUniqueCameraModel](kcgimagepropertydnguniquecameramodel.md): A unique, nonlocalized name for the camera model.
- [kCGImagePropertyDNGLocalizedCameraModel](kcgimagepropertydnglocalizedcameramodel.md): The localized camera model name.
- [kCGImagePropertyDNGCameraSerialNumber](kcgimagepropertydngcameraserialnumber.md): The camera serial number.

## See Also

### Format-Specific Properties

- [CIFF Image Properties](ciff-image-properties.md): Metadata keys for the Camera Image File Format (CIFF) image format.
- [GIF Image Properties](gif-image-properties.md): Metadata keys for the Graphics Interchange Format (GIF).
- [HEIC Image Properties](heic-image-properties.md): Metadata keys for the High Efficiency Image Container (HEIC) format.
- [JFIF Image Properties](jfif-image-properties.md): Metadata keys for the JPEG File Interchange Format (JFIF).
- [PNG Image Properties](png-image-properties.md): Metadata keys for the Portable Network Graphics (PNG) format.
- [TGA Image Properties](tga-image-properties.md): Metadata keys for the Truevision Graphics Adapter (TGA) format.
- [TIFF Image Properties](tiff-image-properties.md): Metadata keys for the Tagged Image File Format (TIFF).
- [8BIM Image Properties](8bim-image-properties.md): Metadata keys for the Adobe Photoshop image format.
