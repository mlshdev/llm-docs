> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctmeasureoptions/invocationoptions-swift.struct](https://developer.apple.com/documentation/xctest/xctmeasureoptions/invocationoptions-swift.struct)

# XCTMeasureOptions.InvocationOptions (Swift)

**Framework:** XCTest  
**Kind:** Structure

Test measurement options that control how measurement starts and stops.

## Declaration

```swift
struct InvocationOptions
```

## Topics

### Measurement Options

- [manuallyStart](invocationoptions-swift.struct/manuallystart.md): An invocation option that specifies that the test starts taking measurements when the `startMeasuring()` function is called.
- [manuallyStop](invocationoptions-swift.struct/manuallystop.md): An invocation option that specifies that the test stops taking measurements when the `stopMeasuring()` function is called.

### Initializers

- [init(rawValue:)](invocationoptions-swift.struct/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Using Option Details

- [invocationOptions](invocationoptions-swift.property.md): Options that define whether measurement is automatically or manually controlled.
- [iterationCount](iterationcount.md): The number of times the performance test measures its block.

# XCTMeasurementInvocationOptions (Objective-C)

**Framework:** XCTest  
**Kind:** Enumeration

Test measurement options that control how measurement starts and stops.

## Declaration

```objectivec
enum XCTMeasurementInvocationOptions : NSUInteger;
```

## Topics

### Measurement Options

- [XCTMeasurementInvocationManuallyStart](invocationoptions-swift.struct/manuallystart.md): An invocation option that specifies that the test starts taking measurements when the `startMeasuring()` function is called.
- [XCTMeasurementInvocationManuallyStop](invocationoptions-swift.struct/manuallystop.md): An invocation option that specifies that the test stops taking measurements when the `stopMeasuring()` function is called.

### Enumeration Cases

- [XCTMeasurementInvocationNone](../xctmeasurementinvocationoptions/xctmeasurementinvocationnone.md): An invocation option that specifies that the test automatically takes measurements at the beginning and ending of a measure block.

## See Also

### Using Option Details

- [invocationOptions](invocationoptions-swift.property.md): Options that define whether measurement is automatically or manually controlled.
- [iterationCount](iterationcount.md): The number of times the performance test measures its block.
