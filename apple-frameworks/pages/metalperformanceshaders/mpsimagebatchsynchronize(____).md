> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagebatchsynchronize(_:_:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagebatchsynchronize(_:_:))

# MPSImageBatchSynchronize(\_:\_:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Function  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

Removes any copy of the specified image batch from the device’s caches, and, if needed, invalidates any CPU caches.

## Declaration

```swift
func MPSImageBatchSynchronize(_ batch: [MPSImage], _ cmdBuf: any MTLCommandBuffer)
```

# MPSImageBatchSynchronize (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Function  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

Removes any copy of the specified image batch from the device’s caches, and, if needed, invalidates any CPU caches.

## Declaration

```objectivec
void MPSImageBatchSynchronize(MPSImageBatch *batch, id<MTLCommandBuffer>cmdBuf);
```
