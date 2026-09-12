> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiodriver/propertieschanged](https://developer.apple.com/documentation/audiodriverkit/iouseraudiodriver/propertieschanged)

# PropertiesChanged

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Informs the host when the state of an object in the driver changes.

## Declaration

```objectivec
kern_return_t PropertiesChanged(IOUserAudioObjectID in_object_id, IOUserAudioObjectPropertySelector *in_properties, uint32_t in_num_properties);
```

## Parameters

- `in_object_id`: The identifier of the object whose properties changed.
- `in_properties`: An array of [IOUserAudioObjectPropertySelector](../audiodriverkit/iouseraudioobjectpropertyselector.md) instances for the changed properties.
- `in_num_properties`: The number of elements in the `in_properties` array.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

For device objects, only use this method for state changes that don’t affect IO or the structure of the device.

## See Also

### Communicating with the Host

- [IOUserAudioObjectPropertySelector](../audiodriverkit/iouseraudioobjectpropertyselector.md): A four character code which, along with the scope and element, specific piece of information about an audio object.
