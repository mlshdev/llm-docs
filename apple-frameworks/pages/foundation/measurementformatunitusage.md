> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurementformatunitusage](https://developer.apple.com/documentation/foundation/measurementformatunitusage)

# MeasurementFormatUnitUsage

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that provides the generalized usage for a formatted measurement.

## Declaration

```swift
struct MeasurementFormatUnitUsage<UnitType> where UnitType : Dimension
```

## Topics

### Selecting a General Format for a Measurement Unit

- [general](measurementformatunitusage/general.md): A general usage of the formatted measurement.
- [asProvided](measurementformatunitusage/asprovided.md): A usage of the formatted measurement that reflects the units that you used to create the measurement.

### Selecting a Format for an Energy Measurement

- [food](measurementformatunitusage/food.md): Conforms when `UnitType` is `UnitEnergy`. A usage of an energy measurement related to food.
- [workout](measurementformatunitusage/workout.md): Conforms when `UnitType` is `UnitEnergy`. A usage of a energy measurement related to a workout.

### Selecting a Format for a Length Measurement

- [person](measurementformatunitusage/person-8bfxd.md): Conforms when `UnitType` is `UnitLength`. A format usage of a length measurement for displaying a distance as it relates to people.
- [personHeight](measurementformatunitusage/personheight.md): Conforms when `UnitType` is `UnitLength`. A usage of a length measurement related to a person’s height.
- [road](measurementformatunitusage/road.md): Conforms when `UnitType` is `UnitLength`. A usage of a length measurement related to a road.

### Selecting a Format for a Mass Measurement

- [personWeight](measurementformatunitusage/personweight.md): Conforms when `UnitType` is `UnitMass`. A usage of a mass measurement related to a person’s weight.

### Selecting a Format for a Temperature Measurement

- [person](measurementformatunitusage/person-4ifk7.md): Conforms when `UnitType` is `UnitTemperature`. A format usage of a temperature measurement for displaying a temperature as it relates to people.
- [weather](measurementformatunitusage/weather.md): Conforms when `UnitType` is `UnitTemperature`. A usage of a temperature measurement related to the weather.

### Type Properties

- [barometric](measurementformatunitusage/barometric.md): Conforms when `UnitType` is `UnitPressure`. Describes the unit for barometric pressure
- [focalLength](measurementformatunitusage/focallength.md): Conforms when `UnitType` is `UnitLength`. Used to format the focal length of an optical system, such as that of camera lenses
- [liquid](measurementformatunitusage/liquid.md): Conforms when `UnitType` is `UnitVolume`. Used to format the amount of liquid
- [rainfall](measurementformatunitusage/rainfall.md): Conforms when `UnitType` is `UnitLength`. Used to format the rainfall amount
- [snowfall](measurementformatunitusage/snowfall.md): Conforms when `UnitType` is `UnitLength`. Used to format the snowfall amount
- [visibility](measurementformatunitusage/visibility.md): Conforms when `UnitType` is `UnitLength`. Describes the distance of visibility
- [wind](measurementformatunitusage/wind.md): Conforms when `UnitType` is `UnitSpeed`. Describes the unit for wind speed

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
