> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbasedevice/subscribe(with:params:clusterstatecachecontainer:attributereporthandler:eventreporthandler:errorhandler:subscriptionestablished:resubscriptionscheduled:)](https://developer.apple.com/documentation/matter/mtrbasedevice/subscribe(with:params:clusterstatecachecontainer:attributereporthandler:eventreporthandler:errorhandler:subscriptionestablished:resubscriptionscheduled:))

# subscribe(with:params:clusterStateCacheContainer:attributeReportHandler:eventReportHandler:errorHandler:subscriptionEstablished:resubscriptionScheduled:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func subscribe(with queue: dispatch_queue_t, params: MTRSubscribeParams, clusterStateCacheContainer: MTRClusterStateCacheContainer?, attributeReportHandler: MTRDeviceReportHandler?, eventReportHandler: MTRDeviceReportHandler?, errorHandler: @escaping MTRDeviceErrorHandler, subscriptionEstablished: MTRSubscriptionEstablishedHandler?, resubscriptionScheduled: MTRDeviceResubscriptionScheduledHandler? = nil)
```

# subscribeWithQueue:params:clusterStateCacheContainer:attributeReportHandler:eventReportHandler:errorHandler:subscriptionEstablished:resubscriptionScheduled: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) subscribeWithQueue:(dispatch_queue_t) queue params:(MTRSubscribeParams *) params clusterStateCacheContainer:(MTRClusterStateCacheContainer *) clusterStateCacheContainer attributeReportHandler:(MTRDeviceReportHandler) attributeReportHandler eventReportHandler:(MTRDeviceReportHandler) eventReportHandler errorHandler:(MTRDeviceErrorHandler) errorHandler subscriptionEstablished:(MTRSubscriptionEstablishedHandler) subscriptionEstablished resubscriptionScheduled:(MTRDeviceResubscriptionScheduledHandler) resubscriptionScheduled;
```
