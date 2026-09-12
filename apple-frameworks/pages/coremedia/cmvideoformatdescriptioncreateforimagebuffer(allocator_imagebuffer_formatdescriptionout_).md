> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmvideoformatdescriptioncreateforimagebuffer(allocator:imagebuffer:formatdescriptionout:)](https://developer.apple.com/documentation/coremedia/cmvideoformatdescriptioncreateforimagebuffer(allocator:imagebuffer:formatdescriptionout:))

# CMVideoFormatDescriptionCreateForImageBuffer(allocator:imageBuffer:formatDescriptionOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a format description for a video media stream by using an image buffer.

## Declaration

```swift
func CMVideoFormatDescriptionCreateForImageBuffer(allocator: CFAllocator?, imageBuffer: CVImageBuffer, formatDescriptionOut: UnsafeMutablePointer<CMVideoFormatDescription?>) -> OSStatus
```

## Parameters

- `allocator`: `CFAllocator` to be used when creating the `CMFormatDescription`. Pass `NULL` to use the default allocator.
- `imageBuffer`: Image buffer for which we are creating the format description.
- `formatDescriptionOut`: On output, returns newly created video `CMFormatDescription`.

<a id="return-value"></a>

## Return Value

A result code. Returns `noErr` if successful.

<a id="Discussion"></a>

## Discussion

This convenience function is equivalent to:

```objc
CMVideoFormatDescriptionCreate ( allocator, ( CVPixelBufferGetTypeID() == CFGetTypeID( imageBuffer ) ? CVPixelBufferGetPixelFormatType( imageBuffer ) : 0,  width of image,  height of image, extensions );
                                                
```

`extensions` is a `CFDictionary` of attachments to image buffer with keys specified by `CMVideoFormatDescriptionGetExtensionKeysCommonWithImageBuffers`, and also `kCMFormatDescriptionExtension_BytesPerRow` if applicable.

## See Also

### Working with Video Descriptions

- [CMImageDescriptionFlavor](cmimagedescriptionflavor.md): Types that represent image format descriptions.
- [CMVideoFormatDescriptionCreate(allocator:codecType:width:height:extensions:formatDescriptionOut:)](cmvideoformatdescriptioncreate%28allocator_codectype_width_height_extensions_formatdescriptionout_%29.md): Creates a format description for a video media stream.
- [CMVideoFormatDescriptionGetCleanAperture(\_:originIsAtTopLeft:)](cmvideoformatdescriptiongetcleanaperture%28__originisattopleft_%29.md): Returns a rectangle that defines the portion of the encoded pixel dimensions that represent the image data that’s valid for displaying.
- [CMVideoFormatDescriptionGetDimensions(\_:)](cmvideoformatdescriptiongetdimensions%28__%29.md): Returns the video dimensions, in encoded pixels.
- [CMVideoFormatDescriptionGetExtensionKeysCommonWithImageBuffers()](cmvideoformatdescriptiongetextensionkeyscommonwithimagebuffers%28%29.md): Returns an array of keys that you use for video format description extensions, image buffer attachments, and attributes.
- [CMVideoFormatDescriptionGetPresentationDimensions(\_:usePixelAspectRatio:useCleanAperture:)](cmvideoformatdescriptiongetpresentationdimensions%28__usepixelaspectratio_usecleanaperture_%29.md): Returns the dimensions after taking the pixel aspect ratio and clean aperture into account.
- [CMVideoFormatDescriptionMatchesImageBuffer(\_:imageBuffer:)](cmvideoformatdescriptionmatchesimagebuffer%28__imagebuffer_%29.md): Returns a Boolean value that indicates whether a format description matches an image buffer.
- [CMVideoFormatDescriptionCreateFromH264ParameterSets(allocator:parameterSetCount:parameterSetPointers:parameterSetSizes:nalUnitHeaderLength:formatDescriptionOut:)](cmvideoformatdescriptioncreatefromh264parametersets%28allocator_parametersetcount_parametersetpointers_parametersetsizes_nalunitheaderlength_formatdescriptionout_%29.md): Creates a format description for a video media stream that the parameter set describes.
- [CMVideoFormatDescriptionCreateFromHEVCParameterSets(allocator:parameterSetCount:parameterSetPointers:parameterSetSizes:nalUnitHeaderLength:extensions:formatDescriptionOut:)](cmvideoformatdescriptioncreatefromhevcparametersets%28allocator_parametersetcount_parametersetpointers_parametersetsizes_nalunitheaderlength_extensions_formatdescriptionout_%29.md): Creates a format description for a video media stream using HEVC (H.265) parameter set NAL units.
- [CMVideoFormatDescriptionGetH264ParameterSetAtIndex(\_:parameterSetIndex:parameterSetPointerOut:parameterSetSizeOut:parameterSetCountOut:nalUnitHeaderLengthOut:)](cmvideoformatdescriptiongeth264parametersetatindex%28__parametersetindex_parametersetpointerout_parametersetsizeout_parametersetcountout_nalunitheaderlengthout_%29.md): Returns a parameter set that an H.264 format description contains.
- [CMVideoFormatDescriptionCopyAsBigEndianImageDescriptionBlockBuffer(allocator:videoFormatDescription:stringEncoding:flavor:blockBufferOut:)](cmvideoformatdescriptioncopyasbigendianimagedescriptionblockbuffer%28allocator_videoformatdescription_stringencoding_flavor_blockbufferout_%29.md): Copies the contents of a video format description to a buffer in big-endian byte ordering.
- [CMVideoFormatDescriptionCreateFromBigEndianImageDescriptionBlockBuffer(allocator:bigEndianImageDescriptionBlockBuffer:stringEncoding:flavor:formatDescriptionOut:)](cmvideoformatdescriptioncreatefrombigendianimagedescriptionblockbuffer%28allocator_bigendianimagedescriptionblockbuffer_stringencoding_flavor_formatdescriptionout_%29.md): Creates a video format description from a big-endian image description inside a buffer.
- [CMVideoFormatDescriptionCreateFromBigEndianImageDescriptionData(allocator:bigEndianImageDescriptionData:size:stringEncoding:flavor:formatDescriptionOut:)](cmvideoformatdescriptioncreatefrombigendianimagedescriptiondata%28allocator_bigendianimagedescriptiondata_size_stringencoding_flavor_formatdescriptionout_%29.md): Creates a video format description from a big-endian image description structure.
- [CMSwapBigEndianImageDescriptionToHost(\_:\_:)](cmswapbigendianimagedescriptiontohost%28____%29.md): Converts an image description data structure from big-endian to host-endian, in place.
- [CMSwapHostEndianImageDescriptionToBig(\_:\_:)](cmswaphostendianimagedescriptiontobig%28____%29.md): Converts an image description data structure from host-endian to big-endian, in place.

# CMVideoFormatDescriptionCreateForImageBuffer (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a format description for a video media stream by using an image buffer.

## Declaration

```objectivec
extern OSStatus CMVideoFormatDescriptionCreateForImageBuffer(CFAllocatorRef allocator, CVImageBufferRef imageBuffer, CMVideoFormatDescriptionRef*formatDescriptionOut);
```

## Parameters

- `allocator`: `CFAllocator` to be used when creating the `CMFormatDescription`. Pass `NULL` to use the default allocator.
- `imageBuffer`: Image buffer for which we are creating the format description.
- `formatDescriptionOut`: On output, returns newly created video `CMFormatDescription`.

<a id="return-value"></a>

## Return Value

A result code. Returns `noErr` if successful.

<a id="Discussion"></a>

## Discussion

This convenience function is equivalent to:

```objc
CMVideoFormatDescriptionCreate ( allocator, ( CVPixelBufferGetTypeID() == CFGetTypeID( imageBuffer ) ? CVPixelBufferGetPixelFormatType( imageBuffer ) : 0,  width of image,  height of image, extensions );
                                                
```

`extensions` is a `CFDictionary` of attachments to image buffer with keys specified by `CMVideoFormatDescriptionGetExtensionKeysCommonWithImageBuffers`, and also `kCMFormatDescriptionExtension_BytesPerRow` if applicable.

## See Also

### Working with Video Descriptions

- [CMImageDescriptionFlavor](cmimagedescriptionflavor.md): Types that represent image format descriptions.
- [CMVideoFormatDescriptionCreate](cmvideoformatdescriptioncreate%28allocator_codectype_width_height_extensions_formatdescriptionout_%29.md): Creates a format description for a video media stream.
- [CMVideoFormatDescriptionGetCleanAperture](cmvideoformatdescriptiongetcleanaperture%28__originisattopleft_%29.md): Returns a rectangle that defines the portion of the encoded pixel dimensions that represent the image data that’s valid for displaying.
- [CMVideoFormatDescriptionGetDimensions](cmvideoformatdescriptiongetdimensions%28__%29.md): Returns the video dimensions, in encoded pixels.
- [CMVideoFormatDescriptionGetExtensionKeysCommonWithImageBuffers](cmvideoformatdescriptiongetextensionkeyscommonwithimagebuffers%28%29.md): Returns an array of keys that you use for video format description extensions, image buffer attachments, and attributes.
- [CMVideoFormatDescriptionGetPresentationDimensions](cmvideoformatdescriptiongetpresentationdimensions%28__usepixelaspectratio_usecleanaperture_%29.md): Returns the dimensions after taking the pixel aspect ratio and clean aperture into account.
- [CMVideoFormatDescriptionMatchesImageBuffer](cmvideoformatdescriptionmatchesimagebuffer%28__imagebuffer_%29.md): Returns a Boolean value that indicates whether a format description matches an image buffer.
- [CMVideoFormatDescriptionCreateFromH264ParameterSets](cmvideoformatdescriptioncreatefromh264parametersets%28allocator_parametersetcount_parametersetpointers_parametersetsizes_nalunitheaderlength_formatdescriptionout_%29.md): Creates a format description for a video media stream that the parameter set describes.
- [CMVideoFormatDescriptionCreateFromHEVCParameterSets](cmvideoformatdescriptioncreatefromhevcparametersets%28allocator_parametersetcount_parametersetpointers_parametersetsizes_nalunitheaderlength_extensions_formatdescriptionout_%29.md): Creates a format description for a video media stream using HEVC (H.265) parameter set NAL units.
- [CMVideoFormatDescriptionGetH264ParameterSetAtIndex](cmvideoformatdescriptiongeth264parametersetatindex%28__parametersetindex_parametersetpointerout_parametersetsizeout_parametersetcountout_nalunitheaderlengthout_%29.md): Returns a parameter set that an H.264 format description contains.
- [CMVideoFormatDescriptionCopyTagCollectionArray](cmvideoformatdescriptioncopytagcollectionarray.md): Copies the multi-image encoding properties as an array of CMTagCollections.
- [CMVideoFormatDescriptionCopyAsBigEndianImageDescriptionBlockBuffer](cmvideoformatdescriptioncopyasbigendianimagedescriptionblockbuffer%28allocator_videoformatdescription_stringencoding_flavor_blockbufferout_%29.md): Copies the contents of a video format description to a buffer in big-endian byte ordering.
- [CMVideoFormatDescriptionCreateFromBigEndianImageDescriptionBlockBuffer](cmvideoformatdescriptioncreatefrombigendianimagedescriptionblockbuffer%28allocator_bigendianimagedescriptionblockbuffer_stringencoding_flavor_formatdescriptionout_%29.md): Creates a video format description from a big-endian image description inside a buffer.
- [CMVideoFormatDescriptionCreateFromBigEndianImageDescriptionData](cmvideoformatdescriptioncreatefrombigendianimagedescriptiondata%28allocator_bigendianimagedescriptiondata_size_stringencoding_flavor_formatdescriptionout_%29.md): Creates a video format description from a big-endian image description structure.
- [CMSwapBigEndianImageDescriptionToHost](cmswapbigendianimagedescriptiontohost%28____%29.md): Converts an image description data structure from big-endian to host-endian, in place.
