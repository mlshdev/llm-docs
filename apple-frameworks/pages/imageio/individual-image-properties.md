> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/individual-image-properties](https://developer.apple.com/documentation/imageio/individual-image-properties)

# Individual Image Properties (Swift)

**Framework:** Image I/O  
**Kind:** API Collection

Properties that apply to an individual image in an image source.

<a id="overview"></a>

## Overview

Access these properties using the [CGImageSourceCopyPropertiesAtIndex(\_:\_:\_:)](cgimagesourcecopypropertiesatindex%28______%29.md) or [CGImageSourceCopyAuxiliaryDataInfoAtIndex(\_:\_:\_:)](cgimagesourcecopyauxiliarydatainfoatindex%28______%29.md) function.

## Topics

### Image Size

- [kCGImagePropertyHeight](kcgimagepropertyheight.md): The height of the image, in the image’s coordinate space.
- [kCGImagePropertyWidth](kcgimagepropertywidth.md): The width of the image, in the image’s coordinate space.
- [kCGImagePropertyBytesPerRow](kcgimagepropertybytesperrow.md): The total number of bytes in each row of the image.

### Auxiliary Data Types

- [kCGImageAuxiliaryDataTypeDepth](kcgimageauxiliarydatatypedepth.md): The type for depth map information.
- [kCGImageAuxiliaryDataTypeDisparity](kcgimageauxiliarydatatypedisparity.md): The type for image disparity information.
- [kCGImageAuxiliaryDataTypeHDRGainMap](kcgimageauxiliarydatatypehdrgainmap.md): The type for High Dynamic Range (HDR) gain map information.
- [kCGImageAuxiliaryDataTypePortraitEffectsMatte](kcgimageauxiliarydatatypeportraiteffectsmatte.md): The type for portrait effects matte information.
- [kCGImageAuxiliaryDataTypeSemanticSegmentationGlassesMatte](kcgimageauxiliarydatatypesemanticsegmentationglassesmatte.md): The type for glasses matte informaton.
- [kCGImageAuxiliaryDataTypeSemanticSegmentationHairMatte](kcgimageauxiliarydatatypesemanticsegmentationhairmatte.md): The type for hair matte information.
- [kCGImageAuxiliaryDataTypeSemanticSegmentationSkinMatte](kcgimageauxiliarydatatypesemanticsegmentationskinmatte.md): The type for skin matte informaton.
- [kCGImageAuxiliaryDataTypeSemanticSegmentationSkyMatte](kcgimageauxiliarydatatypesemanticsegmentationskymatte.md): The type for sky matte information.
- [kCGImageAuxiliaryDataTypeSemanticSegmentationTeethMatte](kcgimageauxiliarydatatypesemanticsegmentationteethmatte.md): The type for teeth matte information.

### Auxiliary Image Data

- [kCGImagePropertyAuxiliaryData](kcgimagepropertyauxiliarydata.md): An array of dictionaries that contain auxiliary data for the images.
- [kCGImagePropertyAuxiliaryDataType](kcgimagepropertyauxiliarydatatype.md): The type of the auxiliary data.
- [kCGImageAuxiliaryDataInfoData](kcgimageauxiliarydatainfodata.md): The auxiliary data for the image.
- [kCGImageAuxiliaryDataInfoDataDescription](kcgimageauxiliarydatainfodatadescription.md): A dictionary of keys that describe the auxiliary data.
- [kCGImageAuxiliaryDataInfoMetadata](kcgimageauxiliarydatainfometadata.md): The metadata for any auxiliary data.

### Open EXR Properties

- [kCGImagePropertyOpenEXRDictionary](kcgimagepropertyopenexrdictionary.md): A dictionary of properties specific to the OpenEXR metadata standard.
- [kCGImagePropertyOpenEXRAspectRatio](kcgimagepropertyopenexraspectratio.md): The aspect ratio of the image.

## See Also

### Image Information

- [kCGImagePropertyImageCount](kcgimagepropertyimagecount.md): The number of images in the file.
- [kCGImagePropertyIsIndexed](kcgimagepropertyisindexed.md): A Boolean value that indicates whether the image contains indexed pixel samples.
- [kCGImagePropertyImages](kcgimagepropertyimages.md): An array of dictionaries, each of which contains metadata for one of the images in the file.
- [kCGImagePropertyThumbnailImages](kcgimagepropertythumbnailimages.md)
- [kCGImagePropertyPrimaryImage](kcgimagepropertyprimaryimage.md): The index of the primary image in the file.
- [kCGImagePropertyIsFloat](kcgimagepropertyisfloat.md): A Boolean value that indicates whether the image contains floating-point pixel samples.
- [kCGImagePropertyOrientation](kcgimagepropertyorientation.md): The intended display orientation of the image.
- [CGImagePropertyOrientation](cgimagepropertyorientation.md): A value describing the intended display orientation for an image.

# Individual Image Properties (Objective-C)

**Framework:** Image I/O  
**Kind:** API Collection

Properties that apply to an individual image in an image source.

<a id="overview"></a>

## Overview

Access these properties using the [CGImageSourceCopyPropertiesAtIndex](cgimagesourcecopypropertiesatindex%28______%29.md) or [CGImageSourceCopyAuxiliaryDataInfoAtIndex](cgimagesourcecopyauxiliarydatainfoatindex%28______%29.md) function.

## Topics

### Image Size

- [kCGImagePropertyHeight](kcgimagepropertyheight.md): The height of the image, in the image’s coordinate space.
- [kCGImagePropertyWidth](kcgimagepropertywidth.md): The width of the image, in the image’s coordinate space.
- [kCGImagePropertyBytesPerRow](kcgimagepropertybytesperrow.md): The total number of bytes in each row of the image.

### Auxiliary Data Types

- [kCGImageAuxiliaryDataTypeDepth](kcgimageauxiliarydatatypedepth.md): The type for depth map information.
- [kCGImageAuxiliaryDataTypeDisparity](kcgimageauxiliarydatatypedisparity.md): The type for image disparity information.
- [kCGImageAuxiliaryDataTypeHDRGainMap](kcgimageauxiliarydatatypehdrgainmap.md): The type for High Dynamic Range (HDR) gain map information.
- [kCGImageAuxiliaryDataTypePortraitEffectsMatte](kcgimageauxiliarydatatypeportraiteffectsmatte.md): The type for portrait effects matte information.
- [kCGImageAuxiliaryDataTypeSemanticSegmentationGlassesMatte](kcgimageauxiliarydatatypesemanticsegmentationglassesmatte.md): The type for glasses matte informaton.
- [kCGImageAuxiliaryDataTypeSemanticSegmentationHairMatte](kcgimageauxiliarydatatypesemanticsegmentationhairmatte.md): The type for hair matte information.
- [kCGImageAuxiliaryDataTypeSemanticSegmentationSkinMatte](kcgimageauxiliarydatatypesemanticsegmentationskinmatte.md): The type for skin matte informaton.
- [kCGImageAuxiliaryDataTypeSemanticSegmentationSkyMatte](kcgimageauxiliarydatatypesemanticsegmentationskymatte.md): The type for sky matte information.
- [kCGImageAuxiliaryDataTypeSemanticSegmentationTeethMatte](kcgimageauxiliarydatatypesemanticsegmentationteethmatte.md): The type for teeth matte information.

### Auxiliary Image Data

- [kCGImagePropertyAuxiliaryData](kcgimagepropertyauxiliarydata.md): An array of dictionaries that contain auxiliary data for the images.
- [kCGImagePropertyAuxiliaryDataType](kcgimagepropertyauxiliarydatatype.md): The type of the auxiliary data.
- [kCGImageAuxiliaryDataInfoData](kcgimageauxiliarydatainfodata.md): The auxiliary data for the image.
- [kCGImageAuxiliaryDataInfoDataDescription](kcgimageauxiliarydatainfodatadescription.md): A dictionary of keys that describe the auxiliary data.
- [kCGImageAuxiliaryDataInfoMetadata](kcgimageauxiliarydatainfometadata.md): The metadata for any auxiliary data.

### Open EXR Properties

- [kCGImagePropertyOpenEXRDictionary](kcgimagepropertyopenexrdictionary.md): A dictionary of properties specific to the OpenEXR metadata standard.
- [kCGImagePropertyOpenEXRAspectRatio](kcgimagepropertyopenexraspectratio.md): The aspect ratio of the image.

## See Also

### Image Information

- [kCGImagePropertyImageCount](kcgimagepropertyimagecount.md): The number of images in the file.
- [kCGImagePropertyIsIndexed](kcgimagepropertyisindexed.md): A Boolean value that indicates whether the image contains indexed pixel samples.
- [kCGImagePropertyImages](kcgimagepropertyimages.md): An array of dictionaries, each of which contains metadata for one of the images in the file.
- [kCGImagePropertyThumbnailImages](kcgimagepropertythumbnailimages.md)
- [kCGImagePropertyPrimaryImage](kcgimagepropertyprimaryimage.md): The index of the primary image in the file.
- [kCGImagePropertyIsFloat](kcgimagepropertyisfloat.md): A Boolean value that indicates whether the image contains floating-point pixel samples.
- [kCGImagePropertyOrientation](kcgimagepropertyorientation.md): The intended display orientation of the image.
- [CGImagePropertyOrientation](cgimagepropertyorientation.md): A value describing the intended display orientation for an image.
