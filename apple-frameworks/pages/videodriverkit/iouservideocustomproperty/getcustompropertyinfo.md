> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideocustomproperty/getcustompropertyinfo](https://developer.apple.com/documentation/videodriverkit/iouservideocustomproperty/getcustompropertyinfo)

# GetCustomPropertyInfo

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the custom property information.

## Declaration

```objectivec
IOUserVideoCustomPropertyInfo GetCustomPropertyInfo();
```

<a id="return-value"></a>

## Return Value

The IOUserVideoCustomPropertyInfo for the custom property.

## See Also

### Accessing the data value

- [SetQualifierAndDataValue](setqualifieranddatavalue.md): Sets the custom property’s data value.
- [GetCustomPropertyValueWithQualifier](getcustompropertyvaluewithqualifier.md): Gets the custom property value for a given qualifier.
- [IOUserVideoCustomPropertyInfo](../videodriverkit/iouservideocustompropertyinfo.md): A description of a a custom property that allow the Host to marshal the data between the Host and its clients.
