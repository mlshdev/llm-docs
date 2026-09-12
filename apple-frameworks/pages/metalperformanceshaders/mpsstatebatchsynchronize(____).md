> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsstatebatchsynchronize(_:_:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsstatebatchsynchronize(_:_:))

# MPSStateBatchSynchronize(\_:\_:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Function  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

Removes any copy of the specified state batch from the device’s caches, and, if needed, invalidates any CPU caches.

## Declaration

```swift
func MPSStateBatchSynchronize(_ batch: [MPSState], _ cmdBuf: any MTLCommandBuffer)
```

# MPSStateBatchSynchronize (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Function  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

Removes any copy of the specified state batch from the device’s caches, and, if needed, invalidates any CPU caches.

## Declaration

```objectivec
void MPSStateBatchSynchronize(MPSStateBatch *batch, id<MTLCommandBuffer>cmdBuf);
```
