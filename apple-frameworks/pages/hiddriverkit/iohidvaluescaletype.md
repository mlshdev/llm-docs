> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iohidvaluescaletype](https://developer.apple.com/documentation/hiddriverkit/iohidvaluescaletype)

# IOHIDValueScaleType

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit · macOS

The type of scaling to use for an element’s value.

## Declaration

```objectivec
typedef uint32_t IOHIDValueScaleType;
```

## See Also

### Accessing the Element’s Value

- [getValue](iohidelement/getvalue.md): Gets the logical value that the device reported.
- [getDataValue](iohidelement/getdatavalue.md): Gets the data value.
- [getScaledValue](iohidelement/getscaledvalue.md): Returns a scaled version of the logical value.
- [getScaledFixedValue](iohidelement/getscaledfixedvalue.md): Returns a fixed number that represents the scaled version of the element’s logical value.
- [setValue](iohidelement/setvalue.md): Sets the value of the element.
- [setDataValue](iohidelement/setdatavalue.md): Sets the data value of the element.
- [getUnit](iohidelement/getunit.md): Returns the units that you use to interpret the element’s value.
- [getUnitExponent](iohidelement/getunitexponent.md): Returns the exponent that you use to interpret the element’s value.
- [IOHIDValueOptions](iohidvalueoptions.md): A type for specifying value-related options.
- [Value Options](value-options-enum.md): Options for how to retrieve an element’s values.
- [Value Scale Types](value-scale-types-enum.md): The different types of scaling that you can perform on element values.
