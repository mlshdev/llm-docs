> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrxpcserverprotocol_mtrdevice/devicecontroller(_:nodeid:readattributepaths:withreply:)](https://developer.apple.com/documentation/matter/mtrxpcserverprotocol_mtrdevice/devicecontroller(_:nodeid:readattributepaths:withreply:))

# deviceController(\_:nodeID:readAttributePaths:withReply:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

## Declaration

```swift
func deviceController(_ controller: UUID, nodeID: NSNumber, readAttributePaths attributePaths: [MTRAttributeRequestPath], withReply reply: @escaping @Sendable ([[String : Any]]) -> Void)
```

```swift
func deviceController(_ controller: UUID, nodeID: NSNumber, readAttributePaths attributePaths: [MTRAttributeRequestPath]) async -> [[String : Any]]
```

# deviceController:nodeID:readAttributePaths:withReply: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

## Declaration

```objectivec
- (void) deviceController:(NSUUID *) controller nodeID:(NSNumber *) nodeID readAttributePaths:(NSArray<MTRAttributeRequestPath *> *) attributePaths withReply:(void (^)(NSArray<NSDictionary<NSString *,id> *> *)) reply;
```
