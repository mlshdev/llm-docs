> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmswaphostendianmetadatadescriptiontobig(_:_:)](https://developer.apple.com/documentation/coremedia/cmswaphostendianmetadatadescriptiontobig(_:_:))

# CMSwapHostEndianMetadataDescriptionToBig(\_:\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Converts a metadata description data structure from host-endian to big-endian, in place.

## Declaration

```swift
func CMSwapHostEndianMetadataDescriptionToBig(_ metadataDescriptionData: UnsafeMutablePointer<UInt8>, _ metadataDescriptionSize: Int) -> OSStatus
```

## Parameters

- `metadataDescriptionData`: MetadataDescription data structure in host-endian byte ordering to be converted to big-endian byte ordering.
- `metadataDescriptionSize`: Size of MetadataDescription data structure.

## See Also

### Working with Metadata Descriptions

- [CMMetadataDescriptionFlavor](cmmetadatadescriptionflavor.md): Types that represent metadata format descriptions.
- [CMMetadataFormatDescriptionCreateWithKeys(allocator:metadataType:keys:formatDescriptionOut:)](cmmetadataformatdescriptioncreatewithkeys%28allocator_metadatatype_keys_formatdescriptionout_%29.md): Creates a metadata format description with the metadata keys you specify.
- [CMMetadataFormatDescriptionGetKeyWithLocalID(\_:localKeyID:)](cmmetadataformatdescriptiongetkeywithlocalid%28__localkeyid_%29.md): Returns the key for the local identifier.
- [CMMetadataFormatDescriptionCopyAsBigEndianMetadataDescriptionBlockBuffer(allocator:metadataFormatDescription:flavor:blockBufferOut:)](cmmetadataformatdescriptioncopyasbigendianmetadatadescriptionblockbuffer%28allocator_metadataformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a metadata format description to a buffer in big-endian byte order.
- [CMMetadataFormatDescriptionCreateByMergingMetadataFormatDescriptions(allocator:sourceDescription:otherSourceDescription:formatDescriptionOut:)](cmmetadataformatdescriptioncreatebymergingmetadataformatdescriptions%28allocator_sourcedescription_othersourcedescription_formatdescriptionout_%29.md): Creates a metadata format description object by merging with another description.
- [CMMetadataFormatDescriptionCreateFromBigEndianMetadataDescriptionBlockBuffer(allocator:bigEndianMetadataDescriptionBlockBuffer:flavor:formatDescriptionOut:)](cmmetadataformatdescriptioncreatefrombigendianmetadatadescriptionblockbuffer%28allocator_bigendianmetadatadescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates a metadata format description from a big-endian metadata description structure inside a buffer.
- [CMMetadataFormatDescriptionCreateFromBigEndianMetadataDescriptionData(allocator:bigEndianMetadataDescriptionData:size:flavor:formatDescriptionOut:)](cmmetadataformatdescriptioncreatefrombigendianmetadatadescriptiondata%28allocator_bigendianmetadatadescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates a metadata format description from a big-endian metadata description structure.
- [CMMetadataFormatDescriptionCreateWithMetadataFormatDescriptionAndMetadataSpecifications(allocator:sourceDescription:metadataSpecifications:formatDescriptionOut:)](cmmetadataformatdescriptioncreatewithmetadataformatdescriptionandmetadataspecifications%28allocator_sourcedescription_metadataspecifications_formatdescriptionout_%29.md): Creates a metadata format description by extending an existing description with the values you specify.
- [CMMetadataFormatDescriptionCreateWithMetadataSpecifications(allocator:metadataType:metadataSpecifications:formatDescriptionOut:)](cmmetadataformatdescriptioncreatewithmetadataspecifications%28allocator_metadatatype_metadataspecifications_formatdescriptionout_%29.md): Creates a metadata format description with the specifications you specify.
- [CMSwapBigEndianMetadataDescriptionToHost(\_:\_:)](cmswapbigendianmetadatadescriptiontohost%28____%29.md): Converts a metadata description data structure from big-endian to host-endian, in place.
- [CMMetadataFormatDescriptionGetIdentifiers(\_:)](cmmetadataformatdescriptiongetidentifiers%28__%29.md): Returns an array of metadata identifiers from a metadata format description.

# CMSwapHostEndianMetadataDescriptionToBig (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Converts a metadata description data structure from host-endian to big-endian, in place.

## Declaration

```objectivec
extern OSStatus CMSwapHostEndianMetadataDescriptionToBig(uint8_t *metadataDescriptionData, size_t metadataDescriptionSize);
```

## Parameters

- `metadataDescriptionData`: MetadataDescription data structure in host-endian byte ordering to be converted to big-endian byte ordering.
- `metadataDescriptionSize`: Size of MetadataDescription data structure.

## See Also

### Working with Metadata Descriptions

- [CMMetadataDescriptionFlavor](cmmetadatadescriptionflavor.md): Types that represent metadata format descriptions.
- [CMMetadataFormatDescriptionCreateWithKeys](cmmetadataformatdescriptioncreatewithkeys%28allocator_metadatatype_keys_formatdescriptionout_%29.md): Creates a metadata format description with the metadata keys you specify.
- [CMMetadataFormatDescriptionGetKeyWithLocalID](cmmetadataformatdescriptiongetkeywithlocalid%28__localkeyid_%29.md): Returns the key for the local identifier.
- [CMMetadataFormatDescriptionCopyAsBigEndianMetadataDescriptionBlockBuffer](cmmetadataformatdescriptioncopyasbigendianmetadatadescriptionblockbuffer%28allocator_metadataformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a metadata format description to a buffer in big-endian byte order.
- [CMMetadataFormatDescriptionCreateByMergingMetadataFormatDescriptions](cmmetadataformatdescriptioncreatebymergingmetadataformatdescriptions%28allocator_sourcedescription_othersourcedescription_formatdescriptionout_%29.md): Creates a metadata format description object by merging with another description.
- [CMMetadataFormatDescriptionCreateFromBigEndianMetadataDescriptionBlockBuffer](cmmetadataformatdescriptioncreatefrombigendianmetadatadescriptionblockbuffer%28allocator_bigendianmetadatadescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates a metadata format description from a big-endian metadata description structure inside a buffer.
- [CMMetadataFormatDescriptionCreateFromBigEndianMetadataDescriptionData](cmmetadataformatdescriptioncreatefrombigendianmetadatadescriptiondata%28allocator_bigendianmetadatadescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates a metadata format description from a big-endian metadata description structure.
- [CMMetadataFormatDescriptionCreateWithMetadataFormatDescriptionAndMetadataSpecifications](cmmetadataformatdescriptioncreatewithmetadataformatdescriptionandmetadataspecifications%28allocator_sourcedescription_metadataspecifications_formatdescriptionout_%29.md): Creates a metadata format description by extending an existing description with the values you specify.
- [CMMetadataFormatDescriptionCreateWithMetadataSpecifications](cmmetadataformatdescriptioncreatewithmetadataspecifications%28allocator_metadatatype_metadataspecifications_formatdescriptionout_%29.md): Creates a metadata format description with the specifications you specify.
- [CMSwapBigEndianMetadataDescriptionToHost](cmswapbigendianmetadatadescriptiontohost%28____%29.md): Converts a metadata description data structure from big-endian to host-endian, in place.
- [CMMetadataFormatDescriptionGetIdentifiers](cmmetadataformatdescriptiongetidentifiers%28__%29.md): Returns an array of metadata identifiers from a metadata format description.
