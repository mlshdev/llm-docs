> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterthreadnetworkdirectory/addnetwork(with:completion:)

# addNetwork(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command AddNetwork

## Declaration

```swift
func addNetwork(with params: MTRThreadNetworkDirectoryClusterAddNetworkParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func addNetwork(with params: MTRThreadNetworkDirectoryClusterAddNetworkParams) async throws
```

<a id="discussion"></a>

## Discussion

Adds an entry to the ThreadNetworks attribute with the specified Thread Operational Dataset.

# addNetworkWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command AddNetwork

## Declaration

```objectivec
- (void) addNetworkWithParams:(MTRThreadNetworkDirectoryClusterAddNetworkParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

Adds an entry to the ThreadNetworks attribute with the specified Thread Operational Dataset.
