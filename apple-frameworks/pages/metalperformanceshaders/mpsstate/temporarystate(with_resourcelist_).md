> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsstate/temporarystate(with:resourcelist:)

# temporaryState(with:resourceList:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```swift
class func temporaryState(with commandBuffer: any MTLCommandBuffer, resourceList: MPSStateResourceList) -> Self
```

# temporaryStateWithCommandBuffer:resourceList: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
+ (instancetype) temporaryStateWithCommandBuffer:(id<MTLCommandBuffer>) commandBuffer resourceList:(MPSStateResourceList *) resourceList;
```
