> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/energykit/electricityguidance/guidancetoken

# guidanceToken

**Framework:** EnergyKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A unique token for the guidance that you use to create an electrical load event.

## Declaration

```swift
let guidanceToken: UUID
```

## Mentioned In

- [Providing charging history for electric vehicles](../providing-informative-charging-history-for-electric-vehicles.md)

<a id="discussion"></a>

## Discussion

Use the unique token to create an `ElectricalLoadEvent`.

## See Also

### Identifying the guidance parameters

- [interval](interval.md): The time range to which the guidance applies.
- [energyVenueID](energyvenueid.md): An identifier for the physical location to which the guidance applies.
