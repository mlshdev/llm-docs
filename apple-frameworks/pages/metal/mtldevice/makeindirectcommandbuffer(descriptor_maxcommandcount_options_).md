> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makeindirectcommandbuffer(descriptor:maxcommandcount:options:)](https://developer.apple.com/documentation/metal/mtldevice/makeindirectcommandbuffer(descriptor:maxcommandcount:options:))

# makeIndirectCommandBuffer(descriptor:maxCommandCount:options:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Creates an indirect command buffer instance.

## Declaration

```swift
func makeIndirectCommandBuffer(descriptor: MTLIndirectCommandBufferDescriptor, maxCommandCount maxCount: Int, options: MTLResourceOptions = []) -> (any MTLIndirectCommandBuffer)?
```

## Parameters

- `descriptor`: An [MTLIndirectCommandBufferDescriptor](../mtlindirectcommandbufferdescriptor.md) instance.
- `maxCount`: The largest number of commands you can store in the buffer.
- `options`: An [MTLResourceOptions](../mtlresourceoptions.md) instance.

<a id="return-value"></a>

## Return Value

A new [MTLIndirectCommandBuffer](../mtlindirectcommandbuffer.md) instance if the method completed successfully; otherwise `nil`.

## Mentioned In

- [Creating an indirect command buffer](../creating-an-indirect-command-buffer.md)

# newIndirectCommandBufferWithDescriptor:maxCommandCount:options: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Creates an indirect command buffer instance.

## Declaration

```objectivec
- (id<MTLIndirectCommandBuffer>) newIndirectCommandBufferWithDescriptor:(MTLIndirectCommandBufferDescriptor *) descriptor maxCommandCount:(NSUInteger) maxCount options:(MTLResourceOptions) options;
```

## Parameters

- `descriptor`: An [MTLIndirectCommandBufferDescriptor](../mtlindirectcommandbufferdescriptor.md) instance.
- `maxCount`: The largest number of commands you can store in the buffer.
- `options`: An [MTLResourceOptions](../mtlresourceoptions.md) instance.

<a id="return-value"></a>

## Return Value

A new [MTLIndirectCommandBuffer](../mtlindirectcommandbuffer.md) instance if the method completed successfully; otherwise `nil`.

## Mentioned In

- [Creating an indirect command buffer](../creating-an-indirect-command-buffer.md)
