> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmetadatadatatyperegistrygetbasedatatypeforconformingdatatype(_:)](https://developer.apple.com/documentation/coremedia/cmmetadatadatatyperegistrygetbasedatatypeforconformingdatatype(_:))

# CMMetadataDataTypeRegistryGetBaseDataTypeForConformingDataType(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the base data type identifier that a data type conforms to.

## Declaration

```swift
func CMMetadataDataTypeRegistryGetBaseDataTypeForConformingDataType(_ dataType: CFString) -> CFString
```

## Parameters

- `dataType`: Identifier of the data type to be queried.

<a id="return-value"></a>

## Return Value

Identifier of the base data type to which the given data type conforms.

<a id="Discussion"></a>

## Discussion

There are a set of base data types that seed the data type registry. All valid data types will have their conformance search end with a base data type.

## See Also

### Inspecting Metadata

- [CMMetadataDataTypeRegistryDataTypeIsRegistered(\_:)](cmmetadatadatatyperegistrydatatypeisregistered%28__%29.md): Returns a Boolean value that indicates the registration status of a data type identifier.
- [CMMetadataDataTypeRegistryGetDataTypeDescription(\_:)](cmmetadatadatatyperegistrygetdatatypedescription%28__%29.md): Returns the data type description if it exists.
- [CMMetadataDataTypeRegistryGetConformingDataTypes(\_:)](cmmetadatadatatyperegistrygetconformingdatatypes%28__%29.md): Returns the conforming data types for the data type, if any.
- [CMMetadataDataTypeRegistryDataTypeConformsToDataType(\_:conformsTo:)](cmmetadatadatatyperegistrydatatypeconformstodatatype%28__conformsto_%29.md): Returns a Boolean value that indicates whether a data type conforms to another data type.
- [CMMetadataDataTypeRegistryDataTypeIsBaseDataType(\_:)](cmmetadatadatatyperegistrydatatypeisbasedatatype%28__%29.md): Returns a Boolean value that indicates whether a data type identifier represents a base data type.
- [CMMetadataDataTypeRegistryGetBaseDataTypes()](cmmetadatadatatyperegistrygetbasedatatypes%28%29.md): Returns an array of base data type identifiers.

# CMMetadataDataTypeRegistryGetBaseDataTypeForConformingDataType (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the base data type identifier that a data type conforms to.

## Declaration

```objectivec
extern CFStringRefCMMetadataDataTypeRegistryGetBaseDataTypeForConformingDataType(CFStringRef dataType);
```

## Parameters

- `dataType`: Identifier of the data type to be queried.

<a id="return-value"></a>

## Return Value

Identifier of the base data type to which the given data type conforms.

<a id="Discussion"></a>

## Discussion

There are a set of base data types that seed the data type registry. All valid data types will have their conformance search end with a base data type.

## See Also

### Inspecting Metadata

- [CMMetadataDataTypeRegistryDataTypeIsRegistered](cmmetadatadatatyperegistrydatatypeisregistered%28__%29.md): Returns a Boolean value that indicates the registration status of a data type identifier.
- [CMMetadataDataTypeRegistryGetDataTypeDescription](cmmetadatadatatyperegistrygetdatatypedescription%28__%29.md): Returns the data type description if it exists.
- [CMMetadataDataTypeRegistryGetConformingDataTypes](cmmetadatadatatyperegistrygetconformingdatatypes%28__%29.md): Returns the conforming data types for the data type, if any.
- [CMMetadataDataTypeRegistryDataTypeConformsToDataType](cmmetadatadatatyperegistrydatatypeconformstodatatype%28__conformsto_%29.md): Returns a Boolean value that indicates whether a data type conforms to another data type.
- [CMMetadataDataTypeRegistryDataTypeIsBaseDataType](cmmetadatadatatyperegistrydatatypeisbasedatatype%28__%29.md): Returns a Boolean value that indicates whether a data type identifier represents a base data type.
- [CMMetadataDataTypeRegistryGetBaseDataTypes](cmmetadatadatatyperegistrygetbasedatatypes%28%29.md): Returns an array of base data type identifiers.
