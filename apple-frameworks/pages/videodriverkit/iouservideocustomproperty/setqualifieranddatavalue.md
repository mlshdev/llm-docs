> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideocustomproperty/setqualifieranddatavalue](https://developer.apple.com/documentation/videodriverkit/iouservideocustomproperty/setqualifieranddatavalue)

# SetQualifierAndDataValue

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Sets the custom property’s data value.

## Declaration

```objectivec
kern_return_t SetQualifierAndDataValue(OSObject *in_qualifier_data, OSObject *in_data);
```

## Parameters

- `in_qualifier_data`: The qualifier data OSObject for the custom property that corresponds to the data value. Must be nullptr if qualifier data type is CustomPropertyDataTypeNone. Must be an OSString if qualifier data type is CustomPropertyDataTypeOSString. Must be an OSDictionary if qualifier data type is CustomPropertyDataTypeOSDictionary.
- `in_data`: The data OSObject for the custom property that corresponds to the qualifier. Must be an OSString if data type is CustomPropertyDataTypeOSString. Must be an OSDictionary if data type is CustomPropertyDataTypeOSDictionary. Value cannot be a nullptr.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success.

## See Also

### Accessing the data value

- [GetCustomPropertyValueWithQualifier](getcustompropertyvaluewithqualifier.md): Gets the custom property value for a given qualifier.
- [GetCustomPropertyInfo](getcustompropertyinfo.md): Gets the custom property information.
- [IOUserVideoCustomPropertyInfo](../videodriverkit/iouservideocustompropertyinfo.md): A description of a a custom property that allow the Host to marshal the data between the Host and its clients.
