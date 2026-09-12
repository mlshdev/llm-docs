> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmvideoformatdescriptioncopyasbigendianimagedescriptionblockbuffer(allocator:videoformatdescription:stringencoding:flavor:blockbufferout:)](https://developer.apple.com/documentation/coremedia/cmvideoformatdescriptioncopyasbigendianimagedescriptionblockbuffer(allocator:videoformatdescription:stringencoding:flavor:blockbufferout:))

# CMVideoFormatDescriptionCopyAsBigEndianImageDescriptionBlockBuffer(allocator:videoFormatDescription:stringEncoding:flavor:blockBufferOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Copies the contents of a video format description to a buffer in big-endian byte ordering.

## Declaration

```swift
func CMVideoFormatDescriptionCopyAsBigEndianImageDescriptionBlockBuffer(allocator: CFAllocator?, videoFormatDescription: CMVideoFormatDescription, stringEncoding: CFStringEncoding, flavor: CMImageDescriptionFlavor?, blockBufferOut: UnsafeMutablePointer<CMBlockBuffer?>) -> OSStatus
```

## Parameters

- `allocator`: Allocator to use for allocating the `CMBlockBuffer` object. May be `NULL`.
- `videoFormatDescription`: The `CMVideoFormatDescription` to be copied.
- `stringEncoding`: Pass [CFStringGetSystemEncoding()](../corefoundation/cfstringgetsystemencoding%28%29.md) or `GetApplicationTextEncoding`.
- `flavor`: `kCMImageDescriptionFlavor` constant or `NULL` for QuickTimeMovie flavor.
- `blockBufferOut`: Receives a new `CMBlockBuffer` containing ImageDescription data structure in big-endian byte ordering.

<a id="Discussion"></a>

## Discussion

On return, the caller owns the returned CMBlockBuffer, and must release it when done with it.

> **Note**

>  The `dataRefIndex` field of the SampleDescription is intentionally filled with placeholder values (`0xFFFF`). The caller must overwrite these values with a valid `dataRefIndex` if writing the SampleDescription to a QuickTime/ISO file.

## See Also

### Working with Video Descriptions

- [CMImageDescriptionFlavor](cmimagedescriptionflavor.md): Types that represent image format descriptions.
- [CMVideoFormatDescriptionCreate(allocator:codecType:width:height:extensions:formatDescriptionOut:)](cmvideoformatdescriptioncreate%28allocator_codectype_width_height_extensions_formatdescriptionout_%29.md): Creates a format description for a video media stream.
- [CMVideoFormatDescriptionCreateForImageBuffer(allocator:imageBuffer:formatDescriptionOut:)](cmvideoformatdescriptioncreateforimagebuffer%28allocator_imagebuffer_formatdescriptionout_%29.md): Creates a format description for a video media stream by using an image buffer.
- [CMVideoFormatDescriptionGetCleanAperture(\_:originIsAtTopLeft:)](cmvideoformatdescriptiongetcleanaperture%28__originisattopleft_%29.md): Returns a rectangle that defines the portion of the encoded pixel dimensions that represent the image data that’s valid for displaying.
- [CMVideoFormatDescriptionGetDimensions(\_:)](cmvideoformatdescriptiongetdimensions%28__%29.md): Returns the video dimensions, in encoded pixels.
- [CMVideoFormatDescriptionGetExtensionKeysCommonWithImageBuffers()](cmvideoformatdescriptiongetextensionkeyscommonwithimagebuffers%28%29.md): Returns an array of keys that you use for video format description extensions, image buffer attachments, and attributes.
- [CMVideoFormatDescriptionGetPresentationDimensions(\_:usePixelAspectRatio:useCleanAperture:)](cmvideoformatdescriptiongetpresentationdimensions%28__usepixelaspectratio_usecleanaperture_%29.md): Returns the dimensions after taking the pixel aspect ratio and clean aperture into account.
- [CMVideoFormatDescriptionMatchesImageBuffer(\_:imageBuffer:)](cmvideoformatdescriptionmatchesimagebuffer%28__imagebuffer_%29.md): Returns a Boolean value that indicates whether a format description matches an image buffer.
- [CMVideoFormatDescriptionCreateFromH264ParameterSets(allocator:parameterSetCount:parameterSetPointers:parameterSetSizes:nalUnitHeaderLength:formatDescriptionOut:)](cmvideoformatdescriptioncreatefromh264parametersets%28allocator_parametersetcount_parametersetpointers_parametersetsizes_nalunitheaderlength_formatdescriptionout_%29.md): Creates a format description for a video media stream that the parameter set describes.
- [CMVideoFormatDescriptionCreateFromHEVCParameterSets(allocator:parameterSetCount:parameterSetPointers:parameterSetSizes:nalUnitHeaderLength:extensions:formatDescriptionOut:)](cmvideoformatdescriptioncreatefromhevcparametersets%28allocator_parametersetcount_parametersetpointers_parametersetsizes_nalunitheaderlength_extensions_formatdescriptionout_%29.md): Creates a format description for a video media stream using HEVC (H.265) parameter set NAL units.
- [CMVideoFormatDescriptionGetH264ParameterSetAtIndex(\_:parameterSetIndex:parameterSetPointerOut:parameterSetSizeOut:parameterSetCountOut:nalUnitHeaderLengthOut:)](cmvideoformatdescriptiongeth264parametersetatindex%28__parametersetindex_parametersetpointerout_parametersetsizeout_parametersetcountout_nalunitheaderlengthout_%29.md): Returns a parameter set that an H.264 format description contains.
- [CMVideoFormatDescriptionCreateFromBigEndianImageDescriptionBlockBuffer(allocator:bigEndianImageDescriptionBlockBuffer:stringEncoding:flavor:formatDescriptionOut:)](cmvideoformatdescriptioncreatefrombigendianimagedescriptionblockbuffer%28allocator_bigendianimagedescriptionblockbuffer_stringencoding_flavor_formatdescriptionout_%29.md): Creates a video format description from a big-endian image description inside a buffer.
- [CMVideoFormatDescriptionCreateFromBigEndianImageDescriptionData(allocator:bigEndianImageDescriptionData:size:stringEncoding:flavor:formatDescriptionOut:)](cmvideoformatdescriptioncreatefrombigendianimagedescriptiondata%28allocator_bigendianimagedescriptiondata_size_stringencoding_flavor_formatdescriptionout_%29.md): Creates a video format description from a big-endian image description structure.
- [CMSwapBigEndianImageDescriptionToHost(\_:\_:)](cmswapbigendianimagedescriptiontohost%28____%29.md): Converts an image description data structure from big-endian to host-endian, in place.
- [CMSwapHostEndianImageDescriptionToBig(\_:\_:)](cmswaphostendianimagedescriptiontobig%28____%29.md): Converts an image description data structure from host-endian to big-endian, in place.

# CMVideoFormatDescriptionCopyAsBigEndianImageDescriptionBlockBuffer (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Copies the contents of a video format description to a buffer in big-endian byte ordering.

## Declaration

```objectivec
extern OSStatus CMVideoFormatDescriptionCopyAsBigEndianImageDescriptionBlockBuffer(CFAllocatorRef allocator, CMVideoFormatDescriptionRef videoFormatDescription, CFStringEncoding stringEncoding, CMImageDescriptionFlavor flavor, CMBlockBufferRef*blockBufferOut);
```

## Parameters

- `allocator`: Allocator to use for allocating the `CMBlockBuffer` object. May be `NULL`.
- `videoFormatDescription`: The `CMVideoFormatDescription` to be copied.
- `stringEncoding`: Pass [CFStringGetSystemEncoding](../corefoundation/cfstringgetsystemencoding%28%29.md) or `GetApplicationTextEncoding`.
- `flavor`: `kCMImageDescriptionFlavor` constant or `NULL` for QuickTimeMovie flavor.
- `blockBufferOut`: Receives a new `CMBlockBuffer` containing ImageDescription data structure in big-endian byte ordering.

<a id="Discussion"></a>

## Discussion

On return, the caller owns the returned CMBlockBuffer, and must release it when done with it.

> **Note**

>  The `dataRefIndex` field of the SampleDescription is intentionally filled with placeholder values (`0xFFFF`). The caller must overwrite these values with a valid `dataRefIndex` if writing the SampleDescription to a QuickTime/ISO file.

## See Also

### Working with Video Descriptions

- [CMImageDescriptionFlavor](cmimagedescriptionflavor.md): Types that represent image format descriptions.
- [CMVideoFormatDescriptionCreate](cmvideoformatdescriptioncreate%28allocator_codectype_width_height_extensions_formatdescriptionout_%29.md): Creates a format description for a video media stream.
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
- [CMVideoFormatDescriptionCreateFromBigEndianImageDescriptionBlockBuffer](cmvideoformatdescriptioncreatefrombigendianimagedescriptionblockbuffer%28allocator_bigendianimagedescriptionblockbuffer_stringencoding_flavor_formatdescriptionout_%29.md): Creates a video format description from a big-endian image description inside a buffer.
- [CMVideoFormatDescriptionCreateFromBigEndianImageDescriptionData](cmvideoformatdescriptioncreatefrombigendianimagedescriptiondata%28allocator_bigendianimagedescriptiondata_size_stringencoding_flavor_formatdescriptionout_%29.md): Creates a video format description from a big-endian image description structure.
- [CMSwapBigEndianImageDescriptionToHost](cmswapbigendianimagedescriptiontohost%28____%29.md): Converts an image description data structure from big-endian to host-endian, in place.
