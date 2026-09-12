> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmetadataformatdescriptiongetkeywithlocalid(_:localkeyid:)](https://developer.apple.com/documentation/coremedia/cmmetadataformatdescriptiongetkeywithlocalid(_:localkeyid:))

# CMMetadataFormatDescriptionGetKeyWithLocalID(\_:localKeyID:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the key for the local identifier.

## Declaration

```swift
func CMMetadataFormatDescriptionGetKeyWithLocalID(_ desc: CMMetadataFormatDescription, localKeyID: OSType) -> CFDictionary?
```

## Parameters

- `desc`: Format description being interrogated.
- `localKeyID`: Local Id identifying the key associated with the metadata description.

<a id="return-value"></a>

## Return Value

A new dictionary containing the key specified by the localKeyID, or `NULL` if there is no key corresponding to the localKeyID.

<a id="Discussion"></a>

## Discussion

When writing a metadata track to a QuickTime movie, you can store many different kinds of metadata in one track. The format description for the track describes all of the kinds of metadata that might be present in that track.  And each kind of metadata has an id assigned to it which is unique from the others in the group.  So when individual samples of metadata are written (or read back later), they don’t contain their full description, instead they just contain the unique id (called the local id) that was assigned to them.  For instance, GPS might be local id 1, and face data might be local id 2. When someone pulls such a sample from a movie and wants to do a reverse lookup, they can call `CMMetadataFormatDescriptionGetKeyWithLocalID`, using the local id they’ve got, to get the Key associated with this metadata.

## See Also

### Working with Metadata Descriptions

- [CMMetadataDescriptionFlavor](cmmetadatadescriptionflavor.md): Types that represent metadata format descriptions.
- [CMMetadataFormatDescriptionCreateWithKeys(allocator:metadataType:keys:formatDescriptionOut:)](cmmetadataformatdescriptioncreatewithkeys%28allocator_metadatatype_keys_formatdescriptionout_%29.md): Creates a metadata format description with the metadata keys you specify.
- [CMMetadataFormatDescriptionCopyAsBigEndianMetadataDescriptionBlockBuffer(allocator:metadataFormatDescription:flavor:blockBufferOut:)](cmmetadataformatdescriptioncopyasbigendianmetadatadescriptionblockbuffer%28allocator_metadataformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a metadata format description to a buffer in big-endian byte order.
- [CMMetadataFormatDescriptionCreateByMergingMetadataFormatDescriptions(allocator:sourceDescription:otherSourceDescription:formatDescriptionOut:)](cmmetadataformatdescriptioncreatebymergingmetadataformatdescriptions%28allocator_sourcedescription_othersourcedescription_formatdescriptionout_%29.md): Creates a metadata format description object by merging with another description.
- [CMMetadataFormatDescriptionCreateFromBigEndianMetadataDescriptionBlockBuffer(allocator:bigEndianMetadataDescriptionBlockBuffer:flavor:formatDescriptionOut:)](cmmetadataformatdescriptioncreatefrombigendianmetadatadescriptionblockbuffer%28allocator_bigendianmetadatadescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates a metadata format description from a big-endian metadata description structure inside a buffer.
- [CMMetadataFormatDescriptionCreateFromBigEndianMetadataDescriptionData(allocator:bigEndianMetadataDescriptionData:size:flavor:formatDescriptionOut:)](cmmetadataformatdescriptioncreatefrombigendianmetadatadescriptiondata%28allocator_bigendianmetadatadescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates a metadata format description from a big-endian metadata description structure.
- [CMMetadataFormatDescriptionCreateWithMetadataFormatDescriptionAndMetadataSpecifications(allocator:sourceDescription:metadataSpecifications:formatDescriptionOut:)](cmmetadataformatdescriptioncreatewithmetadataformatdescriptionandmetadataspecifications%28allocator_sourcedescription_metadataspecifications_formatdescriptionout_%29.md): Creates a metadata format description by extending an existing description with the values you specify.
- [CMMetadataFormatDescriptionCreateWithMetadataSpecifications(allocator:metadataType:metadataSpecifications:formatDescriptionOut:)](cmmetadataformatdescriptioncreatewithmetadataspecifications%28allocator_metadatatype_metadataspecifications_formatdescriptionout_%29.md): Creates a metadata format description with the specifications you specify.
- [CMSwapBigEndianMetadataDescriptionToHost(\_:\_:)](cmswapbigendianmetadatadescriptiontohost%28____%29.md): Converts a metadata description data structure from big-endian to host-endian, in place.
- [CMSwapHostEndianMetadataDescriptionToBig(\_:\_:)](cmswaphostendianmetadatadescriptiontobig%28____%29.md): Converts a metadata description data structure from host-endian to big-endian, in place.
- [CMMetadataFormatDescriptionGetIdentifiers(\_:)](cmmetadataformatdescriptiongetidentifiers%28__%29.md): Returns an array of metadata identifiers from a metadata format description.

# CMMetadataFormatDescriptionGetKeyWithLocalID (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the key for the local identifier.

## Declaration

```objectivec
extern CFDictionaryRefCMMetadataFormatDescriptionGetKeyWithLocalID(CMMetadataFormatDescriptionRef desc, OSType localKeyID);
```

## Parameters

- `desc`: Format description being interrogated.
- `localKeyID`: Local Id identifying the key associated with the metadata description.

<a id="return-value"></a>

## Return Value

A new dictionary containing the key specified by the localKeyID, or `NULL` if there is no key corresponding to the localKeyID.

<a id="Discussion"></a>

## Discussion

When writing a metadata track to a QuickTime movie, you can store many different kinds of metadata in one track. The format description for the track describes all of the kinds of metadata that might be present in that track.  And each kind of metadata has an id assigned to it which is unique from the others in the group.  So when individual samples of metadata are written (or read back later), they don’t contain their full description, instead they just contain the unique id (called the local id) that was assigned to them.  For instance, GPS might be local id 1, and face data might be local id 2. When someone pulls such a sample from a movie and wants to do a reverse lookup, they can call `CMMetadataFormatDescriptionGetKeyWithLocalID`, using the local id they’ve got, to get the Key associated with this metadata.

## See Also

### Working with Metadata Descriptions

- [CMMetadataDescriptionFlavor](cmmetadatadescriptionflavor.md): Types that represent metadata format descriptions.
- [CMMetadataFormatDescriptionCreateWithKeys](cmmetadataformatdescriptioncreatewithkeys%28allocator_metadatatype_keys_formatdescriptionout_%29.md): Creates a metadata format description with the metadata keys you specify.
- [CMMetadataFormatDescriptionCopyAsBigEndianMetadataDescriptionBlockBuffer](cmmetadataformatdescriptioncopyasbigendianmetadatadescriptionblockbuffer%28allocator_metadataformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a metadata format description to a buffer in big-endian byte order.
- [CMMetadataFormatDescriptionCreateByMergingMetadataFormatDescriptions](cmmetadataformatdescriptioncreatebymergingmetadataformatdescriptions%28allocator_sourcedescription_othersourcedescription_formatdescriptionout_%29.md): Creates a metadata format description object by merging with another description.
- [CMMetadataFormatDescriptionCreateFromBigEndianMetadataDescriptionBlockBuffer](cmmetadataformatdescriptioncreatefrombigendianmetadatadescriptionblockbuffer%28allocator_bigendianmetadatadescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates a metadata format description from a big-endian metadata description structure inside a buffer.
- [CMMetadataFormatDescriptionCreateFromBigEndianMetadataDescriptionData](cmmetadataformatdescriptioncreatefrombigendianmetadatadescriptiondata%28allocator_bigendianmetadatadescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates a metadata format description from a big-endian metadata description structure.
- [CMMetadataFormatDescriptionCreateWithMetadataFormatDescriptionAndMetadataSpecifications](cmmetadataformatdescriptioncreatewithmetadataformatdescriptionandmetadataspecifications%28allocator_sourcedescription_metadataspecifications_formatdescriptionout_%29.md): Creates a metadata format description by extending an existing description with the values you specify.
- [CMMetadataFormatDescriptionCreateWithMetadataSpecifications](cmmetadataformatdescriptioncreatewithmetadataspecifications%28allocator_metadatatype_metadataspecifications_formatdescriptionout_%29.md): Creates a metadata format description with the specifications you specify.
- [CMSwapBigEndianMetadataDescriptionToHost](cmswapbigendianmetadatadescriptiontohost%28____%29.md): Converts a metadata description data structure from big-endian to host-endian, in place.
- [CMSwapHostEndianMetadataDescriptionToBig](cmswaphostendianmetadatadescriptiontobig%28____%29.md): Converts a metadata description data structure from host-endian to big-endian, in place.
- [CMMetadataFormatDescriptionGetIdentifiers](cmmetadataformatdescriptiongetidentifiers%28__%29.md): Returns an array of metadata identifiers from a metadata format description.
