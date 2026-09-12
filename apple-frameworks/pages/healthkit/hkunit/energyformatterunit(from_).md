> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/energyformatterunit(from:)](https://developer.apple.com/documentation/healthkit/hkunit/energyformatterunit(from:))

# energyFormatterUnit(from:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Converts a HealthKit unit object into a corresponding energy formatter enumeration value.

## Declaration

```swift
class func energyFormatterUnit(from unit: HKUnit) -> EnergyFormatter.Unit
```

## Parameters

- `unit`: A valid HealthKit unit object. If the unit is not an energy-type unit, this method throws an exception ([invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).

<a id="return-value"></a>

## Return Value

An energy formatter unit value. For a list of possible energy formatter unit values, see [EnergyFormatter.Unit](../../foundation/energyformatter/unit.md).

## See Also

### Working with formatter units

- [init(from:)](init%28from_%29-1j1pq.md): Converts an energy formatter enumeration value into a corresponding HealthKit unit object.
- [lengthFormatterUnit(from:)](lengthformatterunit%28from_%29.md): Converts a HealthKit unit object into a corresponding length formatter enumeration value.
- [init(from:)](init%28from_%29-55e1u.md): Converts a length formatter enumeration value into a corresponding HealthKit object.
- [massFormatterUnit(from:)](massformatterunit%28from_%29.md): Converts a HealthKit unit object into a corresponding mass formatter enumeration value.
- [init(from:)](init%28from_%29-7h2li.md): Converts a mass formatter enumeration value into a corresponding HealthKit unit object.

# energyFormatterUnitFromUnit: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Converts a HealthKit unit object into a corresponding energy formatter enumeration value.

## Declaration

```objectivec
+ (NSEnergyFormatterUnit) energyFormatterUnitFromUnit:(HKUnit *) unit;
```

## Parameters

- `unit`: A valid HealthKit unit object. If the unit is not an energy-type unit, this method throws an exception ([NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).

<a id="return-value"></a>

## Return Value

An energy formatter unit value. For a list of possible energy formatter unit values, see [NSEnergyFormatterUnit](../../foundation/energyformatter/unit.md).

## See Also

### Working with formatter units

- [unitFromEnergyFormatterUnit:](init%28from_%29-1j1pq.md): Converts an energy formatter enumeration value into a corresponding HealthKit unit object.
- [lengthFormatterUnitFromUnit:](lengthformatterunit%28from_%29.md): Converts a HealthKit unit object into a corresponding length formatter enumeration value.
- [unitFromLengthFormatterUnit:](init%28from_%29-55e1u.md): Converts a length formatter enumeration value into a corresponding HealthKit object.
- [massFormatterUnitFromUnit:](massformatterunit%28from_%29.md): Converts a HealthKit unit object into a corresponding mass formatter enumeration value.
- [unitFromMassFormatterUnit:](init%28from_%29-7h2li.md): Converts a mass formatter enumeration value into a corresponding HealthKit unit object.
