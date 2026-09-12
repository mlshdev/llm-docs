> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer/label](https://developer.apple.com/documentation/metal/mtlcommandbuffer/label)

# label (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An optional name that can help you identify the command buffer.

## Declaration

```swift
var label: String? { get set }
```

<a id="discussion"></a>

## Discussion

Set labels to help you quickly identify a command buffer at runtime in the Metal debugging and profiling tools. See [Naming resources and commands](https://developer.apple.com/documentation/xcode/naming-resources-and-commands).

## See Also

### Identifying the command buffer

- [commandQueue](commandqueue.md): The command queue that creates the command buffer.
- [device](device.md): The GPU device that indirectly owns the command buffer because you create it from a command queue the device also owns.

# label (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An optional name that can help you identify the command buffer.

## Declaration

```objectivec
@property (atomic, copy, nullable) NSString * label;
```

<a id="discussion"></a>

## Discussion

Set labels to help you quickly identify a command buffer at runtime in the Metal debugging and profiling tools. See [Naming resources and commands](https://developer.apple.com/documentation/xcode/naming-resources-and-commands).

## See Also

### Identifying the command buffer

- [commandQueue](commandqueue.md): The command queue that creates the command buffer.
- [device](device.md): The GPU device that indirectly owns the command buffer because you create it from a command queue the device also owns.
