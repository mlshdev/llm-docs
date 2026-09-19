> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/energykit/electrichvacloadevent/init(timestamp:measurement:session:device:)

# init(timestamp:measurement:session:device:)

**Framework:** EnergyKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst

Creates an electric HVAC load event.

## Declaration

```swift
init(timestamp: Date, measurement: ElectricHVACLoadEvent.ElectricalMeasurement, session: ElectricHVACLoadEvent.Session, device: ElectricalLoadDevice)
```

## Parameters

- `timestamp`: The time when the event occurs.
- `measurement`: The electricity consumption of the device.
- `session`: The session information.
- `device`: The device identifier created with [ElectricalLoadDevice](../electricalloaddevice.md).

<a id="discussion"></a>

## Discussion

> **Throws**

>  [EnergyKitError.invalidLoadEvent](../energykiterror/invalidloadevent.md)
