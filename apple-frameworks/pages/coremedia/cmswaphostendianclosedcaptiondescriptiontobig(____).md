> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmswaphostendianclosedcaptiondescriptiontobig(_:_:)](https://developer.apple.com/documentation/coremedia/cmswaphostendianclosedcaptiondescriptiontobig(_:_:))

# CMSwapHostEndianClosedCaptionDescriptionToBig(\_:\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Converts a closed caption description structure from host-endian to big-endian, in place.

## Declaration

```swift
func CMSwapHostEndianClosedCaptionDescriptionToBig(_ closedCaptionDescriptionData: UnsafeMutablePointer<UInt8>, _ closedCaptionDescriptionSize: Int) -> OSStatus
```

## Parameters

- `closedCaptionDescriptionData`: ClosedCaptionDescription data structure in host-endian byte ordering to be converted to big-endian byte ordering.
- `closedCaptionDescriptionSize`: Size of ClosedCaptionDescription data structure.

## See Also

### Working with Closed Captioning Descriptions

- [CMClosedCaptionDescriptionFlavor](cmclosedcaptiondescriptionflavor.md): Types that represent closed caption format descriptions.
- [CMClosedCaptionFormatDescriptionCopyAsBigEndianClosedCaptionDescriptionBlockBuffer(allocator:closedCaptionFormatDescription:flavor:blockBufferOut:)](cmclosedcaptionformatdescriptioncopyasbigendianclosedcaptiondescriptionblockbuffer%28allocator_closedcaptionformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a closed caption format description to a buffer in big-endian byte order.
- [CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionBlockBuffer(allocator:bigEndianClosedCaptionDescriptionBlockBuffer:flavor:formatDescriptionOut:)](cmclosedcaptionformatdescriptioncreatefrombigendianclosedcaptiondescriptionblockbuffer%28allocator_bigendianclosedcaptiondescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates a closed caption format description from a big-endian closed caption description structure in a buffer.
- [CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionData(allocator:bigEndianClosedCaptionDescriptionData:size:flavor:formatDescriptionOut:)](cmclosedcaptionformatdescriptioncreatefrombigendianclosedcaptiondescriptiondata%28allocator_bigendianclosedcaptiondescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates a closed caption format description from a big-endian closed caption description structure.
- [CMSwapBigEndianClosedCaptionDescriptionToHost(\_:\_:)](cmswapbigendianclosedcaptiondescriptiontohost%28____%29.md): Converts a closed caption description structure from big-endian to host-endian, in place.

# CMSwapHostEndianClosedCaptionDescriptionToBig (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Converts a closed caption description structure from host-endian to big-endian, in place.

## Declaration

```objectivec
extern OSStatus CMSwapHostEndianClosedCaptionDescriptionToBig(uint8_t *closedCaptionDescriptionData, size_t closedCaptionDescriptionSize);
```

## Parameters

- `closedCaptionDescriptionData`: ClosedCaptionDescription data structure in host-endian byte ordering to be converted to big-endian byte ordering.
- `closedCaptionDescriptionSize`: Size of ClosedCaptionDescription data structure.

## See Also

### Working with Closed Captioning Descriptions

- [CMClosedCaptionDescriptionFlavor](cmclosedcaptiondescriptionflavor.md): Types that represent closed caption format descriptions.
- [CMClosedCaptionFormatDescriptionCopyAsBigEndianClosedCaptionDescriptionBlockBuffer](cmclosedcaptionformatdescriptioncopyasbigendianclosedcaptiondescriptionblockbuffer%28allocator_closedcaptionformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a closed caption format description to a buffer in big-endian byte order.
- [CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionBlockBuffer](cmclosedcaptionformatdescriptioncreatefrombigendianclosedcaptiondescriptionblockbuffer%28allocator_bigendianclosedcaptiondescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates a closed caption format description from a big-endian closed caption description structure in a buffer.
- [CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionData](cmclosedcaptionformatdescriptioncreatefrombigendianclosedcaptiondescriptiondata%28allocator_bigendianclosedcaptiondescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates a closed caption format description from a big-endian closed caption description structure.
- [CMSwapBigEndianClosedCaptionDescriptionToHost](cmswapbigendianclosedcaptiondescriptiontohost%28____%29.md): Converts a closed caption description structure from big-endian to host-endian, in place.
