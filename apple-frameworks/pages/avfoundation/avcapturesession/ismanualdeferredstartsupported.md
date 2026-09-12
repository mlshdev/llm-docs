> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/ismanualdeferredstartsupported](https://developer.apple.com/documentation/avfoundation/avcapturesession/ismanualdeferredstartsupported)

# isManualDeferredStartSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A `BOOL` value that indicates whether the session supports manually running deferred start.

## Declaration

```swift
var isManualDeferredStartSupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

Deferred Start is a feature that allows you to control, on a per-output basis, whether output objects start when or after the session is started. The session defers starting an output when its `deferredStartEnabled` property is set to `true`, and starts it after the session is started.

You can only set the [automaticallyRunsDeferredStart](automaticallyrunsdeferredstart.md) property value to `false` if the session supports manual deferred start.

## See Also

### Configuring deferred start

- [automaticallyRunsDeferredStart](automaticallyrunsdeferredstart.md): A Boolean value that indicates whether deferred start runs automatically.
- [runDeferredStartWhenNeeded()](rundeferredstartwhenneeded%28%29.md): Tells the session to run deferred start when appropriate.
- [deferredStartDelegate](deferredstartdelegate.md): A delegate object that observes events about deferred start.
- [deferredStartDelegateCallbackQueue](deferredstartdelegatecallbackqueue.md): The dispatch queue on which the session calls deferred start delegate methods.
- [setDeferredStartDelegate(\_:deferredStartDelegateCallbackQueue:)](setdeferredstartdelegate%28__deferredstartdelegatecallbackqueue_%29.md): Sets a delegate object for the session to call when performing deferred start.
- [AVCaptureSessionDeferredStartDelegate](../avcapturesessiondeferredstartdelegate.md): A protocol that defines the interface to respond to events about a capture session’s deferred start.

# manualDeferredStartSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A `BOOL` value that indicates whether the session supports manually running deferred start.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isManualDeferredStartSupported) BOOL manualDeferredStartSupported;
```

<a id="discussion"></a>

## Discussion

Deferred Start is a feature that allows you to control, on a per-output basis, whether output objects start when or after the session is started. The session defers starting an output when its `deferredStartEnabled` property is set to `true`, and starts it after the session is started.

You can only set the [automaticallyRunsDeferredStart](automaticallyrunsdeferredstart.md) property value to `false` if the session supports manual deferred start.

## See Also

### Configuring deferred start

- [automaticallyRunsDeferredStart](automaticallyrunsdeferredstart.md): A Boolean value that indicates whether deferred start runs automatically.
- [runDeferredStartWhenNeeded](rundeferredstartwhenneeded%28%29.md): Tells the session to run deferred start when appropriate.
- [deferredStartDelegate](deferredstartdelegate.md): A delegate object that observes events about deferred start.
- [deferredStartDelegateCallbackQueue](deferredstartdelegatecallbackqueue.md): The dispatch queue on which the session calls deferred start delegate methods.
- [setDeferredStartDelegate:deferredStartDelegateCallbackQueue:](setdeferredstartdelegate%28__deferredstartdelegatecallbackqueue_%29.md): Sets a delegate object for the session to call when performing deferred start.
- [AVCaptureSessionDeferredStartDelegate](../avcapturesessiondeferredstartdelegate.md): A protocol that defines the interface to respond to events about a capture session’s deferred start.
