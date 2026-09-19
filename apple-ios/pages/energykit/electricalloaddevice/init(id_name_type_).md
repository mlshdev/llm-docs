> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/energykit/electricalloaddevice/init(id:name:type:)

# init(id:name:type:)

**Framework:** EnergyKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst

Initializes an electrical load device identifier.

## Declaration

```swift
init(id: String, name: String, type: ElectricalLoadDevice.DeviceType)
```

## Parameters

- `id`: The device’s unique, stable identifier.
- `name`: A human-readable device name.
- `type`: The type of electrical load device.
