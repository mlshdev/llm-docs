> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimecodeformatdescriptioncopyasbigendiantimecodedescriptionblockbuffer(allocator:timecodeformatdescription:flavor:blockbufferout:)](https://developer.apple.com/documentation/coremedia/cmtimecodeformatdescriptioncopyasbigendiantimecodedescriptionblockbuffer(allocator:timecodeformatdescription:flavor:blockbufferout:))

# CMTimeCodeFormatDescriptionCopyAsBigEndianTimeCodeDescriptionBlockBuffer(allocator:timeCodeFormatDescription:flavor:blockBufferOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Copies the contents of a time code format description to a buffer in big-endian byte order.

## Declaration

```swift
func CMTimeCodeFormatDescriptionCopyAsBigEndianTimeCodeDescriptionBlockBuffer(allocator: CFAllocator?, timeCodeFormatDescription: CMTimeCodeFormatDescription, flavor: CMTimeCodeDescriptionFlavor?, blockBufferOut: UnsafeMutablePointer<CMBlockBuffer?>) -> OSStatus
```

## Parameters

- `allocator`: Allocator to use for allocating the CMBlockBuffer object. May be NULL.
- `timeCodeFormatDescription`: CMTimeCodeFormatDescription to be copied.
- `flavor`: Reserved for future use. Pass NULL for QuickTime Movie or ISO flavor.
- `blockBufferOut`: Receives new CMBlockBuffer containing TimeCodeDescription data structure in big-endian byte ordering.

<a id="Discussion"></a>

## Discussion

On return, the caller owns the returned CMBlockBuffer, and must release it when done with it.

> **Note**

>  The dataRefIndex field of the SampleDescription is intentionally filled with garbage values (0xFFFF).  The caller must overwrite these values with a valid dataRefIndex if writing the SampleDescription to a QuickTime/ISO file.

## See Also

### Working with Time Code Descriptions

- [CMTimeCodeDescriptionFlavor](cmtimecodedescriptionflavor.md): Types that represent time code format descriptions.
- [CMTimeCodeFormatDescriptionCreate(allocator:timeCodeFormatType:frameDuration:frameQuanta:flags:extensions:formatDescriptionOut:)](cmtimecodeformatdescriptioncreate%28allocator_timecodeformattype_frameduration_framequanta_flags_extensions_formatdescriptionout_%29.md): Creates a format description for time code media.
- [CMTimeCodeFormatDescriptionGetFrameDuration(\_:)](cmtimecodeformatdescriptiongetframeduration%28__%29.md): Returns the duration of each frame.
- [CMTimeCodeFormatDescriptionGetFrameQuanta(\_:)](cmtimecodeformatdescriptiongetframequanta%28__%29.md): Returns the frames per second for a time code, or frames per tick in counter mode.
- [CMTimeCodeFormatDescriptionGetTimeCodeFlags(\_:)](cmtimecodeformatdescriptiongettimecodeflags%28__%29.md): Returns time code flags.
- [CMTimeCodeFormatDescriptionCreateFromBigEndianTimeCodeDescriptionBlockBuffer(allocator:bigEndianTimeCodeDescriptionBlockBuffer:flavor:formatDescriptionOut:)](cmtimecodeformatdescriptioncreatefrombigendiantimecodedescriptionblockbuffer%28allocator_bigendiantimecodedescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates a time code format description from a big-endian time code description data structure in a buffer.
- [CMTimeCodeFormatDescriptionCreateFromBigEndianTimeCodeDescriptionData(allocator:bigEndianTimeCodeDescriptionData:size:flavor:formatDescriptionOut:)](cmtimecodeformatdescriptioncreatefrombigendiantimecodedescriptiondata%28allocator_bigendiantimecodedescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates a time code format description from a big-endian time code description structure.
- [CMSwapBigEndianTimeCodeDescriptionToHost(\_:\_:)](cmswapbigendiantimecodedescriptiontohost%28____%29.md): Converts a time code description data structure from big-endian to host-endian, in place.
- [CMSwapHostEndianTimeCodeDescriptionToBig(\_:\_:)](cmswaphostendiantimecodedescriptiontobig%28____%29.md): Converts a time code description data structure from host-endian to big-endian, in place.

# CMTimeCodeFormatDescriptionCopyAsBigEndianTimeCodeDescriptionBlockBuffer (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Copies the contents of a time code format description to a buffer in big-endian byte order.

## Declaration

```objectivec
extern OSStatus CMTimeCodeFormatDescriptionCopyAsBigEndianTimeCodeDescriptionBlockBuffer(CFAllocatorRef allocator, CMTimeCodeFormatDescriptionRef timeCodeFormatDescription, CMTimeCodeDescriptionFlavor flavor, CMBlockBufferRef*blockBufferOut);
```

## Parameters

- `allocator`: Allocator to use for allocating the CMBlockBuffer object. May be NULL.
- `timeCodeFormatDescription`: CMTimeCodeFormatDescription to be copied.
- `flavor`: Reserved for future use. Pass NULL for QuickTime Movie or ISO flavor.
- `blockBufferOut`: Receives new CMBlockBuffer containing TimeCodeDescription data structure in big-endian byte ordering.

<a id="Discussion"></a>

## Discussion

On return, the caller owns the returned CMBlockBuffer, and must release it when done with it.

> **Note**

>  The dataRefIndex field of the SampleDescription is intentionally filled with garbage values (0xFFFF).  The caller must overwrite these values with a valid dataRefIndex if writing the SampleDescription to a QuickTime/ISO file.

## See Also

### Working with Time Code Descriptions

- [CMTimeCodeDescriptionFlavor](cmtimecodedescriptionflavor.md): Types that represent time code format descriptions.
- [CMTimeCodeFormatDescriptionCreate](cmtimecodeformatdescriptioncreate%28allocator_timecodeformattype_frameduration_framequanta_flags_extensions_formatdescriptionout_%29.md): Creates a format description for time code media.
- [CMTimeCodeFormatDescriptionGetFrameDuration](cmtimecodeformatdescriptiongetframeduration%28__%29.md): Returns the duration of each frame.
- [CMTimeCodeFormatDescriptionGetFrameQuanta](cmtimecodeformatdescriptiongetframequanta%28__%29.md): Returns the frames per second for a time code, or frames per tick in counter mode.
- [CMTimeCodeFormatDescriptionGetTimeCodeFlags](cmtimecodeformatdescriptiongettimecodeflags%28__%29.md): Returns time code flags.
- [CMTimeCodeFormatDescriptionCreateFromBigEndianTimeCodeDescriptionBlockBuffer](cmtimecodeformatdescriptioncreatefrombigendiantimecodedescriptionblockbuffer%28allocator_bigendiantimecodedescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates a time code format description from a big-endian time code description data structure in a buffer.
- [CMTimeCodeFormatDescriptionCreateFromBigEndianTimeCodeDescriptionData](cmtimecodeformatdescriptioncreatefrombigendiantimecodedescriptiondata%28allocator_bigendiantimecodedescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates a time code format description from a big-endian time code description structure.
- [CMSwapBigEndianTimeCodeDescriptionToHost](cmswapbigendiantimecodedescriptiontohost%28____%29.md): Converts a time code description data structure from big-endian to host-endian, in place.
- [CMSwapHostEndianTimeCodeDescriptionToBig](cmswaphostendiantimecodedescriptiontobig%28____%29.md): Converts a time code description data structure from host-endian to big-endian, in place.
