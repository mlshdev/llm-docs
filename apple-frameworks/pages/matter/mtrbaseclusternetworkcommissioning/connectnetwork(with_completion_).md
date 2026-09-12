> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusternetworkcommissioning/connectnetwork(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusternetworkcommissioning/connectnetwork(with:completion:))

# connectNetwork(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func connectNetwork(with params: MTRNetworkCommissioningClusterConnectNetworkParams, completion: @escaping @Sendable (MTRNetworkCommissioningClusterConnectNetworkResponseParams?, (any Error)?) -> Void)
```

```swift
func connectNetwork(with params: MTRNetworkCommissioningClusterConnectNetworkParams) async throws -> MTRNetworkCommissioningClusterConnectNetworkResponseParams
```

# connectNetworkWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) connectNetworkWithParams:(MTRNetworkCommissioningClusterConnectNetworkParams *) params completion:(void (^)(MTRNetworkCommissioningClusterConnectNetworkResponseParams *data, NSError *error)) completion;
```
