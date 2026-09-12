> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electrichvacloadevent](https://developer.apple.com/documentation/energykit/electrichvacloadevent)

# ElectricHVACLoadEvent

**Framework:** EnergyKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A measurement of the electricity consumed by an HVAC system.

## Declaration

```swift
struct ElectricHVACLoadEvent
```

<a id="overview"></a>

## Overview

Submit events representing electricity consumption to provide insights about electricity usage and your managed devices’ adherence to [ElectricityGuidance](electricityguidance.md). These events are data points recorded at specific points in time for a given [EnergyVenue](energyvenue.md) that allow the venue to determine when the device used electricity and the electricity’s cleanliness based on historical guidance. The framework can also determine relative cost using the rate plan at the energy venue, if available.

After you submit load events to report the electricity consumption of HVAC devices, you can request insights through [ElectricityInsightQuery](electricityinsightquery.md). When you adopt the [EnergyKit LoadEvents Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.energykit.loadevents-experience), the Home app displays your device’s energy usage with the device name you provide.

> **Important**

> The system stores and syncs the energy data that you provide through load events with end-to-end encryption through the entire process, ensuring the data isn’t accessible to anyone, even Apple. For more information, see [EnergyKit data security](https://support.apple.com/guide/security/secd0a47c14c).

<a id="Submit-electrical-HVAC-load-events"></a>

### Submit electrical HVAC load events

Save data to the load event when the heating or cooling stage changes. An electric HVAC load event provides information about the state transitions of the HVAC unit when it’s actively consuming energy.

Significant changes may include:

- A person initiated an action
- A pause in power consumption such as going idle
- The heating or cooling stage changed

Idle devices between heating or cooling cycles don’t generate events. The device that requested [ElectricityGuidance](electricityguidance.md) must submit the corresponding load events. Load events for an [EnergyVenue](energyvenue.md) are accessible to all people that use the Home app.

## Topics

### Creating an electrical load event

- [init(timestamp:measurement:session:device:)](electrichvacloadevent/init%28timestamp_measurement_session_device_%29.md): Creates an electric HVAC load event.

### Getting load event information

- [id](electrichvacloadevent/id.md): The unique identifier of the electrical load event.
- [timestamp](electrichvacloadevent/timestamp.md): The timestamp for when the event occurred.
- [session](electrichvacloadevent/session-swift.property.md): The session information.
- [ElectricHVACLoadEvent.Session](electrichvacloadevent/session-swift.struct.md): A session that tracks the event.

### Getting device information

- [deviceID](electrichvacloadevent/deviceid.md): The device’s unique stable identifier.
- [deviceName](electrichvacloadevent/devicename.md): A human-readable name for the device.

### Getting electrical measurements

- [measurement](electrichvacloadevent/measurement.md): The electricity consumption of a device.
- [ElectricHVACLoadEvent.ElectricalMeasurement](electrichvacloadevent/electricalmeasurement.md): A description of the electricity consumed by a device.

### Deprecated

- [init(timestamp:measurement:session:deviceID:)](electrichvacloadevent/init%28timestamp_measurement_session_deviceid_%29.md): Deprecated. Creates an electric HVAC load event.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [ElectricalLoadEventProtocol](electricalloadeventprotocol.md)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
