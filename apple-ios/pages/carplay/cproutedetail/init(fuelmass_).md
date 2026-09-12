> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cproutedetail/init(fuelmass:)](https://developer.apple.com/documentation/carplay/cproutedetail/init(fuelmass:))

# init(fuelMass:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates additional route information for fuel mass.

## Declaration

```swift
convenience init(fuelMass: Measurement<UnitMass>)
```

## Parameters

- `fuelMass`: A measurement representing the fuel mass using @c NSUnitMass. Common units:

  - @c NSUnitMass.kilograms for compressed natural gas
  - @c NSUnitMass.pounds for CNG in regions using imperial units

<a id="return-value"></a>

## Return Value

A new @c CPRouteDetail instance representing the fuel mass

<a id="discussion"></a>

## Discussion

Use this method to display fuel levels for vehicles that measure fuel by mass, such as compressed natural gas (CNG) vehicles.

CNG and similar compressed gas systems often measure fuel in mass units rather than volume due to the variable density under pressure. The system formats the mass measurement according to the user’s preferred units.

# routeDetailWithFuelMass: (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates additional route information for fuel mass.

## Declaration

```objectivec
+ (instancetype) routeDetailWithFuelMass:(NSMeasurement<NSUnitMass *> *) fuelMass;
```

## Parameters

- `fuelMass`: A measurement representing the fuel mass using @c NSUnitMass. Common units:

  - @c NSUnitMass.kilograms for compressed natural gas
  - @c NSUnitMass.pounds for CNG in regions using imperial units

<a id="return-value"></a>

## Return Value

A new @c CPRouteDetail instance representing the fuel mass

<a id="discussion"></a>

## Discussion

Use this method to display fuel levels for vehicles that measure fuel by mass, such as compressed natural gas (CNG) vehicles.

CNG and similar compressed gas systems often measure fuel in mass units rather than volume due to the variable density under pressure. The system formats the mass measurement according to the user’s preferred units.
