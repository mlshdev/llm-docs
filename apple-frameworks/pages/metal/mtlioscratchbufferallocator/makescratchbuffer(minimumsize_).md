> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlioscratchbufferallocator/makescratchbuffer(minimumsize:)](https://developer.apple.com/documentation/metal/mtlioscratchbufferallocator/makescratchbuffer(minimumsize:))

# makeScratchBuffer(minimumSize:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a scratch memory buffer for an input/output command queue.

## Declaration

```swift
func makeScratchBuffer(minimumSize: Int) -> (any MTLIOScratchBuffer)?
```

## Parameters

- `minimumSize`: The number of bytes the input/output command buffer needs to successfully run a command buffer.

<a id="return-value"></a>

## Return Value

An [MTLIOScratchBuffer](../mtlioscratchbuffer.md) instance that your app implements or `nil`.

<a id="discussion"></a>

## Discussion

Your app can reduce additional callbacks from the framework by providing additional memory above `minimumSize`. If your implementation returns `nil`, the input/output command queue cancels the [MTLIOCommandBuffer](../mtliocommandbuffer.md) instance that needs the scratch buffer memory.

# newScratchBufferWithMinimumSize: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a scratch memory buffer for an input/output command queue.

## Declaration

```objectivec
- (id<MTLIOScratchBuffer>) newScratchBufferWithMinimumSize:(NSUInteger) minimumSize;
```

## Parameters

- `minimumSize`: The number of bytes the input/output command buffer needs to successfully run a command buffer.

<a id="return-value"></a>

## Return Value

An [MTLIOScratchBuffer](../mtlioscratchbuffer.md) instance that your app implements or `nil`.

<a id="discussion"></a>

## Discussion

Your app can reduce additional callbacks from the framework by providing additional memory above `minimumSize`. If your implementation returns `nil`, the input/output command queue cancels the [MTLIOCommandBuffer](../mtliocommandbuffer.md) instance that needs the scratch buffer memory.
