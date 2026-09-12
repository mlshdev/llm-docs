> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarpowerlevelstatusintentresponse/maximumdistancefuel](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponse/maximumdistancefuel)

# maximumDistanceFuel (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

The maximum rated distance the fuel-powered vehicle can travel with a full tank of fuel.

## Declaration

```swift
var maximumDistanceFuel: Measurement<UnitLength>? { get set }
```

<a id="Discussion"></a>

## Discussion

Due to driving characteristics, this value can change over time when the vehicle’s in motion.

## See Also

### Providing Fuel, Charge, and Distance Information

- [chargePercentRemaining](chargepercentremaining-51zwv.md): The percentage of charge that remains for the electric vehicle.
- [fuelPercentRemaining](fuelpercentremaining-56xw3.md): The percentage of fuel that remains for the fuel-powered vehicle.
- [maximumDistance](maximumdistance.md): The maximum rated distance the vehicle can travel with full resources.
- [distanceRemaining](distanceremaining.md): The maximum distance the vehicle can travel with the remaining resources.
- [maximumDistanceElectric](maximumdistanceelectric.md): The maximum rated distance the electric vehicle can travel on a full charge.
- [distanceRemainingElectric](distanceremainingelectric.md): The maximum distance the electric vehicle can travel with the remaining charge.
- [distanceRemainingFuel](distanceremainingfuel.md): The maximum distance the fuel-powered vehicle can travel with the remaining fuel.

# maximumDistanceFuel (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

The maximum rated distance the fuel-powered vehicle can travel with a full tank of fuel.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSMeasurement<NSUnitLength *> * maximumDistanceFuel;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSMeasurement<NSUnitLength *> * maximumDistanceFuel;
```

<a id="Discussion"></a>

## Discussion

Due to driving characteristics, this value can change over time when the vehicle’s in motion.

## See Also

### Providing Fuel, Charge, and Distance Information

- [chargePercentRemaining](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponse/chargepercentremaining-30zol): The percentage of charge that remains for the electric vehicle.
- [fuelPercentRemaining](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponse/fuelpercentremaining-6mdv4): The percentage of fuel remaining for the fuel-powered vehicle.
- [maximumDistance](maximumdistance.md): The maximum rated distance the vehicle can travel with full resources.
- [distanceRemaining](distanceremaining.md): The maximum distance the vehicle can travel with the remaining resources.
- [maximumDistanceElectric](maximumdistanceelectric.md): The maximum rated distance the electric vehicle can travel on a full charge.
- [distanceRemainingElectric](distanceremainingelectric.md): The maximum distance the electric vehicle can travel with the remaining charge.
- [distanceRemainingFuel](distanceremainingfuel.md): The maximum distance the fuel-powered vehicle can travel with the remaining fuel.
