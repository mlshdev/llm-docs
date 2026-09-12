> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amerror/code/conversionnodataerror](https://developer.apple.com/documentation/automator/amerror/code/conversionnodataerror)

# AMError.Code.conversionNoDataError (Swift)

**Framework:** Automator  
**Kind:** Case  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

An error that occurs when the converter determines that the conversion, though possible, would produce a nil result.

## Declaration

```swift
case conversionNoDataError
```

<a id="Discussion"></a>

## Discussion

This error isn’t displayed to the user.

## See Also

### Data Conversion Errors

- [AMError.Code.conversionFailedError](conversionfailederror.md): An error that occurs when, for example, the converter encounters an error converting data from one type to another.
- [AMError.Code.conversionNotPossibleError](conversionnotpossibleerror.md): An error that occurs when the converter determines that it is unable to convert from one data type to another.

# AMConversionNoDataError (Objective-C)

**Framework:** Automator  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

An error that occurs when the converter determines that the conversion, though possible, would produce a nil result.

## Declaration

```objectivec
AMConversionNoDataError
```

<a id="Discussion"></a>

## Discussion

This error isn’t displayed to the user.

## See Also

### Data Conversion Errors

- [AMConversionFailedError](conversionfailederror.md): An error that occurs when, for example, the converter encounters an error converting data from one type to another.
- [AMConversionNotPossibleError](conversionnotpossibleerror.md): An error that occurs when the converter determines that it is unable to convert from one data type to another.
