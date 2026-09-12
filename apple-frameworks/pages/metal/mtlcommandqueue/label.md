> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandqueue/label](https://developer.apple.com/documentation/metal/mtlcommandqueue/label)

# label (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An optional name that can help you identify the command queue.

## Declaration

```swift
var label: String? { get set }
```

<a id="discussion"></a>

## Discussion

Set labels to help you quickly identify a GPU at runtime in the Metal debugging and profiling tools. See [Naming resources and commands](https://developer.apple.com/documentation/xcode/naming-resources-and-commands).

## See Also

### Identifying the command queue

- [device](device.md): The GPU device that creates the command queue.

# label (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An optional name that can help you identify the command queue.

## Declaration

```objectivec
@property (atomic, copy, nullable) NSString * label;
```

<a id="discussion"></a>

## Discussion

Set labels to help you quickly identify a GPU at runtime in the Metal debugging and profiling tools. See [Naming resources and commands](https://developer.apple.com/documentation/xcode/naming-resources-and-commands).

## See Also

### Identifying the command queue

- [device](device.md): The GPU device that creates the command queue.
