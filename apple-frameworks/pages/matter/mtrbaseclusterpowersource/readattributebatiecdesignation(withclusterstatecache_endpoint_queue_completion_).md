> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterpowersource/readattributebatiecdesignation(withclusterstatecache:endpoint:queue:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterpowersource/readattributebatiecdesignation(withclusterstatecache:endpoint:queue:completion:))

# readAttributeBatIECDesignation(withClusterStateCache:endpoint:queue:completion:) (Swift)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
class func readAttributeBatIECDesignation(withClusterStateCache clusterStateCacheContainer: MTRClusterStateCacheContainer, endpoint: NSNumber, queue: dispatch_queue_t, completion: @escaping @Sendable (String?, (any Error)?) -> Void)
```

```swift
class func readAttributeBatIECDesignation(withClusterStateCache clusterStateCacheContainer: MTRClusterStateCacheContainer, endpoint: NSNumber, queue: dispatch_queue_t) async throws -> String
```

# readAttributeBatIECDesignationWithClusterStateCache:endpoint:queue:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
+ (void) readAttributeBatIECDesignationWithClusterStateCache:(MTRClusterStateCacheContainer *) clusterStateCacheContainer endpoint:(NSNumber *) endpoint queue:(dispatch_queue_t) queue completion:(void (^)(NSString *value, NSError *error)) completion;
```
