> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesessiondelegate/extendedruntimesessiondidstart(_:)](https://developer.apple.com/documentation/watchkit/wkextendedruntimesessiondelegate/extendedruntimesessiondidstart(_:))

# extendedRuntimeSessionDidStart(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Indicates that the session has started running.

## Declaration

```swift
func extendedRuntimeSessionDidStart(_ extendedRuntimeSession: WKExtendedRuntimeSession)
```

## Parameters

- `extendedRuntimeSession`: The session that started running.

<a id="Discussion"></a>

## Discussion

The system calls this method when your session starts running, in response to the [start()](../wkextendedruntimesession/start%28%29.md) method, or because a scheduled session’s start date has arrived.

## See Also

### Monitoring State Changes

- [extendedRuntimeSessionWillExpire(\_:)](extendedruntimesessionwillexpire%28__%29.md): Indicates that the session is about to expire.
- [extendedRuntimeSession(\_:didInvalidateWith:error:)](extendedruntimesession%28__didinvalidatewith_error_%29.md): Indicates that the session has encountered an error or stopped running.
- [WKExtendedRuntimeSessionInvalidationReason](../wkextendedruntimesessioninvalidationreason.md): The reasons why a session can become invalid.

# extendedRuntimeSessionDidStart: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Indicates that the session has started running.

## Declaration

```objectivec
- (void) extendedRuntimeSessionDidStart:(WKExtendedRuntimeSession *) extendedRuntimeSession;
```

## Parameters

- `extendedRuntimeSession`: The session that started running.

<a id="Discussion"></a>

## Discussion

The system calls this method when your session starts running, in response to the [start](../wkextendedruntimesession/start%28%29.md) method, or because a scheduled session’s start date has arrived.

## See Also

### Monitoring State Changes

- [extendedRuntimeSessionWillExpire:](extendedruntimesessionwillexpire%28__%29.md): Indicates that the session is about to expire.
- [extendedRuntimeSession:didInvalidateWithReason:error:](extendedruntimesession%28__didinvalidatewith_error_%29.md): Indicates that the session has encountered an error or stopped running.
- [WKExtendedRuntimeSessionInvalidationReason](../wkextendedruntimesessioninvalidationreason.md): The reasons why a session can become invalid.
