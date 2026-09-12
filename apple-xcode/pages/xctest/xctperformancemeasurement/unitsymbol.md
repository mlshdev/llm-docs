> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctperformancemeasurement/unitsymbol](https://developer.apple.com/documentation/xctest/xctperformancemeasurement/unitsymbol)

# unitSymbol (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

A string that represents the unit of measurement.

## Declaration

```swift
var unitSymbol: String { get }
```

## See Also

### Accessing Measured Values

- [doubleValue](doublevalue.md): The measured value.
- [value](value.md): The measured value, including the unit of measure.
- [polarity](polarity-swift.property.md): A constant that states whether larger or smaller measurements, relative to a set baseline, indicate better performance.
- [XCTPerformanceMeasurement.Polarity](polarity-swift.enum.md): Constants that state whether larger or smaller measurements, relative to a set baseline, indicate better performance.

# unitSymbol (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

A string that represents the unit of measurement.

## Declaration

```objectivec
@property (copy, readonly) NSString * unitSymbol;
```

## See Also

### Accessing Measured Values

- [doubleValue](doublevalue.md): The measured value.
- [value](value.md): The measured value, including the unit of measure.
- [polarity](polarity-swift.property.md): A constant that states whether larger or smaller measurements, relative to a set baseline, indicate better performance.
- [XCTPerformanceMeasurementPolarity](polarity-swift.enum.md): Constants that state whether larger or smaller measurements, relative to a set baseline, indicate better performance.
