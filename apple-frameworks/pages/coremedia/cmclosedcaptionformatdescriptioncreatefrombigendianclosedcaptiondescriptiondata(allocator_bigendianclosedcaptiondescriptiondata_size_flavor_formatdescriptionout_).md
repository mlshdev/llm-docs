> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmclosedcaptionformatdescriptioncreatefrombigendianclosedcaptiondescriptiondata(allocator:bigendianclosedcaptiondescriptiondata:size:flavor:formatdescriptionout:)](https://developer.apple.com/documentation/coremedia/cmclosedcaptionformatdescriptioncreatefrombigendianclosedcaptiondescriptiondata(allocator:bigendianclosedcaptiondescriptiondata:size:flavor:formatdescriptionout:))

# CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionData(allocator:bigEndianClosedCaptionDescriptionData:size:flavor:formatDescriptionOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a closed caption format description from a big-endian closed caption description structure.

## Declaration

```swift
func CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionData(allocator: CFAllocator?, bigEndianClosedCaptionDescriptionData closedCaptionDescriptionData: UnsafePointer<UInt8>, size: Int, flavor: CMClosedCaptionDescriptionFlavor?, formatDescriptionOut: UnsafeMutablePointer<CMClosedCaptionFormatDescription?>) -> OSStatus
```

## Parameters

- `allocator`: Allocator to use for allocating the `CMClosedCaptionFormatDescription` object. May be `NULL`.
- `closedCaptionDescriptionData`: ClosedCaptionDescription data structure in big-endian byte ordering.
- `size`: Size of ClosedCaptionDescription data structure.
- `flavor`: Reserved for future use. Pass `NULL` for QuickTime Movie or ISO flavor.
- `formatDescriptionOut`: Receives new `CMClosedCaptionFormatDescription`.

## See Also

### Working with Closed Captioning Descriptions

- [CMClosedCaptionDescriptionFlavor](cmclosedcaptiondescriptionflavor.md): Types that represent closed caption format descriptions.
- [CMClosedCaptionFormatDescriptionCopyAsBigEndianClosedCaptionDescriptionBlockBuffer(allocator:closedCaptionFormatDescription:flavor:blockBufferOut:)](cmclosedcaptionformatdescriptioncopyasbigendianclosedcaptiondescriptionblockbuffer%28allocator_closedcaptionformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a closed caption format description to a buffer in big-endian byte order.
- [CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionBlockBuffer(allocator:bigEndianClosedCaptionDescriptionBlockBuffer:flavor:formatDescriptionOut:)](cmclosedcaptionformatdescriptioncreatefrombigendianclosedcaptiondescriptionblockbuffer%28allocator_bigendianclosedcaptiondescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates a closed caption format description from a big-endian closed caption description structure in a buffer.
- [CMSwapHostEndianClosedCaptionDescriptionToBig(\_:\_:)](cmswaphostendianclosedcaptiondescriptiontobig%28____%29.md): Converts a closed caption description structure from host-endian to big-endian, in place.
- [CMSwapBigEndianClosedCaptionDescriptionToHost(\_:\_:)](cmswapbigendianclosedcaptiondescriptiontohost%28____%29.md): Converts a closed caption description structure from big-endian to host-endian, in place.

# CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionData (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a closed caption format description from a big-endian closed caption description structure.

## Declaration

```objectivec
extern OSStatus CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionData(CFAllocatorRef allocator, const uint8_t *closedCaptionDescriptionData, size_t size, CMClosedCaptionDescriptionFlavor flavor, CMClosedCaptionFormatDescriptionRef*formatDescriptionOut);
```

## Parameters

- `allocator`: Allocator to use for allocating the `CMClosedCaptionFormatDescription` object. May be `NULL`.
- `closedCaptionDescriptionData`: ClosedCaptionDescription data structure in big-endian byte ordering.
- `size`: Size of ClosedCaptionDescription data structure.
- `flavor`: Reserved for future use. Pass `NULL` for QuickTime Movie or ISO flavor.
- `formatDescriptionOut`: Receives new `CMClosedCaptionFormatDescription`.

## See Also

### Working with Closed Captioning Descriptions

- [CMClosedCaptionDescriptionFlavor](cmclosedcaptiondescriptionflavor.md): Types that represent closed caption format descriptions.
- [CMClosedCaptionFormatDescriptionCopyAsBigEndianClosedCaptionDescriptionBlockBuffer](cmclosedcaptionformatdescriptioncopyasbigendianclosedcaptiondescriptionblockbuffer%28allocator_closedcaptionformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a closed caption format description to a buffer in big-endian byte order.
- [CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionBlockBuffer](cmclosedcaptionformatdescriptioncreatefrombigendianclosedcaptiondescriptionblockbuffer%28allocator_bigendianclosedcaptiondescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates a closed caption format description from a big-endian closed caption description structure in a buffer.
- [CMSwapHostEndianClosedCaptionDescriptionToBig](cmswaphostendianclosedcaptiondescriptiontobig%28____%29.md): Converts a closed caption description structure from host-endian to big-endian, in place.
- [CMSwapBigEndianClosedCaptionDescriptionToHost](cmswapbigendianclosedcaptiondescriptiontohost%28____%29.md): Converts a closed caption description structure from big-endian to host-endian, in place.
