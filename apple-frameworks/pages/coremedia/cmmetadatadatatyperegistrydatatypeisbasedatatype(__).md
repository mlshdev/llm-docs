> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmetadatadatatyperegistrydatatypeisbasedatatype(_:)](https://developer.apple.com/documentation/coremedia/cmmetadatadatatyperegistrydatatypeisbasedatatype(_:))

# CMMetadataDataTypeRegistryDataTypeIsBaseDataType(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether a data type identifier represents a base data type.

## Declaration

```swift
func CMMetadataDataTypeRegistryDataTypeIsBaseDataType(_ dataType: CFString) -> Bool
```

## Parameters

- `dataType`: Identifier of the data type to be queried.

<a id="return-value"></a>

## Return Value

[kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) if first data type conforms to the second data type; [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) otherwise.

<a id="Discussion"></a>

## Discussion

This is simply a convenience method to test to see if a given data type identifier is in the array returned by [CMMetadataDataTypeRegistryGetBaseDataTypes()](cmmetadatadatatyperegistrygetbasedatatypes%28%29.md).

## See Also

### Inspecting Metadata

- [CMMetadataDataTypeRegistryDataTypeIsRegistered(\_:)](cmmetadatadatatyperegistrydatatypeisregistered%28__%29.md): Returns a Boolean value that indicates the registration status of a data type identifier.
- [CMMetadataDataTypeRegistryGetDataTypeDescription(\_:)](cmmetadatadatatyperegistrygetdatatypedescription%28__%29.md): Returns the data type description if it exists.
- [CMMetadataDataTypeRegistryGetConformingDataTypes(\_:)](cmmetadatadatatyperegistrygetconformingdatatypes%28__%29.md): Returns the conforming data types for the data type, if any.
- [CMMetadataDataTypeRegistryDataTypeConformsToDataType(\_:conformsTo:)](cmmetadatadatatyperegistrydatatypeconformstodatatype%28__conformsto_%29.md): Returns a Boolean value that indicates whether a data type conforms to another data type.
- [CMMetadataDataTypeRegistryGetBaseDataTypeForConformingDataType(\_:)](cmmetadatadatatyperegistrygetbasedatatypeforconformingdatatype%28__%29.md): Returns the base data type identifier that a data type conforms to.
- [CMMetadataDataTypeRegistryGetBaseDataTypes()](cmmetadatadatatyperegistrygetbasedatatypes%28%29.md): Returns an array of base data type identifiers.

# CMMetadataDataTypeRegistryDataTypeIsBaseDataType (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether a data type identifier represents a base data type.

## Declaration

```objectivec
extern Boolean CMMetadataDataTypeRegistryDataTypeIsBaseDataType(CFStringRef dataType);
```

## Parameters

- `dataType`: Identifier of the data type to be queried.

<a id="return-value"></a>

## Return Value

[kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) if first data type conforms to the second data type; [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) otherwise.

<a id="Discussion"></a>

## Discussion

This is simply a convenience method to test to see if a given data type identifier is in the array returned by [CMMetadataDataTypeRegistryGetBaseDataTypes](cmmetadatadatatyperegistrygetbasedatatypes%28%29.md).

## See Also

### Inspecting Metadata

- [CMMetadataDataTypeRegistryDataTypeIsRegistered](cmmetadatadatatyperegistrydatatypeisregistered%28__%29.md): Returns a Boolean value that indicates the registration status of a data type identifier.
- [CMMetadataDataTypeRegistryGetDataTypeDescription](cmmetadatadatatyperegistrygetdatatypedescription%28__%29.md): Returns the data type description if it exists.
- [CMMetadataDataTypeRegistryGetConformingDataTypes](cmmetadatadatatyperegistrygetconformingdatatypes%28__%29.md): Returns the conforming data types for the data type, if any.
- [CMMetadataDataTypeRegistryDataTypeConformsToDataType](cmmetadatadatatyperegistrydatatypeconformstodatatype%28__conformsto_%29.md): Returns a Boolean value that indicates whether a data type conforms to another data type.
- [CMMetadataDataTypeRegistryGetBaseDataTypeForConformingDataType](cmmetadatadatatyperegistrygetbasedatatypeforconformingdatatype%28__%29.md): Returns the base data type identifier that a data type conforms to.
- [CMMetadataDataTypeRegistryGetBaseDataTypes](cmmetadatadatatyperegistrygetbasedatatypes%28%29.md): Returns an array of base data type identifiers.
