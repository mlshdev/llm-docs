> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer/commandqueue](https://developer.apple.com/documentation/metal/mtlcommandbuffer/commandqueue)

# commandQueue (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The command queue that creates the command buffer.

## Declaration

```swift
var commandQueue: any MTLCommandQueue { get }
```

<a id="discussion"></a>

## Discussion

Each command buffer can only submit its commands to the queue that creates it.

## See Also

### Identifying the command buffer

- [label](label.md): An optional name that can help you identify the command buffer.
- [device](device.md): The GPU device that indirectly owns the command buffer because you create it from a command queue the device also owns.

# commandQueue (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The command queue that creates the command buffer.

## Declaration

```objectivec
@property (readonly) id<MTLCommandQueue> commandQueue;
```

<a id="discussion"></a>

## Discussion

Each command buffer can only submit its commands to the queue that creates it.

## See Also

### Identifying the command buffer

- [label](label.md): An optional name that can help you identify the command buffer.
- [device](device.md): The GPU device that indirectly owns the command buffer because you create it from a command queue the device also owns.
