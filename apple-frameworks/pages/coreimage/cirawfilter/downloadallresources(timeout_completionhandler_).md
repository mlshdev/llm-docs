> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreimage/cirawfilter/downloadallresources(timeout:completionhandler:)

# downloadAllResources(timeout:completionHandler:) (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta · macOS 27.2+ beta · tvOS 27.2+ beta · visionOS 27.2+ beta

## Declaration

```swift
class func downloadAllResources(timeout: TimeInterval, completionHandler: @escaping ((any Error)?) -> Void) -> Progress
```

# downloadAllResourcesWithTimeout:completionHandler: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta · macOS 27.2+ beta · tvOS 27.2+ beta · visionOS 27.2+ beta

## Declaration

```objectivec
+ (NSProgress *) downloadAllResourcesWithTimeout:(NSTimeInterval) timeout completionHandler:(void (^)(NSError *error)) completionHandler;
```
