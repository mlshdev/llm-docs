> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideodriver/addobject

# AddObject

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Adds a video object to the driver.

## Declaration

```objectivec
kern_return_t AddObject(IOUserVideoObject *in_object);
```

## Parameters

- `in_object`: The video object being added to the driver.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` if object was successfully added.

<a id="discussion"></a>

## Discussion

All objects that need to be managed by the host needs to be added to the driver. The objects’s reference count will be incremented if it was successfully added. Caller should also call PropertiesChanged() as necessary to notify host of any changes.

## See Also

### Working with video objects

- [RemoveObject](removeobject.md): Beta. Removes a video object from the driver.
- [IOUserVideoObject](../iouservideoobject.md): Beta. The base class for all video objects.
- [GetVideoObjectForObjectID](getvideoobjectforobjectid.md): Beta. Gets the video object that corresponds to a video object identifier.
