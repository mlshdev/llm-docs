> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontrollerserverprotocol/readattribute(withcontroller:nodeid:endpointid:clusterid:attributeid:params:completion:)](https://developer.apple.com/documentation/matter/mtrdevicecontrollerserverprotocol/readattribute(withcontroller:nodeid:endpointid:clusterid:attributeid:params:completion:))

# readAttribute(withController:nodeId:endpointId:clusterId:attributeId:params:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
func readAttribute(withController controller: Any?, nodeId: UInt64, endpointId: NSNumber?, clusterId: NSNumber?, attributeId: NSNumber?, params: [String : Any]?, completion: @escaping @Sendable (Any?, (any Error)?) -> Void)
```

```swift
func readAttribute(withController controller: Any?, nodeId: UInt64, endpointId: NSNumber?, clusterId: NSNumber?, attributeId: NSNumber?, params: [String : Any]?) async throws -> Any
```

# readAttributeWithController:nodeId:endpointId:clusterId:attributeId:params:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
- (void) readAttributeWithController:(id) controller nodeId:(uint64_t) nodeId endpointId:(NSNumber *) endpointId clusterId:(NSNumber *) clusterId attributeId:(NSNumber *) attributeId params:(NSDictionary<NSString *,id> *) params completion:(MTRValuesHandler) completion;
```
