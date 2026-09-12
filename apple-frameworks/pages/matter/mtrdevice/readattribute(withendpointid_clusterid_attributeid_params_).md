> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevice/readattribute(withendpointid:clusterid:attributeid:params:)](https://developer.apple.com/documentation/matter/mtrdevice/readattribute(withendpointid:clusterid:attributeid:params:))

# readAttribute(withEndpointID:clusterID:attributeID:params:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
func readAttribute(withEndpointID endpointID: NSNumber, clusterID: NSNumber, attributeID: NSNumber, params: MTRReadParams?) -> [String : Any]?
```

# readAttributeWithEndpointID:clusterID:attributeID:params: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) readAttributeWithEndpointID:(NSNumber *) endpointID clusterID:(NSNumber *) clusterID attributeID:(NSNumber *) attributeID params:(MTRReadParams *) params;
```
