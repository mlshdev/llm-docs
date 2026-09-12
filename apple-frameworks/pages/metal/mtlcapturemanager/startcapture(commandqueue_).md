> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcapturemanager/startcapture(commandqueue:)](https://developer.apple.com/documentation/metal/mtlcapturemanager/startcapture(commandqueue:))

# startCapture(commandQueue:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.13+ (deprecated in 10.15) · tvOS 11.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Starts capturing any of your app’s Metal commands that are executed by the command queue.

> Use [startCapture(with:)](startcapture%28with_%29.md) instead.

## Declaration

```swift
func startCapture(commandQueue: any MTLCommandQueue)
```

## Parameters

- `commandQueue`: The command queue whose commands you want to capture.

## See Also

### Starting capture

- [startCapture(with:)](startcapture%28with_%29.md): Starts capturing any of your app’s Metal commands, with the capture session defined by a descriptor object.
- [startCapture(device:)](startcapture%28device_%29.md): Deprecated. Starts capturing any of your app’s Metal commands that are executed by the device object.
- [startCapture(scope:)](startcapture%28scope_%29.md): Deprecated. Starts capturing any of your app’s Metal commands that are in the specified capture scope.

# startCaptureWithCommandQueue: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.13+ (deprecated in 10.15) · tvOS 11.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Starts capturing any of your app’s Metal commands that are executed by the command queue.

> Use [startCaptureWithDescriptor:error:](startcapture%28with_%29.md) instead.

## Declaration

```objectivec
- (void) startCaptureWithCommandQueue:(id<MTLCommandQueue>) commandQueue;
```

## Parameters

- `commandQueue`: The command queue whose commands you want to capture.

## See Also

### Starting capture

- [startCaptureWithDescriptor:error:](startcapture%28with_%29.md): Starts capturing any of your app’s Metal commands, with the capture session defined by a descriptor object.
- [startCaptureWithDevice:](startcapture%28device_%29.md): Deprecated. Starts capturing any of your app’s Metal commands that are executed by the device object.
- [startCaptureWithScope:](startcapture%28scope_%29.md): Deprecated. Starts capturing any of your app’s Metal commands that are in the specified capture scope.
