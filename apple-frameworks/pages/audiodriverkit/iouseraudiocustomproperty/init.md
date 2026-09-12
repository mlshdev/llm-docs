> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiocustomproperty/init](https://developer.apple.com/documentation/audiodriverkit/iouseraudiocustomproperty/init)

# init

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Initializes an instance of a custom property.

## Declaration

```objectivec
virtual bool init(IOUserAudioDriver *in_audio_driver, IOUserAudioObjectPropertyAddress in_prop_addr, bool in_is_property_settable, IOUserAudioCustomPropertyDataType in_qualifier_data_type, IOUserAudioCustomPropertyDataType in_data_type);
```

## Parameters

- `in_audio_driver`: The [IOUserAudioDriver](../iouseraudiodriver.md) that owns this object.
- `in_prop_addr`: The [IOUserAudioObjectPropertyAddress](../audiodriverkit/iouseraudioobjectpropertyaddress.md) of the custom property.
- `in_is_property_settable`: A Boolean value that indicates if the property can be set.
- `in_qualifier_data_type`: The [IOUserAudioCustomPropertyDataType](../audiodriverkit/iouseraudiocustompropertydatatype.md) for custom property’s qualifier data value.
- `in_data_type`: The [IOUserAudioCustomPropertyDataType](../audiodriverkit/iouseraudiocustompropertydatatype.md) for custom property’s data value.This value can’t be `IOUserAudioCustomPropertyDataType::None`.

<a id="return-value"></a>

## Return Value

`true` if initialization succeeded; `false` otherwise.

## See Also

### Creating a Custom Property

- [Create](create.md): Allocates and initializes an instance of the custom property class.
- [IOUserAudioObjectPropertyAddress](../audiodriverkit/iouseraudioobjectpropertyaddress.md): An object that collects the three parts — selector, scope, and element — that identify a specific property.
- [IOUserAudioCustomPropertyDataType](../audiodriverkit/iouseraudiocustompropertydatatype.md): A data and qualifier type used for custom properties.
