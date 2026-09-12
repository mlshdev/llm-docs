> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricvehiclestatusevent/status-swift.enum/chargingactive(_:)](https://developer.apple.com/documentation/energykit/electricvehiclestatusevent/status-swift.enum/chargingactive(_:))

# ElectricVehicleStatusEvent.Status.chargingActive(\_:)

**Framework:** EnergyKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst

A status that indicates that the vehicle is actively charging.

## Declaration

```swift
case chargingActive(ElectricVehicleChargingReason.ActiveReason)
```

## Mentioned In

- [Providing charging history for electric vehicles](../../providing-informative-charging-history-for-electric-vehicles.md)

<a id="discussion"></a>

## Discussion

When your app provides status for a load event, communicate charging activity using this method. The [ElectricVehicleChargingReason.ActiveReason](../../electricvehiclechargingreason/activereason.md) arguments you provide explain why charging starts, such as when cleaner grid conditions or lower rates become available. For example:

```swift
let activeEvent = ElectricVehicleStatusEvent(
    timestamp: Date.now,
    device: device,
    venueID: venueID,
    status: .chargingActive(.cleanerEnergyAvailable),
    stateOfCharge: 43,
    energy: Measurement(value: 25_000_000, unit: .EnergyKit.milliwattHours),
    estimatedRange: Measurement(value: 120, unit: .miles),
    chargingTarget: chargingTarget,
    sessionIdentifier: session.id
)
```

If your app adopts the [EnergyKit LoadEvents Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.energykit.loadevents-experience), include the load event’s session identifier to correlate the active status with energy consumption data for a specific charging session in the Home app.

## See Also

### Charging states

- [ElectricVehicleStatusEvent.Status.chargingIdle(\_:)](chargingidle%28__%29.md): A status that indicates the charger is connected but the vehicle isn’t charging.
