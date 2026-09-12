> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrxpcserverprotocol_mtrdevice/devicecontroller(_:nodeid:getdevicecacheprimedwithreply:)](https://developer.apple.com/documentation/matter/mtrxpcserverprotocol_mtrdevice/devicecontroller(_:nodeid:getdevicecacheprimedwithreply:))

# deviceController(\_:nodeID:getDeviceCachePrimedWithReply:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

## Declaration

```swift
func deviceController(_ controller: UUID, nodeID: NSNumber, getDeviceCachePrimedWithReply reply: @escaping @Sendable (Bool) -> Void)
```

```swift
func deviceControllerGetDeviceCachePrimed(_ controller: UUID, nodeID: NSNumber) async -> Bool
```

# deviceController:nodeID:getDeviceCachePrimedWithReply: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

## Declaration

```objectivec
- (void) deviceController:(NSUUID *) controller nodeID:(NSNumber *) nodeID getDeviceCachePrimedWithReply:(void (^)(BOOL primed)) reply;
```
