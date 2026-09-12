> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesessiondelegate/extendedruntimesession(_:didinvalidatewith:error:)](https://developer.apple.com/documentation/watchkit/wkextendedruntimesessiondelegate/extendedruntimesession(_:didinvalidatewith:error:))

# extendedRuntimeSession(\_:didInvalidateWith:error:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Indicates that the session has encountered an error or stopped running.

## Declaration

```swift
func extendedRuntimeSession(_ extendedRuntimeSession: WKExtendedRuntimeSession, didInvalidateWith reason: WKExtendedRuntimeSessionInvalidationReason, error: (any Error)?)
```

## Parameters

- `extendedRuntimeSession`: The session that became invalid.
- `reason`: The reason the session became invalid.
- `error`: If the `reason` parameter is [WKExtendedRuntimeSessionInvalidationReason.error](../wkextendedruntimesessioninvalidationreason/error.md), then this parameter contains additional information about the error. Otherwise it is set to `nil`.

<a id="Discussion"></a>

## Discussion

The system calls this method both when a session fails to start and when a session stops running. Use the invalidation reason to determine why the session became invalid.

> **Important**

>  If your app terminates immediately after the system invalidates the session, you may not receive this delegate call until the user launches your app again. In that case, the system calls your extension delegate’s [handle(\_:)](../wkextensiondelegate/handle%28__%29-4qxgv.md) method to resume the session. Then, after you assign the session delegate, the system finally makes this delegate call.

## See Also

### Monitoring State Changes

- [extendedRuntimeSessionDidStart(\_:)](extendedruntimesessiondidstart%28__%29.md): Indicates that the session has started running.
- [extendedRuntimeSessionWillExpire(\_:)](extendedruntimesessionwillexpire%28__%29.md): Indicates that the session is about to expire.
- [WKExtendedRuntimeSessionInvalidationReason](../wkextendedruntimesessioninvalidationreason.md): The reasons why a session can become invalid.

# extendedRuntimeSession:didInvalidateWithReason:error: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Indicates that the session has encountered an error or stopped running.

## Declaration

```objectivec
- (void) extendedRuntimeSession:(WKExtendedRuntimeSession *) extendedRuntimeSession didInvalidateWithReason:(WKExtendedRuntimeSessionInvalidationReason) reason error:(NSError *) error;
```

## Parameters

- `extendedRuntimeSession`: The session that became invalid.
- `reason`: The reason the session became invalid.
- `error`: If the `reason` parameter is [WKExtendedRuntimeSessionInvalidationReasonError](../wkextendedruntimesessioninvalidationreason/error.md), then this parameter contains additional information about the error. Otherwise it is set to `nil`.

<a id="Discussion"></a>

## Discussion

The system calls this method both when a session fails to start and when a session stops running. Use the invalidation reason to determine why the session became invalid.

> **Important**

>  If your app terminates immediately after the system invalidates the session, you may not receive this delegate call until the user launches your app again. In that case, the system calls your extension delegate’s [handleExtendedRuntimeSession:](../wkextensiondelegate/handle%28__%29-4qxgv.md) method to resume the session. Then, after you assign the session delegate, the system finally makes this delegate call.

## See Also

### Monitoring State Changes

- [extendedRuntimeSessionDidStart:](extendedruntimesessiondidstart%28__%29.md): Indicates that the session has started running.
- [extendedRuntimeSessionWillExpire:](extendedruntimesessionwillexpire%28__%29.md): Indicates that the session is about to expire.
- [WKExtendedRuntimeSessionInvalidationReason](../wkextendedruntimesessioninvalidationreason.md): The reasons why a session can become invalid.
