> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiodriver/getaudioobjectforobjectid](https://developer.apple.com/documentation/audiodriverkit/iouseraudiodriver/getaudioobjectforobjectid)

# GetAudioObjectForObjectID

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets a pointer to an audio object, given the object’s identifier.

## Declaration

```objectivec
OSSharedPtr<IOUserAudioObject> GetAudioObjectForObjectID(IOUserAudioObjectID in_object_id);
```

## Parameters

- `in_object_id`: The [IOUserAudioObjectID](../audiodriverkit/iouseraudioobjectid.md) of an object previously added to the driver.

<a id="return-value"></a>

## Return Value

An `OSSharedPtr` to an [IOUserAudioObject](../iouseraudioobject.md) if `in_object_id` was found.

## See Also

### Working with Audio Objects

- [AddObject](addobject.md): Adds an audio object to the driver.
- [RemoveObject](removeobject.md): Removes an audio object from the driver.
