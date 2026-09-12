> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmetadatadatatyperegistrydatatypeconformstodatatype(_:conformsto:)](https://developer.apple.com/documentation/coremedia/cmmetadatadatatyperegistrydatatypeconformstodatatype(_:conformsto:))

# CMMetadataDataTypeRegistryDataTypeConformsToDataType(\_:conformsTo:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether a data type conforms to another data type.

## Declaration

```swift
func CMMetadataDataTypeRegistryDataTypeConformsToDataType(_ dataType: CFString, conformsTo conformsToDataType: CFString) -> Bool
```

## Parameters

- `dataType`: Identifier of the data type to be tested.
- `conformsToDataType`: Identifier of the data type against which to test for conformance.

<a id="return-value"></a>

## Return Value

[kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) if first data type conforms to the second data type; [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) otherwise.

<a id="Discussion"></a>

## Discussion

A given data type will conform to a second data type if any of the following are true:

1. The data type identifiers are the same.
2. The first data type identifier’s conformance list contains the second data type identifier.
3. A recursive search of the conforming data types for each element in the first data type’s conformance list yields the second data type identifier.

## See Also

### Inspecting Metadata

- [CMMetadataDataTypeRegistryDataTypeIsRegistered(\_:)](cmmetadatadatatyperegistrydatatypeisregistered%28__%29.md): Returns a Boolean value that indicates the registration status of a data type identifier.
- [CMMetadataDataTypeRegistryGetDataTypeDescription(\_:)](cmmetadatadatatyperegistrygetdatatypedescription%28__%29.md): Returns the data type description if it exists.
- [CMMetadataDataTypeRegistryGetConformingDataTypes(\_:)](cmmetadatadatatyperegistrygetconformingdatatypes%28__%29.md): Returns the conforming data types for the data type, if any.
- [CMMetadataDataTypeRegistryDataTypeIsBaseDataType(\_:)](cmmetadatadatatyperegistrydatatypeisbasedatatype%28__%29.md): Returns a Boolean value that indicates whether a data type identifier represents a base data type.
- [CMMetadataDataTypeRegistryGetBaseDataTypeForConformingDataType(\_:)](cmmetadatadatatyperegistrygetbasedatatypeforconformingdatatype%28__%29.md): Returns the base data type identifier that a data type conforms to.
- [CMMetadataDataTypeRegistryGetBaseDataTypes()](cmmetadatadatatyperegistrygetbasedatatypes%28%29.md): Returns an array of base data type identifiers.

# CMMetadataDataTypeRegistryDataTypeConformsToDataType (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether a data type conforms to another data type.

## Declaration

```objectivec
extern Boolean CMMetadataDataTypeRegistryDataTypeConformsToDataType(CFStringRef dataType, CFStringRef conformsToDataType);
```

## Parameters

- `dataType`: Identifier of the data type to be tested.
- `conformsToDataType`: Identifier of the data type against which to test for conformance.

<a id="return-value"></a>

## Return Value

[kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) if first data type conforms to the second data type; [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) otherwise.

<a id="Discussion"></a>

## Discussion

A given data type will conform to a second data type if any of the following are true:

1. The data type identifiers are the same.
2. The first data type identifier’s conformance list contains the second data type identifier.
3. A recursive search of the conforming data types for each element in the first data type’s conformance list yields the second data type identifier.

## See Also

### Inspecting Metadata

- [CMMetadataDataTypeRegistryDataTypeIsRegistered](cmmetadatadatatyperegistrydatatypeisregistered%28__%29.md): Returns a Boolean value that indicates the registration status of a data type identifier.
- [CMMetadataDataTypeRegistryGetDataTypeDescription](cmmetadatadatatyperegistrygetdatatypedescription%28__%29.md): Returns the data type description if it exists.
- [CMMetadataDataTypeRegistryGetConformingDataTypes](cmmetadatadatatyperegistrygetconformingdatatypes%28__%29.md): Returns the conforming data types for the data type, if any.
- [CMMetadataDataTypeRegistryDataTypeIsBaseDataType](cmmetadatadatatyperegistrydatatypeisbasedatatype%28__%29.md): Returns a Boolean value that indicates whether a data type identifier represents a base data type.
- [CMMetadataDataTypeRegistryGetBaseDataTypeForConformingDataType](cmmetadatadatatyperegistrygetbasedatatypeforconformingdatatype%28__%29.md): Returns the base data type identifier that a data type conforms to.
- [CMMetadataDataTypeRegistryGetBaseDataTypes](cmmetadatadatatyperegistrygetbasedatatypes%28%29.md): Returns an array of base data type identifiers.
