> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctmeasureoptions/invocationoptions-swift.struct/manuallystart](https://developer.apple.com/documentation/xctest/xctmeasureoptions/invocationoptions-swift.struct/manuallystart)

# manuallyStart (Swift)

**Framework:** XCTest  
**Kind:** Type Property

An invocation option that specifies that the test starts taking measurements when the `startMeasuring()` function is called.

## Declaration

```swift
static var manuallyStart: XCTMeasureOptions.InvocationOptions { get }
```

## See Also

### Measurement Options

- [manuallyStop](manuallystop.md): An invocation option that specifies that the test stops taking measurements when the `stopMeasuring()` function is called.

# XCTMeasurementInvocationManuallyStart (Objective-C)

**Framework:** XCTest  
**Kind:** Enumeration Case

An invocation option that specifies that the test starts taking measurements when the `startMeasuring()` function is called.

## Declaration

```objectivec
XCTMeasurementInvocationManuallyStart
```

## See Also

### Measurement Options

- [XCTMeasurementInvocationManuallyStop](manuallystop.md): An invocation option that specifies that the test stops taking measurements when the `stopMeasuring()` function is called.
