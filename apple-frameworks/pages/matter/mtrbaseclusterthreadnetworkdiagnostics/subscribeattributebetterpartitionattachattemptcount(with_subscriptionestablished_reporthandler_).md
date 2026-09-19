> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterthreadnetworkdiagnostics/subscribeattributebetterpartitionattachattemptcount(with:subscriptionestablished:reporthandler:)

# subscribeAttributeBetterPartitionAttachAttemptCount(with:subscriptionEstablished:reportHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func subscribeAttributeBetterPartitionAttachAttemptCount(with params: MTRSubscribeParams, subscriptionEstablished: MTRSubscriptionEstablishedHandler?, reportHandler: @escaping (NSNumber?, (any Error)?) -> Void)
```

# subscribeAttributeBetterPartitionAttachAttemptCountWithParams:subscriptionEstablished:reportHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) subscribeAttributeBetterPartitionAttachAttemptCountWithParams:(MTRSubscribeParams *) params subscriptionEstablished:(MTRSubscriptionEstablishedHandler) subscriptionEstablished reportHandler:(void (^)(NSNumber *value, NSError *error)) reportHandler;
```
