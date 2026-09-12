> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctperformancemeasurement/value](https://developer.apple.com/documentation/xctest/xctperformancemeasurement/value)

# value (Swift)

**Framework:** XCTest  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The measured value, including the unit of measure.

## Declaration

```swift
var value: Measurement<Unit> { get }
```

## See Also

### Accessing Measured Values

- [doubleValue](doublevalue.md): The measured value.
- [unitSymbol](unitsymbol.md): A string that represents the unit of measurement.
- [polarity](polarity-swift.property.md): A constant that states whether larger or smaller measurements, relative to a set baseline, indicate better performance.
- [XCTPerformanceMeasurement.Polarity](polarity-swift.enum.md): Constants that state whether larger or smaller measurements, relative to a set baseline, indicate better performance.

# value (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The measured value, including the unit of measure.

## Declaration

```objectivec
@property (copy, readonly) NSMeasurement * value;
```

## See Also

### Accessing Measured Values

- [doubleValue](doublevalue.md): The measured value.
- [unitSymbol](unitsymbol.md): A string that represents the unit of measurement.
- [polarity](polarity-swift.property.md): A constant that states whether larger or smaller measurements, relative to a set baseline, indicate better performance.
- [XCTPerformanceMeasurementPolarity](polarity-swift.enum.md): Constants that state whether larger or smaller measurements, relative to a set baseline, indicate better performance.
