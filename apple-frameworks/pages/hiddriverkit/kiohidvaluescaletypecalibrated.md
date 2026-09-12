> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/kiohidvaluescaletypecalibrated](https://developer.apple.com/documentation/hiddriverkit/kiohidvaluescaletypecalibrated)

# kIOHIDValueScaleTypeCalibrated

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit · macOS

An option to scale the value with respect to a set of calibration properties.

## Declaration

```objectivec
kIOHIDValueScaleTypeCalibrated
```

<a id="Discussion"></a>

## Discussion

The system sets calibration properties for some types of data. For example, the built-in event driver calibrates digitizer data to the logical minimum and maximum values. If no calibration properties are set, the [getScaledValue](iohidelement/getscaledvalue.md) method calibrates the value to the range `-1` to `1`.

## See Also

### Getting the Options

- [kIOHIDValueScaleTypePhysical](kiohidvaluescaletypephysical.md): An option to scale the value with respect to the physical minimum and maximum values.
- [kIOHIDValueScaleTypeExponent](kiohidvaluescaletypeexponent.md): An option to scale the value with respect to the element’s unit exponent.
