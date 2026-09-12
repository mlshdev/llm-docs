> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electrichvacloadevent/session-swift.struct/guidancestate-swift.struct/init(wasfollowingguidance:guidancetoken:)](https://developer.apple.com/documentation/energykit/electrichvacloadevent/session-swift.struct/guidancestate-swift.struct/init(wasfollowingguidance:guidancetoken:))

# init(wasFollowingGuidance:guidanceToken:)

**Framework:** EnergyKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

Initialize the GuidanceState for the [ElectricHVACLoadEvent](../../../electrichvacloadevent.md)

## Declaration

```swift
init(wasFollowingGuidance: Bool, guidanceToken: UUID)
```

## Parameters

- `wasFollowingGuidance`: Whether the device was applying [ElectricityGuidance](../../../electricityguidance.md) for its energy use at the time of the event.
- `guidanceToken`: The token provided at time of [ElectricityGuidance](../../../electricityguidance.md) fetch.

## See Also

### Checking the guidance state

- [guidanceToken](guidancetoken.md): The guidance token for the guidance that you requested.
- [wasFollowingGuidance](wasfollowingguidance.md): A Boolean value that indicates whether the device was applying the electricity guidance at the time of the event.
