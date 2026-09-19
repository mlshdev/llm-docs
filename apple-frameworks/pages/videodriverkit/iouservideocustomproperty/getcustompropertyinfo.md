> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideocustomproperty/getcustompropertyinfo

# GetCustomPropertyInfo

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [SetQualifierAndDataValue](setqualifieranddatavalue.md): Beta. Sets the custom property’s data value.
- [GetCustomPropertyValueWithQualifier](getcustompropertyvaluewithqualifier.md): Beta. Gets the custom property value for a given qualifier.
- [IOUserVideoCustomPropertyInfo](../videodriverkit/iouservideocustompropertyinfo.md): Beta. A description of a a custom property that allow the Host to marshal the data between the Host and its clients.
