> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterthreadnetworkdirectory/removenetwork(with:completion:)

# removeNetwork(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command RemoveNetwork

## Declaration

```swift
func removeNetwork(with params: MTRThreadNetworkDirectoryClusterRemoveNetworkParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func removeNetwork(with params: MTRThreadNetworkDirectoryClusterRemoveNetworkParams) async throws
```

<a id="discussion"></a>

## Discussion

Removes the network with the given Extended PAN ID from the ThreadNetworks attribute.

# removeNetworkWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command RemoveNetwork

## Declaration

```objectivec
- (void) removeNetworkWithParams:(MTRThreadNetworkDirectoryClusterRemoveNetworkParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

Removes the network with the given Extended PAN ID from the ThreadNetworks attribute.
