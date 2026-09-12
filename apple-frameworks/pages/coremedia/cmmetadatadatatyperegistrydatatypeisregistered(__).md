> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmetadatadatatyperegistrydatatypeisregistered(_:)](https://developer.apple.com/documentation/coremedia/cmmetadatadatatyperegistrydatatypeisregistered(_:))

# CMMetadataDataTypeRegistryDataTypeIsRegistered(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates the registration status of a data type identifier.

## Declaration

```swift
func CMMetadataDataTypeRegistryDataTypeIsRegistered(_ dataType: CFString) -> Bool
```

## Parameters

- `dataType`: Identifier of the data type to be checked.

<a id="return-value"></a>

## Return Value

[kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) if the data type has been registered; [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) otherwise.

## See Also

### Inspecting Metadata

- [CMMetadataDataTypeRegistryGetDataTypeDescription(\_:)](cmmetadatadatatyperegistrygetdatatypedescription%28__%29.md): Returns the data type description if it exists.
- [CMMetadataDataTypeRegistryGetConformingDataTypes(\_:)](cmmetadatadatatyperegistrygetconformingdatatypes%28__%29.md): Returns the conforming data types for the data type, if any.
- [CMMetadataDataTypeRegistryDataTypeConformsToDataType(\_:conformsTo:)](cmmetadatadatatyperegistrydatatypeconformstodatatype%28__conformsto_%29.md): Returns a Boolean value that indicates whether a data type conforms to another data type.
- [CMMetadataDataTypeRegistryDataTypeIsBaseDataType(\_:)](cmmetadatadatatyperegistrydatatypeisbasedatatype%28__%29.md): Returns a Boolean value that indicates whether a data type identifier represents a base data type.
- [CMMetadataDataTypeRegistryGetBaseDataTypeForConformingDataType(\_:)](cmmetadatadatatyperegistrygetbasedatatypeforconformingdatatype%28__%29.md): Returns the base data type identifier that a data type conforms to.
- [CMMetadataDataTypeRegistryGetBaseDataTypes()](cmmetadatadatatyperegistrygetbasedatatypes%28%29.md): Returns an array of base data type identifiers.

# CMMetadataDataTypeRegistryDataTypeIsRegistered (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates the registration status of a data type identifier.

## Declaration

```objectivec
extern Boolean CMMetadataDataTypeRegistryDataTypeIsRegistered(CFStringRef dataType);
```

## Parameters

- `dataType`: Identifier of the data type to be checked.

<a id="return-value"></a>

## Return Value

[kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) if the data type has been registered; [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) otherwise.

## See Also

### Inspecting Metadata

- [CMMetadataDataTypeRegistryGetDataTypeDescription](cmmetadatadatatyperegistrygetdatatypedescription%28__%29.md): Returns the data type description if it exists.
- [CMMetadataDataTypeRegistryGetConformingDataTypes](cmmetadatadatatyperegistrygetconformingdatatypes%28__%29.md): Returns the conforming data types for the data type, if any.
- [CMMetadataDataTypeRegistryDataTypeConformsToDataType](cmmetadatadatatyperegistrydatatypeconformstodatatype%28__conformsto_%29.md): Returns a Boolean value that indicates whether a data type conforms to another data type.
- [CMMetadataDataTypeRegistryDataTypeIsBaseDataType](cmmetadatadatatyperegistrydatatypeisbasedatatype%28__%29.md): Returns a Boolean value that indicates whether a data type identifier represents a base data type.
- [CMMetadataDataTypeRegistryGetBaseDataTypeForConformingDataType](cmmetadatadatatyperegistrygetbasedatatypeforconformingdatatype%28__%29.md): Returns the base data type identifier that a data type conforms to.
- [CMMetadataDataTypeRegistryGetBaseDataTypes](cmmetadatadatatyperegistrygetbasedatatypes%28%29.md): Returns an array of base data type identifiers.
