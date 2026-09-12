> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctperformancemeasurement/init(identifier:displayname:value:)](https://developer.apple.com/documentation/xctest/xctperformancemeasurement/init(identifier:displayname:value:))

# init(identifier:displayName:value:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a performance measurement for a single iteration with the value.

## Declaration

```swift
convenience init(identifier: String, displayName: String, value: Measurement<Unit>)
```

## Parameters

- `identifier`: A unique identifier for the measurement.
- `displayName`: A human-readable name for the measurement.
- `value`: A value for the measurement.

## See Also

### Initializing a Measurement

- [init(identifier:displayName:doubleValue:unitSymbol:)](init%28identifier_displayname_doublevalue_unitsymbol_%29.md): Initializes a performance measurement for a single iteration with the value and unit of measurement.
- [init(identifier:displayName:doubleValue:unitSymbol:polarity:)](init%28identifier_displayname_doublevalue_unitsymbol_polarity_%29.md): Initializes a performance measurement for a single iteration with the value, unit of measurement, and polarity.
- [init(identifier:displayName:value:polarity:)](init%28identifier_displayname_value_polarity_%29.md): Initializes a performance measurement for a single iteration with the value and polarity.

# initWithIdentifier:displayName:value: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a performance measurement for a single iteration with the value.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier displayName:(NSString *) displayName value:(NSMeasurement *) value;
```

## Parameters

- `identifier`: A unique identifier for the measurement.
- `displayName`: A human-readable name for the measurement.
- `value`: A value for the measurement.

## See Also

### Initializing a Measurement

- [initWithIdentifier:displayName:doubleValue:unitSymbol:](init%28identifier_displayname_doublevalue_unitsymbol_%29.md): Initializes a performance measurement for a single iteration with the value and unit of measurement.
- [initWithIdentifier:displayName:doubleValue:unitSymbol:polarity:](init%28identifier_displayname_doublevalue_unitsymbol_polarity_%29.md): Initializes a performance measurement for a single iteration with the value, unit of measurement, and polarity.
- [initWithIdentifier:displayName:value:polarity:](init%28identifier_displayname_value_polarity_%29.md): Initializes a performance measurement for a single iteration with the value and polarity.
