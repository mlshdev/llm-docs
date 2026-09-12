> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iohidelement/getunit](https://developer.apple.com/documentation/hiddriverkit/iohidelement/getunit)

# getUnit

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Returns the units that you use to interpret the element’s value.

## Declaration

```objectivec
virtual uint32_t getUnit();
```

<a id="return-value"></a>

## Return Value

Returns the element’s unit.  The unit value is defined in the USB HID spec.

## See Also

### Accessing the Element’s Value

- [getValue](getvalue.md): Gets the logical value that the device reported.
- [getDataValue](getdatavalue.md): Gets the data value.
- [getScaledValue](getscaledvalue.md): Returns a scaled version of the logical value.
- [getScaledFixedValue](getscaledfixedvalue.md): Returns a fixed number that represents the scaled version of the element’s logical value.
- [setValue](setvalue.md): Sets the value of the element.
- [setDataValue](setdatavalue.md): Sets the data value of the element.
- [getUnitExponent](getunitexponent.md): Returns the exponent that you use to interpret the element’s value.
- [IOHIDValueOptions](../iohidvalueoptions.md): A type for specifying value-related options.
- [Value Options](../value-options-enum.md): Options for how to retrieve an element’s values.
- [IOHIDValueScaleType](../iohidvaluescaletype.md): The type of scaling to use for an element’s value.
- [Value Scale Types](../value-scale-types-enum.md): The different types of scaling that you can perform on element values.
