> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/privatecloudcomputelanguagemodel/error/networkfailure

# PrivateCloudComputeLanguageModel.Error.NetworkFailure

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Information about a network problem that prevented a request from completing.

## Declaration

```swift
struct NetworkFailure
```

## Topics

### Creating a network failure error

- [init(debugDescription:)](networkfailure/init%28debugdescription_%29.md): Creates a network failure with the debug description you specify.

### Getting the error description

- [debugDescription](networkfailure/debugdescription.md): A debug description of the network failure.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Network failure error

- [PrivateCloudComputeLanguageModel.Error.networkFailure(\_:)](networkfailure%28__%29.md): An error that occurs when a network is available, but PCC is inaccessible.
