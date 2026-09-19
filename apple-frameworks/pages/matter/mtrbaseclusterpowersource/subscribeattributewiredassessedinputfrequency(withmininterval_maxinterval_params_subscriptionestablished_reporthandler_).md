> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterpowersource/subscribeattributewiredassessedinputfrequency(withmininterval:maxinterval:params:subscriptionestablished:reporthandler:)

# subscribeAttributeWiredAssessedInputFrequency(withMinInterval:maxInterval:params:subscriptionEstablished:reportHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use subscribeAttributeWiredAssessedInputFrequencyWithParams:subscriptionEstablished:

## Declaration

```swift
func subscribeAttributeWiredAssessedInputFrequency(withMinInterval minInterval: NSNumber, maxInterval: NSNumber, params: MTRSubscribeParams?, subscriptionEstablished subscriptionEstablishedHandler: MTRSubscriptionEstablishedHandler?, reportHandler: @escaping (NSNumber?, (any Error)?) -> Void)
```

# subscribeAttributeWiredAssessedInputFrequencyWithMinInterval:maxInterval:params:subscriptionEstablished:reportHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use subscribeAttributeWiredAssessedInputFrequencyWithParams:subscriptionEstablished:

## Declaration

```objectivec
- (void) subscribeAttributeWiredAssessedInputFrequencyWithMinInterval:(NSNumber *) minInterval maxInterval:(NSNumber *) maxInterval params:(MTRSubscribeParams *) params subscriptionEstablished:(MTRSubscriptionEstablishedHandler) subscriptionEstablishedHandler reportHandler:(void (^)(NSNumber *value, NSError *error)) reportHandler;
```
