> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesessiondeferredstartdelegate](https://developer.apple.com/documentation/avfoundation/avcapturesessiondeferredstartdelegate)

# AVCaptureSessionDeferredStartDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A protocol that defines the interface to respond to events about a capture session’s deferred start.

## Declaration

```swift
protocol AVCaptureSessionDeferredStartDelegate : NSObjectProtocol
```

## Topics

### Responding to deferred start events

- [sessionDidRunDeferredStart(\_:)](avcapturesessiondeferredstartdelegate/sessiondidrundeferredstart%28__%29.md): This method gets called by the session when deferred start has finished running.
- [sessionWillRunDeferredStart(\_:)](avcapturesessiondeferredstartdelegate/sessionwillrundeferredstart%28__%29.md): This method gets called by the session when deferred start is about to run.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Configuring deferred start

- [isManualDeferredStartSupported](avcapturesession/ismanualdeferredstartsupported.md): A `BOOL` value that indicates whether the session supports manually running deferred start.
- [automaticallyRunsDeferredStart](avcapturesession/automaticallyrunsdeferredstart.md): A Boolean value that indicates whether deferred start runs automatically.
- [runDeferredStartWhenNeeded()](avcapturesession/rundeferredstartwhenneeded%28%29.md): Tells the session to run deferred start when appropriate.
- [deferredStartDelegate](avcapturesession/deferredstartdelegate.md): A delegate object that observes events about deferred start.
- [deferredStartDelegateCallbackQueue](avcapturesession/deferredstartdelegatecallbackqueue.md): The dispatch queue on which the session calls deferred start delegate methods.
- [setDeferredStartDelegate(\_:deferredStartDelegateCallbackQueue:)](avcapturesession/setdeferredstartdelegate%28__deferredstartdelegatecallbackqueue_%29.md): Sets a delegate object for the session to call when performing deferred start.

# AVCaptureSessionDeferredStartDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A protocol that defines the interface to respond to events about a capture session’s deferred start.

## Declaration

```objectivec
@protocol AVCaptureSessionDeferredStartDelegate <NSObject>
```

## Topics

### Responding to deferred start events

- [sessionDidRunDeferredStart:](avcapturesessiondeferredstartdelegate/sessiondidrundeferredstart%28__%29.md): This method gets called by the session when deferred start has finished running.
- [sessionWillRunDeferredStart:](avcapturesessiondeferredstartdelegate/sessionwillrundeferredstart%28__%29.md): This method gets called by the session when deferred start is about to run.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Configuring deferred start

- [manualDeferredStartSupported](avcapturesession/ismanualdeferredstartsupported.md): A `BOOL` value that indicates whether the session supports manually running deferred start.
- [automaticallyRunsDeferredStart](avcapturesession/automaticallyrunsdeferredstart.md): A Boolean value that indicates whether deferred start runs automatically.
- [runDeferredStartWhenNeeded](avcapturesession/rundeferredstartwhenneeded%28%29.md): Tells the session to run deferred start when appropriate.
- [deferredStartDelegate](avcapturesession/deferredstartdelegate.md): A delegate object that observes events about deferred start.
- [deferredStartDelegateCallbackQueue](avcapturesession/deferredstartdelegatecallbackqueue.md): The dispatch queue on which the session calls deferred start delegate methods.
- [setDeferredStartDelegate:deferredStartDelegateCallbackQueue:](avcapturesession/setdeferredstartdelegate%28__deferredstartdelegatecallbackqueue_%29.md): Sets a delegate object for the session to call when performing deferred start.
