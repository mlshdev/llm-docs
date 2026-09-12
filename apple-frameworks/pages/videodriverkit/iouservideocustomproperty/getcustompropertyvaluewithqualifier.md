> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideocustomproperty/getcustompropertyvaluewithqualifier](https://developer.apple.com/documentation/videodriverkit/iouservideocustomproperty/getcustompropertyvaluewithqualifier)

# GetCustomPropertyValueWithQualifier

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the custom property value for a given qualifier.

## Declaration

```objectivec
virtual kern_return_t GetCustomPropertyValueWithQualifier(OSObject *in_qualifier_data, OSObject **out_data);
```

## Parameters

- `in_qualifier_data`: The OSObject that is used to qualify the custom property data value. in_qualifier_data can be a nullptr if custom property value does not require qualifier data.
- `out_data`: Returned OSObject that is retained and to be released by the caller.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success.

<a id="discussion"></a>

## Discussion

The base class returns the custom property value set on the object without looking at contents of the qualifier data. If the value returned is dependent on qualfier, subclass IOUserVideoCustomProperty and override this method.

## See Also

### Accessing the data value

- [SetQualifierAndDataValue](setqualifieranddatavalue.md): Sets the custom property’s data value.
- [GetCustomPropertyInfo](getcustompropertyinfo.md): Gets the custom property information.
- [IOUserVideoCustomPropertyInfo](../videodriverkit/iouservideocustompropertyinfo.md): A description of a a custom property that allow the Host to marshal the data between the Host and its clients.
