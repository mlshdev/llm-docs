> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmvideoformatdescriptioncopytagcollectionarray](https://developer.apple.com/documentation/coremedia/cmvideoformatdescriptioncopytagcollectionarray)

# CMVideoFormatDescriptionCopyTagCollectionArray

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Copies the multi-image encoding properties as an array of CMTagCollections.

## Declaration

```objectivec
extern OSStatus CMVideoFormatDescriptionCopyTagCollectionArray(CMVideoFormatDescriptionRef formatDescription, CFArrayRef*tagCollectionsOut);
```

## Parameters

- `formatDescription`: The format description to extract tag collections from.
- `tagCollectionsOut`: A pointer to a CFArrayRef result containing the categories of present tags. If the copy fails, `tagCollectionsOut` is `NULL`.

<a id="return-value"></a>

## Return Value

Returns 0 on success or a value from

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
- [CMVideoFormatDescriptionCopyAsBigEndianImageDescriptionBlockBuffer](cmvideoformatdescriptioncopyasbigendianimagedescriptionblockbuffer%28allocator_videoformatdescription_stringencoding_flavor_blockbufferout_%29.md): Copies the contents of a video format description to a buffer in big-endian byte ordering.
- [CMVideoFormatDescriptionCreateFromBigEndianImageDescriptionBlockBuffer](cmvideoformatdescriptioncreatefrombigendianimagedescriptionblockbuffer%28allocator_bigendianimagedescriptionblockbuffer_stringencoding_flavor_formatdescriptionout_%29.md): Creates a video format description from a big-endian image description inside a buffer.
- [CMVideoFormatDescriptionCreateFromBigEndianImageDescriptionData](cmvideoformatdescriptioncreatefrombigendianimagedescriptiondata%28allocator_bigendianimagedescriptiondata_size_stringencoding_flavor_formatdescriptionout_%29.md): Creates a video format description from a big-endian image description structure.
- [CMSwapBigEndianImageDescriptionToHost](cmswapbigendianimagedescriptiontohost%28____%29.md): Converts an image description data structure from big-endian to host-endian, in place.
