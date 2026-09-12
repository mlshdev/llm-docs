> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/audiodriverkit/iouseraudiocustompropertyinfo](https://developer.apple.com/documentation/audiodriverkit/audiodriverkit/iouseraudiocustompropertyinfo)

# IOUserAudioCustomPropertyInfo

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Structure  
**Availability:** DriverKit 21.0+

A description of a custom property’s data types.

## Declaration

```objectivec
struct IOUserAudioCustomPropertyInfo;
```

<a id="Discussion"></a>

## Discussion

The description provided by the [IOUserAudioCustomPropertyInfo](iouseraudiocustompropertyinfo.md) structure allows the host to marshal the data between the host and its clients.

## Topics

### Property Metadata

- [mSelector](iouseraudiocustompropertyinfo/mselector.md): The property selector of the custom property.
- [mPropertyDataType](iouseraudiocustompropertyinfo/mpropertydatatype.md): The data type of the of the custom property’s data.
- [mQualifierDataType](iouseraudiocustompropertyinfo/mqualifierdatatype.md): The data type of the of the custom property’s qualifier data.

## See Also

### Accessing the Data Value

- [SetQualifierAndDataValue](../iouseraudiocustomproperty/setqualifieranddatavalue.md): Sets the custom property’s data value.
- [GetCustomPropertyValueWithQualifier](../iouseraudiocustomproperty/getcustompropertyvaluewithqualifier.md): Gets the custom property value for a given qualifier.
- [GetCustomPropertyInfo](../iouseraudiocustomproperty/getcustompropertyinfo.md): Gets a property info object that describes the custom property.
