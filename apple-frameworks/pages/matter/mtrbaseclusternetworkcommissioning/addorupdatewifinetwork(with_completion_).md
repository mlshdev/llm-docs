> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusternetworkcommissioning/addorupdatewifinetwork(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusternetworkcommissioning/addorupdatewifinetwork(with:completion:))

# addOrUpdateWiFiNetwork(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func addOrUpdateWiFiNetwork(with params: MTRNetworkCommissioningClusterAddOrUpdateWiFiNetworkParams, completion: @escaping @Sendable (MTRNetworkCommissioningClusterNetworkConfigResponseParams?, (any Error)?) -> Void)
```

```swift
func addOrUpdateWiFiNetwork(with params: MTRNetworkCommissioningClusterAddOrUpdateWiFiNetworkParams) async throws -> MTRNetworkCommissioningClusterNetworkConfigResponseParams
```

# addOrUpdateWiFiNetworkWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) addOrUpdateWiFiNetworkWithParams:(MTRNetworkCommissioningClusterAddOrUpdateWiFiNetworkParams *) params completion:(void (^)(MTRNetworkCommissioningClusterNetworkConfigResponseParams *data, NSError *error)) completion;
```
