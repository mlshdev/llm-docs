> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliocommandbuffer/commit()](https://developer.apple.com/documentation/metal/mtliocommandbuffer/commit())

# commit() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Submits the command buffer to the queue for execution on the GPU.

## Declaration

```swift
func commit()
```

<a id="discussion"></a>

## Discussion

If you haven’t already called [enqueue()](enqueue%28%29.md) for the command buffer, the [commit()](commit%28%29.md) method enqueues it at the next position in the input/output command queue.

You can only commit an input/output command buffer once, after which you can’t encode any additional commands or add more completion handlers to it.

## See Also

### Submitting a command buffer

- [enqueue()](enqueue%28%29.md): Reserves a place for the input/output command buffer in the input/output command queue without committing the command buffer.

# commit (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Submits the command buffer to the queue for execution on the GPU.

## Declaration

```objectivec
- (void) commit;
```

<a id="discussion"></a>

## Discussion

If you haven’t already called [enqueue](enqueue%28%29.md) for the command buffer, the [commit](commit%28%29.md) method enqueues it at the next position in the input/output command queue.

You can only commit an input/output command buffer once, after which you can’t encode any additional commands or add more completion handlers to it.

## See Also

### Submitting a command buffer

- [enqueue](enqueue%28%29.md): Reserves a place for the input/output command buffer in the input/output command queue without committing the command buffer.
