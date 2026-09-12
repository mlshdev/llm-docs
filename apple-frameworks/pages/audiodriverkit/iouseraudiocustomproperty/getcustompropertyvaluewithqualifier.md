> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiocustomproperty/getcustompropertyvaluewithqualifier](https://developer.apple.com/documentation/audiodriverkit/iouseraudiocustomproperty/getcustompropertyvaluewithqualifier)

# GetCustomPropertyValueWithQualifier

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets the custom property value for a given qualifier.

## Declaration

```objectivec
virtual kern_return_t GetCustomPropertyValueWithQualifier(OSObject *in_qualifier_data, OSObject **out_data);
```

## Parameters

- `in_qualifier_data`: The property qualifier, as an [OSObject](../../driverkit/osobject.md). The caller retains and releases this object. This value is `NULL` if the qualifier data type is `CustomPropertyDataTypeNone`.
- `out_data`: On output, the property value, as an [OSObject](../../driverkit/osobject.md). The caller retains and releases this object.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

Use this method to get the custom property’s data value, optionally adding a qualifier to further refine the action. For example, if a given property exists on multiple devices, use a device identifier as the qualifier to indicate which device to get the value from.

The base class returns the custom property value set on the object without looking at contents of the qualifier data. If the returned value should depend on the qualifier, subclass [IOUserAudioCustomProperty](../iouseraudiocustomproperty.md) and override this method.

## See Also

### Accessing the Data Value

- [SetQualifierAndDataValue](setqualifieranddatavalue.md): Sets the custom property’s data value.
- [GetCustomPropertyInfo](getcustompropertyinfo.md): Gets a property info object that describes the custom property.
- [IOUserAudioCustomPropertyInfo](../audiodriverkit/iouseraudiocustompropertyinfo.md): A description of a custom property’s data types.
