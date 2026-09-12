> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiocustomproperty/handlechangecustompropertydatavaluewithqualifier](https://developer.apple.com/documentation/audiodriverkit/iouseraudiocustomproperty/handlechangecustompropertydatavaluewithqualifier)

# HandleChangeCustomPropertyDataValueWithQualifier

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Tells the property the data value is changing.

## Declaration

```objectivec
virtual kern_return_t HandleChangeCustomPropertyDataValueWithQualifier(OSObject *in_qualifier_data, OSObject *in_data);
```

## Parameters

- `in_qualifier_data`: The qualifier data [OSObject](../../driverkit/osobject.md) associated with setting the property data value. This can be an [OSString](../../driverkit/osstring.md), [OSDictionary](../../driverkit/osdictionary.md), or `NULL`.
- `in_data`: An [OSObject](../../driverkit/osobject.md) to set as the custom property value.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

The default implementation sets the value and returns [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md), without checking the qualifier data. Subclass and override this method to handle changes to the custom property and return [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) upon success.
