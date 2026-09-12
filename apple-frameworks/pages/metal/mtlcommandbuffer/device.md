> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer/device](https://developer.apple.com/documentation/metal/mtlcommandbuffer/device)

# device (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The GPU device that indirectly owns the command buffer because you create it from a command queue the device also owns.

## Declaration

```swift
var device: any MTLDevice { get }
```

<a id="discussion"></a>

## Discussion

The command buffer can only work with other instances that [device](device.md) creates, directly or indirectly, such as buffers and textures.

## See Also

### Identifying the command buffer

- [label](label.md): An optional name that can help you identify the command buffer.
- [commandQueue](commandqueue.md): The command queue that creates the command buffer.

# device (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The GPU device that indirectly owns the command buffer because you create it from a command queue the device also owns.

## Declaration

```objectivec
@property (readonly) id<MTLDevice> device;
```

<a id="discussion"></a>

## Discussion

The command buffer can only work with other instances that [device](device.md) creates, directly or indirectly, such as buffers and textures.

## See Also

### Identifying the command buffer

- [label](label.md): An optional name that can help you identify the command buffer.
- [commandQueue](commandqueue.md): The command queue that creates the command buffer.
