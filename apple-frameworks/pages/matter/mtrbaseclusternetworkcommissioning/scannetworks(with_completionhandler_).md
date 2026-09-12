> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusternetworkcommissioning/scannetworks(with:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusternetworkcommissioning/scannetworks(with:completionhandler:))

# scanNetworks(with:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use scanNetworksWithParams:completion:

## Declaration

```swift
func scanNetworks(with params: MTRNetworkCommissioningClusterScanNetworksParams?, completionHandler: @escaping @Sendable (MTRNetworkCommissioningClusterScanNetworksResponseParams?, (any Error)?) -> Void)
```

```swift
func scanNetworks(with params: MTRNetworkCommissioningClusterScanNetworksParams?) async throws -> MTRNetworkCommissioningClusterScanNetworksResponseParams
```

# scanNetworksWithParams:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use scanNetworksWithParams:completion:

## Declaration

```objectivec
- (void) scanNetworksWithParams:(MTRNetworkCommissioningClusterScanNetworksParams *) params completionHandler:(void (^)(MTRNetworkCommissioningClusterScanNetworksResponseParams *data, NSError *error)) completionHandler;
```
