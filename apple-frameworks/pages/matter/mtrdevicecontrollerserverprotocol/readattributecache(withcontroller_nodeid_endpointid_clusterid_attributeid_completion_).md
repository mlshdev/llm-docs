> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontrollerserverprotocol/readattributecache(withcontroller:nodeid:endpointid:clusterid:attributeid:completion:)](https://developer.apple.com/documentation/matter/mtrdevicecontrollerserverprotocol/readattributecache(withcontroller:nodeid:endpointid:clusterid:attributeid:completion:))

# readAttributeCache(withController:nodeId:endpointId:clusterId:attributeId:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
func readAttributeCache(withController controller: Any?, nodeId: UInt64, endpointId: NSNumber?, clusterId: NSNumber?, attributeId: NSNumber?, completion: @escaping @Sendable (Any?, (any Error)?) -> Void)
```

```swift
func readAttributeCache(withController controller: Any?, nodeId: UInt64, endpointId: NSNumber?, clusterId: NSNumber?, attributeId: NSNumber?) async throws -> Any
```

# readAttributeCacheWithController:nodeId:endpointId:clusterId:attributeId:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
- (void) readAttributeCacheWithController:(id) controller nodeId:(uint64_t) nodeId endpointId:(NSNumber *) endpointId clusterId:(NSNumber *) clusterId attributeId:(NSNumber *) attributeId completion:(MTRValuesHandler) completion;
```
