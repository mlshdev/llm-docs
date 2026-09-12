> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/privatecloudcomputelanguagemodel/error](https://developer.apple.com/documentation/foundationmodels/privatecloudcomputelanguagemodel/error)

# PrivateCloudComputeLanguageModel.Error

**Framework:** Foundation Models  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Errors that may occur when using Private Cloud Compute.

## Declaration

```swift
enum Error
```

## Topics

### Quota usage error

- [PrivateCloudComputeLanguageModel.Error.quotaLimitReached(\_:)](error/quotalimitreached%28__%29.md): The allotted usage quota has been reached.
- [PrivateCloudComputeLanguageModel.Error.QuotaLimitReached](error/quotalimitreached.md): Information about reaching a usage limit.

### Network failure error

- [PrivateCloudComputeLanguageModel.Error.networkFailure(\_:)](error/networkfailure%28__%29.md): An error that occurs when a network is available, but PCC is inaccessible.
- [PrivateCloudComputeLanguageModel.Error.NetworkFailure](error/networkfailure.md)

### Service unavailable error

- [PrivateCloudComputeLanguageModel.Error.serviceUnavailable(\_:)](error/serviceunavailable%28__%29.md): Services are unavailable.
- [PrivateCloudComputeLanguageModel.Error.ServiceUnavailable](error/serviceunavailable.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [LocalizedError](../../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
