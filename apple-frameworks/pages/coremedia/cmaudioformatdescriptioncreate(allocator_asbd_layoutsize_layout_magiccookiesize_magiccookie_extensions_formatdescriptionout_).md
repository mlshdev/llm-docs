> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmaudioformatdescriptioncreate(allocator:asbd:layoutsize:layout:magiccookiesize:magiccookie:extensions:formatdescriptionout:)](https://developer.apple.com/documentation/coremedia/cmaudioformatdescriptioncreate(allocator:asbd:layoutsize:layout:magiccookiesize:magiccookie:extensions:formatdescriptionout:))

# CMAudioFormatDescriptionCreate(allocator:asbd:layoutSize:layout:magicCookieSize:magicCookie:extensions:formatDescriptionOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a format description for an audio media stream.

## Declaration

```swift
func CMAudioFormatDescriptionCreate(allocator: CFAllocator?, asbd: UnsafePointer<AudioStreamBasicDescription>, layoutSize: Int, layout: UnsafePointer<AudioChannelLayout>?, magicCookieSize: Int, magicCookie: UnsafeRawPointer?, extensions: CFDictionary?, formatDescriptionOut: UnsafeMutablePointer<CMAudioFormatDescription?>) -> OSStatus
```

## Parameters

- `allocator`: `CFAllocator` to be used. Pass `kCFAllocatorDefault` or `NULL` to use the default allocator.
- `asbd`: Audio format description (see `CoreAudioTypes.h`). This information is required.
- `layoutSize`: Size, in bytes, of audio channel layout. 0 if layout is `NULL`.
- `layout`: Audio channel layout (see CoreAudioTypes.h). Can be `NULL`.
- `magicCookieSize`: Size, in bytes, of magic cookie. 0 if `magicCookie` is `NULL`.
- `magicCookie`: Magic cookie. This information is required for some formats, and must be `NULL` for all others.
- `extensions`: Dictionary of extension key/value pairs.  Keys are always `CFStrings`.                                                                            Values are always property list objects (ie. `CFData`, `CFString`, `CFArray`, `CFDictionary`, `CFDate`, `CFBoolean`, or `CFNumber`). Can be `NULL`.
- `formatDescriptionOut`: On output, returns the newly created audio `CMFormatDescription`.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

The `absd` is required, the channel layout is optional, and the magic cookie is required  for some compression formats (and must be NULL for all others). The caller owns the returned `CMFormatDescription`, and must release it when done with it.  The `ASBD`, magic cookie, channel layout, and extensions are all copied (the extensions are deep-copied).  The caller can deallocate them or re-use them after making this call.

## See Also

### Working with Audio Descriptions

- [CMSoundDescriptionFlavor](cmsounddescriptionflavor.md): Types that represent sound format descriptions.
- [CMAudioFormatDescriptionCreateSummary(allocator:formatDescriptionArray:flags:formatDescriptionOut:)](cmaudioformatdescriptioncreatesummary%28allocator_formatdescriptionarray_flags_formatdescriptionout_%29.md): Creates a summary audio format description from an array of descriptions.
- [CMAudioFormatDescriptionEqual(\_:otherFormatDescription:equalityMask:equalityMaskOut:)](cmaudioformatdescriptionequal%28__otherformatdescription_equalitymask_equalitymaskout_%29.md): Returns a Boolean value that indicates whether the two audio format descriptions are equal.
- [CMAudioFormatDescriptionGetChannelLayout(\_:sizeOut:)](cmaudioformatdescriptiongetchannellayout%28__sizeout_%29.md): Returns a read-only pointer to, and the size of, the audio channel layout inside an audio format description.
- [CMAudioFormatDescriptionGetFormatList(\_:sizeOut:)](cmaudioformatdescriptiongetformatlist%28__sizeout_%29.md): Returns a read-only pointer to, and size of, the array of audio format list item structures in an audio format description.
- [CMAudioFormatDescriptionGetMagicCookie(\_:sizeOut:)](cmaudioformatdescriptiongetmagiccookie%28__sizeout_%29.md): Returns a read-only pointer to, and size of, the magic cookie in an audio format description.
- [CMAudioFormatDescriptionGetMostCompatibleFormat(\_:)](cmaudioformatdescriptiongetmostcompatibleformat%28__%29.md): Returns a read-only pointer to the appropriate audio format list item in an audio format description.
- [CMAudioFormatDescriptionGetRichestDecodableFormat(\_:)](cmaudioformatdescriptiongetrichestdecodableformat%28__%29.md): Returns a read-only pointer to the appropriate audio format list item in an audio format description.
- [CMAudioFormatDescriptionGetStreamBasicDescription(\_:)](cmaudioformatdescriptiongetstreambasicdescription%28__%29.md): Returns a read-only pointer to the audio stream description in an audio format description.
- [CMDoesBigEndianSoundDescriptionRequireLegacyCBRSampleTableLayout(\_:flavor:)](cmdoesbigendiansounddescriptionrequirelegacycbrsampletablelayout%28__flavor_%29.md): Returns a Boolean value that indicates whether the sample tables need to use the legacy constant bit-rate encoding layout.
- [CMSwapBigEndianSoundDescriptionToHost(\_:\_:)](cmswapbigendiansounddescriptiontohost%28____%29.md): Converts a sound description data structure from big-endian to host-endian, in place.
- [CMSwapHostEndianSoundDescriptionToBig(\_:\_:)](cmswaphostendiansounddescriptiontobig%28____%29.md): Converts a sound description data structure from host-endian to big-endian, in place.
- [CMAudioFormatDescriptionCreateFromBigEndianSoundDescriptionData(allocator:bigEndianSoundDescriptionData:size:flavor:formatDescriptionOut:)](cmaudioformatdescriptioncreatefrombigendiansounddescriptiondata%28allocator_bigendiansounddescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates an audio format description from a big-endian sound description data structure.
- [CMAudioFormatDescriptionCreateFromBigEndianSoundDescriptionBlockBuffer(allocator:bigEndianSoundDescriptionBlockBuffer:flavor:formatDescriptionOut:)](cmaudioformatdescriptioncreatefrombigendiansounddescriptionblockbuffer%28allocator_bigendiansounddescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates an audio format description from a big-endian sound description data structure in a buffer.
- [CMAudioFormatDescriptionCopyAsBigEndianSoundDescriptionBlockBuffer(allocator:audioFormatDescription:flavor:blockBufferOut:)](cmaudioformatdescriptioncopyasbigendiansounddescriptionblockbuffer%28allocator_audioformatdescription_flavor_blockbufferout_%29.md): Copies the contents of an audio format description to a buffer in big-endian byte ordering.

# CMAudioFormatDescriptionCreate (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a format description for an audio media stream.

## Declaration

```objectivec
extern OSStatus CMAudioFormatDescriptionCreate(CFAllocatorRef allocator, const AudioStreamBasicDescription *asbd, size_t layoutSize, const AudioChannelLayout *layout, size_t magicCookieSize, const void *magicCookie, CFDictionaryRef extensions, CMAudioFormatDescriptionRef*formatDescriptionOut);
```

## Parameters

- `allocator`: `CFAllocator` to be used. Pass `kCFAllocatorDefault` or `NULL` to use the default allocator.
- `asbd`: Audio format description (see `CoreAudioTypes.h`). This information is required.
- `layoutSize`: Size, in bytes, of audio channel layout. 0 if layout is `NULL`.
- `layout`: Audio channel layout (see CoreAudioTypes.h). Can be `NULL`.
- `magicCookieSize`: Size, in bytes, of magic cookie. 0 if `magicCookie` is `NULL`.
- `magicCookie`: Magic cookie. This information is required for some formats, and must be `NULL` for all others.
- `extensions`: Dictionary of extension key/value pairs.  Keys are always `CFStrings`.                                                                            Values are always property list objects (ie. `CFData`, `CFString`, `CFArray`, `CFDictionary`, `CFDate`, `CFBoolean`, or `CFNumber`). Can be `NULL`.
- `formatDescriptionOut`: On output, returns the newly created audio `CMFormatDescription`.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

The `absd` is required, the channel layout is optional, and the magic cookie is required  for some compression formats (and must be NULL for all others). The caller owns the returned `CMFormatDescription`, and must release it when done with it.  The `ASBD`, magic cookie, channel layout, and extensions are all copied (the extensions are deep-copied).  The caller can deallocate them or re-use them after making this call.

## See Also

### Working with Audio Descriptions

- [CMSoundDescriptionFlavor](cmsounddescriptionflavor.md): Types that represent sound format descriptions.
- [CMAudioFormatDescriptionCreateSummary](cmaudioformatdescriptioncreatesummary%28allocator_formatdescriptionarray_flags_formatdescriptionout_%29.md): Creates a summary audio format description from an array of descriptions.
- [CMAudioFormatDescriptionEqual](cmaudioformatdescriptionequal%28__otherformatdescription_equalitymask_equalitymaskout_%29.md): Returns a Boolean value that indicates whether the two audio format descriptions are equal.
- [CMAudioFormatDescriptionGetChannelLayout](cmaudioformatdescriptiongetchannellayout%28__sizeout_%29.md): Returns a read-only pointer to, and the size of, the audio channel layout inside an audio format description.
- [CMAudioFormatDescriptionGetFormatList](cmaudioformatdescriptiongetformatlist%28__sizeout_%29.md): Returns a read-only pointer to, and size of, the array of audio format list item structures in an audio format description.
- [CMAudioFormatDescriptionGetMagicCookie](cmaudioformatdescriptiongetmagiccookie%28__sizeout_%29.md): Returns a read-only pointer to, and size of, the magic cookie in an audio format description.
- [CMAudioFormatDescriptionGetMostCompatibleFormat](cmaudioformatdescriptiongetmostcompatibleformat%28__%29.md): Returns a read-only pointer to the appropriate audio format list item in an audio format description.
- [CMAudioFormatDescriptionGetRichestDecodableFormat](cmaudioformatdescriptiongetrichestdecodableformat%28__%29.md): Returns a read-only pointer to the appropriate audio format list item in an audio format description.
- [CMAudioFormatDescriptionGetStreamBasicDescription](cmaudioformatdescriptiongetstreambasicdescription%28__%29.md): Returns a read-only pointer to the audio stream description in an audio format description.
- [CMDoesBigEndianSoundDescriptionRequireLegacyCBRSampleTableLayout](cmdoesbigendiansounddescriptionrequirelegacycbrsampletablelayout%28__flavor_%29.md): Returns a Boolean value that indicates whether the sample tables need to use the legacy constant bit-rate encoding layout.
- [CMSwapBigEndianSoundDescriptionToHost](cmswapbigendiansounddescriptiontohost%28____%29.md): Converts a sound description data structure from big-endian to host-endian, in place.
- [CMSwapHostEndianSoundDescriptionToBig](cmswaphostendiansounddescriptiontobig%28____%29.md): Converts a sound description data structure from host-endian to big-endian, in place.
- [CMAudioFormatDescriptionCreateFromBigEndianSoundDescriptionData](cmaudioformatdescriptioncreatefrombigendiansounddescriptiondata%28allocator_bigendiansounddescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates an audio format description from a big-endian sound description data structure.
- [CMAudioFormatDescriptionCreateFromBigEndianSoundDescriptionBlockBuffer](cmaudioformatdescriptioncreatefrombigendiansounddescriptionblockbuffer%28allocator_bigendiansounddescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates an audio format description from a big-endian sound description data structure in a buffer.
- [CMAudioFormatDescriptionCopyAsBigEndianSoundDescriptionBlockBuffer](cmaudioformatdescriptioncopyasbigendiansounddescriptionblockbuffer%28allocator_audioformatdescription_flavor_blockbufferout_%29.md): Copies the contents of an audio format description to a buffer in big-endian byte ordering.
