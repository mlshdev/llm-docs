> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideocustomproperty

# IOUserVideoCustomProperty

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Class  
**Availability:** DriverKit 27.0+ beta

A custom property object that can be added to or associated with video objects.

## Declaration

```objectivec
class IOUserVideoCustomProperty;
```

<a id="overview"></a>

## Overview

Custom properties can be added to the following objects: [IOUserVideoControl](iouservideocontrol.md), [IOUserVideoBox](iouservideobox.md), [IOUserVideoStream](iouservideostream.md), [IOUserVideoClockDevice](iouservideoclockdevice.md), [IOUserVideoDevice](iouservideodevice.md), [IOUserVideoDriver](iouservideodriver.md). Custom properties have qualifier and data types of `OSString`, `OSDictionary`, or `OSData`.

## Topics

### Creating a custom property

- [Create](iouservideocustomproperty/create.md): Beta. A static factory method that allocates and initializes a custom property.
- [init](iouservideocustomproperty/init.md): Beta. Initializes a custom property.
- [IOUserVideoObjectPropertyAddress](videodriverkit/iouservideoobjectpropertyaddress.md): Beta. A data structure that contains all the three parts to identify a specific property, for easy transmission.
- [IOUserVideoCustomPropertyDataType](videodriverkit/iouservideocustompropertydatatype.md): Beta. Data qualifier types used for custom properties.

### Freeing a custom property

- [free](iouservideocustomproperty/free.md): Beta. Frees the custom property.

### Getting information about the class

- [GetClassID](iouservideocustomproperty/getclassid.md): Beta. Gets the class identifier of the object.
- [IOUserVideoClassID](videodriverkit/iouservideoclassid.md): Beta. Video class identifiers of an video object.

### Supporting data value changes

- [HandleChangeCustomPropertyDataValueWithQualifier](iouservideocustomproperty/handlechangecustompropertydatavaluewithqualifier.md): Beta. The system calls this virtual method when the custom property’s data value changes.

### Accessing the data value

- [SetQualifierAndDataValue](iouservideocustomproperty/setqualifieranddatavalue.md): Beta. Sets the custom property’s data value.
- [GetCustomPropertyValueWithQualifier](iouservideocustomproperty/getcustompropertyvaluewithqualifier.md): Beta. Gets the custom property value for a given qualifier.
- [GetCustomPropertyInfo](iouservideocustomproperty/getcustompropertyinfo.md): Beta. Gets the custom property information.
- [IOUserVideoCustomPropertyInfo](videodriverkit/iouservideocustompropertyinfo.md): Beta. A description of a a custom property that allow the Host to marshal the data between the Host and its clients.

### Working with custom properties

- [AddCustomProperty](iouservideocustomproperty/addcustomproperty.md): Beta. Always returns `kIOReturnError` because a custom property cannot have a custom property.
- [RemoveCustomProperty](iouservideocustomproperty/removecustomproperty.md): Beta. Always returns an error, because a custom property cannot have a custom property.

## Relationships

### Inherits From

- [IOUserVideoObject](iouservideoobject.md)

## See Also

### Working with custom properties

- [AddCustomProperty](iouservideodriver/addcustomproperty.md): Beta. Adds a custom property object to the video driver.
- [RemoveCustomProperty](iouservideodriver/removecustomproperty.md): Beta. Removes a custom property object from the video driver.
