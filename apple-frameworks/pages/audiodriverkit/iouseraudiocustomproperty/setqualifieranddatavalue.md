> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiocustomproperty/setqualifieranddatavalue](https://developer.apple.com/documentation/audiodriverkit/iouseraudiocustomproperty/setqualifieranddatavalue)

# SetQualifierAndDataValue

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Sets the custom property’s data value.

## Declaration

```objectivec
kern_return_t SetQualifierAndDataValue(OSObject *in_qualifier_data, OSObject *in_data);
```

## Parameters

- `in_qualifier_data`: The qualifier data for the custom property that corresponds to the data value. The type of this parameter must match the qualifier data type originally used for initializing the property. If the qualifier data type is `IOUserAudioCustomPropertyDataType::None`, this parameter must be `NULL`. If the qualifier data type is [String](../audiodriverkit/iouseraudiocustompropertydatatype/string.md), this parameter must be an [OSString](../../driverkit/osstring.md). If the qualifier data type is [Dictionary](../audiodriverkit/iouseraudiocustompropertydatatype/dictionary.md), this parameter must be an [OSDictionary](../../driverkit/osdictionary.md).
- `in_data`: The data object for the custom property that corresponds to the qualifier. The type of this parameter must match the data type originally used for initializing the property. If the data type is [String](../audiodriverkit/iouseraudiocustompropertydatatype/string.md), this parameter must be an [OSString](../../driverkit/osstring.md). If the qualifier data type is [Dictionary](../audiodriverkit/iouseraudiocustompropertydatatype/dictionary.md), this parameter must be an [OSDictionary](../../driverkit/osdictionary.md). This parameter can’t be `NULL`.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

Use this method to set the custom property’s data value, optionally adding a qualifier to further refine the action. For example, if a given property exists on multiple devices, use a device identifier as the qualifier to indicate which device to set the value on.

## See Also

### Accessing the Data Value

- [GetCustomPropertyValueWithQualifier](getcustompropertyvaluewithqualifier.md): Gets the custom property value for a given qualifier.
- [GetCustomPropertyInfo](getcustompropertyinfo.md): Gets a property info object that describes the custom property.
- [IOUserAudioCustomPropertyInfo](../audiodriverkit/iouseraudiocustompropertyinfo.md): A description of a custom property’s data types.
