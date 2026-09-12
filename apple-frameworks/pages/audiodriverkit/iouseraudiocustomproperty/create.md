> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiocustomproperty/create](https://developer.apple.com/documentation/audiodriverkit/iouseraudiocustomproperty/create)

# Create

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit 21.0+

Allocates and initializes an instance of the custom property class.

## Declaration

```objectivec
static OSSharedPtr<IOUserAudioCustomProperty> Create(IOUserAudioDriver *in_audio_driver, IOUserAudioObjectPropertyAddress in_prop_addr, bool in_is_property_settable, IOUserAudioCustomPropertyDataType in_qualifier_data_type, IOUserAudioCustomPropertyDataType in_data_type);
```

## Parameters

- `in_audio_driver`: The [IOUserAudioDriver](../iouseraudiodriver.md) that owns this object.
- `in_prop_addr`: [IOUserAudioObjectPropertyAddress](../audiodriverkit/iouseraudioobjectpropertyaddress.md) of the custom property.
- `in_is_property_settable`: A Boolean value that indicates if the property can be set.
- `in_qualifier_data_type`: The [IOUserAudioCustomPropertyDataType](../audiodriverkit/iouseraudiocustompropertydatatype.md) for custom property’s qualifier data value.
- `in_data_type`: The [IOUserAudioCustomPropertyDataType](../audiodriverkit/iouseraudiocustompropertydatatype.md) for custom property’s data value.This value can’t be `IOUserAudioCustomPropertyDataType::None`.

<a id="return-value"></a>

## Return Value

A poiner to an [IOUserAudioCustomProperty](../iouseraudiocustomproperty.md), if allocation and initialization succeeded.

<a id="Discussion"></a>

## Discussion

If you subclass [IOUserAudioCustomProperty](../iouseraudiocustomproperty.md) to override this class’ behavior, don’t use [Create](create.md) to allocate and initialize the custom subclass.

## See Also

### Creating a Custom Property

- [init](init.md): Initializes an instance of a custom property.
- [IOUserAudioObjectPropertyAddress](../audiodriverkit/iouseraudioobjectpropertyaddress.md): An object that collects the three parts — selector, scope, and element — that identify a specific property.
- [IOUserAudioCustomPropertyDataType](../audiodriverkit/iouseraudiocustompropertydatatype.md): A data and qualifier type used for custom properties.
