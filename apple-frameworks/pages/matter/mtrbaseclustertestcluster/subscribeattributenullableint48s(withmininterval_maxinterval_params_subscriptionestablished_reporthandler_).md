> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustertestcluster/subscribeattributenullableint48s(withmininterval:maxinterval:params:subscriptionestablished:reporthandler:)](https://developer.apple.com/documentation/matter/mtrbaseclustertestcluster/subscribeattributenullableint48s(withmininterval:maxinterval:params:subscriptionestablished:reporthandler:))

# subscribeAttributeNullableInt48s(withMinInterval:maxInterval:params:subscriptionEstablished:reportHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use subscribeAttributeNullableInt48sWithParams:subscriptionEstablished:

## Declaration

```swift
func subscribeAttributeNullableInt48s(withMinInterval minInterval: NSNumber, maxInterval: NSNumber, params: MTRSubscribeParams?, subscriptionEstablished subscriptionEstablishedHandler: MTRSubscriptionEstablishedHandler?, reportHandler: @escaping (NSNumber?, (any Error)?) -> Void)
```

# subscribeAttributeNullableInt48sWithMinInterval:maxInterval:params:subscriptionEstablished:reportHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use subscribeAttributeNullableInt48sWithParams:subscriptionEstablished:

## Declaration

```objectivec
- (void) subscribeAttributeNullableInt48sWithMinInterval:(NSNumber *) minInterval maxInterval:(NSNumber *) maxInterval params:(MTRSubscribeParams *) params subscriptionEstablished:(MTRSubscriptionEstablishedHandler) subscriptionEstablishedHandler reportHandler:(void (^)(NSNumber *value, NSError *error)) reportHandler;
```
