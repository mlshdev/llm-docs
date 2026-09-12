> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarpowerlevelstatusintentresponse/fuelpercentremaining-56xw3](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponse/fuelpercentremaining-56xw3)

# fuelPercentRemaining

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 10.3+ · watchOS 3.2+

The percentage of fuel that remains for the fuel-powered vehicle.

## Declaration

```swift
@nonobjc final var fuelPercentRemaining: Float? { get set }
```

<a id="Discussion"></a>

## Discussion

Typically, you assign a value to this property only after handling the intent.

## See Also

### Providing Fuel, Charge, and Distance Information

- [chargePercentRemaining](chargepercentremaining-51zwv.md): The percentage of charge that remains for the electric vehicle.
- [maximumDistance](maximumdistance.md): The maximum rated distance the vehicle can travel with full resources.
- [distanceRemaining](distanceremaining.md): The maximum distance the vehicle can travel with the remaining resources.
- [maximumDistanceElectric](maximumdistanceelectric.md): The maximum rated distance the electric vehicle can travel on a full charge.
- [distanceRemainingElectric](distanceremainingelectric.md): The maximum distance the electric vehicle can travel with the remaining charge.
- [maximumDistanceFuel](maximumdistancefuel.md): The maximum rated distance the fuel-powered vehicle can travel with a full tank of fuel.
- [distanceRemainingFuel](distanceremainingfuel.md): The maximum distance the fuel-powered vehicle can travel with the remaining fuel.
