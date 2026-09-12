> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/videodriverkit/iouservideocustompropertydatatype](https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideocustompropertydatatype)

# IOUserVideoCustomPropertyDataType

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 27.0+

Data qualifier types used for custom properties.

## Declaration

```objectivec
enum IOUserVideoCustomPropertyDataType : uint32_t;
```

## Topics

### Data types

- [Dictionary](iouservideocustompropertydatatype/dictionary.md): The custom property data type is an `OSDictionary` value.
- [String](iouservideocustompropertydatatype/string.md): The custom property data type is an `OSString` value.
- [None](iouservideocustompropertydatatype/none.md): The custom property does not have any data.

## See Also

### Working with custom properties

- [IOUserVideoCustomPropertyInfo](iouservideocustompropertyinfo.md): A description of a a custom property that allow the Host to marshal the data between the Host and its clients.
- [IOUserVideoObjectPropertyAddress](iouservideoobjectpropertyaddress.md): A data structure that contains all the three parts to identify a specific property, for easy transmission.
