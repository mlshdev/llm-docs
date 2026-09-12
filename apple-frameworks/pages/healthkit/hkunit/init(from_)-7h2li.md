> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/init(from:)-7h2li](https://developer.apple.com/documentation/healthkit/hkunit/init(from:)-7h2li)

# init(from:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Converts a mass formatter enumeration value into a corresponding HealthKit unit object.

## Declaration

```swift
convenience init(from massFormatterUnit: MassFormatter.Unit)
```

## Parameters

- `massFormatterUnit`: A valid mass formatter unit value. For a list of possible mass formatter unit values, see [MassFormatter.Unit](../../foundation/massformatter/unit.md).

<a id="return-value"></a>

## Return Value

A HealthKit unit object, or `nil` if the unit parameter is not a valid energy formatter unit value.

## See Also

### Working with formatter units

- [energyFormatterUnit(from:)](energyformatterunit%28from_%29.md): Converts a HealthKit unit object into a corresponding energy formatter enumeration value.
- [init(from:)](init%28from_%29-1j1pq.md): Converts an energy formatter enumeration value into a corresponding HealthKit unit object.
- [lengthFormatterUnit(from:)](lengthformatterunit%28from_%29.md): Converts a HealthKit unit object into a corresponding length formatter enumeration value.
- [init(from:)](init%28from_%29-55e1u.md): Converts a length formatter enumeration value into a corresponding HealthKit object.
- [massFormatterUnit(from:)](massformatterunit%28from_%29.md): Converts a HealthKit unit object into a corresponding mass formatter enumeration value.

# unitFromMassFormatterUnit: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Converts a mass formatter enumeration value into a corresponding HealthKit unit object.

## Declaration

```objectivec
+ (instancetype) unitFromMassFormatterUnit:(NSMassFormatterUnit) massFormatterUnit;
```

## Parameters

- `massFormatterUnit`: A valid mass formatter unit value. For a list of possible mass formatter unit values, see [NSMassFormatterUnit](../../foundation/massformatter/unit.md).

<a id="return-value"></a>

## Return Value

A HealthKit unit object, or `nil` if the unit parameter is not a valid energy formatter unit value.

## See Also

### Working with formatter units

- [energyFormatterUnitFromUnit:](energyformatterunit%28from_%29.md): Converts a HealthKit unit object into a corresponding energy formatter enumeration value.
- [unitFromEnergyFormatterUnit:](init%28from_%29-1j1pq.md): Converts an energy formatter enumeration value into a corresponding HealthKit unit object.
- [lengthFormatterUnitFromUnit:](lengthformatterunit%28from_%29.md): Converts a HealthKit unit object into a corresponding length formatter enumeration value.
- [unitFromLengthFormatterUnit:](init%28from_%29-55e1u.md): Converts a length formatter enumeration value into a corresponding HealthKit object.
- [massFormatterUnitFromUnit:](massformatterunit%28from_%29.md): Converts a HealthKit unit object into a corresponding mass formatter enumeration value.
