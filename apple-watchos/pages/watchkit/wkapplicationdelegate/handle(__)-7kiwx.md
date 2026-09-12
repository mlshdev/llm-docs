> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkapplicationdelegate/handle(_:)-7kiwx](https://developer.apple.com/documentation/watchkit/wkapplicationdelegate/handle(_:)-7kiwx)

# handle(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+

Tells the delegate that the system launched your app to resume an extended runtime session.

## Declaration

```swift
optional func handle(_ extendedRuntimeSession: WKExtendedRuntimeSession)
```

## Parameters

- `extendedRuntimeSession`: The extended runtime session that the system is resuming.

<a id="Discussion"></a>

## Discussion

The system calls this method after launching your app in response to a scheduled extended runtime session. This occurs if your app terminates after scheduling a session but before that session’s start date. The system may also call this method if your app crashes during an extended runtime session, letting you resume that session.

When implementing this method, set the session’s delegate to resume the session. If you don’t set the session’s delegate, the system ends the session.

# handleExtendedRuntimeSession: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+

Tells the delegate that the system launched your app to resume an extended runtime session.

## Declaration

```objectivec
- (void) handleExtendedRuntimeSession:(WKExtendedRuntimeSession *) extendedRuntimeSession;
```

## Parameters

- `extendedRuntimeSession`: The extended runtime session that the system is resuming.

<a id="Discussion"></a>

## Discussion

The system calls this method after launching your app in response to a scheduled extended runtime session. This occurs if your app terminates after scheduling a session but before that session’s start date. The system may also call this method if your app crashes during an extended runtime session, letting you resume that session.

When implementing this method, set the session’s delegate to resume the session. If you don’t set the session’s delegate, the system ends the session.
