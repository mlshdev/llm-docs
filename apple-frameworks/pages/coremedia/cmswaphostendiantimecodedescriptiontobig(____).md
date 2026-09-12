> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmswaphostendiantimecodedescriptiontobig(_:_:)](https://developer.apple.com/documentation/coremedia/cmswaphostendiantimecodedescriptiontobig(_:_:))

# CMSwapHostEndianTimeCodeDescriptionToBig(\_:\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Converts a time code description data structure from host-endian to big-endian, in place.

## Declaration

```swift
func CMSwapHostEndianTimeCodeDescriptionToBig(_ timeCodeDescriptionData: UnsafeMutablePointer<UInt8>, _ timeCodeDescriptionSize: Int) -> OSStatus
```

## Parameters

- `timeCodeDescriptionData`: TimeCodeDescription data structure in host-endian byte ordering to be converted to big-endian byte ordering.
- `timeCodeDescriptionSize`: Size of TimeCodeDescription data structure.

## See Also

### Working with Time Code Descriptions

- [CMTimeCodeDescriptionFlavor](cmtimecodedescriptionflavor.md): Types that represent time code format descriptions.
- [CMTimeCodeFormatDescriptionCreate(allocator:timeCodeFormatType:frameDuration:frameQuanta:flags:extensions:formatDescriptionOut:)](cmtimecodeformatdescriptioncreate%28allocator_timecodeformattype_frameduration_framequanta_flags_extensions_formatdescriptionout_%29.md): Creates a format description for time code media.
- [CMTimeCodeFormatDescriptionGetFrameDuration(\_:)](cmtimecodeformatdescriptiongetframeduration%28__%29.md): Returns the duration of each frame.
- [CMTimeCodeFormatDescriptionGetFrameQuanta(\_:)](cmtimecodeformatdescriptiongetframequanta%28__%29.md): Returns the frames per second for a time code, or frames per tick in counter mode.
- [CMTimeCodeFormatDescriptionGetTimeCodeFlags(\_:)](cmtimecodeformatdescriptiongettimecodeflags%28__%29.md): Returns time code flags.
- [CMTimeCodeFormatDescriptionCopyAsBigEndianTimeCodeDescriptionBlockBuffer(allocator:timeCodeFormatDescription:flavor:blockBufferOut:)](cmtimecodeformatdescriptioncopyasbigendiantimecodedescriptionblockbuffer%28allocator_timecodeformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a time code format description to a buffer in big-endian byte order.
- [CMTimeCodeFormatDescriptionCreateFromBigEndianTimeCodeDescriptionBlockBuffer(allocator:bigEndianTimeCodeDescriptionBlockBuffer:flavor:formatDescriptionOut:)](cmtimecodeformatdescriptioncreatefrombigendiantimecodedescriptionblockbuffer%28allocator_bigendiantimecodedescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates a time code format description from a big-endian time code description data structure in a buffer.
- [CMTimeCodeFormatDescriptionCreateFromBigEndianTimeCodeDescriptionData(allocator:bigEndianTimeCodeDescriptionData:size:flavor:formatDescriptionOut:)](cmtimecodeformatdescriptioncreatefrombigendiantimecodedescriptiondata%28allocator_bigendiantimecodedescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates a time code format description from a big-endian time code description structure.
- [CMSwapBigEndianTimeCodeDescriptionToHost(\_:\_:)](cmswapbigendiantimecodedescriptiontohost%28____%29.md): Converts a time code description data structure from big-endian to host-endian, in place.

# CMSwapHostEndianTimeCodeDescriptionToBig (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Converts a time code description data structure from host-endian to big-endian, in place.

## Declaration

```objectivec
extern OSStatus CMSwapHostEndianTimeCodeDescriptionToBig(uint8_t *timeCodeDescriptionData, size_t timeCodeDescriptionSize);
```

## Parameters

- `timeCodeDescriptionData`: TimeCodeDescription data structure in host-endian byte ordering to be converted to big-endian byte ordering.
- `timeCodeDescriptionSize`: Size of TimeCodeDescription data structure.

## See Also

### Working with Time Code Descriptions

- [CMTimeCodeDescriptionFlavor](cmtimecodedescriptionflavor.md): Types that represent time code format descriptions.
- [CMTimeCodeFormatDescriptionCreate](cmtimecodeformatdescriptioncreate%28allocator_timecodeformattype_frameduration_framequanta_flags_extensions_formatdescriptionout_%29.md): Creates a format description for time code media.
- [CMTimeCodeFormatDescriptionGetFrameDuration](cmtimecodeformatdescriptiongetframeduration%28__%29.md): Returns the duration of each frame.
- [CMTimeCodeFormatDescriptionGetFrameQuanta](cmtimecodeformatdescriptiongetframequanta%28__%29.md): Returns the frames per second for a time code, or frames per tick in counter mode.
- [CMTimeCodeFormatDescriptionGetTimeCodeFlags](cmtimecodeformatdescriptiongettimecodeflags%28__%29.md): Returns time code flags.
- [CMTimeCodeFormatDescriptionCopyAsBigEndianTimeCodeDescriptionBlockBuffer](cmtimecodeformatdescriptioncopyasbigendiantimecodedescriptionblockbuffer%28allocator_timecodeformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a time code format description to a buffer in big-endian byte order.
- [CMTimeCodeFormatDescriptionCreateFromBigEndianTimeCodeDescriptionBlockBuffer](cmtimecodeformatdescriptioncreatefrombigendiantimecodedescriptionblockbuffer%28allocator_bigendiantimecodedescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates a time code format description from a big-endian time code description data structure in a buffer.
- [CMTimeCodeFormatDescriptionCreateFromBigEndianTimeCodeDescriptionData](cmtimecodeformatdescriptioncreatefrombigendiantimecodedescriptiondata%28allocator_bigendiantimecodedescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates a time code format description from a big-endian time code description structure.
- [CMSwapBigEndianTimeCodeDescriptionToHost](cmswapbigendiantimecodedescriptiontohost%28____%29.md): Converts a time code description data structure from big-endian to host-endian, in place.
