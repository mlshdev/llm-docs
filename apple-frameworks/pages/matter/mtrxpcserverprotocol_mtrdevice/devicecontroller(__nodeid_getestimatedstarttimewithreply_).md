> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrxpcserverprotocol_mtrdevice/devicecontroller(_:nodeid:getestimatedstarttimewithreply:)](https://developer.apple.com/documentation/matter/mtrxpcserverprotocol_mtrdevice/devicecontroller(_:nodeid:getestimatedstarttimewithreply:))

# deviceController(\_:nodeID:getEstimatedStartTimeWithReply:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

## Declaration

```swift
func deviceController(_ controller: UUID, nodeID: NSNumber, getEstimatedStartTimeWithReply reply: @escaping @Sendable (Date?) -> Void)
```

```swift
func deviceControllerGetEstimatedStartTime(_ controller: UUID, nodeID: NSNumber) async -> Date?
```

# deviceController:nodeID:getEstimatedStartTimeWithReply: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

## Declaration

```objectivec
- (void) deviceController:(NSUUID *) controller nodeID:(NSNumber *) nodeID getEstimatedStartTimeWithReply:(void (^)(NSDate *estimatedStartTime)) reply;
```
