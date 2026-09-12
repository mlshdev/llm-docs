> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideodriver/removeobject](https://developer.apple.com/documentation/videodriverkit/iouservideodriver/removeobject)

# RemoveObject

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Removes a video object from the driver.

## Declaration

```objectivec
kern_return_t RemoveObject(IOUserVideoObject *in_object);
```

## Parameters

- `in_object`: IOUserVideoObject to be removed from the driver.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` if object was successfully removed.

<a id="discussion"></a>

## Discussion

The objects’s reference count will be decremented if it was successfully removed. Caller should also call PropertiesChanged() as necessary to notify host of any changes.

## See Also

### Working with video objects

- [AddObject](addobject.md): Adds a video object to the driver.
- [IOUserVideoObject](../iouservideoobject.md): The base class for all video objects.
- [GetVideoObjectForObjectID](getvideoobjectforobjectid.md): Gets the video object that corresponds to a video object identifier.
