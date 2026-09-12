> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesessiondeferredstartdelegate/sessionwillrundeferredstart(_:)](https://developer.apple.com/documentation/avfoundation/avcapturesessiondeferredstartdelegate/sessionwillrundeferredstart(_:))

# sessionWillRunDeferredStart(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

This method gets called by the session when deferred start is about to run.

## Declaration

```swift
func sessionWillRunDeferredStart(_ session: AVCaptureSession)
```

## Parameters

- `session`: The [AVCaptureSession](../avcapturesession.md) instance that runs the deferred start.

<a id="discussion"></a>

## Discussion

Delegates receive this message when the session has finished the deferred start. This message will be sent regardless of whether the session’s [automaticallyRunsDeferredStart](../avcapturesession/automaticallyrunsdeferredstart.md) property is set. See [setDeferredStartDelegate(\_:deferredStartDelegateCallbackQueue:)](../avcapturesession/setdeferredstartdelegate%28__deferredstartdelegatecallbackqueue_%29.md) documentation for more information.

## See Also

### Responding to deferred start events

- [sessionDidRunDeferredStart(\_:)](sessiondidrundeferredstart%28__%29.md): This method gets called by the session when deferred start has finished running.

# sessionWillRunDeferredStart: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

This method gets called by the session when deferred start is about to run.

## Declaration

```objectivec
- (void) sessionWillRunDeferredStart:(AVCaptureSession *) session;
```

## Parameters

- `session`: The [AVCaptureSession](../avcapturesession.md) instance that runs the deferred start.

<a id="discussion"></a>

## Discussion

Delegates receive this message when the session has finished the deferred start. This message will be sent regardless of whether the session’s [automaticallyRunsDeferredStart](../avcapturesession/automaticallyrunsdeferredstart.md) property is set. See [setDeferredStartDelegate:deferredStartDelegateCallbackQueue:](../avcapturesession/setdeferredstartdelegate%28__deferredstartdelegatecallbackqueue_%29.md) documentation for more information.

## See Also

### Responding to deferred start events

- [sessionDidRunDeferredStart:](sessiondidrundeferredstart%28__%29.md): This method gets called by the session when deferred start has finished running.
