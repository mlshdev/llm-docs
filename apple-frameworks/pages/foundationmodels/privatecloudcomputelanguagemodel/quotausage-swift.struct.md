> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/privatecloudcomputelanguagemodel/quotausage-swift.struct](https://developer.apple.com/documentation/foundationmodels/privatecloudcomputelanguagemodel/quotausage-swift.struct)

# PrivateCloudComputeLanguageModel.QuotaUsage

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The usage quota state for a Private Cloud Compute language model.

## Declaration

```swift
struct QuotaUsage
```

<a id="overview"></a>

## Overview

A quota describes the model’s per-user request budget and where the caller currently sits relative to it. Quotas are orthogonal to a model’s availability — a model can be available even after its usage limit has been reached.

## Topics

### Inspecting the quota limit

- [isLimitReached](quotausage-swift.struct/islimitreached.md): A Boolean value that indicates whether the usage limit has been reached.
- [limitIncreaseSuggestion](quotausage-swift.struct/limitincreasesuggestion-swift.property.md): A suggestion the user can act on to increase their quota.
- [PrivateCloudComputeLanguageModel.QuotaUsage.LimitIncreaseSuggestion](quotausage-swift.struct/limitincreasesuggestion-swift.struct.md): An offer that a user can act on to increase their quota for a language model.

### Getting the quota status

- [status](quotausage-swift.struct/status-swift.property.md): The current quota status.
- [PrivateCloudComputeLanguageModel.QuotaUsage.Status](quotausage-swift.struct/status-swift.enum.md): The quota status of a language model.
- [resetDate](quotausage-swift.struct/resetdate.md): The date at which the quota refreshes.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the quota

- [quotaUsage](quotausage-swift.property.md): The usage quota for this model.
