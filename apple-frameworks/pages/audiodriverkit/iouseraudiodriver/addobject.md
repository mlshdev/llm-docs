> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiodriver/addobject](https://developer.apple.com/documentation/audiodriverkit/iouseraudiodriver/addobject)

# AddObject

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Adds an audio object to the driver.

## Declaration

```objectivec
kern_return_t AddObject(IOUserAudioObject *in_object);
```

## Parameters

- `in_object`: The [IOUserAudioObjectID](../audiodriverkit/iouseraudioobjectid.md) to add to the driver.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

Use this method to add to the driver any objects that require management by the host. If the add succeeds, the object’s reference count increments by one. The caller should also call [PropertiesChanged](propertieschanged.md) to notify the host of any changes.

## See Also

### Working with Audio Objects

- [RemoveObject](removeobject.md): Removes an audio object from the driver.
- [GetAudioObjectForObjectID](getaudioobjectforobjectid.md): Gets a pointer to an audio object, given the object’s identifier.
