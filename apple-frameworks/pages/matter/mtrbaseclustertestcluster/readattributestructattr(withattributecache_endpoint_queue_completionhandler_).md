> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustertestcluster/readattributestructattr(withattributecache:endpoint:queue:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclustertestcluster/readattributestructattr(withattributecache:endpoint:queue:completionhandler:))

# readAttributeStructAttr(withAttributeCache:endpoint:queue:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeStructAttrWithAttributeCache:endpoint:queue:completion:

## Declaration

```swift
class func readAttributeStructAttr(withAttributeCache attributeCacheContainer: MTRAttributeCacheContainer, endpoint: NSNumber, queue: dispatch_queue_t, completionHandler: @escaping @Sendable (MTRTestClusterClusterSimpleStruct?, (any Error)?) -> Void)
```

```swift
class func readAttributeStructAttr(withAttributeCache attributeCacheContainer: MTRAttributeCacheContainer, endpoint: NSNumber, queue: dispatch_queue_t) async throws -> MTRTestClusterClusterSimpleStruct
```

# readAttributeStructAttrWithAttributeCache:endpoint:queue:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeStructAttrWithAttributeCache:endpoint:queue:completion:

## Declaration

```objectivec
+ (void) readAttributeStructAttrWithAttributeCache:(MTRAttributeCacheContainer *) attributeCacheContainer endpoint:(NSNumber *) endpoint queue:(dispatch_queue_t) queue completionHandler:(void (^)(MTRTestClusterClusterSimpleStruct *value, NSError *error)) completionHandler;
```
