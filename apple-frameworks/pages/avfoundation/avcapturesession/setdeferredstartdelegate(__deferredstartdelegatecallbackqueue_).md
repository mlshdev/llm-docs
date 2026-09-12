> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/setdeferredstartdelegate(_:deferredstartdelegatecallbackqueue:)](https://developer.apple.com/documentation/avfoundation/avcapturesession/setdeferredstartdelegate(_:deferredstartdelegatecallbackqueue:))

# setDeferredStartDelegate(\_:deferredStartDelegateCallbackQueue:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Sets a delegate object for the session to call when performing deferred start.

## Declaration

```swift
func setDeferredStartDelegate(_ deferredStartDelegate: (any AVCaptureSessionDeferredStartDelegate)?, deferredStartDelegateCallbackQueue: dispatch_queue_t?)
```

## Parameters

- `deferredStartDelegate`: An object conforming to the [AVCaptureSessionDeferredStartDelegate](../avcapturesessiondeferredstartdelegate.md) protocol that receives events about deferred start.
- `deferredStartDelegateCallbackQueue`: A dispatch queue on which deferredStart delegate methods are called.

<a id="discussion"></a>

## Discussion

This delegate receives a call to the [sessionWillRunDeferredStart(\_:)](../avcapturesessiondeferredstartdelegate/sessionwillrundeferredstart%28__%29.md) method when deferred start is about to run. It is non-blocking, so by the time this method is called, the deferred start may already be underway. If you want your app to perform initialization (potentially) concurrently with deferred start (e.g. user-facing camera features that are not needed to display the first preview frame, but are available to the user as soon as possible) it may be done in the delegate’s [sessionWillRunDeferredStart(\_:)](../avcapturesessiondeferredstartdelegate/sessionwillrundeferredstart%28__%29.md) method. To wait until deferred start is finished to perform some remaining initialization work, use the [sessionDidRunDeferredStart(\_:)](../avcapturesessiondeferredstartdelegate/sessiondidrundeferredstart%28__%29.md) method instead.

The delegate receives a call to the [sessionDidRunDeferredStart(\_:)](../avcapturesessiondeferredstartdelegate/sessiondidrundeferredstart%28__%29.md) method when the deferred start finishes running. This allows you to run less-critical application initialization code. For example, if you’ve deferred an [AVCapturePhotoOutput](../avcapturephotooutput.md) by setting its [isDeferredStartEnabled](../avcaptureoutput/isdeferredstartenabled.md) property to `true`, and you’d like to do some app-specific initialization related to still capture, here might be a good place to put it.

If the delegate is non-nil, the session still calls the [sessionWillRunDeferredStart(\_:)](../avcapturesessiondeferredstartdelegate/sessionwillrundeferredstart%28__%29.md) and [sessionDidRunDeferredStart(\_:)](../avcapturesessiondeferredstartdelegate/sessiondidrundeferredstart%28__%29.md) methods regardless of the value of the session’s [automaticallyRunsDeferredStart](automaticallyrunsdeferredstart.md) property.

To minimize the capture session’s startup latency, defer all unnecessary work until after the session starts. This delegate provides callbacks for you to schedule deferred work without impacting session startup performance.

To perform initialization prior to deferred start but after the user interface displays, set [automaticallyRunsDeferredStart](automaticallyrunsdeferredstart.md) to `false`, and then run the custom initialization prior to calling [runDeferredStartWhenNeeded()](rundeferredstartwhenneeded%28%29.md).

If [deferredStartDelegate](deferredstartdelegate.md) is not `NULL`, the session throws an exception if [deferredStartDelegateCallbackQueue](deferredstartdelegatecallbackqueue.md) is `nil`.

## See Also

### Configuring deferred start

- [isManualDeferredStartSupported](ismanualdeferredstartsupported.md): A `BOOL` value that indicates whether the session supports manually running deferred start.
- [automaticallyRunsDeferredStart](automaticallyrunsdeferredstart.md): A Boolean value that indicates whether deferred start runs automatically.
- [runDeferredStartWhenNeeded()](rundeferredstartwhenneeded%28%29.md): Tells the session to run deferred start when appropriate.
- [deferredStartDelegate](deferredstartdelegate.md): A delegate object that observes events about deferred start.
- [deferredStartDelegateCallbackQueue](deferredstartdelegatecallbackqueue.md): The dispatch queue on which the session calls deferred start delegate methods.
- [AVCaptureSessionDeferredStartDelegate](../avcapturesessiondeferredstartdelegate.md): A protocol that defines the interface to respond to events about a capture session’s deferred start.

# setDeferredStartDelegate:deferredStartDelegateCallbackQueue: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Sets a delegate object for the session to call when performing deferred start.

## Declaration

```objectivec
- (void) setDeferredStartDelegate:(id<AVCaptureSessionDeferredStartDelegate>) deferredStartDelegate deferredStartDelegateCallbackQueue:(dispatch_queue_t) deferredStartDelegateCallbackQueue;
```

## Parameters

- `deferredStartDelegate`: An object conforming to the [AVCaptureSessionDeferredStartDelegate](../avcapturesessiondeferredstartdelegate.md) protocol that receives events about deferred start.
- `deferredStartDelegateCallbackQueue`: A dispatch queue on which deferredStart delegate methods are called.

<a id="discussion"></a>

## Discussion

This delegate receives a call to the [sessionWillRunDeferredStart:](../avcapturesessiondeferredstartdelegate/sessionwillrundeferredstart%28__%29.md) method when deferred start is about to run. It is non-blocking, so by the time this method is called, the deferred start may already be underway. If you want your app to perform initialization (potentially) concurrently with deferred start (e.g. user-facing camera features that are not needed to display the first preview frame, but are available to the user as soon as possible) it may be done in the delegate’s [sessionWillRunDeferredStart:](../avcapturesessiondeferredstartdelegate/sessionwillrundeferredstart%28__%29.md) method. To wait until deferred start is finished to perform some remaining initialization work, use the [sessionDidRunDeferredStart:](../avcapturesessiondeferredstartdelegate/sessiondidrundeferredstart%28__%29.md) method instead.

The delegate receives a call to the [sessionDidRunDeferredStart:](../avcapturesessiondeferredstartdelegate/sessiondidrundeferredstart%28__%29.md) method when the deferred start finishes running. This allows you to run less-critical application initialization code. For example, if you’ve deferred an [AVCapturePhotoOutput](../avcapturephotooutput.md) by setting its [deferredStartEnabled](../avcaptureoutput/isdeferredstartenabled.md) property to `true`, and you’d like to do some app-specific initialization related to still capture, here might be a good place to put it.

If the delegate is non-nil, the session still calls the [sessionWillRunDeferredStart:](../avcapturesessiondeferredstartdelegate/sessionwillrundeferredstart%28__%29.md) and [sessionDidRunDeferredStart:](../avcapturesessiondeferredstartdelegate/sessiondidrundeferredstart%28__%29.md) methods regardless of the value of the session’s [automaticallyRunsDeferredStart](automaticallyrunsdeferredstart.md) property.

To minimize the capture session’s startup latency, defer all unnecessary work until after the session starts. This delegate provides callbacks for you to schedule deferred work without impacting session startup performance.

To perform initialization prior to deferred start but after the user interface displays, set [automaticallyRunsDeferredStart](automaticallyrunsdeferredstart.md) to `false`, and then run the custom initialization prior to calling [runDeferredStartWhenNeeded](rundeferredstartwhenneeded%28%29.md).

If [deferredStartDelegate](deferredstartdelegate.md) is not `NULL`, the session throws an exception if [deferredStartDelegateCallbackQueue](deferredstartdelegatecallbackqueue.md) is `nil`.

## See Also

### Configuring deferred start

- [manualDeferredStartSupported](ismanualdeferredstartsupported.md): A `BOOL` value that indicates whether the session supports manually running deferred start.
- [automaticallyRunsDeferredStart](automaticallyrunsdeferredstart.md): A Boolean value that indicates whether deferred start runs automatically.
- [runDeferredStartWhenNeeded](rundeferredstartwhenneeded%28%29.md): Tells the session to run deferred start when appropriate.
- [deferredStartDelegate](deferredstartdelegate.md): A delegate object that observes events about deferred start.
- [deferredStartDelegateCallbackQueue](deferredstartdelegatecallbackqueue.md): The dispatch queue on which the session calls deferred start delegate methods.
- [AVCaptureSessionDeferredStartDelegate](../avcapturesessiondeferredstartdelegate.md): A protocol that defines the interface to respond to events about a capture session’s deferred start.
