> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmvideoformatdescriptioncreate(allocator:codectype:width:height:extensions:formatdescriptionout:)](https://developer.apple.com/documentation/coremedia/cmvideoformatdescriptioncreate(allocator:codectype:width:height:extensions:formatdescriptionout:))

# CMVideoFormatDescriptionCreate(allocator:codecType:width:height:extensions:formatDescriptionOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a format description for a video media stream.

## Declaration

```swift
func CMVideoFormatDescriptionCreate(allocator: CFAllocator?, codecType: CMVideoCodecType, width: Int32, height: Int32, extensions: CFDictionary?, formatDescriptionOut: UnsafeMutablePointer<CMVideoFormatDescription?>) -> OSStatus
```

## Parameters

- `allocator`: CFAllocator to be used. Pass `kCFAllocatorDefault` or NULL to use the default allocator.
- `codecType`: The type of video compression.
- `width`: The width of encoded video.
- `height`: The height of encoded video.
- `extensions`: Dictionary of extension key/value pairs. Keys are always `CFString`.                                                                    Values are always property list objects (ie. `CFData`, `CFString`, `CFArray`,                                                                    `CFDictionary`, `CFDate`, `CFBoolean`, or `CFNumber`). Can be `NULL`.
- `formatDescriptionOut`: On output, returns newly created video `CMFormatDescription`

<a id="return-value"></a>

## Return Value

A result code. Returns `noErr` if successful.

<a id="Discussion"></a>

## Discussion

The caller owns the returned `CMFormatDescription`, and must release it when done with it. All input parameters are copied (the extensions are deep-copied).  The caller can deallocate them or re-use them after making this call.

## See Also

### Working with Video Descriptions

- [CMImageDescriptionFlavor](cmimagedescriptionflavor.md): Types that represent image format descriptions.
- [CMVideoFormatDescriptionCreateForImageBuffer(allocator:imageBuffer:formatDescriptionOut:)](cmvideoformatdescriptioncreateforimagebuffer%28allocator_imagebuffer_formatdescriptionout_%29.md): Creates a format description for a video media stream by using an image buffer.
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

# CMVideoFormatDescriptionCreate (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a format description for a video media stream.

## Declaration

```objectivec
extern OSStatus CMVideoFormatDescriptionCreate(CFAllocatorRef allocator, CMVideoCodecType codecType, int32_t width, int32_t height, CFDictionaryRef extensions, CMVideoFormatDescriptionRef*formatDescriptionOut);
```

## Parameters

- `allocator`: CFAllocator to be used. Pass `kCFAllocatorDefault` or NULL to use the default allocator.
- `codecType`: The type of video compression.
- `width`: The width of encoded video.
- `height`: The height of encoded video.
- `extensions`: Dictionary of extension key/value pairs. Keys are always `CFString`.                                                                    Values are always property list objects (ie. `CFData`, `CFString`, `CFArray`,                                                                    `CFDictionary`, `CFDate`, `CFBoolean`, or `CFNumber`). Can be `NULL`.
- `formatDescriptionOut`: On output, returns newly created video `CMFormatDescription`

<a id="return-value"></a>

## Return Value

A result code. Returns `noErr` if successful.

<a id="Discussion"></a>

## Discussion

The caller owns the returned `CMFormatDescription`, and must release it when done with it. All input parameters are copied (the extensions are deep-copied).  The caller can deallocate them or re-use them after making this call.

## See Also

### Working with Video Descriptions

- [CMImageDescriptionFlavor](cmimagedescriptionflavor.md): Types that represent image format descriptions.
- [CMVideoFormatDescriptionCreateForImageBuffer](cmvideoformatdescriptioncreateforimagebuffer%28allocator_imagebuffer_formatdescriptionout_%29.md): Creates a format description for a video media stream by using an image buffer.
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
