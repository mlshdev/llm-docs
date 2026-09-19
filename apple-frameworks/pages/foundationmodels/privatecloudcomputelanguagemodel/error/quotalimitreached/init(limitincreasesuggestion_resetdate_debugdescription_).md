> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/privatecloudcomputelanguagemodel/error/quotalimitreached/init(limitincreasesuggestion:resetdate:debugdescription:)

# init(limitIncreaseSuggestion:resetDate:debugDescription:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a quota limit reached instance.

## Declaration

```swift
init(limitIncreaseSuggestion: PrivateCloudComputeLanguageModel.QuotaUsage.LimitIncreaseSuggestion? = nil, resetDate: Date? = nil, debugDescription: String)
```

## Parameters

- `limitIncreaseSuggestion`: The suggestion to increase the usage limit, if one exists.
- `resetDate`: The date that the usage limit resets.
- `debugDescription`: The debug description of the usage limit.
