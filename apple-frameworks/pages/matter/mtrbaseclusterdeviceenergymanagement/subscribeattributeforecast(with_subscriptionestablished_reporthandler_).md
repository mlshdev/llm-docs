> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterdeviceenergymanagement/subscribeattributeforecast(with:subscriptionestablished:reporthandler:)

# subscribeAttributeForecast(with:subscriptionEstablished:reportHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func subscribeAttributeForecast(with params: MTRSubscribeParams, subscriptionEstablished: MTRSubscriptionEstablishedHandler?, reportHandler: @escaping (MTRDeviceEnergyManagementClusterForecastStruct?, (any Error)?) -> Void)
```

# subscribeAttributeForecastWithParams:subscriptionEstablished:reportHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) subscribeAttributeForecastWithParams:(MTRSubscribeParams *) params subscriptionEstablished:(MTRSubscriptionEstablishedHandler) subscriptionEstablished reportHandler:(void (^)(MTRDeviceEnergyManagementClusterForecastStruct *value, NSError *error)) reportHandler;
```
