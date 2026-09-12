> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/deferredstartdelegate](https://developer.apple.com/documentation/avfoundation/avcapturesession/deferredstartdelegate)

# deferredStartDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A delegate object that observes events about deferred start.

## Declaration

```swift
var deferredStartDelegate: (any AVCaptureSessionDeferredStartDelegate)? { get }
```

<a id="discussion"></a>

## Discussion

Call the [setDeferredStartDelegate(\_:deferredStartDelegateCallbackQueue:)](setdeferredstartdelegate%28__deferredstartdelegatecallbackqueue_%29.md) method to set the deferred start delegate for a session.

## See Also

### Configuring deferred start

- [isManualDeferredStartSupported](ismanualdeferredstartsupported.md): A `BOOL` value that indicates whether the session supports manually running deferred start.
- [automaticallyRunsDeferredStart](automaticallyrunsdeferredstart.md): A Boolean value that indicates whether deferred start runs automatically.
- [runDeferredStartWhenNeeded()](rundeferredstartwhenneeded%28%29.md): Tells the session to run deferred start when appropriate.
- [deferredStartDelegateCallbackQueue](deferredstartdelegatecallbackqueue.md): The dispatch queue on which the session calls deferred start delegate methods.
- [setDeferredStartDelegate(\_:deferredStartDelegateCallbackQueue:)](setdeferredstartdelegate%28__deferredstartdelegatecallbackqueue_%29.md): Sets a delegate object for the session to call when performing deferred start.
- [AVCaptureSessionDeferredStartDelegate](../avcapturesessiondeferredstartdelegate.md): A protocol that defines the interface to respond to events about a capture session’s deferred start.

# deferredStartDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A delegate object that observes events about deferred start.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<AVCaptureSessionDeferredStartDelegate> deferredStartDelegate;
```

<a id="discussion"></a>

## Discussion

Call the [setDeferredStartDelegate:deferredStartDelegateCallbackQueue:](setdeferredstartdelegate%28__deferredstartdelegatecallbackqueue_%29.md) method to set the deferred start delegate for a session.

## See Also

### Configuring deferred start

- [manualDeferredStartSupported](ismanualdeferredstartsupported.md): A `BOOL` value that indicates whether the session supports manually running deferred start.
- [automaticallyRunsDeferredStart](automaticallyrunsdeferredstart.md): A Boolean value that indicates whether deferred start runs automatically.
- [runDeferredStartWhenNeeded](rundeferredstartwhenneeded%28%29.md): Tells the session to run deferred start when appropriate.
- [deferredStartDelegateCallbackQueue](deferredstartdelegatecallbackqueue.md): The dispatch queue on which the session calls deferred start delegate methods.
- [setDeferredStartDelegate:deferredStartDelegateCallbackQueue:](setdeferredstartdelegate%28__deferredstartdelegatecallbackqueue_%29.md): Sets a delegate object for the session to call when performing deferred start.
- [AVCaptureSessionDeferredStartDelegate](../avcapturesessiondeferredstartdelegate.md): A protocol that defines the interface to respond to events about a capture session’s deferred start.
