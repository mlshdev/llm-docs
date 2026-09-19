> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/energykit/electrichvacloadevent/session-swift.struct/init(id:state:guidancestate:)

# init(id:state:guidanceState:)

**Framework:** EnergyKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

Creates an electrical load event session.

## Declaration

```swift
init(id: UUID, state: ElectricHVACLoadEvent.Session.State, guidanceState: ElectricHVACLoadEvent.Session.GuidanceState)
```

## Parameters

- `id`: The unique identifier for the session.
- `state`: The state of the session.
- `guidanceState`: Identifies the provided guidance and its usability by the load device
