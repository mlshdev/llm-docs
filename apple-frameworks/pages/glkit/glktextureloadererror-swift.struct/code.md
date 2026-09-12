> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glktextureloadererror-swift.struct/code](https://developer.apple.com/documentation/glkit/glktextureloadererror-swift.struct/code)

# GLKTextureLoaderError.Code (Swift)

**Framework:** GLKit  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Values to be returned when a texture loader encounters an error.

## Declaration

```swift
enum Code
```

## Topics

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

### Type Properties

- [GLKTextureLoaderError.Code.alphaPremultiplicationFailure](code/alphapremultiplicationfailure.md): The texture source data does not allow the alpha to be premultiplied.
- [GLKTextureLoaderError.Code.compressedTextureUpload](code/compressedtextureupload.md): A compressed texture could not be uploaded.
- [GLKTextureLoaderError.Code.cubeMapInvalidNumFiles](code/cubemapinvalidnumfiles.md): The incorrect number of files were specified for the cube map.
- [GLKTextureLoaderError.Code.dataPreprocessingFailure](code/datapreprocessingfailure.md): The data could not be preprocessed correctly.
- [errorDomain](errordomain.md)
- [GLKTextureLoaderError.Code.fileOrURLNotFound](code/fileorurlnotfound.md): A file could not be found at the path provided.
- [GLKTextureLoaderError.Code.incompatibleFormatSRGB](code/incompatibleformatsrgb.md): The decoded data was in an incompatible format for an sRGB texture.
- [GLKTextureLoaderError.Code.invalidCGImage](code/invalidcgimage.md): The image provided was invalid.
- [GLKTextureLoaderError.Code.invalidEAGLContext](code/invalideaglcontext.md): The EAGL context was not a valid context.
- [GLKTextureLoaderError.Code.invalidNSData](code/invalidnsdata.md): The data provided is not in a recognized image format.
- [GLKTextureLoaderError.Code.mipmapUnsupported](code/mipmapunsupported.md): The texture source data does not allow mipmaps to be generated.
- [GLKTextureLoaderError.Code.pvrAtlasUnsupported](code/pvratlasunsupported.md): Cube maps may not be compressed in PVRTC format.
- [GLKTextureLoaderError.Code.reorientationFailure](code/reorientationfailure.md): The texture source data does not allow the image to be reoriented.
- [GLKTextureLoaderError.Code.uncompressedTextureUpload](code/uncompressedtextureupload.md): An uncompressed texture could not be uploaded.
- [GLKTextureLoaderError.Code.unknownFileType](code/unknownfiletype.md): The file was in an unrecognized format.
- [GLKTextureLoaderError.Code.unknownPathType](code/unknownpathtype.md): The path type was unrecognized.
- [GLKTextureLoaderError.Code.unsupportedBitDepth](code/unsupportedbitdepth.md): The data in the source image has an unsupported bit depth.
- [GLKTextureLoaderError.Code.unsupportedCubeMapDimensions](code/unsupportedcubemapdimensions.md): The cube map’s dimensions are incorrect.
- [GLKTextureLoaderError.Code.unsupportedOrientation](code/unsupportedorientation.md): The texture source data is stored with an unsupported origin position.
- [GLKTextureLoaderError.Code.unsupportedPVRFormat](code/unsupportedpvrformat.md): The data in the PVRTC compressed format is in an unsupported format.
- [GLKTextureLoaderError.Code.unsupportedTextureTarget](code/unsupportedtexturetarget.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [GLKTextureLoaderCallback](../glktextureloadercallback.md): Signature for the block executed after an asynchronous texture loading operation completes.
- [Texture Loading Options](../texture-loading-options.md): Keys to specify in a `textureOperations` dictionary.
- [Texture Error Handling](../texture-error-handling.md): Strings used when handling error messages returned from a texture loading method.

# GLKTextureLoaderError (Objective-C)

**Framework:** GLKit  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Values to be returned when a texture loader encounters an error.

## Declaration

```objectivec
enum GLKTextureLoaderError : GLuint;
```

## Topics

### Type Properties

- [GLKTextureLoaderErrorAlphaPremultiplicationFailure](code/alphapremultiplicationfailure.md): The texture source data does not allow the alpha to be premultiplied.
- [GLKTextureLoaderErrorCompressedTextureUpload](code/compressedtextureupload.md): A compressed texture could not be uploaded.
- [GLKTextureLoaderErrorCubeMapInvalidNumFiles](code/cubemapinvalidnumfiles.md): The incorrect number of files were specified for the cube map.
- [GLKTextureLoaderErrorDataPreprocessingFailure](code/datapreprocessingfailure.md): The data could not be preprocessed correctly.
- [GLKTextureLoaderErrorFileOrURLNotFound](code/fileorurlnotfound.md): A file could not be found at the path provided.
- [GLKTextureLoaderErrorIncompatibleFormatSRGB](code/incompatibleformatsrgb.md): The decoded data was in an incompatible format for an sRGB texture.
- [GLKTextureLoaderErrorInvalidCGImage](code/invalidcgimage.md): The image provided was invalid.
- [GLKTextureLoaderErrorInvalidEAGLContext](code/invalideaglcontext.md): The EAGL context was not a valid context.
- [GLKTextureLoaderErrorInvalidNSData](code/invalidnsdata.md): The data provided is not in a recognized image format.
- [GLKTextureLoaderErrorMipmapUnsupported](code/mipmapunsupported.md): The texture source data does not allow mipmaps to be generated.
- [GLKTextureLoaderErrorPVRAtlasUnsupported](code/pvratlasunsupported.md): Cube maps may not be compressed in PVRTC format.
- [GLKTextureLoaderErrorReorientationFailure](code/reorientationfailure.md): The texture source data does not allow the image to be reoriented.
- [GLKTextureLoaderErrorUncompressedTextureUpload](code/uncompressedtextureupload.md): An uncompressed texture could not be uploaded.
- [GLKTextureLoaderErrorUnknownFileType](code/unknownfiletype.md): The file was in an unrecognized format.
- [GLKTextureLoaderErrorUnknownPathType](code/unknownpathtype.md): The path type was unrecognized.
- [GLKTextureLoaderErrorUnsupportedBitDepth](code/unsupportedbitdepth.md): The data in the source image has an unsupported bit depth.
- [GLKTextureLoaderErrorUnsupportedCubeMapDimensions](code/unsupportedcubemapdimensions.md): The cube map’s dimensions are incorrect.
- [GLKTextureLoaderErrorUnsupportedOrientation](code/unsupportedorientation.md): The texture source data is stored with an unsupported origin position.
- [GLKTextureLoaderErrorUnsupportedPVRFormat](code/unsupportedpvrformat.md): The data in the PVRTC compressed format is in an unsupported format.
- [GLKTextureLoaderErrorUnsupportedTextureTarget](code/unsupportedtexturetarget.md)

## See Also

### Constants

- [GLKTextureLoaderCallback](../glktextureloadercallback.md): Signature for the block executed after an asynchronous texture loading operation completes.
- [Texture Loading Options](../texture-loading-options.md): Keys to specify in a `textureOperations` dictionary.
- [Texture Error Handling](../texture-error-handling.md): Strings used when handling error messages returned from a texture loading method.
