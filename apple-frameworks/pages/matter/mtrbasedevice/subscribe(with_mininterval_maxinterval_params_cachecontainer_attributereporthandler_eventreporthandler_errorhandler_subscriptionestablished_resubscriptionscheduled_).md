> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbasedevice/subscribe(with:mininterval:maxinterval:params:cachecontainer:attributereporthandler:eventreporthandler:errorhandler:subscriptionestablished:resubscriptionscheduled:)](https://developer.apple.com/documentation/matter/mtrbasedevice/subscribe(with:mininterval:maxinterval:params:cachecontainer:attributereporthandler:eventreporthandler:errorhandler:subscriptionestablished:resubscriptionscheduled:))

# subscribe(with:minInterval:maxInterval:params:cacheContainer:attributeReportHandler:eventReportHandler:errorHandler:subscriptionEstablished:resubscriptionScheduled:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use subscribeWithQueue:params:clusterStateCacheContainer:attributeReportHandler:eventReportHandler:errorHandler:subscriptionEstablished:resubscriptionScheduled:

## Declaration

```swift
func subscribe(with queue: dispatch_queue_t, minInterval: UInt16, maxInterval: UInt16, params: MTRSubscribeParams?, cacheContainer attributeCacheContainer: MTRAttributeCacheContainer?, attributeReportHandler: MTRDeviceReportHandler?, eventReportHandler: MTRDeviceReportHandler?, errorHandler: @escaping MTRDeviceErrorHandler, subscriptionEstablished subscriptionEstablishedHandler: (() -> Void)?, resubscriptionScheduled resubscriptionScheduledHandler: MTRDeviceResubscriptionScheduledHandler? = nil)
```

# subscribeWithQueue:minInterval:maxInterval:params:cacheContainer:attributeReportHandler:eventReportHandler:errorHandler:subscriptionEstablished:resubscriptionScheduled: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use subscribeWithQueue:params:clusterStateCacheContainer:attributeReportHandler:eventReportHandler:errorHandler:subscriptionEstablished:resubscriptionScheduled:

## Declaration

```objectivec
- (void) subscribeWithQueue:(dispatch_queue_t) queue minInterval:(uint16_t) minInterval maxInterval:(uint16_t) maxInterval params:(MTRSubscribeParams *) params cacheContainer:(MTRAttributeCacheContainer *) attributeCacheContainer attributeReportHandler:(MTRDeviceReportHandler) attributeReportHandler eventReportHandler:(MTRDeviceReportHandler) eventReportHandler errorHandler:(MTRDeviceErrorHandler) errorHandler subscriptionEstablished:(dispatch_block_t) subscriptionEstablishedHandler resubscriptionScheduled:(MTRDeviceResubscriptionScheduledHandler) resubscriptionScheduledHandler;
```
