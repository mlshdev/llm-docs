> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmclosedcaptionformatdescriptioncreatefrombigendianclosedcaptiondescriptionblockbuffer(allocator:bigendianclosedcaptiondescriptionblockbuffer:flavor:formatdescriptionout:)](https://developer.apple.com/documentation/coremedia/cmclosedcaptionformatdescriptioncreatefrombigendianclosedcaptiondescriptionblockbuffer(allocator:bigendianclosedcaptiondescriptionblockbuffer:flavor:formatdescriptionout:))

# CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionBlockBuffer(allocator:bigEndianClosedCaptionDescriptionBlockBuffer:flavor:formatDescriptionOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a closed caption format description from a big-endian closed caption description structure in a buffer.

## Declaration

```swift
func CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionBlockBuffer(allocator: CFAllocator?, bigEndianClosedCaptionDescriptionBlockBuffer closedCaptionDescriptionBlockBuffer: CMBlockBuffer, flavor: CMClosedCaptionDescriptionFlavor?, formatDescriptionOut: UnsafeMutablePointer<CMClosedCaptionFormatDescription?>) -> OSStatus
```

## Parameters

- `allocator`: Allocator to use for allocating the `CMClosedCaptionFormatDescription` object. May be `NULL`.
- `closedCaptionDescriptionBlockBuffer`: `CMBlockBuffer` containing ClosedCaptionDescription data structure in big-endian byte ordering.
- `flavor`: Reserved for future use. Pass `NULL` for QuickTime Movie or ISO flavor.
- `formatDescriptionOut`: Receives new `CMClosedCaptionFormatDescription`.

## See Also

### Working with Closed Captioning Descriptions

- [CMClosedCaptionDescriptionFlavor](cmclosedcaptiondescriptionflavor.md): Types that represent closed caption format descriptions.
- [CMClosedCaptionFormatDescriptionCopyAsBigEndianClosedCaptionDescriptionBlockBuffer(allocator:closedCaptionFormatDescription:flavor:blockBufferOut:)](cmclosedcaptionformatdescriptioncopyasbigendianclosedcaptiondescriptionblockbuffer%28allocator_closedcaptionformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a closed caption format description to a buffer in big-endian byte order.
- [CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionData(allocator:bigEndianClosedCaptionDescriptionData:size:flavor:formatDescriptionOut:)](cmclosedcaptionformatdescriptioncreatefrombigendianclosedcaptiondescriptiondata%28allocator_bigendianclosedcaptiondescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates a closed caption format description from a big-endian closed caption description structure.
- [CMSwapHostEndianClosedCaptionDescriptionToBig(\_:\_:)](cmswaphostendianclosedcaptiondescriptiontobig%28____%29.md): Converts a closed caption description structure from host-endian to big-endian, in place.
- [CMSwapBigEndianClosedCaptionDescriptionToHost(\_:\_:)](cmswapbigendianclosedcaptiondescriptiontohost%28____%29.md): Converts a closed caption description structure from big-endian to host-endian, in place.

# CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionBlockBuffer (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a closed caption format description from a big-endian closed caption description structure in a buffer.

## Declaration

```objectivec
extern OSStatus CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionBlockBuffer(CFAllocatorRef allocator, CMBlockBufferRef closedCaptionDescriptionBlockBuffer, CMClosedCaptionDescriptionFlavor flavor, CMClosedCaptionFormatDescriptionRef*formatDescriptionOut);
```

## Parameters

- `allocator`: Allocator to use for allocating the `CMClosedCaptionFormatDescription` object. May be `NULL`.
- `closedCaptionDescriptionBlockBuffer`: `CMBlockBuffer` containing ClosedCaptionDescription data structure in big-endian byte ordering.
- `flavor`: Reserved for future use. Pass `NULL` for QuickTime Movie or ISO flavor.
- `formatDescriptionOut`: Receives new `CMClosedCaptionFormatDescription`.

## See Also

### Working with Closed Captioning Descriptions

- [CMClosedCaptionDescriptionFlavor](cmclosedcaptiondescriptionflavor.md): Types that represent closed caption format descriptions.
- [CMClosedCaptionFormatDescriptionCopyAsBigEndianClosedCaptionDescriptionBlockBuffer](cmclosedcaptionformatdescriptioncopyasbigendianclosedcaptiondescriptionblockbuffer%28allocator_closedcaptionformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a closed caption format description to a buffer in big-endian byte order.
- [CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionData](cmclosedcaptionformatdescriptioncreatefrombigendianclosedcaptiondescriptiondata%28allocator_bigendianclosedcaptiondescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates a closed caption format description from a big-endian closed caption description structure.
- [CMSwapHostEndianClosedCaptionDescriptionToBig](cmswaphostendianclosedcaptiondescriptiontobig%28____%29.md): Converts a closed caption description structure from host-endian to big-endian, in place.
- [CMSwapBigEndianClosedCaptionDescriptionToHost](cmswapbigendianclosedcaptiondescriptiontohost%28____%29.md): Converts a closed caption description structure from big-endian to host-endian, in place.
