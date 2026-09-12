> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliocommandqueue/enqueuebarrier()](https://developer.apple.com/documentation/metal/mtliocommandqueue/enqueuebarrier())

# enqueueBarrier() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Appends a barrier that tells the input/output command queue to finish running all in-flight command buffers before running any new command buffers.

## Declaration

```swift
func enqueueBarrier()
```

# enqueueBarrier (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Appends a barrier that tells the input/output command queue to finish running all in-flight command buffers before running any new command buffers.

## Declaration

```objectivec
- (void) enqueueBarrier;
```
