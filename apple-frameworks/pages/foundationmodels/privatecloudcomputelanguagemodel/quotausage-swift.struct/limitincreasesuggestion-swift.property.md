> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/privatecloudcomputelanguagemodel/quotausage-swift.struct/limitincreasesuggestion-swift.property](https://developer.apple.com/documentation/foundationmodels/privatecloudcomputelanguagemodel/quotausage-swift.struct/limitincreasesuggestion-swift.property)

# limitIncreaseSuggestion

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A suggestion the user can act on to increase their quota.

## Declaration

```swift
var limitIncreaseSuggestion: PrivateCloudComputeLanguageModel.QuotaUsage.LimitIncreaseSuggestion?
```

<a id="discussion"></a>

## Discussion

A `nil` value indicates that the model provider does not surface an upgrade path through this API.

## See Also

### Inspecting the quota limit

- [isLimitReached](islimitreached.md): A Boolean value that indicates whether the usage limit has been reached.
- [PrivateCloudComputeLanguageModel.QuotaUsage.LimitIncreaseSuggestion](limitincreasesuggestion-swift.struct.md): An offer that a user can act on to increase their quota for a language model.
