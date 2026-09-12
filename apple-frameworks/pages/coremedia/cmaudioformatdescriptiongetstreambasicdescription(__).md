> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmaudioformatdescriptiongetstreambasicdescription(_:)](https://developer.apple.com/documentation/coremedia/cmaudioformatdescriptiongetstreambasicdescription(_:))

# CMAudioFormatDescriptionGetStreamBasicDescription(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a read-only pointer to the audio stream description in an audio format description.

## Declaration

```swift
func CMAudioFormatDescriptionGetStreamBasicDescription(_ desc: CMAudioFormatDescription) -> UnsafePointer<AudioStreamBasicDescription>?
```

## Parameters

- `desc`: `CMFormatDescription` being interrogated.

<a id="Discussion"></a>

## Discussion

This API is specific to audio format descriptions, and returns `NULL` if used with a non-audio format descriptions.

## See Also

### Working with Audio Descriptions

- [CMSoundDescriptionFlavor](cmsounddescriptionflavor.md): Types that represent sound format descriptions.
- [CMAudioFormatDescriptionCreateSummary(allocator:formatDescriptionArray:flags:formatDescriptionOut:)](cmaudioformatdescriptioncreatesummary%28allocator_formatdescriptionarray_flags_formatdescriptionout_%29.md): Creates a summary audio format description from an array of descriptions.
- [CMAudioFormatDescriptionCreate(allocator:asbd:layoutSize:layout:magicCookieSize:magicCookie:extensions:formatDescriptionOut:)](cmaudioformatdescriptioncreate%28allocator_asbd_layoutsize_layout_magiccookiesize_magiccookie_extensions_formatdescriptionout_%29.md): Creates a format description for an audio media stream.
- [CMAudioFormatDescriptionEqual(\_:otherFormatDescription:equalityMask:equalityMaskOut:)](cmaudioformatdescriptionequal%28__otherformatdescription_equalitymask_equalitymaskout_%29.md): Returns a Boolean value that indicates whether the two audio format descriptions are equal.
- [CMAudioFormatDescriptionGetChannelLayout(\_:sizeOut:)](cmaudioformatdescriptiongetchannellayout%28__sizeout_%29.md): Returns a read-only pointer to, and the size of, the audio channel layout inside an audio format description.
- [CMAudioFormatDescriptionGetFormatList(\_:sizeOut:)](cmaudioformatdescriptiongetformatlist%28__sizeout_%29.md): Returns a read-only pointer to, and size of, the array of audio format list item structures in an audio format description.
- [CMAudioFormatDescriptionGetMagicCookie(\_:sizeOut:)](cmaudioformatdescriptiongetmagiccookie%28__sizeout_%29.md): Returns a read-only pointer to, and size of, the magic cookie in an audio format description.
- [CMAudioFormatDescriptionGetMostCompatibleFormat(\_:)](cmaudioformatdescriptiongetmostcompatibleformat%28__%29.md): Returns a read-only pointer to the appropriate audio format list item in an audio format description.
- [CMAudioFormatDescriptionGetRichestDecodableFormat(\_:)](cmaudioformatdescriptiongetrichestdecodableformat%28__%29.md): Returns a read-only pointer to the appropriate audio format list item in an audio format description.
- [CMDoesBigEndianSoundDescriptionRequireLegacyCBRSampleTableLayout(\_:flavor:)](cmdoesbigendiansounddescriptionrequirelegacycbrsampletablelayout%28__flavor_%29.md): Returns a Boolean value that indicates whether the sample tables need to use the legacy constant bit-rate encoding layout.
- [CMSwapBigEndianSoundDescriptionToHost(\_:\_:)](cmswapbigendiansounddescriptiontohost%28____%29.md): Converts a sound description data structure from big-endian to host-endian, in place.
- [CMSwapHostEndianSoundDescriptionToBig(\_:\_:)](cmswaphostendiansounddescriptiontobig%28____%29.md): Converts a sound description data structure from host-endian to big-endian, in place.
- [CMAudioFormatDescriptionCreateFromBigEndianSoundDescriptionData(allocator:bigEndianSoundDescriptionData:size:flavor:formatDescriptionOut:)](cmaudioformatdescriptioncreatefrombigendiansounddescriptiondata%28allocator_bigendiansounddescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates an audio format description from a big-endian sound description data structure.
- [CMAudioFormatDescriptionCreateFromBigEndianSoundDescriptionBlockBuffer(allocator:bigEndianSoundDescriptionBlockBuffer:flavor:formatDescriptionOut:)](cmaudioformatdescriptioncreatefrombigendiansounddescriptionblockbuffer%28allocator_bigendiansounddescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates an audio format description from a big-endian sound description data structure in a buffer.
- [CMAudioFormatDescriptionCopyAsBigEndianSoundDescriptionBlockBuffer(allocator:audioFormatDescription:flavor:blockBufferOut:)](cmaudioformatdescriptioncopyasbigendiansounddescriptionblockbuffer%28allocator_audioformatdescription_flavor_blockbufferout_%29.md): Copies the contents of an audio format description to a buffer in big-endian byte ordering.

# CMAudioFormatDescriptionGetStreamBasicDescription (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a read-only pointer to the audio stream description in an audio format description.

## Declaration

```objectivec
extern const AudioStreamBasicDescription *CMAudioFormatDescriptionGetStreamBasicDescription(CMAudioFormatDescriptionRef desc);
```

## Parameters

- `desc`: `CMFormatDescription` being interrogated.

<a id="Discussion"></a>

## Discussion

This API is specific to audio format descriptions, and returns `NULL` if used with a non-audio format descriptions.

## See Also

### Working with Audio Descriptions

- [CMSoundDescriptionFlavor](cmsounddescriptionflavor.md): Types that represent sound format descriptions.
- [CMAudioFormatDescriptionCreateSummary](cmaudioformatdescriptioncreatesummary%28allocator_formatdescriptionarray_flags_formatdescriptionout_%29.md): Creates a summary audio format description from an array of descriptions.
- [CMAudioFormatDescriptionCreate](cmaudioformatdescriptioncreate%28allocator_asbd_layoutsize_layout_magiccookiesize_magiccookie_extensions_formatdescriptionout_%29.md): Creates a format description for an audio media stream.
- [CMAudioFormatDescriptionEqual](cmaudioformatdescriptionequal%28__otherformatdescription_equalitymask_equalitymaskout_%29.md): Returns a Boolean value that indicates whether the two audio format descriptions are equal.
- [CMAudioFormatDescriptionGetChannelLayout](cmaudioformatdescriptiongetchannellayout%28__sizeout_%29.md): Returns a read-only pointer to, and the size of, the audio channel layout inside an audio format description.
- [CMAudioFormatDescriptionGetFormatList](cmaudioformatdescriptiongetformatlist%28__sizeout_%29.md): Returns a read-only pointer to, and size of, the array of audio format list item structures in an audio format description.
- [CMAudioFormatDescriptionGetMagicCookie](cmaudioformatdescriptiongetmagiccookie%28__sizeout_%29.md): Returns a read-only pointer to, and size of, the magic cookie in an audio format description.
- [CMAudioFormatDescriptionGetMostCompatibleFormat](cmaudioformatdescriptiongetmostcompatibleformat%28__%29.md): Returns a read-only pointer to the appropriate audio format list item in an audio format description.
- [CMAudioFormatDescriptionGetRichestDecodableFormat](cmaudioformatdescriptiongetrichestdecodableformat%28__%29.md): Returns a read-only pointer to the appropriate audio format list item in an audio format description.
- [CMDoesBigEndianSoundDescriptionRequireLegacyCBRSampleTableLayout](cmdoesbigendiansounddescriptionrequirelegacycbrsampletablelayout%28__flavor_%29.md): Returns a Boolean value that indicates whether the sample tables need to use the legacy constant bit-rate encoding layout.
- [CMSwapBigEndianSoundDescriptionToHost](cmswapbigendiansounddescriptiontohost%28____%29.md): Converts a sound description data structure from big-endian to host-endian, in place.
- [CMSwapHostEndianSoundDescriptionToBig](cmswaphostendiansounddescriptiontobig%28____%29.md): Converts a sound description data structure from host-endian to big-endian, in place.
- [CMAudioFormatDescriptionCreateFromBigEndianSoundDescriptionData](cmaudioformatdescriptioncreatefrombigendiansounddescriptiondata%28allocator_bigendiansounddescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates an audio format description from a big-endian sound description data structure.
- [CMAudioFormatDescriptionCreateFromBigEndianSoundDescriptionBlockBuffer](cmaudioformatdescriptioncreatefrombigendiansounddescriptionblockbuffer%28allocator_bigendiansounddescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates an audio format description from a big-endian sound description data structure in a buffer.
- [CMAudioFormatDescriptionCopyAsBigEndianSoundDescriptionBlockBuffer](cmaudioformatdescriptioncopyasbigendiansounddescriptionblockbuffer%28allocator_audioformatdescription_flavor_blockbufferout_%29.md): Copies the contents of an audio format description to a buffer in big-endian byte ordering.
