> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cirawfilter/downloadresources(timeout:completionhandler:)](https://developer.apple.com/documentation/coreimage/cirawfilter/downloadresources(timeout:completionhandler:))

# downloadResources(timeout:completionHandler:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
func downloadResources(timeout: TimeInterval, completionHandler: @escaping ((any Error)?) -> Void) -> Progress
```

# downloadResourcesWithTimeout:completionHandler: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (NSProgress *) downloadResourcesWithTimeout:(NSTimeInterval) timeout completionHandler:(void (^)(NSError *error)) completionHandler;
```
