> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/init(from:)-55e1u](https://developer.apple.com/documentation/healthkit/hkunit/init(from:)-55e1u)

# init(from:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Converts a length formatter enumeration value into a corresponding HealthKit object.

## Declaration

```swift
convenience init(from lengthFormatterUnit: LengthFormatter.Unit)
```

## Parameters

- `lengthFormatterUnit`: A valid length formatter unit value. For a list of possible length formatter unit values, see [LengthFormatter.Unit](../../foundation/lengthformatter/unit.md).

<a id="return-value"></a>

## Return Value

A HealthKit unit object, or `nil` if the unit parameter is not a valid length formatter unit value.

## See Also

### Working with formatter units

- [energyFormatterUnit(from:)](energyformatterunit%28from_%29.md): Converts a HealthKit unit object into a corresponding energy formatter enumeration value.
- [init(from:)](init%28from_%29-1j1pq.md): Converts an energy formatter enumeration value into a corresponding HealthKit unit object.
- [lengthFormatterUnit(from:)](lengthformatterunit%28from_%29.md): Converts a HealthKit unit object into a corresponding length formatter enumeration value.
- [massFormatterUnit(from:)](massformatterunit%28from_%29.md): Converts a HealthKit unit object into a corresponding mass formatter enumeration value.
- [init(from:)](init%28from_%29-7h2li.md): Converts a mass formatter enumeration value into a corresponding HealthKit unit object.

# unitFromLengthFormatterUnit: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Converts a length formatter enumeration value into a corresponding HealthKit object.

## Declaration

```objectivec
+ (instancetype) unitFromLengthFormatterUnit:(NSLengthFormatterUnit) lengthFormatterUnit;
```

## Parameters

- `lengthFormatterUnit`: A valid length formatter unit value. For a list of possible length formatter unit values, see [NSLengthFormatterUnit](../../foundation/lengthformatter/unit.md).

<a id="return-value"></a>

## Return Value

A HealthKit unit object, or `nil` if the unit parameter is not a valid length formatter unit value.

## See Also

### Working with formatter units

- [energyFormatterUnitFromUnit:](energyformatterunit%28from_%29.md): Converts a HealthKit unit object into a corresponding energy formatter enumeration value.
- [unitFromEnergyFormatterUnit:](init%28from_%29-1j1pq.md): Converts an energy formatter enumeration value into a corresponding HealthKit unit object.
- [lengthFormatterUnitFromUnit:](lengthformatterunit%28from_%29.md): Converts a HealthKit unit object into a corresponding length formatter enumeration value.
- [massFormatterUnitFromUnit:](massformatterunit%28from_%29.md): Converts a HealthKit unit object into a corresponding mass formatter enumeration value.
- [unitFromMassFormatterUnit:](init%28from_%29-7h2li.md): Converts a mass formatter enumeration value into a corresponding HealthKit unit object.
