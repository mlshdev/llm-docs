> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer/waituntilcompleted()](https://developer.apple.com/documentation/metal/mtlcommandbuffer/waituntilcompleted())

# waitUntilCompleted() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Blocks the current thread until the GPU finishes executing the command buffer and all of its completion handlers.

## Declaration

```swift
func waitUntilCompleted()
```

## See Also

### Waiting for state changes

- [waitUntilScheduled()](waituntilscheduled%28%29.md): Blocks the current thread until the command queue schedules the buffer.

# waitUntilCompleted (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Blocks the current thread until the GPU finishes executing the command buffer and all of its completion handlers.

## Declaration

```objectivec
- (void) waitUntilCompleted;
```

## See Also

### Waiting for state changes

- [waitUntilScheduled](waituntilscheduled%28%29.md): Blocks the current thread until the command queue schedules the buffer.
