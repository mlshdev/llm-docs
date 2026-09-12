> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctmeasureoptions/invocationoptions-swift.struct/manuallystop](https://developer.apple.com/documentation/xctest/xctmeasureoptions/invocationoptions-swift.struct/manuallystop)

# manuallyStop (Swift)

**Framework:** XCTest  
**Kind:** Type Property

An invocation option that specifies that the test stops taking measurements when the `stopMeasuring()` function is called.

## Declaration

```swift
static var manuallyStop: XCTMeasureOptions.InvocationOptions { get }
```

## See Also

### Measurement Options

- [manuallyStart](manuallystart.md): An invocation option that specifies that the test starts taking measurements when the `startMeasuring()` function is called.

# XCTMeasurementInvocationManuallyStop (Objective-C)

**Framework:** XCTest  
**Kind:** Enumeration Case

An invocation option that specifies that the test stops taking measurements when the `stopMeasuring()` function is called.

## Declaration

```objectivec
XCTMeasurementInvocationManuallyStop
```

## See Also

### Measurement Options

- [XCTMeasurementInvocationManuallyStart](manuallystart.md): An invocation option that specifies that the test starts taking measurements when the `startMeasuring()` function is called.
