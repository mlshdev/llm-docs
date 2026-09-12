> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctperformancemeasurement/polarity-swift.enum](https://developer.apple.com/documentation/xctest/xctperformancemeasurement/polarity-swift.enum)

# XCTPerformanceMeasurement.Polarity (Swift)

**Framework:** XCTest  
**Kind:** Enumeration

Constants that state whether larger or smaller measurements, relative to a set baseline, indicate better performance.

## Declaration

```swift
enum Polarity
```

## Topics

### Polarity Types

- [XCTPerformanceMeasurement.Polarity.prefersLarger](polarity-swift.enum/preferslarger.md): A performance measurement where a larger value, relative to a set baseline, indicates better performance.
- [XCTPerformanceMeasurement.Polarity.prefersSmaller](polarity-swift.enum/preferssmaller.md): A performance measurement where a smaller value, relative to a set baseline, indicates better performance.
- [XCTPerformanceMeasurement.Polarity.unspecified](polarity-swift.enum/unspecified.md): A performance measurement that doesn’t specify whether a larger or smaller value, relative to a set baseline, indicates better performance.

### Initializers

- [init(rawValue:)](polarity-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Measured Values

- [doubleValue](doublevalue.md): The measured value.
- [unitSymbol](unitsymbol.md): A string that represents the unit of measurement.
- [value](value.md): The measured value, including the unit of measure.
- [polarity](polarity-swift.property.md): A constant that states whether larger or smaller measurements, relative to a set baseline, indicate better performance.

# XCTPerformanceMeasurementPolarity (Objective-C)

**Framework:** XCTest  
**Kind:** Enumeration

Constants that state whether larger or smaller measurements, relative to a set baseline, indicate better performance.

## Declaration

```objectivec
enum XCTPerformanceMeasurementPolarity : NSInteger;
```

## Topics

### Polarity Types

- [XCTPerformanceMeasurementPolarityPrefersLarger](polarity-swift.enum/preferslarger.md): A performance measurement where a larger value, relative to a set baseline, indicates better performance.
- [XCTPerformanceMeasurementPolarityPrefersSmaller](polarity-swift.enum/preferssmaller.md): A performance measurement where a smaller value, relative to a set baseline, indicates better performance.
- [XCTPerformanceMeasurementPolarityUnspecified](polarity-swift.enum/unspecified.md): A performance measurement that doesn’t specify whether a larger or smaller value, relative to a set baseline, indicates better performance.

## See Also

### Accessing Measured Values

- [doubleValue](doublevalue.md): The measured value.
- [unitSymbol](unitsymbol.md): A string that represents the unit of measurement.
- [value](value.md): The measured value, including the unit of measure.
- [polarity](polarity-swift.property.md): A constant that states whether larger or smaller measurements, relative to a set baseline, indicate better performance.
