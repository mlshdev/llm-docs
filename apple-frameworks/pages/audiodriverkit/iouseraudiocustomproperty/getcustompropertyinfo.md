> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiodriverkit/iouseraudiocustomproperty/getcustompropertyinfo

# GetCustomPropertyInfo

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets a property info object that describes the custom property.

## Declaration

```objectivec
IOUserAudioCustomPropertyInfo GetCustomPropertyInfo();
```

<a id="return-value"></a>

## Return Value

A property info object that describes the custom property.

## See Also

### Accessing the Data Value

- [SetQualifierAndDataValue](setqualifieranddatavalue.md): Sets the custom property’s data value.
- [GetCustomPropertyValueWithQualifier](getcustompropertyvaluewithqualifier.md): Gets the custom property value for a given qualifier.
- [IOUserAudioCustomPropertyInfo](../audiodriverkit/iouseraudiocustompropertyinfo.md): A description of a custom property’s data types.
