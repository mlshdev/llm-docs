> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cproutedetail/init(fuelenergy:)](https://developer.apple.com/documentation/carplay/cproutedetail/init(fuelenergy:))

# init(fuelEnergy:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates additional route information for fuel energy content.

## Declaration

```swift
convenience init(fuelEnergy: Measurement<UnitEnergy>)
```

## Parameters

- `fuelEnergy`: A measurement representing the fuel energy using @c NSUnitEnergy. Common units:

  - @c NSUnitEnergy.kilowattHours for hydrogen fuel cells
  - @c NSUnitEnergy.megajoules for alternative energy measurements

<a id="return-value"></a>

## Return Value

A new @c CPRouteDetail instance representing the fuel energy

<a id="discussion"></a>

## Discussion

Use this method to display fuel levels for hydrogen fuel cell vehicles or other vehicles where fuel is measured in energy units rather than volume or mass.

Hydrogen fuel cell vehicles often express fuel capacity in kilowatt-hours of energy content. The system formats this appropriately for user display.

> **Note**

> This method is distinct from battery energy (@c routeDetailWithKilowattHours:) and should be used specifically for fuel-based energy storage systems.

# routeDetailWithFuelEnergy: (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates additional route information for fuel energy content.

## Declaration

```objectivec
+ (instancetype) routeDetailWithFuelEnergy:(NSMeasurement<NSUnitEnergy *> *) fuelEnergy;
```

## Parameters

- `fuelEnergy`: A measurement representing the fuel energy using @c NSUnitEnergy. Common units:

  - @c NSUnitEnergy.kilowattHours for hydrogen fuel cells
  - @c NSUnitEnergy.megajoules for alternative energy measurements

<a id="return-value"></a>

## Return Value

A new @c CPRouteDetail instance representing the fuel energy

<a id="discussion"></a>

## Discussion

Use this method to display fuel levels for hydrogen fuel cell vehicles or other vehicles where fuel is measured in energy units rather than volume or mass.

Hydrogen fuel cell vehicles often express fuel capacity in kilowatt-hours of energy content. The system formats this appropriately for user display.

> **Note**

> This method is distinct from battery energy (@c routeDetailWithKilowattHours:) and should be used specifically for fuel-based energy storage systems.
