> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/videodriverkit/iouservideocustompropertyinfo](https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideocustompropertyinfo)

# IOUserVideoCustomPropertyInfo

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Structure  
**Availability:** DriverKit 27.0+

A description of a a custom property that allow the Host to marshal the data between the Host and its clients.

## Declaration

```objectivec
struct IOUserVideoCustomPropertyInfo;
```

## Topics

### Property metadata

- [mSelector](iouservideocustompropertyinfo/mselector.md): The property selector of the custom property.
- [mPropertyDataType](iouservideocustompropertyinfo/mpropertydatatype.md): The data type of the data of the custom property.
- [mQualifierDataType](iouservideocustompropertyinfo/mqualifierdatatype.md): The data type of the qualifier data of the custom property.

## See Also

### Working with custom properties

- [IOUserVideoObjectPropertyAddress](iouservideoobjectpropertyaddress.md): A data structure that contains all the three parts to identify a specific property, for easy transmission.
- [IOUserVideoCustomPropertyDataType](iouservideocustompropertydatatype.md): Data qualifier types used for custom properties.
