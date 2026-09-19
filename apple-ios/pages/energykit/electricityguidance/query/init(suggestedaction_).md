> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
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
