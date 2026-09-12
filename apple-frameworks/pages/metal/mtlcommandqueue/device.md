> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandqueue/device](https://developer.apple.com/documentation/metal/mtlcommandqueue/device)

# device (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The GPU device that creates the command queue.

## Declaration

```swift
var device: any MTLDevice { get }
```

<a id="discussion"></a>

## Discussion

The command queue can submit work only to the GPU the [MTLDevice](../mtldevice.md) instance represents.

## See Also

### Identifying the command queue

- [label](label.md): An optional name that can help you identify the command queue.

# device (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The GPU device that creates the command queue.

## Declaration

```objectivec
@property (readonly) id<MTLDevice> device;
```

<a id="discussion"></a>

## Discussion

The command queue can submit work only to the GPU the [MTLDevice](../mtldevice.md) instance represents.

## See Also

### Identifying the command queue

- [label](label.md): An optional name that can help you identify the command queue.
