> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/energykit/electrichvacloadevent/init(timestamp:measurement:session:deviceid:)

# init(timestamp:measurement:session:deviceID:)

**Framework:** EnergyKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ (deprecated in 27.0) · iPadOS 26.0+ (deprecated in 27.0) · Mac Catalyst

Creates an electric HVAC load event.

> Use init(timestamp:measurement:session:device:) instead

## Declaration

```swift
init(timestamp: Date, measurement: ElectricHVACLoadEvent.ElectricalMeasurement, session: ElectricHVACLoadEvent.Session, deviceID: String)
```

## Parameters

- `timestamp`: The timestamp for when the event occurs.
- `measurement`: The electricity consumption or generation of a device.
- `session`: The session information.
- `deviceID`: The device’s unique stable identifier.

<a id="discussion"></a>

## Discussion

> **Throws**

> [EnergyKitError.invalidLoadEvent](../energykiterror/invalidloadevent.md)
