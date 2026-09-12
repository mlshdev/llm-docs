> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/reply(toopenorprint:)](https://developer.apple.com/documentation/appkit/nsapplication/reply(toopenorprint:))

# reply(toOpenOrPrint:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Handles errors that might occur when the user attempts to open or print files.

## Declaration

```swift
func reply(toOpenOrPrint reply: NSApplication.DelegateReply)
```

## Parameters

- `reply`: The error that occurred. For a list of possible values, see [NSApplication.DelegateReply](delegatereply.md).

<a id="Discussion"></a>

## Discussion

Delegates should invoke this method if an error is encountered in the [application(\_:openFiles:)](../nsapplicationdelegate/application%28__openfiles_%29.md) or [application(\_:printFiles:withSettings:showPrintPanels:)](../nsapplicationdelegate/application%28__printfiles_withsettings_showprintpanels_%29.md) delegate methods.

## See Also

### Managing user attention requests

- [requestUserAttention(\_:)](requestuserattention%28__%29.md): Starts a user attention request.
- [NSApplication.RequestUserAttentionType](requestuserattentiontype.md): These constants specify the level of severity of a user attention request and are used by [cancelUserAttentionRequest(\_:)](canceluserattentionrequest%28__%29.md) and [requestUserAttention(\_:)](requestuserattention%28__%29.md).
- [cancelUserAttentionRequest(\_:)](canceluserattentionrequest%28__%29.md): Cancels a previous user attention request.
- [NSApplication.DelegateReply](delegatereply.md): Constants that indicate whether a copy or print operation was successful, was canceled, or failed.

# replyToOpenOrPrint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Handles errors that might occur when the user attempts to open or print files.

## Declaration

```objectivec
- (void) replyToOpenOrPrint:(NSApplicationDelegateReply) reply;
```

## Parameters

- `reply`: The error that occurred. For a list of possible values, see [NSApplicationDelegateReply](delegatereply.md).

<a id="Discussion"></a>

## Discussion

Delegates should invoke this method if an error is encountered in the [application:openFiles:](../nsapplicationdelegate/application%28__openfiles_%29.md) or [application:printFiles:withSettings:showPrintPanels:](../nsapplicationdelegate/application%28__printfiles_withsettings_showprintpanels_%29.md) delegate methods.

## See Also

### Managing user attention requests

- [requestUserAttention:](requestuserattention%28__%29.md): Starts a user attention request.
- [NSRequestUserAttentionType](requestuserattentiontype.md): These constants specify the level of severity of a user attention request and are used by [cancelUserAttentionRequest:](canceluserattentionrequest%28__%29.md) and [requestUserAttention:](requestuserattention%28__%29.md).
- [cancelUserAttentionRequest:](canceluserattentionrequest%28__%29.md): Cancels a previous user attention request.
- [NSApplicationDelegateReply](delegatereply.md): Constants that indicate whether a copy or print operation was successful, was canceled, or failed.
