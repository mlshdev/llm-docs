> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/videodriverkit/iouservideoobjectpropertyaddress](https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoobjectpropertyaddress)

# IOUserVideoObjectPropertyAddress

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Structure  
**Availability:** DriverKit 27.0+

A data structure that contains all the three parts to identify a specific property, for easy transmission.

## Declaration

```objectivec
struct IOUserVideoObjectPropertyAddress;
```

## Topics

### Address members

- [mSelector](iouservideoobjectpropertyaddress/mselector.md): The selector for the property.
- [mScope](iouservideoobjectpropertyaddress/mscope.md): The scope for the property.
- [mElement](iouservideoobjectpropertyaddress/melement.md): The element for the property.

## See Also

### Working with custom properties

- [IOUserVideoCustomPropertyInfo](iouservideocustompropertyinfo.md): A description of a a custom property that allow the Host to marshal the data between the Host and its clients.
- [IOUserVideoCustomPropertyDataType](iouservideocustompropertydatatype.md): Data qualifier types used for custom properties.
