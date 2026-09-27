> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/energykit/electricityguidance/query/init(suggestedaction:)

# init(suggestedAction:)

**Framework:** EnergyKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

Creates a query to obtain electricity guidance based on forecasted energy usage.

## Declaration

```swift
init(suggestedAction: ElectricityGuidance.SuggestedAction)
```

## Parameters

- `suggestedAction`: The [ElectricityGuidance.SuggestedAction](../suggestedaction-swift.enum.md) that you request.
