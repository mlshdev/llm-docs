> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctperformancemeasurement](https://developer.apple.com/documentation/xctest/xctperformancemeasurement)

# XCTPerformanceMeasurement (Swift)

**Framework:** XCTest  
**Kind:** Class

A measurement from a single iteration of a performance test.

## Declaration

```swift
class XCTPerformanceMeasurement
```

## Topics

### Initializing a Measurement

- [init(identifier:displayName:doubleValue:unitSymbol:)](xctperformancemeasurement/init%28identifier_displayname_doublevalue_unitsymbol_%29.md): Initializes a performance measurement for a single iteration with the value and unit of measurement.
- [init(identifier:displayName:doubleValue:unitSymbol:polarity:)](xctperformancemeasurement/init%28identifier_displayname_doublevalue_unitsymbol_polarity_%29.md): Initializes a performance measurement for a single iteration with the value, unit of measurement, and polarity.
- [init(identifier:displayName:value:)](xctperformancemeasurement/init%28identifier_displayname_value_%29.md): Initializes a performance measurement for a single iteration with the value.
- [init(identifier:displayName:value:polarity:)](xctperformancemeasurement/init%28identifier_displayname_value_polarity_%29.md): Initializes a performance measurement for a single iteration with the value and polarity.

### Identifying Measurements

- [displayName](xctperformancemeasurement/displayname.md): A human-readable name for a measurement.
- [identifier](xctperformancemeasurement/identifier.md): A unique identifier for a measurement.

### Accessing Measured Values

- [doubleValue](xctperformancemeasurement/doublevalue.md): The measured value.
- [unitSymbol](xctperformancemeasurement/unitsymbol.md): A string that represents the unit of measurement.
- [value](xctperformancemeasurement/value.md): The measured value, including the unit of measure.
- [polarity](xctperformancemeasurement/polarity-swift.property.md): A constant that states whether larger or smaller measurements, relative to a set baseline, indicate better performance.
- [XCTPerformanceMeasurement.Polarity](xctperformancemeasurement/polarity-swift.enum.md): Constants that state whether larger or smaller measurements, relative to a set baseline, indicate better performance.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Measurements

- [XCTPerformanceMeasurementTimestamp](xctperformancemeasurementtimestamp.md): A point in time that captures the start or finish of a performance test iteration.

# XCTPerformanceMeasurement (Objective-C)

**Framework:** XCTest  
**Kind:** Class

A measurement from a single iteration of a performance test.

## Declaration

```objectivec
@interface XCTPerformanceMeasurement : NSObject
```

## Topics

### Initializing a Measurement

- [initWithIdentifier:displayName:doubleValue:unitSymbol:](xctperformancemeasurement/init%28identifier_displayname_doublevalue_unitsymbol_%29.md): Initializes a performance measurement for a single iteration with the value and unit of measurement.
- [initWithIdentifier:displayName:doubleValue:unitSymbol:polarity:](xctperformancemeasurement/init%28identifier_displayname_doublevalue_unitsymbol_polarity_%29.md): Initializes a performance measurement for a single iteration with the value, unit of measurement, and polarity.
- [initWithIdentifier:displayName:value:](xctperformancemeasurement/init%28identifier_displayname_value_%29.md): Initializes a performance measurement for a single iteration with the value.
- [initWithIdentifier:displayName:value:polarity:](xctperformancemeasurement/init%28identifier_displayname_value_polarity_%29.md): Initializes a performance measurement for a single iteration with the value and polarity.

### Identifying Measurements

- [displayName](xctperformancemeasurement/displayname.md): A human-readable name for a measurement.
- [identifier](xctperformancemeasurement/identifier.md): A unique identifier for a measurement.

### Accessing Measured Values

- [doubleValue](xctperformancemeasurement/doublevalue.md): The measured value.
- [unitSymbol](xctperformancemeasurement/unitsymbol.md): A string that represents the unit of measurement.
- [value](xctperformancemeasurement/value.md): The measured value, including the unit of measure.
- [polarity](xctperformancemeasurement/polarity-swift.property.md): A constant that states whether larger or smaller measurements, relative to a set baseline, indicate better performance.
- [XCTPerformanceMeasurementPolarity](xctperformancemeasurement/polarity-swift.enum.md): Constants that state whether larger or smaller measurements, relative to a set baseline, indicate better performance.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Measurements

- [XCTPerformanceMeasurementTimestamp](xctperformancemeasurementtimestamp.md): A point in time that captures the start or finish of a performance test iteration.
