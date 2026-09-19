> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideocustompropertyinfo

# IOUserVideoCustomPropertyInfo

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Structure  
**Availability:** DriverKit 27.0+ beta

A description of a a custom property that allow the Host to marshal the data between the Host and its clients.

## Declaration

```objectivec
struct IOUserVideoCustomPropertyInfo;
```

## Topics

### Property metadata

- [mSelector](iouservideocustompropertyinfo/mselector.md): Beta. The property selector of the custom property.
- [mPropertyDataType](iouservideocustompropertyinfo/mpropertydatatype.md): Beta. The data type of the data of the custom property.
- [mQualifierDataType](iouservideocustompropertyinfo/mqualifierdatatype.md): Beta. The data type of the qualifier data of the custom property.

## See Also

### Working with custom properties

- [IOUserVideoObjectPropertyAddress](iouservideoobjectpropertyaddress.md): Beta. A data structure that contains all the three parts to identify a specific property, for easy transmission.
- [IOUserVideoCustomPropertyDataType](iouservideocustompropertydatatype.md): Beta. Data qualifier types used for custom properties.
