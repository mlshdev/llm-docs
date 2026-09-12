> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/networkcompatibilitytoken/compatibilitywith(_:)](https://developer.apple.com/documentation/realitykit/networkcompatibilitytoken/compatibilitywith(_:))

# compatibilityWith(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · visionOS

Compares network compatibility tokens between the local device and another device.

## Declaration

```swift
final func compatibilityWith(_ otherToken: NetworkCompatibilityToken) -> NetworkCompatibilityToken.Compatibility
```

## Parameters

- `otherToken`: The token for the remote client against which the local device checks compatibility

<a id="return-value"></a>

## Return Value

Returns [NetworkCompatibilityToken.Compatibility.compatible](compatibility/compatible.md) if the local client and the remote client represented by `otherToken` can be synced. Any other result indicates that the two devices are incompatible and you shouldn’t proceed with the connection.
