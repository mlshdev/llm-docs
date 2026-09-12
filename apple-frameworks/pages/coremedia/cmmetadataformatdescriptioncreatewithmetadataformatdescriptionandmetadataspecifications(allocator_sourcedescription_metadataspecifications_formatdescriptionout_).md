> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmetadataformatdescriptioncreatewithmetadataformatdescriptionandmetadataspecifications(allocator:sourcedescription:metadataspecifications:formatdescriptionout:)](https://developer.apple.com/documentation/coremedia/cmmetadataformatdescriptioncreatewithmetadataformatdescriptionandmetadataspecifications(allocator:sourcedescription:metadataspecifications:formatdescriptionout:))

# CMMetadataFormatDescriptionCreateWithMetadataFormatDescriptionAndMetadataSpecifications(allocator:sourceDescription:metadataSpecifications:formatDescriptionOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a metadata format description by extending an existing description with the values you specify.

## Declaration

```swift
func CMMetadataFormatDescriptionCreateWithMetadataFormatDescriptionAndMetadataSpecifications(allocator: CFAllocator?, sourceDescription: CMMetadataFormatDescription, metadataSpecifications: CFArray, formatDescriptionOut: UnsafeMutablePointer<CMMetadataFormatDescription?>) -> OSStatus
```

## Parameters

- `allocator`: CFAllocator to be used. kCFAllocatorDefault if you don’t care.
- `sourceDescription`: Source metadata format description being extended
- `metadataSpecifications`: An array of dictionaries, each dictionary supplies a metadata identifier, a datatype, and an optional language tag.
- `formatDescriptionOut`: Returned newly created metadata CMFormatDescription

## See Also

### Working with Metadata Descriptions

- [CMMetadataDescriptionFlavor](cmmetadatadescriptionflavor.md): Types that represent metadata format descriptions.
- [CMMetadataFormatDescriptionCreateWithKeys(allocator:metadataType:keys:formatDescriptionOut:)](cmmetadataformatdescriptioncreatewithkeys%28allocator_metadatatype_keys_formatdescriptionout_%29.md): Creates a metadata format description with the metadata keys you specify.
- [CMMetadataFormatDescriptionGetKeyWithLocalID(\_:localKeyID:)](cmmetadataformatdescriptiongetkeywithlocalid%28__localkeyid_%29.md): Returns the key for the local identifier.
- [CMMetadataFormatDescriptionCopyAsBigEndianMetadataDescriptionBlockBuffer(allocator:metadataFormatDescription:flavor:blockBufferOut:)](cmmetadataformatdescriptioncopyasbigendianmetadatadescriptionblockbuffer%28allocator_metadataformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a metadata format description to a buffer in big-endian byte order.
- [CMMetadataFormatDescriptionCreateByMergingMetadataFormatDescriptions(allocator:sourceDescription:otherSourceDescription:formatDescriptionOut:)](cmmetadataformatdescriptioncreatebymergingmetadataformatdescriptions%28allocator_sourcedescription_othersourcedescription_formatdescriptionout_%29.md): Creates a metadata format description object by merging with another description.
- [CMMetadataFormatDescriptionCreateFromBigEndianMetadataDescriptionBlockBuffer(allocator:bigEndianMetadataDescriptionBlockBuffer:flavor:formatDescriptionOut:)](cmmetadataformatdescriptioncreatefrombigendianmetadatadescriptionblockbuffer%28allocator_bigendianmetadatadescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates a metadata format description from a big-endian metadata description structure inside a buffer.
- [CMMetadataFormatDescriptionCreateFromBigEndianMetadataDescriptionData(allocator:bigEndianMetadataDescriptionData:size:flavor:formatDescriptionOut:)](cmmetadataformatdescriptioncreatefrombigendianmetadatadescriptiondata%28allocator_bigendianmetadatadescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates a metadata format description from a big-endian metadata description structure.
- [CMMetadataFormatDescriptionCreateWithMetadataSpecifications(allocator:metadataType:metadataSpecifications:formatDescriptionOut:)](cmmetadataformatdescriptioncreatewithmetadataspecifications%28allocator_metadatatype_metadataspecifications_formatdescriptionout_%29.md): Creates a metadata format description with the specifications you specify.
- [CMSwapBigEndianMetadataDescriptionToHost(\_:\_:)](cmswapbigendianmetadatadescriptiontohost%28____%29.md): Converts a metadata description data structure from big-endian to host-endian, in place.
- [CMSwapHostEndianMetadataDescriptionToBig(\_:\_:)](cmswaphostendianmetadatadescriptiontobig%28____%29.md): Converts a metadata description data structure from host-endian to big-endian, in place.
- [CMMetadataFormatDescriptionGetIdentifiers(\_:)](cmmetadataformatdescriptiongetidentifiers%28__%29.md): Returns an array of metadata identifiers from a metadata format description.

# CMMetadataFormatDescriptionCreateWithMetadataFormatDescriptionAndMetadataSpecifications (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a metadata format description by extending an existing description with the values you specify.

## Declaration

```objectivec
extern OSStatus CMMetadataFormatDescriptionCreateWithMetadataFormatDescriptionAndMetadataSpecifications(CFAllocatorRef allocator, CMMetadataFormatDescriptionRef sourceDescription, CFArrayRef metadataSpecifications, CMMetadataFormatDescriptionRef*formatDescriptionOut);
```

## Parameters

- `allocator`: CFAllocator to be used. kCFAllocatorDefault if you don’t care.
- `sourceDescription`: Source metadata format description being extended
- `metadataSpecifications`: An array of dictionaries, each dictionary supplies a metadata identifier, a datatype, and an optional language tag.
- `formatDescriptionOut`: Returned newly created metadata CMFormatDescription

## See Also

### Working with Metadata Descriptions

- [CMMetadataDescriptionFlavor](cmmetadatadescriptionflavor.md): Types that represent metadata format descriptions.
- [CMMetadataFormatDescriptionCreateWithKeys](cmmetadataformatdescriptioncreatewithkeys%28allocator_metadatatype_keys_formatdescriptionout_%29.md): Creates a metadata format description with the metadata keys you specify.
- [CMMetadataFormatDescriptionGetKeyWithLocalID](cmmetadataformatdescriptiongetkeywithlocalid%28__localkeyid_%29.md): Returns the key for the local identifier.
- [CMMetadataFormatDescriptionCopyAsBigEndianMetadataDescriptionBlockBuffer](cmmetadataformatdescriptioncopyasbigendianmetadatadescriptionblockbuffer%28allocator_metadataformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a metadata format description to a buffer in big-endian byte order.
- [CMMetadataFormatDescriptionCreateByMergingMetadataFormatDescriptions](cmmetadataformatdescriptioncreatebymergingmetadataformatdescriptions%28allocator_sourcedescription_othersourcedescription_formatdescriptionout_%29.md): Creates a metadata format description object by merging with another description.
- [CMMetadataFormatDescriptionCreateFromBigEndianMetadataDescriptionBlockBuffer](cmmetadataformatdescriptioncreatefrombigendianmetadatadescriptionblockbuffer%28allocator_bigendianmetadatadescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates a metadata format description from a big-endian metadata description structure inside a buffer.
- [CMMetadataFormatDescriptionCreateFromBigEndianMetadataDescriptionData](cmmetadataformatdescriptioncreatefrombigendianmetadatadescriptiondata%28allocator_bigendianmetadatadescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates a metadata format description from a big-endian metadata description structure.
- [CMMetadataFormatDescriptionCreateWithMetadataSpecifications](cmmetadataformatdescriptioncreatewithmetadataspecifications%28allocator_metadatatype_metadataspecifications_formatdescriptionout_%29.md): Creates a metadata format description with the specifications you specify.
- [CMSwapBigEndianMetadataDescriptionToHost](cmswapbigendianmetadatadescriptiontohost%28____%29.md): Converts a metadata description data structure from big-endian to host-endian, in place.
- [CMSwapHostEndianMetadataDescriptionToBig](cmswaphostendianmetadatadescriptiontobig%28____%29.md): Converts a metadata description data structure from host-endian to big-endian, in place.
- [CMMetadataFormatDescriptionGetIdentifiers](cmmetadataformatdescriptiongetidentifiers%28__%29.md): Returns an array of metadata identifiers from a metadata format description.
