> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cproutedetail/init(fuellevel:)](https://developer.apple.com/documentation/carplay/cproutedetail/init(fuellevel:))

# init(fuelLevel:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates additional route information for a fuel level.

## Declaration

```swift
convenience init(fuelLevel: Measurement<UnitVolume>)
```

## Parameters

- `fuelLevel`: A measurement representing the remaining fuel level using @c NSUnitVolume. Common units:

  - @c NSUnitVolume.liters for gasoline/diesel (metric regions)
  - @c NSUnitVolume.gallons for gasoline/diesel (US)
  - @c NSUnitVolume.imperialGallons for gasoline/diesel (UK)

<a id="return-value"></a>

## Return Value

A new @c CPRouteDetail instance representing the fuel level

<a id="discussion"></a>

## Discussion

Use this method to display the estimated fuel level upon arrival at the destination. This helps drivers of liquid-fuel vehicles plan refueling stops along their route.

The system automatically converts the measurement to the user’s preferred units based on their region and settings (e.g., liters in metric regions, gallons in the US). Display the estimated remaining fuel rather than fuel consumed to help users assess whether refueling is necessary.

> **Note**

> For vehicles with alternative fuel types like compressed natural gas or hydrogen, consider using @c routeDetailWithFuelMass: or @c routeDetailWithFuelEnergy: as appropriate for the fuel measurement standard.

# routeDetailWithFuelLevel: (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates additional route information for a fuel level.

## Declaration

```objectivec
+ (instancetype) routeDetailWithFuelLevel:(NSMeasurement<NSUnitVolume *> *) fuelLevel;
```

## Parameters

- `fuelLevel`: A measurement representing the remaining fuel level using @c NSUnitVolume. Common units:

  - @c NSUnitVolume.liters for gasoline/diesel (metric regions)
  - @c NSUnitVolume.gallons for gasoline/diesel (US)
  - @c NSUnitVolume.imperialGallons for gasoline/diesel (UK)

<a id="return-value"></a>

## Return Value

A new @c CPRouteDetail instance representing the fuel level

<a id="discussion"></a>

## Discussion

Use this method to display the estimated fuel level upon arrival at the destination. This helps drivers of liquid-fuel vehicles plan refueling stops along their route.

The system automatically converts the measurement to the user’s preferred units based on their region and settings (e.g., liters in metric regions, gallons in the US). Display the estimated remaining fuel rather than fuel consumed to help users assess whether refueling is necessary.

> **Note**

> For vehicles with alternative fuel types like compressed natural gas or hydrogen, consider using @c routeDetailWithFuelMass: or @c routeDetailWithFuelEnergy: as appropriate for the fuel measurement standard.
