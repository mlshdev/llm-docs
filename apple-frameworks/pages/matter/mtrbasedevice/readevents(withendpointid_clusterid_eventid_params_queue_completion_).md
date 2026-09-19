> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbasedevice/readevents(withendpointid:clusterid:eventid:params:queue:completion:)

# readEvents(withEndpointID:clusterID:eventID:params:queue:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readEvents(withEndpointID endpointID: NSNumber?, clusterID: NSNumber?, eventID: NSNumber?, params: MTRReadParams?, queue: dispatch_queue_t, completion: @escaping @Sendable ([[String : Any]]?, (any Error)?) -> Void)
```

```swift
func readEvents(withEndpointID endpointID: NSNumber?, clusterID: NSNumber?, eventID: NSNumber?, params: MTRReadParams?, queue: dispatch_queue_t) async throws -> [[String : Any]]
```

# readEventsWithEndpointID:clusterID:eventID:params:queue:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readEventsWithEndpointID:(NSNumber *) endpointID clusterID:(NSNumber *) clusterID eventID:(NSNumber *) eventID params:(MTRReadParams *) params queue:(dispatch_queue_t) queue completion:(MTRDeviceResponseHandler) completion;
```
