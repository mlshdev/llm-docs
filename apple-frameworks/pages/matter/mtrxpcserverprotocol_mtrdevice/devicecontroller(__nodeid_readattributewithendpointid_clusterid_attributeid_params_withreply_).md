> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrxpcserverprotocol_mtrdevice/devicecontroller(_:nodeid:readattributewithendpointid:clusterid:attributeid:params:withreply:)](https://developer.apple.com/documentation/matter/mtrxpcserverprotocol_mtrdevice/devicecontroller(_:nodeid:readattributewithendpointid:clusterid:attributeid:params:withreply:))

# deviceController(\_:nodeID:readAttributeWithEndpointID:clusterID:attributeID:params:withReply:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

## Declaration

```swift
func deviceController(_ controller: UUID, nodeID: NSNumber, readAttributeWithEndpointID endpointID: NSNumber, clusterID: NSNumber, attributeID: NSNumber, params: MTRReadParams?, withReply reply: @escaping @Sendable ([String : Any]?) -> Void)
```

```swift
func deviceController(_ controller: UUID, nodeID: NSNumber, readAttributeWithEndpointID endpointID: NSNumber, clusterID: NSNumber, attributeID: NSNumber, params: MTRReadParams?) async -> [String : Any]?
```

# deviceController:nodeID:readAttributeWithEndpointID:clusterID:attributeID:params:withReply: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

## Declaration

```objectivec
- (void) deviceController:(NSUUID *) controller nodeID:(NSNumber *) nodeID readAttributeWithEndpointID:(NSNumber *) endpointID clusterID:(NSNumber *) clusterID attributeID:(NSNumber *) attributeID params:(MTRReadParams *) params withReply:(void (^)(NSDictionary<NSString *,id> *)) reply;
```
