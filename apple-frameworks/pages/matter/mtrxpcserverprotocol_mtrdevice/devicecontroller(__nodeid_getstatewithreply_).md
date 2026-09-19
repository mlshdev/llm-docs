> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrxpcserverprotocol_mtrdevice/devicecontroller(_:nodeid:getstatewithreply:)

# deviceController(\_:nodeID:getStateWithReply:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

## Declaration

```swift
func deviceController(_ controller: UUID, nodeID: NSNumber, getStateWithReply reply: @escaping @Sendable (MTRDeviceState) -> Void)
```

```swift
func deviceControllerGetState(_ controller: UUID, nodeID: NSNumber) async -> MTRDeviceState
```

# deviceController:nodeID:getStateWithReply: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

## Declaration

```objectivec
- (void) deviceController:(NSUUID *) controller nodeID:(NSNumber *) nodeID getStateWithReply:(void (^)(MTRDeviceState state)) reply;
```
