> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfgregorianunitflags](https://developer.apple.com/documentation/corefoundation/cfgregorianunitflags)

# CFGregorianUnitFlags (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

These option flags are used as a mask to indicate a specific set of fields in the CFGregorianDate or CFGregorianUnits structures.

## Declaration

```swift
struct CFGregorianUnitFlags
```

<a id="overview"></a>

## Overview

These flags are used with functions such as [CFGregorianDateIsValid(\_:\_:)](cfgregoriandateisvalid%28____%29.md) and [CFAbsoluteTimeGetDifferenceAsGregorianUnits(\_:\_:\_:\_:)](cfabsolutetimegetdifferenceasgregorianunits%28________%29.md) which operate on a CFGregorianDate or CFGregorianUnits structure. For more details, see the discussion of those functions.

## Topics

### Constants

- [unitsYears](cfgregorianunitflags/unitsyears.md): Deprecated. Specifies the year field.
- [unitsMonths](cfgregorianunitflags/unitsmonths.md): Deprecated. Specifies the month field.
- [unitsDays](cfgregorianunitflags/unitsdays.md): Deprecated. Specifies the day field.
- [unitsHours](cfgregorianunitflags/unitshours.md): Deprecated. Specifies the hours field.
- [unitsMinutes](cfgregorianunitflags/unitsminutes.md): Deprecated. Specifies the minutes field.
- [unitsSeconds](cfgregorianunitflags/unitsseconds.md): Deprecated. Specifies the seconds field.
- [allUnits](cfgregorianunitflags/allunits.md): Deprecated. Specifies all fields.

### Initializers

- [init(rawValue:)](cfgregorianunitflags/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [Predefined Time Interval Values](predefined-time-interval-values.md): Time intervals between the absolute reference date and certain other dates.

# CFGregorianUnitFlags (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

These option flags are used as a mask to indicate a specific set of fields in the CFGregorianDate or CFGregorianUnits structures.

## Declaration

```objectivec
enum CFGregorianUnitFlags : CFOptionFlags;
```

<a id="overview"></a>

## Overview

These flags are used with functions such as [CFGregorianDateIsValid](cfgregoriandateisvalid%28____%29.md) and [CFAbsoluteTimeGetDifferenceAsGregorianUnits](cfabsolutetimegetdifferenceasgregorianunits%28________%29.md) which operate on a CFGregorianDate or CFGregorianUnits structure. For more details, see the discussion of those functions.

## Topics

### Constants

- [kCFGregorianUnitsYears](cfgregorianunitflags/unitsyears.md): Deprecated. Specifies the year field.
- [kCFGregorianUnitsMonths](cfgregorianunitflags/unitsmonths.md): Deprecated. Specifies the month field.
- [kCFGregorianUnitsDays](cfgregorianunitflags/unitsdays.md): Deprecated. Specifies the day field.
- [kCFGregorianUnitsHours](cfgregorianunitflags/unitshours.md): Deprecated. Specifies the hours field.
- [kCFGregorianUnitsMinutes](cfgregorianunitflags/unitsminutes.md): Deprecated. Specifies the minutes field.
- [kCFGregorianUnitsSeconds](cfgregorianunitflags/unitsseconds.md): Deprecated. Specifies the seconds field.
- [kCFGregorianAllUnits](cfgregorianunitflags/allunits.md): Deprecated. Specifies all fields.

## See Also

### Constants

- [Predefined Time Interval Values](predefined-time-interval-values.md): Time intervals between the absolute reference date and certain other dates.
