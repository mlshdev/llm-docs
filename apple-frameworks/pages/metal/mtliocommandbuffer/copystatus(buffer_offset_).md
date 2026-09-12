> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliocommandbuffer/copystatus(buffer:offset:)](https://developer.apple.com/documentation/metal/mtliocommandbuffer/copystatus(buffer:offset:))

# copyStatus(buffer:offset:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a command that writes the input/output command buffer’s status to a buffer.

## Declaration

```swift
func copyStatus(buffer: any MTLBuffer, offset: Int)
```

## Parameters

- `buffer`: A buffer instance the method copies the status into.
- `offset`: A starting location relative to the beginning of the buffer, in bytes, the method copies data to.

## See Also

### Adding final commands

- [addCompletedHandler(\_:)](addcompletedhandler%28__%29.md): Adds a closure that Metal calls immediately after the GPU finishes executing the commands in the input/output command buffer.

# copyStatusToBuffer:offset: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a command that writes the input/output command buffer’s status to a buffer.

## Declaration

```objectivec
- (void) copyStatusToBuffer:(id<MTLBuffer>) buffer offset:(NSUInteger) offset;
```

## Parameters

- `buffer`: A buffer instance the method copies the status into.
- `offset`: A starting location relative to the beginning of the buffer, in bytes, the method copies data to.

## See Also

### Adding final commands

- [addCompletedHandler:](addcompletedhandler%28__%29.md): Adds a closure that Metal calls immediately after the GPU finishes executing the commands in the input/output command buffer.
