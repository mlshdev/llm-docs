> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmclosedcaptiondescriptionflavor](https://developer.apple.com/documentation/coremedia/cmclosedcaptiondescriptionflavor)

# CMClosedCaptionDescriptionFlavor (Swift)

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Types that represent closed caption format descriptions.

## Declaration

```swift
struct CMClosedCaptionDescriptionFlavor
```

## Topics

### Initializers

- [init(\_:)](cmclosedcaptiondescriptionflavor/init%28__%29.md): Creates a closed caption description flavor.
- [init(rawValue:)](cmclosedcaptiondescriptionflavor/init%28rawvalue_%29.md): Creates a closed caption description flavor.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with Closed Captioning Descriptions

- [CMClosedCaptionFormatDescriptionCopyAsBigEndianClosedCaptionDescriptionBlockBuffer(allocator:closedCaptionFormatDescription:flavor:blockBufferOut:)](cmclosedcaptionformatdescriptioncopyasbigendianclosedcaptiondescriptionblockbuffer%28allocator_closedcaptionformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a closed caption format description to a buffer in big-endian byte order.
- [CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionBlockBuffer(allocator:bigEndianClosedCaptionDescriptionBlockBuffer:flavor:formatDescriptionOut:)](cmclosedcaptionformatdescriptioncreatefrombigendianclosedcaptiondescriptionblockbuffer%28allocator_bigendianclosedcaptiondescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates a closed caption format description from a big-endian closed caption description structure in a buffer.
- [CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionData(allocator:bigEndianClosedCaptionDescriptionData:size:flavor:formatDescriptionOut:)](cmclosedcaptionformatdescriptioncreatefrombigendianclosedcaptiondescriptiondata%28allocator_bigendianclosedcaptiondescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates a closed caption format description from a big-endian closed caption description structure.
- [CMSwapHostEndianClosedCaptionDescriptionToBig(\_:\_:)](cmswaphostendianclosedcaptiondescriptiontobig%28____%29.md): Converts a closed caption description structure from host-endian to big-endian, in place.
- [CMSwapBigEndianClosedCaptionDescriptionToHost(\_:\_:)](cmswapbigendianclosedcaptiondescriptiontohost%28____%29.md): Converts a closed caption description structure from big-endian to host-endian, in place.

# CMClosedCaptionDescriptionFlavor (Objective-C)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Types that represent closed caption format descriptions.

## Declaration

```objectivec
typedef CFStringRef CMClosedCaptionDescriptionFlavor;
```

## See Also

### Working with Closed Captioning Descriptions

- [CMClosedCaptionFormatDescriptionCopyAsBigEndianClosedCaptionDescriptionBlockBuffer](cmclosedcaptionformatdescriptioncopyasbigendianclosedcaptiondescriptionblockbuffer%28allocator_closedcaptionformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a closed caption format description to a buffer in big-endian byte order.
- [CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionBlockBuffer](cmclosedcaptionformatdescriptioncreatefrombigendianclosedcaptiondescriptionblockbuffer%28allocator_bigendianclosedcaptiondescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates a closed caption format description from a big-endian closed caption description structure in a buffer.
- [CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionData](cmclosedcaptionformatdescriptioncreatefrombigendianclosedcaptiondescriptiondata%28allocator_bigendianclosedcaptiondescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates a closed caption format description from a big-endian closed caption description structure.
- [CMSwapHostEndianClosedCaptionDescriptionToBig](cmswaphostendianclosedcaptiondescriptiontobig%28____%29.md): Converts a closed caption description structure from host-endian to big-endian, in place.
- [CMSwapBigEndianClosedCaptionDescriptionToHost](cmswapbigendianclosedcaptiondescriptiontohost%28____%29.md): Converts a closed caption description structure from big-endian to host-endian, in place.
