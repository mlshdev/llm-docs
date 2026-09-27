> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/energykit/energyvenue/id

# id

**Framework:** EnergyKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A unique identifier for the venue.

## Declaration

```swift
let id: UUID
```

<a id="discussion"></a>

## Discussion

Use this identifier to submit `ElectricalLoadEvent`s for [ElectricityGuidance](../electricityguidance.md).

## See Also

### Identifying the location

- [name](name.md): The name of the Home to which the venue corresponds.
