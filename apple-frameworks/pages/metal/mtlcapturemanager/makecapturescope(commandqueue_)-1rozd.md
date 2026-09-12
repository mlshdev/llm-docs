> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcapturemanager/makecapturescope(commandqueue:)-1rozd](https://developer.apple.com/documentation/metal/mtlcapturemanager/makecapturescope(commandqueue:)-1rozd)

# makeCaptureScope(commandQueue:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a capture scope for commands submitted to a specific command queue.

## Declaration

```swift
func makeCaptureScope(commandQueue: any MTLCommandQueue) -> any MTLCaptureScope
```

## Parameters

- `commandQueue`: The command queue whose commands you want to capture.

## See Also

### Creating a capture scope

- [makeCaptureScope(device:)](makecapturescope%28device_%29.md): Creates a capture scope for commands submitted to a specific device object.
- [defaultCaptureScope](defaultcapturescope.md): The capture scope to use when a capture is initiated in Xcode.

# newCaptureScopeWithCommandQueue: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a capture scope for commands submitted to a specific command queue.

## Declaration

```objectivec
- (id<MTLCaptureScope>) newCaptureScopeWithCommandQueue:(id<MTLCommandQueue>) commandQueue;
```

## Parameters

- `commandQueue`: The command queue whose commands you want to capture.

## See Also

### Creating a capture scope

- [newCaptureScopeWithDevice:](makecapturescope%28device_%29.md): Creates a capture scope for commands submitted to a specific device object.
- [defaultCaptureScope](defaultcapturescope.md): The capture scope to use when a capture is initiated in Xcode.
