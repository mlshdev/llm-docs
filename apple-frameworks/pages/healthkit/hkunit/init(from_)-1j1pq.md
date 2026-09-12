> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/init(from:)-1j1pq](https://developer.apple.com/documentation/healthkit/hkunit/init(from:)-1j1pq)

# init(from:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Converts an energy formatter enumeration value into a corresponding HealthKit unit object.

## Declaration

```swift
convenience init(from energyFormatterUnit: EnergyFormatter.Unit)
```

## Parameters

- `energyFormatterUnit`: A valid energy formatter unit value. For a list of possible energy formatter unit values, see [EnergyFormatter.Unit](../../foundation/energyformatter/unit.md).

<a id="return-value"></a>

## Return Value

A HealthKit unit object, or `nil` if the unit parameter is not a valid energy formatter unit value.

## See Also

### Working with formatter units

- [energyFormatterUnit(from:)](energyformatterunit%28from_%29.md): Converts a HealthKit unit object into a corresponding energy formatter enumeration value.
- [lengthFormatterUnit(from:)](lengthformatterunit%28from_%29.md): Converts a HealthKit unit object into a corresponding length formatter enumeration value.
- [init(from:)](init%28from_%29-55e1u.md): Converts a length formatter enumeration value into a corresponding HealthKit object.
- [massFormatterUnit(from:)](massformatterunit%28from_%29.md): Converts a HealthKit unit object into a corresponding mass formatter enumeration value.
- [init(from:)](init%28from_%29-7h2li.md): Converts a mass formatter enumeration value into a corresponding HealthKit unit object.

# unitFromEnergyFormatterUnit: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Converts an energy formatter enumeration value into a corresponding HealthKit unit object.

## Declaration

```objectivec
+ (instancetype) unitFromEnergyFormatterUnit:(NSEnergyFormatterUnit) energyFormatterUnit;
```

## Parameters

- `energyFormatterUnit`: A valid energy formatter unit value. For a list of possible energy formatter unit values, see [NSEnergyFormatterUnit](../../foundation/energyformatter/unit.md).

<a id="return-value"></a>

## Return Value

A HealthKit unit object, or `nil` if the unit parameter is not a valid energy formatter unit value.

## See Also

### Working with formatter units

- [energyFormatterUnitFromUnit:](energyformatterunit%28from_%29.md): Converts a HealthKit unit object into a corresponding energy formatter enumeration value.
- [lengthFormatterUnitFromUnit:](lengthformatterunit%28from_%29.md): Converts a HealthKit unit object into a corresponding length formatter enumeration value.
- [unitFromLengthFormatterUnit:](init%28from_%29-55e1u.md): Converts a length formatter enumeration value into a corresponding HealthKit object.
- [massFormatterUnitFromUnit:](massformatterunit%28from_%29.md): Converts a HealthKit unit object into a corresponding mass formatter enumeration value.
- [unitFromMassFormatterUnit:](init%28from_%29-7h2li.md): Converts a mass formatter enumeration value into a corresponding HealthKit unit object.
