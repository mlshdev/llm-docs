> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiodriver/removeobject](https://developer.apple.com/documentation/audiodriverkit/iouseraudiodriver/removeobject)

# RemoveObject

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Removes an audio object from the driver.

## Declaration

```objectivec
kern_return_t RemoveObject(IOUserAudioObject *in_object);
```

## Parameters

- `in_object`: The [IOUserAudioObjectID](../audiodriverkit/iouseraudioobjectid.md) to remove from the driver.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

If the remove succeeds, the object’s reference count decrements by one. The caller should also call [PropertiesChanged](propertieschanged.md) to notify the host of any changes.

## See Also

### Working with Audio Objects

- [AddObject](addobject.md): Adds an audio object to the driver.
- [GetAudioObjectForObjectID](getaudioobjectforobjectid.md): Gets a pointer to an audio object, given the object’s identifier.
