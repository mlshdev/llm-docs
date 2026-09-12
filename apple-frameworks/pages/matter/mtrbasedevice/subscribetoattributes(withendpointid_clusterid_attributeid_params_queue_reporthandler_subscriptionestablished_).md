> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbasedevice/subscribetoattributes(withendpointid:clusterid:attributeid:params:queue:reporthandler:subscriptionestablished:)](https://developer.apple.com/documentation/matter/mtrbasedevice/subscribetoattributes(withendpointid:clusterid:attributeid:params:queue:reporthandler:subscriptionestablished:))

# subscribeToAttributes(withEndpointID:clusterID:attributeID:params:queue:reportHandler:subscriptionEstablished:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func subscribeToAttributes(withEndpointID endpointID: NSNumber?, clusterID: NSNumber?, attributeID: NSNumber?, params: MTRSubscribeParams?, queue: dispatch_queue_t, reportHandler: @escaping MTRDeviceResponseHandler, subscriptionEstablished: MTRSubscriptionEstablishedHandler? = nil)
```

# subscribeToAttributesWithEndpointID:clusterID:attributeID:params:queue:reportHandler:subscriptionEstablished: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) subscribeToAttributesWithEndpointID:(NSNumber *) endpointID clusterID:(NSNumber *) clusterID attributeID:(NSNumber *) attributeID params:(MTRSubscribeParams *) params queue:(dispatch_queue_t) queue reportHandler:(MTRDeviceResponseHandler) reportHandler subscriptionEstablished:(MTRSubscriptionEstablishedHandler) subscriptionEstablished;
```
