> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustertestcluster/subscribeattributewriteonlyint8u(withmininterval:maxinterval:params:subscriptionestablished:reporthandler:)](https://developer.apple.com/documentation/matter/mtrbaseclustertestcluster/subscribeattributewriteonlyint8u(withmininterval:maxinterval:params:subscriptionestablished:reporthandler:))

# subscribeAttributeWriteOnlyInt8u(withMinInterval:maxInterval:params:subscriptionEstablished:reportHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.2+ (deprecated in 16.4) · iPadOS 16.2+ (deprecated in 16.4) · Mac Catalyst 16.2+ (deprecated in 16.4) · macOS 13.1+ (deprecated in 13.3) · tvOS 16.2+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.2+ (deprecated in 9.4)

> Please use subscribeAttributeWriteOnlyInt8uWithParams:subscriptionEstablished:

## Declaration

```swift
func subscribeAttributeWriteOnlyInt8u(withMinInterval minInterval: NSNumber, maxInterval: NSNumber, params: MTRSubscribeParams?, subscriptionEstablished subscriptionEstablishedHandler: MTRSubscriptionEstablishedHandler?, reportHandler: @escaping (NSNumber?, (any Error)?) -> Void)
```

# subscribeAttributeWriteOnlyInt8uWithMinInterval:maxInterval:params:subscriptionEstablished:reportHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.2+ (deprecated in 16.4) · iPadOS 16.2+ (deprecated in 16.4) · Mac Catalyst 16.2+ (deprecated in 16.4) · macOS 13.1+ (deprecated in 13.3) · tvOS 16.2+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.2+ (deprecated in 9.4)

> Please use subscribeAttributeWriteOnlyInt8uWithParams:subscriptionEstablished:

## Declaration

```objectivec
- (void) subscribeAttributeWriteOnlyInt8uWithMinInterval:(NSNumber *) minInterval maxInterval:(NSNumber *) maxInterval params:(MTRSubscribeParams *) params subscriptionEstablished:(MTRSubscriptionEstablishedHandler) subscriptionEstablishedHandler reportHandler:(void (^)(NSNumber *value, NSError *error)) reportHandler;
```
