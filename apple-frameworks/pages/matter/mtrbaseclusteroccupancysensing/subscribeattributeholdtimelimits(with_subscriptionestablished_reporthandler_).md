> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusteroccupancysensing/subscribeattributeholdtimelimits(with:subscriptionestablished:reporthandler:)

# subscribeAttributeHoldTimeLimits(with:subscriptionEstablished:reportHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func subscribeAttributeHoldTimeLimits(with params: MTRSubscribeParams, subscriptionEstablished: MTRSubscriptionEstablishedHandler?, reportHandler: @escaping (MTROccupancySensingClusterHoldTimeLimitsStruct?, (any Error)?) -> Void)
```

# subscribeAttributeHoldTimeLimitsWithParams:subscriptionEstablished:reportHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) subscribeAttributeHoldTimeLimitsWithParams:(MTRSubscribeParams *) params subscriptionEstablished:(MTRSubscriptionEstablishedHandler) subscriptionEstablished reportHandler:(void (^)(MTROccupancySensingClusterHoldTimeLimitsStruct *value, NSError *error)) reportHandler;
```
