> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimecodeformatdescriptioncreatefrombigendiantimecodedescriptionblockbuffer(allocator:bigendiantimecodedescriptionblockbuffer:flavor:formatdescriptionout:)](https://developer.apple.com/documentation/coremedia/cmtimecodeformatdescriptioncreatefrombigendiantimecodedescriptionblockbuffer(allocator:bigendiantimecodedescriptionblockbuffer:flavor:formatdescriptionout:))

# CMTimeCodeFormatDescriptionCreateFromBigEndianTimeCodeDescriptionBlockBuffer(allocator:bigEndianTimeCodeDescriptionBlockBuffer:flavor:formatDescriptionOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a time code format description from a big-endian time code description data structure in a buffer.

## Declaration

```swift
func CMTimeCodeFormatDescriptionCreateFromBigEndianTimeCodeDescriptionBlockBuffer(allocator: CFAllocator?, bigEndianTimeCodeDescriptionBlockBuffer timeCodeDescriptionBlockBuffer: CMBlockBuffer, flavor: CMTimeCodeDescriptionFlavor?, formatDescriptionOut: UnsafeMutablePointer<CMTimeCodeFormatDescription?>) -> OSStatus
```

## Parameters

- `allocator`: Allocator to use for allocating the CMTimeCodeFormatDescription object. May be NULL.
- `timeCodeDescriptionBlockBuffer`: CMBlockBuffer containing TimeCodeDescription data structure in big-endian byte ordering.
- `flavor`: Reserved for future use. Pass NULL for QuickTime Movie or ISO flavor.
- `formatDescriptionOut`: Receives new CMTimeCodeFormatDescription.

## See Also

### Working with Time Code Descriptions

- [CMTimeCodeDescriptionFlavor](cmtimecodedescriptionflavor.md): Types that represent time code format descriptions.
- [CMTimeCodeFormatDescriptionCreate(allocator:timeCodeFormatType:frameDuration:frameQuanta:flags:extensions:formatDescriptionOut:)](cmtimecodeformatdescriptioncreate%28allocator_timecodeformattype_frameduration_framequanta_flags_extensions_formatdescriptionout_%29.md): Creates a format description for time code media.
- [CMTimeCodeFormatDescriptionGetFrameDuration(\_:)](cmtimecodeformatdescriptiongetframeduration%28__%29.md): Returns the duration of each frame.
- [CMTimeCodeFormatDescriptionGetFrameQuanta(\_:)](cmtimecodeformatdescriptiongetframequanta%28__%29.md): Returns the frames per second for a time code, or frames per tick in counter mode.
- [CMTimeCodeFormatDescriptionGetTimeCodeFlags(\_:)](cmtimecodeformatdescriptiongettimecodeflags%28__%29.md): Returns time code flags.
- [CMTimeCodeFormatDescriptionCopyAsBigEndianTimeCodeDescriptionBlockBuffer(allocator:timeCodeFormatDescription:flavor:blockBufferOut:)](cmtimecodeformatdescriptioncopyasbigendiantimecodedescriptionblockbuffer%28allocator_timecodeformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a time code format description to a buffer in big-endian byte order.
- [CMTimeCodeFormatDescriptionCreateFromBigEndianTimeCodeDescriptionData(allocator:bigEndianTimeCodeDescriptionData:size:flavor:formatDescriptionOut:)](cmtimecodeformatdescriptioncreatefrombigendiantimecodedescriptiondata%28allocator_bigendiantimecodedescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates a time code format description from a big-endian time code description structure.
- [CMSwapBigEndianTimeCodeDescriptionToHost(\_:\_:)](cmswapbigendiantimecodedescriptiontohost%28____%29.md): Converts a time code description data structure from big-endian to host-endian, in place.
- [CMSwapHostEndianTimeCodeDescriptionToBig(\_:\_:)](cmswaphostendiantimecodedescriptiontobig%28____%29.md): Converts a time code description data structure from host-endian to big-endian, in place.

# CMTimeCodeFormatDescriptionCreateFromBigEndianTimeCodeDescriptionBlockBuffer (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a time code format description from a big-endian time code description data structure in a buffer.

## Declaration

```objectivec
extern OSStatus CMTimeCodeFormatDescriptionCreateFromBigEndianTimeCodeDescriptionBlockBuffer(CFAllocatorRef allocator, CMBlockBufferRef timeCodeDescriptionBlockBuffer, CMTimeCodeDescriptionFlavor flavor, CMTimeCodeFormatDescriptionRef*formatDescriptionOut);
```

## Parameters

- `allocator`: Allocator to use for allocating the CMTimeCodeFormatDescription object. May be NULL.
- `timeCodeDescriptionBlockBuffer`: CMBlockBuffer containing TimeCodeDescription data structure in big-endian byte ordering.
- `flavor`: Reserved for future use. Pass NULL for QuickTime Movie or ISO flavor.
- `formatDescriptionOut`: Receives new CMTimeCodeFormatDescription.

## See Also

### Working with Time Code Descriptions

- [CMTimeCodeDescriptionFlavor](cmtimecodedescriptionflavor.md): Types that represent time code format descriptions.
- [CMTimeCodeFormatDescriptionCreate](cmtimecodeformatdescriptioncreate%28allocator_timecodeformattype_frameduration_framequanta_flags_extensions_formatdescriptionout_%29.md): Creates a format description for time code media.
- [CMTimeCodeFormatDescriptionGetFrameDuration](cmtimecodeformatdescriptiongetframeduration%28__%29.md): Returns the duration of each frame.
- [CMTimeCodeFormatDescriptionGetFrameQuanta](cmtimecodeformatdescriptiongetframequanta%28__%29.md): Returns the frames per second for a time code, or frames per tick in counter mode.
- [CMTimeCodeFormatDescriptionGetTimeCodeFlags](cmtimecodeformatdescriptiongettimecodeflags%28__%29.md): Returns time code flags.
- [CMTimeCodeFormatDescriptionCopyAsBigEndianTimeCodeDescriptionBlockBuffer](cmtimecodeformatdescriptioncopyasbigendiantimecodedescriptionblockbuffer%28allocator_timecodeformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a time code format description to a buffer in big-endian byte order.
- [CMTimeCodeFormatDescriptionCreateFromBigEndianTimeCodeDescriptionData](cmtimecodeformatdescriptioncreatefrombigendiantimecodedescriptiondata%28allocator_bigendiantimecodedescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates a time code format description from a big-endian time code description structure.
- [CMSwapBigEndianTimeCodeDescriptionToHost](cmswapbigendiantimecodedescriptiontohost%28____%29.md): Converts a time code description data structure from big-endian to host-endian, in place.
- [CMSwapHostEndianTimeCodeDescriptionToBig](cmswaphostendiantimecodedescriptiontobig%28____%29.md): Converts a time code description data structure from host-endian to big-endian, in place.
