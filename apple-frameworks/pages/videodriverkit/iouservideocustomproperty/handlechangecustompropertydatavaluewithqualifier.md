> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideocustomproperty/handlechangecustompropertydatavaluewithqualifier](https://developer.apple.com/documentation/videodriverkit/iouservideocustomproperty/handlechangecustompropertydatavaluewithqualifier)

# HandleChangeCustomPropertyDataValueWithQualifier

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

The system calls this virtual method when the custom property’s data value changes.

## Declaration

```objectivec
virtual kern_return_t HandleChangeCustomPropertyDataValueWithQualifier(OSObject *in_qualifier_data, OSObject *in_data);
```

## Parameters

- `in_qualifier_data`: The qualifier data OSObject associated with setting the property data value. Can be a nullptr, OSString, or OSDictionary.
- `in_data`: The data OSObject that is getting set for the custom property. Can be a OSString or OSDictionary.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success. Upon success the custom property’s data value should be updated.

<a id="discussion"></a>

## Discussion

The default implementation always returns `kIOReturnSuccess` and updates the custom property data value without checking qualifier contents. Subclass and override this method to handle changes to this custom property value and return `kIOReturnSuccess` upon success.
