> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesessiondeferredstartdelegate/sessiondidrundeferredstart(_:)](https://developer.apple.com/documentation/avfoundation/avcapturesessiondeferredstartdelegate/sessiondidrundeferredstart(_:))

# sessionDidRunDeferredStart(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

This method gets called by the session when deferred start has finished running.

## Declaration

```swift
func sessionDidRunDeferredStart(_ session: AVCaptureSession)
```

## Parameters

- `session`: The [AVCaptureSession](../avcapturesession.md) instance that runs the deferred start.

## See Also

### Responding to deferred start events

- [sessionWillRunDeferredStart(\_:)](sessionwillrundeferredstart%28__%29.md): This method gets called by the session when deferred start is about to run.

# sessionDidRunDeferredStart: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

This method gets called by the session when deferred start has finished running.

## Declaration

```objectivec
- (void) sessionDidRunDeferredStart:(AVCaptureSession *) session;
```

## Parameters

- `session`: The [AVCaptureSession](../avcapturesession.md) instance that runs the deferred start.

## See Also

### Responding to deferred start events

- [sessionWillRunDeferredStart:](sessionwillrundeferredstart%28__%29.md): This method gets called by the session when deferred start is about to run.
