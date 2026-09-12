> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliocommandbuffer/addcompletedhandler(_:)](https://developer.apple.com/documentation/metal/mtliocommandbuffer/addcompletedhandler(_:))

# addCompletedHandler(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Adds a closure that Metal calls immediately after the GPU finishes executing the commands in the input/output command buffer.

## Declaration

```swift
func addCompletedHandler(_ block: @escaping MTLIOCommandBufferHandler)
```

## Parameters

- `block`: A Swift closure or an Objective-C block with your code.

## See Also

### Adding final commands

- [copyStatus(buffer:offset:)](copystatus%28buffer_offset_%29.md): Encodes a command that writes the input/output command buffer’s status to a buffer.

# addCompletedHandler: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Adds a closure that Metal calls immediately after the GPU finishes executing the commands in the input/output command buffer.

## Declaration

```objectivec
- (void) addCompletedHandler:(MTLIOCommandBufferHandler) block;
```

## Parameters

- `block`: A Swift closure or an Objective-C block with your code.

## See Also

### Adding final commands

- [copyStatusToBuffer:offset:](copystatus%28buffer_offset_%29.md): Encodes a command that writes the input/output command buffer’s status to a buffer.
