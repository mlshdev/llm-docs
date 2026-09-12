> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmetadata](https://developer.apple.com/documentation/coremedia/cmmetadata)

# CMMetadata (Swift)

**Framework:** Core Media  
**Kind:** API Collection

The APIs for working with the framework’s Metadata Identifier Services and Metadata Data Type Registry.

<a id="overview"></a>

## Overview

The Core Media framework provides two services: Metadata Identifier Services and the Metadata Data Type Registry.

Metadata Identifier Services provide a means of encoding the metadata identifying tuple (four-byte key namespace and N-byte key value) into [CFString](../corefoundation/cfstring.md), and back again.

The Metadata Data Type Registry allows a process to register metadata data types that conform to a base data type and (optionally) other registered data types. The registry simplifies the process of creating format descriptions for nontrivial metadata values and allowing clients to indicate how to interpret metadata.

## Topics

### Creating Metadata Identifiers

- [CMMetadataCreateIdentifierForKeyAndKeySpace(allocator:key:keySpace:identifierOut:)](cmmetadatacreateidentifierforkeyandkeyspace%28allocator_key_keyspace_identifierout_%29.md): Creates a URL-like string identifier that represents a key or keyspace tuple.
- [CMMetadataCreateKeyFromIdentifier(allocator:identifier:keyOut:)](cmmetadatacreatekeyfromidentifier%28allocator_identifier_keyout_%29.md): Creates a copy of the key by using an identifier.
- [CMMetadataCreateKeyFromIdentifierAsCFData(allocator:identifier:keyOut:)](cmmetadatacreatekeyfromidentifierascfdata%28allocator_identifier_keyout_%29.md): Creates a copy of the key by using an identifier, and results in a core foundation data object.
- [CMMetadataCreateKeySpaceFromIdentifier(allocator:identifier:keySpaceOut:)](cmmetadatacreatekeyspacefromidentifier%28allocator_identifier_keyspaceout_%29.md): Creates a copy of the keyspace by using an identifier.

### Registering Metadata

- [CMMetadataDataTypeRegistryRegisterDataType(\_:description:conformingDataTypes:)](cmmetadatadatatyperegistryregisterdatatype%28__description_conformingdatatypes_%29.md): Register a data type with the data type registry.

### Inspecting Metadata

- [CMMetadataDataTypeRegistryDataTypeIsRegistered(\_:)](cmmetadatadatatyperegistrydatatypeisregistered%28__%29.md): Returns a Boolean value that indicates the registration status of a data type identifier.
- [CMMetadataDataTypeRegistryGetDataTypeDescription(\_:)](cmmetadatadatatyperegistrygetdatatypedescription%28__%29.md): Returns the data type description if it exists.
- [CMMetadataDataTypeRegistryGetConformingDataTypes(\_:)](cmmetadatadatatyperegistrygetconformingdatatypes%28__%29.md): Returns the conforming data types for the data type, if any.
- [CMMetadataDataTypeRegistryDataTypeConformsToDataType(\_:conformsTo:)](cmmetadatadatatyperegistrydatatypeconformstodatatype%28__conformsto_%29.md): Returns a Boolean value that indicates whether a data type conforms to another data type.
- [CMMetadataDataTypeRegistryDataTypeIsBaseDataType(\_:)](cmmetadatadatatyperegistrydatatypeisbasedatatype%28__%29.md): Returns a Boolean value that indicates whether a data type identifier represents a base data type.
- [CMMetadataDataTypeRegistryGetBaseDataTypeForConformingDataType(\_:)](cmmetadatadatatyperegistrygetbasedatatypeforconformingdatatype%28__%29.md): Returns the base data type identifier that a data type conforms to.
- [CMMetadataDataTypeRegistryGetBaseDataTypes()](cmmetadatadatatyperegistrygetbasedatatypes%28%29.md): Returns an array of base data type identifiers.

### Constants

- [Metadata Identifier Error Codes](metadata-identifier-errors.md): Error codes that indicate metadata identifier errors.
- [Metadata Registry Error Codes](metadata-registry-errors.md): Error codes that indicate metadata registry errors.
- [Metadata Identifier Keyspaces](metadata-identifier-keyspaces.md): Constants that describe metadata identifier keyspaces.
- [Metadata Identifiers](metadata-identifiers.md): Constants that describe metadata identifiers.
- [Metadata Base Data Types](metadata-base-data-types.md): Constants that describe metadata base data types.
- [Metadata Data Types](metadata-data-types.md): Constants that describe metadata data types.

## See Also

### Metadata

- [CMTag](cmtag-api.md): Types and interfaces for working with Core Media tags.
- [CMTag](cmtag-swift.class.md): A tag to set additional metadata on media buffers.
- [CMTypedTag](cmtypedtag.md): A tag to set additional metadata on media buffers, with an associated Swift type for its value.
- [CMTagCollection](cmtagcollection.md): Objective-C types and interfaces for working with Core Media tag collections.
- [CMProjectionType](cmprojectiontype.md): Constants describing the projection surface information in a 3D video buffer or channel.
- [CMStereoViewComponents](cmstereoviewcomponents.md): Constants describing the stereo views contained within a buffer or channel.
- [CMStereoViewInterpretationOptions](cmstereoviewinterpretationoptions.md): Create a set of stereo view interpretation options from a constant.
- [CMPackingType](cmpackingtype.md): The type of packing within each video frame, if any.

# CMMetadata (Objective-C)

**Framework:** Core Media  
**Kind:** API Collection

The APIs for working with the framework’s Metadata Identifier Services and Metadata Data Type Registry.

<a id="overview"></a>

## Overview

The Core Media framework provides two services: Metadata Identifier Services and the Metadata Data Type Registry.

Metadata Identifier Services provide a means of encoding the metadata identifying tuple (four-byte key namespace and N-byte key value) into [CFStringRef](../corefoundation/cfstring.md), and back again.

The Metadata Data Type Registry allows a process to register metadata data types that conform to a base data type and (optionally) other registered data types. The registry simplifies the process of creating format descriptions for nontrivial metadata values and allowing clients to indicate how to interpret metadata.

## Topics

### Creating Metadata Identifiers

- [CMMetadataCreateIdentifierForKeyAndKeySpace](cmmetadatacreateidentifierforkeyandkeyspace%28allocator_key_keyspace_identifierout_%29.md): Creates a URL-like string identifier that represents a key or keyspace tuple.
- [CMMetadataCreateKeyFromIdentifier](cmmetadatacreatekeyfromidentifier%28allocator_identifier_keyout_%29.md): Creates a copy of the key by using an identifier.
- [CMMetadataCreateKeyFromIdentifierAsCFData](cmmetadatacreatekeyfromidentifierascfdata%28allocator_identifier_keyout_%29.md): Creates a copy of the key by using an identifier, and results in a core foundation data object.
- [CMMetadataCreateKeySpaceFromIdentifier](cmmetadatacreatekeyspacefromidentifier%28allocator_identifier_keyspaceout_%29.md): Creates a copy of the keyspace by using an identifier.

### Registering Metadata

- [CMMetadataDataTypeRegistryRegisterDataType](cmmetadatadatatyperegistryregisterdatatype%28__description_conformingdatatypes_%29.md): Register a data type with the data type registry.

### Inspecting Metadata

- [CMMetadataDataTypeRegistryDataTypeIsRegistered](cmmetadatadatatyperegistrydatatypeisregistered%28__%29.md): Returns a Boolean value that indicates the registration status of a data type identifier.
- [CMMetadataDataTypeRegistryGetDataTypeDescription](cmmetadatadatatyperegistrygetdatatypedescription%28__%29.md): Returns the data type description if it exists.
- [CMMetadataDataTypeRegistryGetConformingDataTypes](cmmetadatadatatyperegistrygetconformingdatatypes%28__%29.md): Returns the conforming data types for the data type, if any.
- [CMMetadataDataTypeRegistryDataTypeConformsToDataType](cmmetadatadatatyperegistrydatatypeconformstodatatype%28__conformsto_%29.md): Returns a Boolean value that indicates whether a data type conforms to another data type.
- [CMMetadataDataTypeRegistryDataTypeIsBaseDataType](cmmetadatadatatyperegistrydatatypeisbasedatatype%28__%29.md): Returns a Boolean value that indicates whether a data type identifier represents a base data type.
- [CMMetadataDataTypeRegistryGetBaseDataTypeForConformingDataType](cmmetadatadatatyperegistrygetbasedatatypeforconformingdatatype%28__%29.md): Returns the base data type identifier that a data type conforms to.
- [CMMetadataDataTypeRegistryGetBaseDataTypes](cmmetadatadatatyperegistrygetbasedatatypes%28%29.md): Returns an array of base data type identifiers.

### Constants

- [Metadata Identifier Error Codes](metadata-identifier-errors.md): Error codes that indicate metadata identifier errors.
- [Metadata Registry Error Codes](metadata-registry-errors.md): Error codes that indicate metadata registry errors.
- [Metadata Identifier Keyspaces](metadata-identifier-keyspaces.md): Constants that describe metadata identifier keyspaces.
- [Metadata Identifiers](metadata-identifiers.md): Constants that describe metadata identifiers.
- [Metadata Base Data Types](metadata-base-data-types.md): Constants that describe metadata base data types.
- [Metadata Data Types](metadata-data-types.md): Constants that describe metadata data types.

## See Also

### Metadata

- [CMTag](cmtag-api.md): Types and interfaces for working with Core Media tags.
- [CMTagCollection](cmtagcollection.md): Objective-C types and interfaces for working with Core Media tag collections.
- [CMProjectionType](cmprojectiontype.md): Constants describing the projection surface information in a 3D video buffer or channel.
- [CMStereoViewComponents](cmstereoviewcomponents.md): Constants describing the stereo views contained within a buffer or channel.
- [CMStereoViewInterpretationOptions](cmstereoviewinterpretationoptions.md): Create a set of stereo view interpretation options from a constant.
- [CMPackingType](cmpackingtype.md): The type of packing within each video frame, if any.
