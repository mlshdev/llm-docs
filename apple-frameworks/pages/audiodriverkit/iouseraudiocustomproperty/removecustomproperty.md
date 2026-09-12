> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiocustomproperty/removecustomproperty](https://developer.apple.com/documentation/audiodriverkit/iouseraudiocustomproperty/removecustomproperty)

# RemoveCustomProperty

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Attempts to remove a custom property from the custom property.

## Declaration

```objectivec
virtual kern_return_t RemoveCustomProperty(IOUserAudioCustomProperty *in_custom_property);
```

## Parameters

- `in_custom_property`: An [IOUserAudioCustomProperty](../iouseraudiocustomproperty.md) object to remove from the [IOUserAudioCustomProperty](../iouseraudiocustomproperty.md).

<a id="return-value"></a>

## Return Value

[kIOReturnError](../../driverkit/kioreturnerror.md)

<a id="Discussion"></a>

## Discussion

This method always returns [kIOReturnError](../../driverkit/kioreturnerror.md) since a custom property can’t have a custom property.

## See Also

### Infrequently Used Functionality

- [AddCustomProperty](addcustomproperty.md): Attempts to add a custom property to the custom property.
