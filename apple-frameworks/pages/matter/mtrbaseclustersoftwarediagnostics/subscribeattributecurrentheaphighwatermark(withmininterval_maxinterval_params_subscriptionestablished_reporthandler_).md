> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustersoftwarediagnostics/subscribeattributecurrentheaphighwatermark(withmininterval:maxinterval:params:subscriptionestablished:reporthandler:)](https://developer.apple.com/documentation/matter/mtrbaseclustersoftwarediagnostics/subscribeattributecurrentheaphighwatermark(withmininterval:maxinterval:params:subscriptionestablished:reporthandler:))

# subscribeAttributeCurrentHeapHighWatermark(withMinInterval:maxInterval:params:subscriptionEstablished:reportHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use subscribeAttributeCurrentHeapHighWatermarkWithParams:subscriptionEstablished:

## Declaration

```swift
func subscribeAttributeCurrentHeapHighWatermark(withMinInterval minInterval: NSNumber, maxInterval: NSNumber, params: MTRSubscribeParams?, subscriptionEstablished subscriptionEstablishedHandler: MTRSubscriptionEstablishedHandler?, reportHandler: @escaping (NSNumber?, (any Error)?) -> Void)
```

# subscribeAttributeCurrentHeapHighWatermarkWithMinInterval:maxInterval:params:subscriptionEstablished:reportHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use subscribeAttributeCurrentHeapHighWatermarkWithParams:subscriptionEstablished:

## Declaration

```objectivec
- (void) subscribeAttributeCurrentHeapHighWatermarkWithMinInterval:(NSNumber *) minInterval maxInterval:(NSNumber *) maxInterval params:(MTRSubscribeParams *) params subscriptionEstablished:(MTRSubscriptionEstablishedHandler) subscriptionEstablishedHandler reportHandler:(void (^)(NSNumber *value, NSError *error)) reportHandler;
```
