> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcapturemanager/startcapture(scope:)](https://developer.apple.com/documentation/metal/mtlcapturemanager/startcapture(scope:))

# startCapture(scope:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.13+ (deprecated in 10.15) · tvOS 11.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Starts capturing any of your app’s Metal commands that are in the specified capture scope.

> Use [startCapture(with:)](startcapture%28with_%29.md) instead.

## Declaration

```swift
func startCapture(scope captureScope: any MTLCaptureScope)
```

## Parameters

- `captureScope`: The capture scope to use.

## See Also

### Starting capture

- [startCapture(with:)](startcapture%28with_%29.md): Starts capturing any of your app’s Metal commands, with the capture session defined by a descriptor object.
- [startCapture(device:)](startcapture%28device_%29.md): Deprecated. Starts capturing any of your app’s Metal commands that are executed by the device object.
- [startCapture(commandQueue:)](startcapture%28commandqueue_%29.md): Deprecated. Starts capturing any of your app’s Metal commands that are executed by the command queue.

# startCaptureWithScope: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.13+ (deprecated in 10.15) · tvOS 11.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Starts capturing any of your app’s Metal commands that are in the specified capture scope.

> Use [startCaptureWithDescriptor:error:](startcapture%28with_%29.md) instead.

## Declaration

```objectivec
- (void) startCaptureWithScope:(id<MTLCaptureScope>) captureScope;
```

## Parameters

- `captureScope`: The capture scope to use.

## See Also

### Starting capture

- [startCaptureWithDescriptor:error:](startcapture%28with_%29.md): Starts capturing any of your app’s Metal commands, with the capture session defined by a descriptor object.
- [startCaptureWithDevice:](startcapture%28device_%29.md): Deprecated. Starts capturing any of your app’s Metal commands that are executed by the device object.
- [startCaptureWithCommandQueue:](startcapture%28commandqueue_%29.md): Deprecated. Starts capturing any of your app’s Metal commands that are executed by the command queue.
