> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoobjectpropertyaddress

# IOUserVideoObjectPropertyAddress

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Structure  
**Availability:** DriverKit 27.0+ beta

A data structure that contains all the three parts to identify a specific property, for easy transmission.

## Declaration

```objectivec
struct IOUserVideoObjectPropertyAddress;
```

## Topics

### Address members

- [mSelector](iouservideoobjectpropertyaddress/mselector.md): Beta. The selector for the property.
- [mScope](iouservideoobjectpropertyaddress/mscope.md): Beta. The scope for the property.
- [mElement](iouservideoobjectpropertyaddress/melement.md): Beta. The element for the property.

## See Also

### Working with custom properties

- [IOUserVideoCustomPropertyInfo](iouservideocustompropertyinfo.md): Beta. A description of a a custom property that allow the Host to marshal the data between the Host and its clients.
- [IOUserVideoCustomPropertyDataType](iouservideocustompropertydatatype.md): Beta. Data qualifier types used for custom properties.
