> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctperformancemeasurement/init(identifier:displayname:doublevalue:unitsymbol:polarity:)](https://developer.apple.com/documentation/xctest/xctperformancemeasurement/init(identifier:displayname:doublevalue:unitsymbol:polarity:))

# init(identifier:displayName:doubleValue:unitSymbol:polarity:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Initializes a performance measurement for a single iteration with the value, unit of measurement, and polarity.

## Declaration

```swift
convenience init(identifier: String, displayName: String, doubleValue: Double, unitSymbol: String, polarity: XCTPerformanceMeasurement.Polarity)
```

## Parameters

- `identifier`: A unique identifier for the measurement.
- `displayName`: A human-readable name for the measurement.
- `doubleValue`: A value for the measurement.
- `unitSymbol`: A string that represents the unit of measurement, such as seconds.
- `polarity`: A value that states whether larger or smaller measurements, relative to a set baseline, indicate better performance.

## See Also

### Initializing a Measurement

- [init(identifier:displayName:doubleValue:unitSymbol:)](init%28identifier_displayname_doublevalue_unitsymbol_%29.md): Initializes a performance measurement for a single iteration with the value and unit of measurement.
- [init(identifier:displayName:value:)](init%28identifier_displayname_value_%29.md): Initializes a performance measurement for a single iteration with the value.
- [init(identifier:displayName:value:polarity:)](init%28identifier_displayname_value_polarity_%29.md): Initializes a performance measurement for a single iteration with the value and polarity.

# initWithIdentifier:displayName:doubleValue:unitSymbol:polarity: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Initializes a performance measurement for a single iteration with the value, unit of measurement, and polarity.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier displayName:(NSString *) displayName doubleValue:(double) doubleValue unitSymbol:(NSString *) unitSymbol polarity:(XCTPerformanceMeasurementPolarity) polarity;
```

## Parameters

- `identifier`: A unique identifier for the measurement.
- `displayName`: A human-readable name for the measurement.
- `doubleValue`: A value for the measurement.
- `unitSymbol`: A string that represents the unit of measurement, such as seconds.
- `polarity`: A value that states whether larger or smaller measurements, relative to a set baseline, indicate better performance.

## See Also

### Initializing a Measurement

- [initWithIdentifier:displayName:doubleValue:unitSymbol:](init%28identifier_displayname_doublevalue_unitsymbol_%29.md): Initializes a performance measurement for a single iteration with the value and unit of measurement.
- [initWithIdentifier:displayName:value:](init%28identifier_displayname_value_%29.md): Initializes a performance measurement for a single iteration with the value.
- [initWithIdentifier:displayName:value:polarity:](init%28identifier_displayname_value_polarity_%29.md): Initializes a performance measurement for a single iteration with the value and polarity.
