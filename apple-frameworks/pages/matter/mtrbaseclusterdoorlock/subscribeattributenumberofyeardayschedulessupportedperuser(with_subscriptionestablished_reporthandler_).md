> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdoorlock/subscribeattributenumberofyeardayschedulessupportedperuser(with:subscriptionestablished:reporthandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdoorlock/subscribeattributenumberofyeardayschedulessupportedperuser(with:subscriptionestablished:reporthandler:))

# subscribeAttributeNumberOfYearDaySchedulesSupportedPerUser(with:subscriptionEstablished:reportHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func subscribeAttributeNumberOfYearDaySchedulesSupportedPerUser(with params: MTRSubscribeParams, subscriptionEstablished: MTRSubscriptionEstablishedHandler?, reportHandler: @escaping (NSNumber?, (any Error)?) -> Void)
```

# subscribeAttributeNumberOfYearDaySchedulesSupportedPerUserWithParams:subscriptionEstablished:reportHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) subscribeAttributeNumberOfYearDaySchedulesSupportedPerUserWithParams:(MTRSubscribeParams *) params subscriptionEstablished:(MTRSubscriptionEstablishedHandler) subscriptionEstablished reportHandler:(void (^)(NSNumber *value, NSError *error)) reportHandler;
```
