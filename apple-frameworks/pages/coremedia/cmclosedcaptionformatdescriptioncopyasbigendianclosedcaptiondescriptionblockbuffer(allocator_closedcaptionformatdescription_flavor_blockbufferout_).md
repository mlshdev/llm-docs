> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmclosedcaptionformatdescriptioncopyasbigendianclosedcaptiondescriptionblockbuffer(allocator:closedcaptionformatdescription:flavor:blockbufferout:)](https://developer.apple.com/documentation/coremedia/cmclosedcaptionformatdescriptioncopyasbigendianclosedcaptiondescriptionblockbuffer(allocator:closedcaptionformatdescription:flavor:blockbufferout:))

# CMClosedCaptionFormatDescriptionCopyAsBigEndianClosedCaptionDescriptionBlockBuffer(allocator:closedCaptionFormatDescription:flavor:blockBufferOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Copies the contents of a closed caption format description to a buffer in big-endian byte order.

## Declaration

```swift
func CMClosedCaptionFormatDescriptionCopyAsBigEndianClosedCaptionDescriptionBlockBuffer(allocator: CFAllocator?, closedCaptionFormatDescription: CMClosedCaptionFormatDescription, flavor: CMClosedCaptionDescriptionFlavor?, blockBufferOut: UnsafeMutablePointer<CMBlockBuffer?>) -> OSStatus
```

## Parameters

- `allocator`: Allocator to use for allocating the `CMBlockBuffer` object. May be `NULL`.
- `closedCaptionFormatDescription`: The `CMClosedCaptionFormatDescription` to be copied.
- `flavor`: Reserved for future use. Pass `NULL` for QuickTime Movie or ISO flavor.
- `blockBufferOut`: Receives new `CMBlockBuffer` containing ClosedCaptionDescription data structure in big-endian byte ordering.

<a id="Discussion"></a>

## Discussion

On return, the caller owns the returned CMBlockBuffer, and must release it when done with it.

> **Note**

>  The `dataRefIndex` field of the SampleDescription is intentionally filled with placeholder values (`0xFFFF`). The caller must overwrite these values with a valid `dataRefIndex` if writing the SampleDescription to a QuickTime/ISO file.

## See Also

### Working with Closed Captioning Descriptions

- [CMClosedCaptionDescriptionFlavor](cmclosedcaptiondescriptionflavor.md): Types that represent closed caption format descriptions.
- [CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionBlockBuffer(allocator:bigEndianClosedCaptionDescriptionBlockBuffer:flavor:formatDescriptionOut:)](cmclosedcaptionformatdescriptioncreatefrombigendianclosedcaptiondescriptionblockbuffer%28allocator_bigendianclosedcaptiondescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates a closed caption format description from a big-endian closed caption description structure in a buffer.
- [CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionData(allocator:bigEndianClosedCaptionDescriptionData:size:flavor:formatDescriptionOut:)](cmclosedcaptionformatdescriptioncreatefrombigendianclosedcaptiondescriptiondata%28allocator_bigendianclosedcaptiondescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates a closed caption format description from a big-endian closed caption description structure.
- [CMSwapHostEndianClosedCaptionDescriptionToBig(\_:\_:)](cmswaphostendianclosedcaptiondescriptiontobig%28____%29.md): Converts a closed caption description structure from host-endian to big-endian, in place.
- [CMSwapBigEndianClosedCaptionDescriptionToHost(\_:\_:)](cmswapbigendianclosedcaptiondescriptiontohost%28____%29.md): Converts a closed caption description structure from big-endian to host-endian, in place.

# CMClosedCaptionFormatDescriptionCopyAsBigEndianClosedCaptionDescriptionBlockBuffer (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Copies the contents of a closed caption format description to a buffer in big-endian byte order.

## Declaration

```objectivec
extern OSStatus CMClosedCaptionFormatDescriptionCopyAsBigEndianClosedCaptionDescriptionBlockBuffer(CFAllocatorRef allocator, CMClosedCaptionFormatDescriptionRef closedCaptionFormatDescription, CMClosedCaptionDescriptionFlavor flavor, CMBlockBufferRef*blockBufferOut);
```

## Parameters

- `allocator`: Allocator to use for allocating the `CMBlockBuffer` object. May be `NULL`.
- `closedCaptionFormatDescription`: The `CMClosedCaptionFormatDescription` to be copied.
- `flavor`: Reserved for future use. Pass `NULL` for QuickTime Movie or ISO flavor.
- `blockBufferOut`: Receives new `CMBlockBuffer` containing ClosedCaptionDescription data structure in big-endian byte ordering.

<a id="Discussion"></a>

## Discussion

On return, the caller owns the returned CMBlockBuffer, and must release it when done with it.

> **Note**

>  The `dataRefIndex` field of the SampleDescription is intentionally filled with placeholder values (`0xFFFF`). The caller must overwrite these values with a valid `dataRefIndex` if writing the SampleDescription to a QuickTime/ISO file.

## See Also

### Working with Closed Captioning Descriptions

- [CMClosedCaptionDescriptionFlavor](cmclosedcaptiondescriptionflavor.md): Types that represent closed caption format descriptions.
- [CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionBlockBuffer](cmclosedcaptionformatdescriptioncreatefrombigendianclosedcaptiondescriptionblockbuffer%28allocator_bigendianclosedcaptiondescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates a closed caption format description from a big-endian closed caption description structure in a buffer.
- [CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionData](cmclosedcaptionformatdescriptioncreatefrombigendianclosedcaptiondescriptiondata%28allocator_bigendianclosedcaptiondescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates a closed caption format description from a big-endian closed caption description structure.
- [CMSwapHostEndianClosedCaptionDescriptionToBig](cmswaphostendianclosedcaptiondescriptiontobig%28____%29.md): Converts a closed caption description structure from host-endian to big-endian, in place.
- [CMSwapBigEndianClosedCaptionDescriptionToHost](cmswapbigendianclosedcaptiondescriptiontohost%28____%29.md): Converts a closed caption description structure from big-endian to host-endian, in place.
