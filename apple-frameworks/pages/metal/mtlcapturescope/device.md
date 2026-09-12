> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcapturescope/device](https://developer.apple.com/documentation/metal/mtlcapturescope/device)

# device (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The device object from which you created the capture scope.

## Declaration

```swift
var device: any MTLDevice { get }
```

## See Also

### Identifying the capture scope

- [label](label.md): A string that helps you identify the capture scope.
- [commandQueue](commandqueue.md): The command queue that this capture scope uses to limit which commands are recorded.

# device (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The device object from which you created the capture scope.

## Declaration

```objectivec
@property (nonatomic, readonly, nonnull) id<MTLDevice> device;
```

## See Also

### Identifying the capture scope

- [label](label.md): A string that helps you identify the capture scope.
- [commandQueue](commandqueue.md): The command queue that this capture scope uses to limit which commands are recorded.
