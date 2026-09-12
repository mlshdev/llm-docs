> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbasedevice/subscribe(toattributepaths:eventpaths:params:queue:reporthandler:subscriptionestablished:resubscriptionscheduled:)](https://developer.apple.com/documentation/matter/mtrbasedevice/subscribe(toattributepaths:eventpaths:params:queue:reporthandler:subscriptionestablished:resubscriptionscheduled:))

# subscribe(toAttributePaths:eventPaths:params:queue:reportHandler:subscriptionEstablished:resubscriptionScheduled:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
func subscribe(toAttributePaths attributePaths: [MTRAttributeRequestPath]?, eventPaths: [MTREventRequestPath]?, params: MTRSubscribeParams?, queue: dispatch_queue_t, reportHandler: @escaping MTRDeviceResponseHandler, subscriptionEstablished: MTRSubscriptionEstablishedHandler?, resubscriptionScheduled: MTRDeviceResubscriptionScheduledHandler? = nil)
```

# subscribeToAttributePaths:eventPaths:params:queue:reportHandler:subscriptionEstablished:resubscriptionScheduled: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```objectivec
- (void) subscribeToAttributePaths:(NSArray<MTRAttributeRequestPath *> *) attributePaths eventPaths:(NSArray<MTREventRequestPath *> *) eventPaths params:(MTRSubscribeParams *) params queue:(dispatch_queue_t) queue reportHandler:(MTRDeviceResponseHandler) reportHandler subscriptionEstablished:(MTRSubscriptionEstablishedHandler) subscriptionEstablished resubscriptionScheduled:(MTRDeviceResubscriptionScheduledHandler) resubscriptionScheduled;
```
