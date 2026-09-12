> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcapturemanager/startcapture(with:)](https://developer.apple.com/documentation/metal/mtlcapturemanager/startcapture(with:))

# startCapture(with:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Starts capturing any of your app’s Metal commands, with the capture session defined by a descriptor object.

## Declaration

```swift
func startCapture(with descriptor: MTLCaptureDescriptor) throws
```

## Parameters

- `descriptor`: A description of the capture session to create.

## See Also

### Starting capture

- [startCapture(device:)](startcapture%28device_%29.md): Deprecated. Starts capturing any of your app’s Metal commands that are executed by the device object.
- [startCapture(commandQueue:)](startcapture%28commandqueue_%29.md): Deprecated. Starts capturing any of your app’s Metal commands that are executed by the command queue.
- [startCapture(scope:)](startcapture%28scope_%29.md): Deprecated. Starts capturing any of your app’s Metal commands that are in the specified capture scope.

# startCaptureWithDescriptor:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Starts capturing any of your app’s Metal commands, with the capture session defined by a descriptor object.

## Declaration

```objectivec
- (BOOL) startCaptureWithDescriptor:(MTLCaptureDescriptor *) descriptor error:(NSError **) error;
```

## Parameters

- `descriptor`: A description of the capture session to create.
- `error`: On return, if an error occurred, this parameter is updated to point to an error object describing what happened.

<a id="return-value"></a>

## Return Value

A Boolean value indicating whether the capture session was successfully started.

## See Also

### Starting capture

- [startCaptureWithDevice:](startcapture%28device_%29.md): Deprecated. Starts capturing any of your app’s Metal commands that are executed by the device object.
- [startCaptureWithCommandQueue:](startcapture%28commandqueue_%29.md): Deprecated. Starts capturing any of your app’s Metal commands that are executed by the command queue.
- [startCaptureWithScope:](startcapture%28scope_%29.md): Deprecated. Starts capturing any of your app’s Metal commands that are in the specified capture scope.
