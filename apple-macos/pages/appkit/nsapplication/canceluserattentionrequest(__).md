> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/canceluserattentionrequest(_:)](https://developer.apple.com/documentation/appkit/nsapplication/canceluserattentionrequest(_:))

# cancelUserAttentionRequest(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Cancels a previous user attention request.

## Declaration

```swift
func cancelUserAttentionRequest(_ request: Int)
```

## Parameters

- `request`: The request identifier returned by the [requestUserAttention(\_:)](requestuserattention%28__%29.md) method.

<a id="Discussion"></a>

## Discussion

A request is also canceled automatically by user activation of the app.

## See Also

### Managing user attention requests

- [requestUserAttention(\_:)](requestuserattention%28__%29.md): Starts a user attention request.
- [NSApplication.RequestUserAttentionType](requestuserattentiontype.md): These constants specify the level of severity of a user attention request and are used by [cancelUserAttentionRequest(\_:)](canceluserattentionrequest%28__%29.md) and [requestUserAttention(\_:)](requestuserattention%28__%29.md).
- [reply(toOpenOrPrint:)](reply%28toopenorprint_%29.md): Handles errors that might occur when the user attempts to open or print files.
- [NSApplication.DelegateReply](delegatereply.md): Constants that indicate whether a copy or print operation was successful, was canceled, or failed.

# cancelUserAttentionRequest: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Cancels a previous user attention request.

## Declaration

```objectivec
- (void) cancelUserAttentionRequest:(NSInteger) request;
```

## Parameters

- `request`: The request identifier returned by the [requestUserAttention:](requestuserattention%28__%29.md) method.

<a id="Discussion"></a>

## Discussion

A request is also canceled automatically by user activation of the app.

## See Also

### Managing user attention requests

- [requestUserAttention:](requestuserattention%28__%29.md): Starts a user attention request.
- [NSRequestUserAttentionType](requestuserattentiontype.md): These constants specify the level of severity of a user attention request and are used by [cancelUserAttentionRequest:](canceluserattentionrequest%28__%29.md) and [requestUserAttention:](requestuserattention%28__%29.md).
- [replyToOpenOrPrint:](reply%28toopenorprint_%29.md): Handles errors that might occur when the user attempts to open or print files.
- [NSApplicationDelegateReply](delegatereply.md): Constants that indicate whether a copy or print operation was successful, was canceled, or failed.
