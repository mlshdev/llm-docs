> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/requestuserattention(_:)](https://developer.apple.com/documentation/appkit/nsapplication/requestuserattention(_:))

# requestUserAttention(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Starts a user attention request.

## Declaration

```swift
func requestUserAttention(_ requestType: NSApplication.RequestUserAttentionType) -> Int
```

## Parameters

- `requestType`: The severity of the request. For a list of possible values, see [NSApplication.RequestUserAttentionType](requestuserattentiontype.md).

<a id="return-value"></a>

## Return Value

The identifier for the request. You can use this value to cancel the request later using the [cancelUserAttentionRequest(\_:)](canceluserattentionrequest%28__%29.md) method.

<a id="Discussion"></a>

## Discussion

Activating the app cancels the user attention request. A spoken notification will occur if spoken notifications are enabled. Sending [requestUserAttention(\_:)](requestuserattention%28__%29.md) to an app that is already active has no effect.

If the inactive app presents a modal panel, this method will be invoked with `NSCriticalRequest` automatically. The modal panel is not brought to the front for an inactive app.

## See Also

### Managing user attention requests

- [NSApplication.RequestUserAttentionType](requestuserattentiontype.md): These constants specify the level of severity of a user attention request and are used by [cancelUserAttentionRequest(\_:)](canceluserattentionrequest%28__%29.md) and [requestUserAttention(\_:)](requestuserattention%28__%29.md).
- [cancelUserAttentionRequest(\_:)](canceluserattentionrequest%28__%29.md): Cancels a previous user attention request.
- [reply(toOpenOrPrint:)](reply%28toopenorprint_%29.md): Handles errors that might occur when the user attempts to open or print files.
- [NSApplication.DelegateReply](delegatereply.md): Constants that indicate whether a copy or print operation was successful, was canceled, or failed.

# requestUserAttention: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Starts a user attention request.

## Declaration

```objectivec
- (NSInteger) requestUserAttention:(NSRequestUserAttentionType) requestType;
```

## Parameters

- `requestType`: The severity of the request. For a list of possible values, see [NSRequestUserAttentionType](requestuserattentiontype.md).

<a id="return-value"></a>

## Return Value

The identifier for the request. You can use this value to cancel the request later using the [cancelUserAttentionRequest:](canceluserattentionrequest%28__%29.md) method.

<a id="Discussion"></a>

## Discussion

Activating the app cancels the user attention request. A spoken notification will occur if spoken notifications are enabled. Sending [requestUserAttention:](requestuserattention%28__%29.md) to an app that is already active has no effect.

If the inactive app presents a modal panel, this method will be invoked with `NSCriticalRequest` automatically. The modal panel is not brought to the front for an inactive app.

## See Also

### Managing user attention requests

- [NSRequestUserAttentionType](requestuserattentiontype.md): These constants specify the level of severity of a user attention request and are used by [cancelUserAttentionRequest:](canceluserattentionrequest%28__%29.md) and [requestUserAttention:](requestuserattention%28__%29.md).
- [cancelUserAttentionRequest:](canceluserattentionrequest%28__%29.md): Cancels a previous user attention request.
- [replyToOpenOrPrint:](reply%28toopenorprint_%29.md): Handles errors that might occur when the user attempts to open or print files.
- [NSApplicationDelegateReply](delegatereply.md): Constants that indicate whether a copy or print operation was successful, was canceled, or failed.
