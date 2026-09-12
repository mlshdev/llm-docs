> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcapturemanager/makecapturescope(device:)](https://developer.apple.com/documentation/metal/mtlcapturemanager/makecapturescope(device:))

# makeCaptureScope(device:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a capture scope for commands submitted to a specific device object.

## Declaration

```swift
func makeCaptureScope(device: any MTLDevice) -> any MTLCaptureScope
```

## Parameters

- `device`: The device object whose commands you want to capture.

<a id="discussion"></a>

## Discussion

The capture scope captures commands in command buffers created on any command queues created by the device object.

## See Also

### Creating a capture scope

- [makeCaptureScope(commandQueue:)](makecapturescope%28commandqueue_%29-1rozd.md): Creates a capture scope for commands submitted to a specific command queue.
- [defaultCaptureScope](defaultcapturescope.md): The capture scope to use when a capture is initiated in Xcode.

# newCaptureScopeWithDevice: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a capture scope for commands submitted to a specific device object.

## Declaration

```objectivec
- (id<MTLCaptureScope>) newCaptureScopeWithDevice:(id<MTLDevice>) device;
```

## Parameters

- `device`: The device object whose commands you want to capture.

<a id="discussion"></a>

## Discussion

The capture scope captures commands in command buffers created on any command queues created by the device object.

## See Also

### Creating a capture scope

- [newCaptureScopeWithCommandQueue:](makecapturescope%28commandqueue_%29-1rozd.md): Creates a capture scope for commands submitted to a specific command queue.
- [defaultCaptureScope](defaultcapturescope.md): The capture scope to use when a capture is initiated in Xcode.
