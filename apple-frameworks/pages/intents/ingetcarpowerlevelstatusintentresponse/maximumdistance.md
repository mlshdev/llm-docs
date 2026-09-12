> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarpowerlevelstatusintentresponse/maximumdistance](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponse/maximumdistance)

# maximumDistance (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

The maximum rated distance the vehicle can travel with full resources.

## Declaration

```swift
var maximumDistance: Measurement<UnitLength>? { get set }
```

<a id="Discussion"></a>

## Discussion

For an electric vehicle, this value is the same as [distanceRemainingElectric](distanceremainingelectric.md). For a fuel-powered vehicle, this value is the same as [distanceRemainingFuel](distanceremainingfuel.md). For a hybrid vehicle, this value is the sum of `distanceRemainingElectric` and `distanceRemainingFuel`.

Due to driving characteristics, this value can change over time when the vehicle’s in motion.

## See Also

### Providing Fuel, Charge, and Distance Information

- [chargePercentRemaining](chargepercentremaining-51zwv.md): The percentage of charge that remains for the electric vehicle.
- [fuelPercentRemaining](fuelpercentremaining-56xw3.md): The percentage of fuel that remains for the fuel-powered vehicle.
- [distanceRemaining](distanceremaining.md): The maximum distance the vehicle can travel with the remaining resources.
- [maximumDistanceElectric](maximumdistanceelectric.md): The maximum rated distance the electric vehicle can travel on a full charge.
- [distanceRemainingElectric](distanceremainingelectric.md): The maximum distance the electric vehicle can travel with the remaining charge.
- [maximumDistanceFuel](maximumdistancefuel.md): The maximum rated distance the fuel-powered vehicle can travel with a full tank of fuel.
- [distanceRemainingFuel](distanceremainingfuel.md): The maximum distance the fuel-powered vehicle can travel with the remaining fuel.

# maximumDistance (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

The maximum rated distance the vehicle can travel with full resources.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSMeasurement<NSUnitLength *> * maximumDistance;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSMeasurement<NSUnitLength *> * maximumDistance;
```

<a id="Discussion"></a>

## Discussion

For an electric vehicle, this value is the same as [distanceRemainingElectric](distanceremainingelectric.md). For a fuel-powered vehicle, this value is the same as [distanceRemainingFuel](distanceremainingfuel.md). For a hybrid vehicle, this value is the sum of `distanceRemainingElectric` and `distanceRemainingFuel`.

Due to driving characteristics, this value can change over time when the vehicle’s in motion.

## See Also

### Providing Fuel, Charge, and Distance Information

- [chargePercentRemaining](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponse/chargepercentremaining-30zol): The percentage of charge that remains for the electric vehicle.
- [fuelPercentRemaining](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponse/fuelpercentremaining-6mdv4): The percentage of fuel remaining for the fuel-powered vehicle.
- [distanceRemaining](distanceremaining.md): The maximum distance the vehicle can travel with the remaining resources.
- [maximumDistanceElectric](maximumdistanceelectric.md): The maximum rated distance the electric vehicle can travel on a full charge.
- [distanceRemainingElectric](distanceremainingelectric.md): The maximum distance the electric vehicle can travel with the remaining charge.
- [maximumDistanceFuel](maximumdistancefuel.md): The maximum rated distance the fuel-powered vehicle can travel with a full tank of fuel.
- [distanceRemainingFuel](distanceremainingfuel.md): The maximum distance the fuel-powered vehicle can travel with the remaining fuel.
