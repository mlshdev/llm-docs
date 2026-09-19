> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/privatecloudcomputelanguagemodel/quotausage-swift.struct/status-swift.enum

# PrivateCloudComputeLanguageModel.QuotaUsage.Status

**Framework:** Foundation Models  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The quota status of a language model.

## Declaration

```swift
enum Status
```

## Topics

### Quota status

- [PrivateCloudComputeLanguageModel.QuotaUsage.Status.belowLimit(\_:)](status-swift.enum/belowlimit%28__%29.md): The model’s usage is below its usage limit.
- [PrivateCloudComputeLanguageModel.QuotaUsage.Status.BelowLimit](status-swift.enum/belowlimit.md): Information about usage that hasn’t yet reached the usage limit.
- [PrivateCloudComputeLanguageModel.QuotaUsage.Status.limitReached(\_:)](status-swift.enum/limitreached%28__%29.md): The model’s usage has reached its usage limit.
- [PrivateCloudComputeLanguageModel.QuotaUsage.Status.LimitReached](status-swift.enum/limitreached.md): Information about usage that has reached the usage limit.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the quota status

- [status](status-swift.property.md): The current quota status.
- [resetDate](resetdate.md): The date at which the quota refreshes.
