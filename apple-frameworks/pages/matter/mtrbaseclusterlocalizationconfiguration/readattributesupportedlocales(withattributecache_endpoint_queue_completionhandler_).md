> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterlocalizationconfiguration/readattributesupportedlocales(withattributecache:endpoint:queue:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusterlocalizationconfiguration/readattributesupportedlocales(withattributecache:endpoint:queue:completionhandler:))

# readAttributeSupportedLocales(withAttributeCache:endpoint:queue:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeSupportedLocalesWithAttributeCache:endpoint:queue:completion:

## Declaration

```swift
class func readAttributeSupportedLocales(withAttributeCache attributeCacheContainer: MTRAttributeCacheContainer, endpoint: NSNumber, queue: dispatch_queue_t, completionHandler: @escaping @Sendable ([Any]?, (any Error)?) -> Void)
```

```swift
class func readAttributeSupportedLocales(withAttributeCache attributeCacheContainer: MTRAttributeCacheContainer, endpoint: NSNumber, queue: dispatch_queue_t) async throws -> [Any]
```

# readAttributeSupportedLocalesWithAttributeCache:endpoint:queue:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeSupportedLocalesWithAttributeCache:endpoint:queue:completion:

## Declaration

```objectivec
+ (void) readAttributeSupportedLocalesWithAttributeCache:(MTRAttributeCacheContainer *) attributeCacheContainer endpoint:(NSNumber *) endpoint queue:(dispatch_queue_t) queue completionHandler:(void (^)(NSArray *value, NSError *error)) completionHandler;
```
