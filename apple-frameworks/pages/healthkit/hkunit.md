> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit](https://developer.apple.com/documentation/healthkit/hkunit)

# HKUnit (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A class for managing the units of measure within HealthKit.

## Declaration

```swift
class HKUnit
```

## Mentioned In

- [Defining and converting units and quantities](defining-and-converting-units-and-quantities.md)

<a id="overview"></a>

## Overview

The unit class supports most standard SI units (meters, seconds, and grams), SI units with prefixes (centimeters, milliseconds and kilograms) and equivalent non-SI units (feet, minutes, and pounds). HealthKit also supports creating complex units by mathematically combining existing units.

You use units when working with HealthKit quantities. Quantities store both the value (as a `double` data type) and its corresponding unit. You can then request the value from the quantity in any compatible units. For more information on working with quantities, see [HKQuantity](hkquantity.md).

> **Note**

> Number formatters that use units (for example, [EnergyFormatter](../foundation/energyformatter.md), [LengthFormatter](../foundation/lengthformatter.md), and [MassFormatter](../foundation/massformatter.md)) use a custom enumeration to specify their units. For example, the [EnergyFormatter](../foundation/energyformatter.md) class uses the [EnergyFormatter.Unit](../foundation/energyformatter/unit.md) enum. The [HKUnit](hkunit.md) class provides several methods to translate between the formatter enumerations and the HealthKit units. For more information, see Working with formatter units.

<a id="Using-Units"></a>

### Using Units

As with many HealthKit classes, don’t subclass the [HKUnit](hkunit.md) class.

The `HKUnit` class is implemented using a facade design pattern. It uses custom subclasses to represent instances of the different unit types. For example, the [second()](hkunit/second%28%29.md) convenience method actually returns an instance of the private `HKTimeUnit` subclass.

Additionally, the unit class uses a single unit instance to represent all copies of the same unit in your app, wherever possible. For example, two calls to the [second()](hkunit/second%28%29.md) method return the same unit object. This helps reduce the amount of memory used by unit instances.

## Topics

### Working with units

- [init(from:)](hkunit/init%28from_%29-9qont.md): Returns the unit instance described by the provided string.
- [unitString](hkunit/unitstring.md): A string representation of the unit object.
- [isNull()](hkunit/isnull%28%29.md): Returns a Boolean value indicating whether the unit is null.

### Working with formatter units

- [energyFormatterUnit(from:)](hkunit/energyformatterunit%28from_%29.md): Converts a HealthKit unit object into a corresponding energy formatter enumeration value.
- [init(from:)](hkunit/init%28from_%29-1j1pq.md): Converts an energy formatter enumeration value into a corresponding HealthKit unit object.
- [lengthFormatterUnit(from:)](hkunit/lengthformatterunit%28from_%29.md): Converts a HealthKit unit object into a corresponding length formatter enumeration value.
- [init(from:)](hkunit/init%28from_%29-55e1u.md): Converts a length formatter enumeration value into a corresponding HealthKit object.
- [massFormatterUnit(from:)](hkunit/massformatterunit%28from_%29.md): Converts a HealthKit unit object into a corresponding mass formatter enumeration value.
- [init(from:)](hkunit/init%28from_%29-7h2li.md): Converts a mass formatter enumeration value into a corresponding HealthKit unit object.

### Constructing mass units

- [gram()](hkunit/gram%28%29.md): Returns a HealthKit unit for measuring mass in grams.
- [gramUnit(with:)](hkunit/gramunit%28with_%29.md): Returns a HealthKit unit for measuring mass, using gram units with the provided prefix.
- [ounce()](hkunit/ounce%28%29.md): Returns a HealthKit unit for measuring mass in ounces.
- [pound()](hkunit/pound%28%29.md): Returns a HealthKit unit for measuring mass in pounds.
- [stone()](hkunit/stone%28%29.md): Returns a HealthKit unit for measuring mass in stones.
- [moleUnit(withMolarMass:)](hkunit/moleunit%28withmolarmass_%29.md): Returns a HealthKit unit for measuring mass in moles for a given molar mass.
- [moleUnit(with:molarMass:)](hkunit/moleunit%28with_molarmass_%29.md): Returns a HealthKit unit for measuring mass in moles, with the given prefix and molar mass.
- [HKUnitMolarMassBloodGlucose](hkunitmolarmassbloodglucose.md): The molecular mass of blood glucose, typically used to create mole units for blood glucose.

### Constructing length units

- [meter()](hkunit/meter%28%29.md): Returns a HealthKit unit for measuring length in meters.
- [meterUnit(with:)](hkunit/meterunit%28with_%29.md): Returns a HealthKit unit for measuring length, using meter units with the provided prefix.
- [inch()](hkunit/inch%28%29.md): Returns a HealthKit unit for measuring length in inches.
- [foot()](hkunit/foot%28%29.md): Returns a HealthKit unit for measuring length in feet.
- [yard()](hkunit/yard%28%29.md): Returns a HealthKit unit for measuring length in yards.
- [mile()](hkunit/mile%28%29.md): Returns a HealthKit unit for measuring length in miles.

### Constructing volume units

- [liter()](hkunit/liter%28%29.md): Returns a HealthKit unit for measuring volume in liters.
- [literUnit(with:)](hkunit/literunit%28with_%29.md): Returns a HealthKit unit for measuring volume, using liter units with the provided prefix.
- [fluidOunceUS()](hkunit/fluidounceus%28%29.md): Returns a HealthKit unit for measuring volume in US fluid ounces.
- [fluidOunceImperial()](hkunit/fluidounceimperial%28%29.md): Returns a HealthKit unit for measuring volume in imperial fluid ounces.
- [cupUS()](hkunit/cupus%28%29.md): Returns a HealthKit unit for measuring volume in US cups.
- [cupImperial()](hkunit/cupimperial%28%29.md): Returns a HealthKit unit for measuring volume in imperial cups.
- [pintUS()](hkunit/pintus%28%29.md): Returns a HealthKit unit for measuring volume in US pints.
- [pintImperial()](hkunit/pintimperial%28%29.md): Returns a HealthKit unit for measuring volume in imperial pints.

### Constructing pressure units

- [pascal()](hkunit/pascal%28%29.md): Returns a HealthKit unit for measuring pressure in pascals.
- [pascalUnit(with:)](hkunit/pascalunit%28with_%29.md): Returns a HealthKit unit for measuring pressure, using pascal units with the provided prefix.
- [millimeterOfMercury()](hkunit/millimeterofmercury%28%29.md): Returns a HealthKit unit for measuring pressure in millimeters of mercury.
- [inchesOfMercury()](hkunit/inchesofmercury%28%29.md): Returns a HealthKit unit for measuring pressure in inches of mercury.
- [centimeterOfWater()](hkunit/centimeterofwater%28%29.md): Returns a HealthKit unit for measuring pressure in centimeters of water.
- [atmosphere()](hkunit/atmosphere%28%29.md): Returns a HealthKit unit for measuring pressure in atmospheres.
- [decibelAWeightedSoundPressureLevel()](hkunit/decibelaweightedsoundpressurelevel%28%29.md): Returns a HealthKit unit for measuring the difference between the local pressure and the ambient atmospheric pressure caused by sound.

### Constructing time units

- [second()](hkunit/second%28%29.md): Returns a HealthKit unit for measuring time in seconds.
- [secondUnit(with:)](hkunit/secondunit%28with_%29.md): Returns a HealthKit unit for measuring time, using second units with the provided prefix.
- [minute()](hkunit/minute%28%29.md): Returns a HealthKit unit for measuring time in minutes.
- [hour()](hkunit/hour%28%29.md): Returns a HealthKit unit for measuring time in hours.
- [day()](hkunit/day%28%29.md): Returns a HealthKit unit for measuring time in days.

### Constructing energy units

- [joule()](hkunit/joule%28%29.md): Returns a HealthKit unit for measuring energy in joules.
- [jouleUnit(with:)](hkunit/jouleunit%28with_%29.md): Returns a HealthKit unit for measuring energy, using joule units with the provided prefix.
- [kilocalorie()](hkunit/kilocalorie%28%29.md): Returns a HealthKit unit for measuring energy in kilocalories.
- [largeCalorie()](hkunit/largecalorie%28%29.md): Returns a HealthKit unit for measuring energy in large calories (Cal).
- [smallCalorie()](hkunit/smallcalorie%28%29.md): Returns a HealthKit unit for measuring energy in small calories (cal).
- [calorie()](hkunit/calorie%28%29.md): Deprecated. Returns a HealthKit unit for measuring energy in calories.

### Constructing power units

- [watt()](hkunit/watt%28%29.md): Returns a HealthKit unit for measuring power in watts.
- [wattUnit(with:)](hkunit/wattunit%28with_%29.md): Returns a HealthKit unit for measuring power, using watt units with the provided prefix.

### Constructing temperature units

- [degreeCelsius()](hkunit/degreecelsius%28%29.md): Returns a HealthKit unit for measuring temperature in degrees Celsius.
- [degreeFahrenheit()](hkunit/degreefahrenheit%28%29.md): Returns a HealthKit unit for measuring temperature in degrees Fahrenheit.
- [kelvin()](hkunit/kelvin%28%29.md): Returns a HealthKit unit for measuring temperature in kelvins.

### Constructing hearing sensitivity units

- [decibelHearingLevel()](hkunit/decibelhearinglevel%28%29.md): Returns a HealthKit unit for measuring the intensity of a sound.

### Constructing frequency units

- [hertz()](hkunit/hertz%28%29.md): Returns a HealthKit unit for measuring frequency in hertz.
- [hertzUnit(with:)](hkunit/hertzunit%28with_%29.md): Returns a HealthKit unit for measuring frequency in hertz with the provided prefix.

### Constructing vision units

- [diopter()](hkunit/diopter%28%29.md): Returns a HealthKit unit for measuring the optical power of a lens using diopter units.
- [prismDiopter()](hkunit/prismdiopter%28%29.md): Returns a HealthKit unit for measuring the prismatic deviation of a lens using prism diopter units.

### Constructing angle units

- [degreeAngle()](hkunit/degreeangle%28%29.md): Returns a HealthKit unit for measuring angles using degrees.
- [radianAngle()](hkunit/radianangle%28%29.md): Returns a HealthKit unit for measuring angles using radians.
- [radianAngleUnit(with:)](hkunit/radianangleunit%28with_%29.md): Returns a HealthKit unit for measuring angles, using radian units with the provided prefix.

### Constructing electrical conductance units

- [siemen()](hkunit/siemen%28%29.md): Returns a HealthKit unit for measuring electrical conductance in siemens.
- [siemenUnit(with:)](hkunit/siemenunit%28with_%29.md): Returns a HealthKit unit for measuring electrical conductance, using siemen units with the provided prefix.

### Electrical potential difference

- [volt()](hkunit/volt%28%29.md): Returns a HealthKit unit for measuring the difference in electrical potential using volts.
- [voltUnit(with:)](hkunit/voltunit%28with_%29.md): Returns a HealthKit unit for measuring the electrical potential difference in volts with the provided prefix.

### Constructing pharmacology units

- [internationalUnit()](hkunit/internationalunit%28%29.md): Returns a HealthKit unit that measures the amount of a biologically active substance in international units (IU).

### Constructing scalar units

- [count()](hkunit/count%28%29.md): Returns a HealthKit unit for measuring counts.
- [percent()](hkunit/percent%28%29.md): Returns a HealthKit unit for measuring percentages.

### Performing unit math

- [unitMultiplied(by:)](hkunit/unitmultiplied%28by_%29.md): Creates a complex unit by multiplying the receiving unit with another unit.
- [unitDivided(by:)](hkunit/unitdivided%28by_%29.md): Creates a complex unit by dividing the receiving unit by another unit.
- [unitRaised(toPower:)](hkunit/unitraised%28topower_%29.md): Creates a complex unit by raising the unit to the given power.
- [reciprocal()](hkunit/reciprocal%28%29.md): Returns a complex unit representing the unit’s reciprocal.

### Constants

- [HKMetricPrefix](hkmetricprefix.md): Prefixes that can be added to SI units to change the order of magnitude.

### Initializers

- [init(coder:)](hkunit/init%28coder_%29.md)
- [init(fromEnergyFormatterUnit:)](hkunit/init%28fromenergyformatterunit_%29.md)
- [init(fromLengthFormatterUnit:)](hkunit/init%28fromlengthformatterunit_%29.md)
- [init(fromMassFormatterUnit:)](hkunit/init%28frommassformatterunit_%29.md)
- [init(fromString:)](hkunit/init%28fromstring_%29.md)

### Type Methods

- [appleEffortScore()](hkunit/appleeffortscore%28%29.md)
- [lux()](hkunit/lux%28%29.md): Returns a HealthKit unit for measuring illuminance in lux.
- [luxUnit(with:)](hkunit/luxunit%28with_%29.md): Returns a HealthKit unit for measuring illuminance, using lux units with the provided prefix.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Units and quantities

- [Defining and converting units and quantities](defining-and-converting-units-and-quantities.md): Create and convert units and quantities.
- [HKQuantity](hkquantity.md): An object that stores a value for a given unit.
- [HKMetricPrefix](hkmetricprefix.md): Prefixes that can be added to SI units to change the order of magnitude.

# HKUnit (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A class for managing the units of measure within HealthKit.

## Declaration

```objectivec
@interface HKUnit : NSObject
```

## Mentioned In

- [Defining and converting units and quantities](defining-and-converting-units-and-quantities.md)

<a id="overview"></a>

## Overview

The unit class supports most standard SI units (meters, seconds, and grams), SI units with prefixes (centimeters, milliseconds and kilograms) and equivalent non-SI units (feet, minutes, and pounds). HealthKit also supports creating complex units by mathematically combining existing units.

You use units when working with HealthKit quantities. Quantities store both the value (as a `double` data type) and its corresponding unit. You can then request the value from the quantity in any compatible units. For more information on working with quantities, see [HKQuantity](hkquantity.md).

> **Note**

> Number formatters that use units (for example, [NSEnergyFormatter](../foundation/energyformatter.md), [NSLengthFormatter](../foundation/lengthformatter.md), and [NSMassFormatter](../foundation/massformatter.md)) use a custom enumeration to specify their units. For example, the [NSEnergyFormatter](../foundation/energyformatter.md) class uses the [NSEnergyFormatterUnit](../foundation/energyformatter/unit.md) enum. The [HKUnit](hkunit.md) class provides several methods to translate between the formatter enumerations and the HealthKit units. For more information, see Working with formatter units.

<a id="Using-Units"></a>

### Using Units

As with many HealthKit classes, don’t subclass the [HKUnit](hkunit.md) class.

The `HKUnit` class is implemented using a facade design pattern. It uses custom subclasses to represent instances of the different unit types. For example, the [secondUnit](hkunit/second%28%29.md) convenience method actually returns an instance of the private `HKTimeUnit` subclass.

Additionally, the unit class uses a single unit instance to represent all copies of the same unit in your app, wherever possible. For example, two calls to the [secondUnit](hkunit/second%28%29.md) method return the same unit object. This helps reduce the amount of memory used by unit instances.

## Topics

### Working with units

- [unitFromString:](hkunit/init%28from_%29-9qont.md): Returns the unit instance described by the provided string.
- [unitString](hkunit/unitstring.md): A string representation of the unit object.
- [isNull](hkunit/isnull%28%29.md): Returns a Boolean value indicating whether the unit is null.

### Working with formatter units

- [energyFormatterUnitFromUnit:](hkunit/energyformatterunit%28from_%29.md): Converts a HealthKit unit object into a corresponding energy formatter enumeration value.
- [unitFromEnergyFormatterUnit:](hkunit/init%28from_%29-1j1pq.md): Converts an energy formatter enumeration value into a corresponding HealthKit unit object.
- [lengthFormatterUnitFromUnit:](hkunit/lengthformatterunit%28from_%29.md): Converts a HealthKit unit object into a corresponding length formatter enumeration value.
- [unitFromLengthFormatterUnit:](hkunit/init%28from_%29-55e1u.md): Converts a length formatter enumeration value into a corresponding HealthKit object.
- [massFormatterUnitFromUnit:](hkunit/massformatterunit%28from_%29.md): Converts a HealthKit unit object into a corresponding mass formatter enumeration value.
- [unitFromMassFormatterUnit:](hkunit/init%28from_%29-7h2li.md): Converts a mass formatter enumeration value into a corresponding HealthKit unit object.

### Constructing mass units

- [gramUnit](hkunit/gram%28%29.md): Returns a HealthKit unit for measuring mass in grams.
- [gramUnitWithMetricPrefix:](hkunit/gramunit%28with_%29.md): Returns a HealthKit unit for measuring mass, using gram units with the provided prefix.
- [ounceUnit](hkunit/ounce%28%29.md): Returns a HealthKit unit for measuring mass in ounces.
- [poundUnit](hkunit/pound%28%29.md): Returns a HealthKit unit for measuring mass in pounds.
- [stoneUnit](hkunit/stone%28%29.md): Returns a HealthKit unit for measuring mass in stones.
- [moleUnitWithMolarMass:](hkunit/moleunit%28withmolarmass_%29.md): Returns a HealthKit unit for measuring mass in moles for a given molar mass.
- [moleUnitWithMetricPrefix:molarMass:](hkunit/moleunit%28with_molarmass_%29.md): Returns a HealthKit unit for measuring mass in moles, with the given prefix and molar mass.
- [HKUnitMolarMassBloodGlucose](hkunitmolarmassbloodglucose.md): The molecular mass of blood glucose, typically used to create mole units for blood glucose.

### Constructing length units

- [meterUnit](hkunit/meter%28%29.md): Returns a HealthKit unit for measuring length in meters.
- [meterUnitWithMetricPrefix:](hkunit/meterunit%28with_%29.md): Returns a HealthKit unit for measuring length, using meter units with the provided prefix.
- [inchUnit](hkunit/inch%28%29.md): Returns a HealthKit unit for measuring length in inches.
- [footUnit](hkunit/foot%28%29.md): Returns a HealthKit unit for measuring length in feet.
- [yardUnit](hkunit/yard%28%29.md): Returns a HealthKit unit for measuring length in yards.
- [mileUnit](hkunit/mile%28%29.md): Returns a HealthKit unit for measuring length in miles.

### Constructing volume units

- [literUnit](hkunit/liter%28%29.md): Returns a HealthKit unit for measuring volume in liters.
- [literUnitWithMetricPrefix:](hkunit/literunit%28with_%29.md): Returns a HealthKit unit for measuring volume, using liter units with the provided prefix.
- [fluidOunceUSUnit](hkunit/fluidounceus%28%29.md): Returns a HealthKit unit for measuring volume in US fluid ounces.
- [fluidOunceImperialUnit](hkunit/fluidounceimperial%28%29.md): Returns a HealthKit unit for measuring volume in imperial fluid ounces.
- [cupUSUnit](hkunit/cupus%28%29.md): Returns a HealthKit unit for measuring volume in US cups.
- [cupImperialUnit](hkunit/cupimperial%28%29.md): Returns a HealthKit unit for measuring volume in imperial cups.
- [pintUSUnit](hkunit/pintus%28%29.md): Returns a HealthKit unit for measuring volume in US pints.
- [pintImperialUnit](hkunit/pintimperial%28%29.md): Returns a HealthKit unit for measuring volume in imperial pints.

### Constructing pressure units

- [pascalUnit](hkunit/pascal%28%29.md): Returns a HealthKit unit for measuring pressure in pascals.
- [pascalUnitWithMetricPrefix:](hkunit/pascalunit%28with_%29.md): Returns a HealthKit unit for measuring pressure, using pascal units with the provided prefix.
- [millimeterOfMercuryUnit](hkunit/millimeterofmercury%28%29.md): Returns a HealthKit unit for measuring pressure in millimeters of mercury.
- [inchesOfMercuryUnit](hkunit/inchesofmercury%28%29.md): Returns a HealthKit unit for measuring pressure in inches of mercury.
- [centimeterOfWaterUnit](hkunit/centimeterofwater%28%29.md): Returns a HealthKit unit for measuring pressure in centimeters of water.
- [atmosphereUnit](hkunit/atmosphere%28%29.md): Returns a HealthKit unit for measuring pressure in atmospheres.
- [decibelAWeightedSoundPressureLevelUnit](hkunit/decibelaweightedsoundpressurelevel%28%29.md): Returns a HealthKit unit for measuring the difference between the local pressure and the ambient atmospheric pressure caused by sound.

### Constructing time units

- [secondUnit](hkunit/second%28%29.md): Returns a HealthKit unit for measuring time in seconds.
- [secondUnitWithMetricPrefix:](hkunit/secondunit%28with_%29.md): Returns a HealthKit unit for measuring time, using second units with the provided prefix.
- [minuteUnit](hkunit/minute%28%29.md): Returns a HealthKit unit for measuring time in minutes.
- [hourUnit](hkunit/hour%28%29.md): Returns a HealthKit unit for measuring time in hours.
- [dayUnit](hkunit/day%28%29.md): Returns a HealthKit unit for measuring time in days.

### Constructing energy units

- [jouleUnit](hkunit/joule%28%29.md): Returns a HealthKit unit for measuring energy in joules.
- [jouleUnitWithMetricPrefix:](hkunit/jouleunit%28with_%29.md): Returns a HealthKit unit for measuring energy, using joule units with the provided prefix.
- [kilocalorieUnit](hkunit/kilocalorie%28%29.md): Returns a HealthKit unit for measuring energy in kilocalories.
- [largeCalorieUnit](hkunit/largecalorie%28%29.md): Returns a HealthKit unit for measuring energy in large calories (Cal).
- [smallCalorieUnit](hkunit/smallcalorie%28%29.md): Returns a HealthKit unit for measuring energy in small calories (cal).
- [calorieUnit](hkunit/calorie%28%29.md): Deprecated. Returns a HealthKit unit for measuring energy in calories.

### Constructing power units

- [wattUnit](hkunit/watt%28%29.md): Returns a HealthKit unit for measuring power in watts.
- [wattUnitWithMetricPrefix:](hkunit/wattunit%28with_%29.md): Returns a HealthKit unit for measuring power, using watt units with the provided prefix.

### Constructing temperature units

- [degreeCelsiusUnit](hkunit/degreecelsius%28%29.md): Returns a HealthKit unit for measuring temperature in degrees Celsius.
- [degreeFahrenheitUnit](hkunit/degreefahrenheit%28%29.md): Returns a HealthKit unit for measuring temperature in degrees Fahrenheit.
- [kelvinUnit](hkunit/kelvin%28%29.md): Returns a HealthKit unit for measuring temperature in kelvins.

### Constructing hearing sensitivity units

- [decibelHearingLevelUnit](hkunit/decibelhearinglevel%28%29.md): Returns a HealthKit unit for measuring the intensity of a sound.

### Constructing frequency units

- [hertzUnit](hkunit/hertz%28%29.md): Returns a HealthKit unit for measuring frequency in hertz.
- [hertzUnitWithMetricPrefix:](hkunit/hertzunit%28with_%29.md): Returns a HealthKit unit for measuring frequency in hertz with the provided prefix.

### Constructing vision units

- [diopterUnit](hkunit/diopter%28%29.md): Returns a HealthKit unit for measuring the optical power of a lens using diopter units.
- [prismDiopterUnit](hkunit/prismdiopter%28%29.md): Returns a HealthKit unit for measuring the prismatic deviation of a lens using prism diopter units.

### Constructing angle units

- [degreeAngleUnit](hkunit/degreeangle%28%29.md): Returns a HealthKit unit for measuring angles using degrees.
- [radianAngleUnit](hkunit/radianangle%28%29.md): Returns a HealthKit unit for measuring angles using radians.
- [radianAngleUnitWithMetricPrefix:](hkunit/radianangleunit%28with_%29.md): Returns a HealthKit unit for measuring angles, using radian units with the provided prefix.

### Constructing electrical conductance units

- [siemenUnit](hkunit/siemen%28%29.md): Returns a HealthKit unit for measuring electrical conductance in siemens.
- [siemenUnitWithMetricPrefix:](hkunit/siemenunit%28with_%29.md): Returns a HealthKit unit for measuring electrical conductance, using siemen units with the provided prefix.

### Electrical potential difference

- [voltUnit](hkunit/volt%28%29.md): Returns a HealthKit unit for measuring the difference in electrical potential using volts.
- [voltUnitWithMetricPrefix:](hkunit/voltunit%28with_%29.md): Returns a HealthKit unit for measuring the electrical potential difference in volts with the provided prefix.

### Constructing pharmacology units

- [internationalUnit](hkunit/internationalunit%28%29.md): Returns a HealthKit unit that measures the amount of a biologically active substance in international units (IU).

### Constructing scalar units

- [countUnit](hkunit/count%28%29.md): Returns a HealthKit unit for measuring counts.
- [percentUnit](hkunit/percent%28%29.md): Returns a HealthKit unit for measuring percentages.

### Performing unit math

- [unitMultipliedByUnit:](hkunit/unitmultiplied%28by_%29.md): Creates a complex unit by multiplying the receiving unit with another unit.
- [unitDividedByUnit:](hkunit/unitdivided%28by_%29.md): Creates a complex unit by dividing the receiving unit by another unit.
- [unitRaisedToPower:](hkunit/unitraised%28topower_%29.md): Creates a complex unit by raising the unit to the given power.
- [reciprocalUnit](hkunit/reciprocal%28%29.md): Returns a complex unit representing the unit’s reciprocal.

### Constants

- [HKMetricPrefix](hkmetricprefix.md): Prefixes that can be added to SI units to change the order of magnitude.

### Type Methods

- [appleEffortScoreUnit](hkunit/appleeffortscore%28%29.md)
- [luxUnit](hkunit/lux%28%29.md): Returns a HealthKit unit for measuring illuminance in lux.
- [luxUnitWithMetricPrefix:](hkunit/luxunit%28with_%29.md): Returns a HealthKit unit for measuring illuminance, using lux units with the provided prefix.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Units and quantities

- [Defining and converting units and quantities](defining-and-converting-units-and-quantities.md): Create and convert units and quantities.
- [HKQuantity](hkquantity.md): An object that stores a value for a given unit.
- [HKMetricPrefix](hkmetricprefix.md): Prefixes that can be added to SI units to change the order of magnitude.
