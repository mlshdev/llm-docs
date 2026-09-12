> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/privatecloudcomputelanguagemodel/error/quotalimitreached](https://developer.apple.com/documentation/foundationmodels/privatecloudcomputelanguagemodel/error/quotalimitreached)

# PrivateCloudComputeLanguageModel.Error.QuotaLimitReached

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Information about reaching a usage limit.

## Declaration

```swift
struct QuotaLimitReached
```

<a id="overview"></a>

## Overview

A [PrivateCloudComputeLanguageModel](../../privatecloudcomputelanguagemodel.md)  provides a [LanguageModelError](../../languagemodelerror.md) that you use to proactively respond to usage quota scenarios, like when a person is approaching their per-day request limit. When a person approaches or exceeds the daily quota, the framework provides a direct path for you to add system UI so the person can subscribe to iCloud+ to get more access.

For more information about quota limits, see “Handle usage limits from using PCC” in [Adding server-side intelligence with Private Cloud Compute](../../adding-server-side-intelligence-with-private-cloud-compute.md).

## Topics

### Creating a quota reached error

- [init(limitIncreaseSuggestion:resetDate:debugDescription:)](quotalimitreached/init%28limitincreasesuggestion_resetdate_debugdescription_%29.md): Creates a quota limit reached instance.

### Inspecting a quota reached error

- [limitIncreaseSuggestion](quotalimitreached/limitincreasesuggestion.md): A suggestion to increase the usage limit, if one exists.
- [resetDate](quotalimitreached/resetdate.md): The date that the usage limit resets.

### Getting the error description

- [debugDescription](quotalimitreached/debugdescription.md): A debug description of the usage limit.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Quota usage error

- [PrivateCloudComputeLanguageModel.Error.quotaLimitReached(\_:)](quotalimitreached%28__%29.md): The allotted usage quota has been reached.
