> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesessiondelegate/extendedruntimesessionwillexpire(_:)](https://developer.apple.com/documentation/watchkit/wkextendedruntimesessiondelegate/extendedruntimesessionwillexpire(_:))

# extendedRuntimeSessionWillExpire(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Indicates that the session is about to expire.

## Declaration

```swift
func extendedRuntimeSessionWillExpire(_ extendedRuntimeSession: WKExtendedRuntimeSession)
```

## Parameters

- `extendedRuntimeSession`: The session that is about to expire.

<a id="Discussion"></a>

## Discussion

The system only grants each session a limited amount of time to run. The system calls this method just before reaching that limit. Implement this method to finish any tasks and clean up before the session ends.

## See Also

### Monitoring State Changes

- [extendedRuntimeSessionDidStart(\_:)](extendedruntimesessiondidstart%28__%29.md): Indicates that the session has started running.
- [extendedRuntimeSession(\_:didInvalidateWith:error:)](extendedruntimesession%28__didinvalidatewith_error_%29.md): Indicates that the session has encountered an error or stopped running.
- [WKExtendedRuntimeSessionInvalidationReason](../wkextendedruntimesessioninvalidationreason.md): The reasons why a session can become invalid.

# extendedRuntimeSessionWillExpire: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Indicates that the session is about to expire.

## Declaration

```objectivec
- (void) extendedRuntimeSessionWillExpire:(WKExtendedRuntimeSession *) extendedRuntimeSession;
```

## Parameters

- `extendedRuntimeSession`: The session that is about to expire.

<a id="Discussion"></a>

## Discussion

The system only grants each session a limited amount of time to run. The system calls this method just before reaching that limit. Implement this method to finish any tasks and clean up before the session ends.

## See Also

### Monitoring State Changes

- [extendedRuntimeSessionDidStart:](extendedruntimesessiondidstart%28__%29.md): Indicates that the session has started running.
- [extendedRuntimeSession:didInvalidateWithReason:error:](extendedruntimesession%28__didinvalidatewith_error_%29.md): Indicates that the session has encountered an error or stopped running.
- [WKExtendedRuntimeSessionInvalidationReason](../wkextendedruntimesessioninvalidationreason.md): The reasons why a session can become invalid.
