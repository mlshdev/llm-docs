> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electrichvacloadevent/session-swift.struct/guidancestate-swift.struct/guidancetoken](https://developer.apple.com/documentation/energykit/electrichvacloadevent/session-swift.struct/guidancestate-swift.struct/guidancetoken)

# guidanceToken

**Framework:** EnergyKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

The guidance token for the guidance that you requested.

## Declaration

```swift
var guidanceToken: UUID
```

## See Also

### Checking the guidance state

- [init(wasFollowingGuidance:guidanceToken:)](init%28wasfollowingguidance_guidancetoken_%29.md): Initialize the GuidanceState for the [ElectricHVACLoadEvent](../../../electrichvacloadevent.md)
- [wasFollowingGuidance](wasfollowingguidance.md): A Boolean value that indicates whether the device was applying the electricity guidance at the time of the event.
