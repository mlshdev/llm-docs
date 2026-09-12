> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcapturescope/commandqueue](https://developer.apple.com/documentation/metal/mtlcapturescope/commandqueue)

# commandQueue (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The command queue that this capture scope uses to limit which commands are recorded.

## Declaration

```swift
var commandQueue: (any MTLCommandQueue)? { get }
```

<a id="discussion"></a>

## Discussion

This value is only available if you created the capture scope by calling the [makeCaptureScope(commandQueue:)](../mtlcapturemanager/makecapturescope%28commandqueue_%29-1rozd.md) method. Otherwise, the value is `nil`.

## See Also

### Identifying the capture scope

- [label](label.md): A string that helps you identify the capture scope.
- [device](device.md): The device object from which you created the capture scope.

# commandQueue (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The command queue that this capture scope uses to limit which commands are recorded.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<MTLCommandQueue> commandQueue;
```

<a id="discussion"></a>

## Discussion

This value is only available if you created the capture scope by calling the [newCaptureScopeWithCommandQueue:](../mtlcapturemanager/makecapturescope%28commandqueue_%29-1rozd.md) method. Otherwise, the value is `nil`.

## See Also

### Identifying the capture scope

- [label](label.md): A string that helps you identify the capture scope.
- [device](device.md): The device object from which you created the capture scope.
