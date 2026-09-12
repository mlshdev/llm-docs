> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiodriver/removecustomproperty](https://developer.apple.com/documentation/audiodriverkit/iouseraudiodriver/removecustomproperty)

# RemoveCustomProperty

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Removes a previously-added custom property object from the driver.

## Declaration

```objectivec
kern_return_t RemoveCustomProperty(IOUserAudioCustomProperty *in_custom_property);
```

## Parameters

- `in_custom_property`: An [IOUserAudioCustomProperty](../iouseraudiocustomproperty.md) object to remove from the [IOUserAudioDriver](../iouseraudiodriver.md).

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

## See Also

### Working with Custom Properties

- [AddCustomProperty](addcustomproperty.md): Adds a custom property object to the driver.
- [IOUserAudioCustomProperty](../iouseraudiocustomproperty.md): A custom property to associate with audio objects.
