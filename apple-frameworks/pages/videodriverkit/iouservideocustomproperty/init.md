> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideocustomproperty/init](https://developer.apple.com/documentation/videodriverkit/iouservideocustomproperty/init)

# init

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Initializes a custom property.

## Declaration

```objectivec
virtual bool init(IOUserVideoDriver *in_video_driver, IOUserVideoObjectPropertyAddress in_prop_addr, bool in_is_property_settable, IOUserVideoCustomPropertyDataType in_qualifier_data_type, IOUserVideoCustomPropertyDataType in_data_type);
```

## Parameters

- `in_video_driver`: The IOUserVideoDriver that owns this object.
- `in_prop_addr`: The IOUserVideoObjectPropertyAddress of the custom property.
- `in_is_property_settable`: Bool value that indicates if the property can be set.
- `in_qualifier_data_type`: The IOUserVideoCustomPropertyDataType for custom property’s qualifier data value
- `in_data_type`: The IOUserVideoCustomPropertyDataType for custom property’s data value

<a id="return-value"></a>

## Return Value

True on success.

## See Also

### Creating a custom property

- [Create](create.md): A static factory method that allocates and initializes a custom property.
- [IOUserVideoObjectPropertyAddress](../videodriverkit/iouservideoobjectpropertyaddress.md): A data structure that contains all the three parts to identify a specific property, for easy transmission.
- [IOUserVideoCustomPropertyDataType](../videodriverkit/iouservideocustompropertydatatype.md): Data qualifier types used for custom properties.
