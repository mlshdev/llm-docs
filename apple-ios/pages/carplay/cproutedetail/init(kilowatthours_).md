> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cproutedetail/init(kilowatthours:)](https://developer.apple.com/documentation/carplay/cproutedetail/init(kilowatthours:))

# init(kilowattHours:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates additional route information for battery energy in kilowatt-hours.

## Declaration

```swift
convenience init(kilowattHours: Measurement<UnitEnergy>)
```

## Parameters

- `kilowattHours`: A measurement of battery energy using @c NSUnitEnergy.kilowattHours

<a id="return-value"></a>

## Return Value

A new @c CPRouteDetail instance representing the battery energy

<a id="discussion"></a>

## Discussion

Use this method to display battery levels for electric vehicles using absolute energy measurements rather than percentages. This provides more meaningful information for users familiar with their vehicle’s battery capacity.

Displaying battery in kilowatt-hours helps users better understand range and charging needs, particularly for long trips or when comparing vehicles with different battery capacities. A 10% battery in a 100 kWh vehicle (10 kWh) provides very different range than 10% in a 40 kWh vehicle (4 kWh).

> **Note**

> Most electric vehicles use kilowatt-hours as the standard unit for battery capacity. The system automatically formats this with the “kWh” abbreviation.

# routeDetailWithKilowattHours: (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates additional route information for battery energy in kilowatt-hours.

## Declaration

```objectivec
+ (instancetype) routeDetailWithKilowattHours:(NSMeasurement<NSUnitEnergy *> *) kilowattHours;
```

## Parameters

- `kilowattHours`: A measurement of battery energy using @c NSUnitEnergy.kilowattHours

<a id="return-value"></a>

## Return Value

A new @c CPRouteDetail instance representing the battery energy

<a id="discussion"></a>

## Discussion

Use this method to display battery levels for electric vehicles using absolute energy measurements rather than percentages. This provides more meaningful information for users familiar with their vehicle’s battery capacity.

Displaying battery in kilowatt-hours helps users better understand range and charging needs, particularly for long trips or when comparing vehicles with different battery capacities. A 10% battery in a 100 kWh vehicle (10 kWh) provides very different range than 10% in a 40 kWh vehicle (4 kWh).

> **Note**

> Most electric vehicles use kilowatt-hours as the standard unit for battery capacity. The system automatically formats this with the “kWh” abbreviation.
