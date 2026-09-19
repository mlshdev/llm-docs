> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideodriver/getvideoobjectforobjectid

# GetVideoObjectForObjectID

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Gets the video object that corresponds to a video object identifier.

## Declaration

```objectivec
OSSharedPtr<IOUserVideoObject> GetVideoObjectForObjectID(IOUserVideoObjectID in_object_id);
```

## Parameters

- `in_object_id`: IOUserVideoObjectID of an object that was previously added to the driver.

<a id="return-value"></a>

## Return Value

OSSharedPtr to an IOUserVideoObject if in_object_id was found.

## See Also

### Working with video objects

- [AddObject](addobject.md): Beta. Adds a video object to the driver.
- [RemoveObject](removeobject.md): Beta. Removes a video object from the driver.
- [IOUserVideoObject](../iouservideoobject.md): Beta. The base class for all video objects.
