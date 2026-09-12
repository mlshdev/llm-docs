> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrxpcserverprotocol_mtrdevice/devicecontroller(_:nodeid:getestimatedsubscriptionlatencywithreply:)](https://developer.apple.com/documentation/matter/mtrxpcserverprotocol_mtrdevice/devicecontroller(_:nodeid:getestimatedsubscriptionlatencywithreply:))

# deviceController(\_:nodeID:getEstimatedSubscriptionLatencyWithReply:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

## Declaration

```swift
func deviceController(_ controller: UUID, nodeID: NSNumber, getEstimatedSubscriptionLatencyWithReply reply: @escaping @Sendable (NSNumber?) -> Void)
```

```swift
func deviceControllerGetEstimatedSubscriptionLatency(_ controller: UUID, nodeID: NSNumber) async -> NSNumber?
```

# deviceController:nodeID:getEstimatedSubscriptionLatencyWithReply: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

## Declaration

```objectivec
- (void) deviceController:(NSUUID *) controller nodeID:(NSNumber *) nodeID getEstimatedSubscriptionLatencyWithReply:(void (^)(NSNumber *estimatedSubscriptionLatency)) reply;
```
