> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/energyvenue/submitevents(_:)](https://developer.apple.com/documentation/energykit/energyvenue/submitevents(_:))

# submitEvents(\_:)

**Framework:** EnergyKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

Submits electrical load events to be used by EnergyKit to generate energy insights.

## Declaration

```swift
func submitEvents<Event>(_ events: [Event]) async throws where Event : ElectricalLoadEventProtocol
```

## Parameters

- `events`: An array of [ElectricalLoadEventProtocol](../electricalloadeventprotocol.md) conforming  load events to send.

<a id="discussion"></a>

## Discussion

The submission may contain events for multiple devices. The system throws [EnergyKitError.invalidLoadEvent](../energykiterror/invalidloadevent.md) if a load event is submitted for an incorrect [EnergyVenue](../energyvenue.md) or if it’s submitted by an iPhone, iPad, or Mac that didn’t fetch the corresponding [ElectricityGuidance](../electricityguidance.md).
