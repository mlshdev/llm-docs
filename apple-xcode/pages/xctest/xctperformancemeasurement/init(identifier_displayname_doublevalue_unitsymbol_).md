> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctperformancemeasurement/init(identifier:displayname:doublevalue:unitsymbol:)](https://developer.apple.com/documentation/xctest/xctperformancemeasurement/init(identifier:displayname:doublevalue:unitsymbol:))

# init(identifier:displayName:doubleValue:unitSymbol:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Initializes a performance measurement for a single iteration with the value and unit of measurement.

## Declaration

```swift
init(identifier: String, displayName: String, doubleValue: Double, unitSymbol: String)
```

## Parameters

- `identifier`: A unique identifier for the measurement.
- `displayName`: A human-readable name for the measurement.
- `doubleValue`: A value for the measurement.
- `unitSymbol`: A string that represents the unit of measurement, such as seconds.

## See Also

### Initializing a Measurement

- [init(identifier:displayName:doubleValue:unitSymbol:polarity:)](init%28identifier_displayname_doublevalue_unitsymbol_polarity_%29.md): Initializes a performance measurement for a single iteration with the value, unit of measurement, and polarity.
- [init(identifier:displayName:value:)](init%28identifier_displayname_value_%29.md): Initializes a performance measurement for a single iteration with the value.
- [init(identifier:displayName:value:polarity:)](init%28identifier_displayname_value_polarity_%29.md): Initializes a performance measurement for a single iteration with the value and polarity.

# initWithIdentifier:displayName:doubleValue:unitSymbol: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Initializes a performance measurement for a single iteration with the value and unit of measurement.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier displayName:(NSString *) displayName doubleValue:(double) doubleValue unitSymbol:(NSString *) unitSymbol;
```

## Parameters

- `identifier`: A unique identifier for the measurement.
- `displayName`: A human-readable name for the measurement.
- `doubleValue`: A value for the measurement.
- `unitSymbol`: A string that represents the unit of measurement, such as seconds.

## See Also

### Initializing a Measurement

- [initWithIdentifier:displayName:doubleValue:unitSymbol:polarity:](init%28identifier_displayname_doublevalue_unitsymbol_polarity_%29.md): Initializes a performance measurement for a single iteration with the value, unit of measurement, and polarity.
- [initWithIdentifier:displayName:value:](init%28identifier_displayname_value_%29.md): Initializes a performance measurement for a single iteration with the value.
- [initWithIdentifier:displayName:value:polarity:](init%28identifier_displayname_value_polarity_%29.md): Initializes a performance measurement for a single iteration with the value and polarity.
