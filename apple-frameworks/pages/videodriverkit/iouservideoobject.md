> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoobject

# IOUserVideoObject

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Class  
**Availability:** DriverKit 27.0+ beta

The base class for all video objects.

## Declaration

```objectivec
class IOUserVideoObject;
```

<a id="overview"></a>

## Overview

Don’t subclass `IOUserVideoObject` or allocate it directly.

## Topics

### Creating a video object

- [init](iouservideoobject/init-853a8.md): Beta.
- [init](iouservideoobject/init-5dkv4.md): Beta.

### Freeing a video object

- [free](iouservideoobject/free.md): Beta. Frees the video object.

### Getting information about the class

- [GetClassID](iouservideoobject/getclassid.md): Beta. Gets the class identifier of the object.
- [GetBaseClassID](iouservideoobject/getbaseclassid.md): Beta. Gets the class identifier of the object’s base class.
- [IOUserVideoClassID](videodriverkit/iouservideoclassid.md): Beta. Video class identifiers of an video object.

### Working with object names

- [GetName](iouservideoobject/getname.md): Beta. Gets the name of the video object.
- [SetName](iouservideoobject/setname.md): Beta. Sets the name of the video object.

### Working with object identifiers

- [GetObjectID](iouservideoobject/getobjectid.md): Beta. Gets the video object identifier of the object.
- [IOUserVideoObjectID](videodriverkit/iouservideoobjectid.md): Beta. A handle for a a specific video object.

### Working with elements

- [GetElementCategoryName](iouservideoobject/getelementcategoryname.md): Beta. Gets the category name for the given element and scope of the video object.
- [SetElementCategoryName](iouservideoobject/setelementcategoryname.md): Beta. Sets the category name for the given element and scope of the video object.
- [GetElementName](iouservideoobject/getelementname.md): Beta. Gets the name for the given element and scope of the video object.
- [SetElementName](iouservideoobject/setelementname.md): Beta. Sets the name for the given element and scope of the video object.
- [GetElementNumberName](iouservideoobject/getelementnumbername.md): Beta. Gets the number name for the given element and scope of the video object.
- [SetElementNumberName](iouservideoobject/setelementnumbername.md): Beta. Sets the number name for the given element of the video object.

### Using custom properties

- [AddCustomProperty](iouservideoobject/addcustomproperty.md): Beta. Adds an custom property object to this object.
- [RemoveCustomProperty](iouservideoobject/removecustomproperty.md): Beta. Removes a custom property from the video object.
- [IOUserVideoCustomProperty](iouservideocustomproperty.md): Beta. A custom property object that can be added to or associated with video objects.

### Working with queues

- [GetWorkQueue](iouservideoobject/getworkqueue.md): Beta. Gets the work queue created by the video object.

## Relationships

### Inherits From

- [OSObject](../driverkit/osobject.md)

### Inherited By

- [IOUserVideoBox](iouservideobox.md)
- [IOUserVideoBuffer](iouservideobuffer.md)
- [IOUserVideoClockDevice](iouservideoclockdevice.md)
- [IOUserVideoControl](iouservideocontrol.md)
- [IOUserVideoCustomProperty](iouservideocustomproperty.md)
- [IOUserVideoStream](iouservideostream.md)

## See Also

### Essentials

- [IOUserVideoDriver](iouservideodriver.md): Beta. A video driver.
