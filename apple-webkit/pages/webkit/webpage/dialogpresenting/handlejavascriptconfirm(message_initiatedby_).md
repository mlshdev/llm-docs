> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/dialogpresenting/handlejavascriptconfirm(message:initiatedby:)](https://developer.apple.com/documentation/webkit/webpage/dialogpresenting/handlejavascriptconfirm(message:initiatedby:))

# handleJavaScriptConfirm(message:initiatedBy:)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A JavaScript `confirm()` function has been invoked.

## Declaration

```swift
@MainActor func handleJavaScriptConfirm(message: String, initiatedBy frame: WebPage.FrameInfo) async -> WebPage.JavaScriptConfirmResult
```

## Parameters

- `message`: The message provided by JavaScript.
- `frame`: Information about the frame whose JavaScript process initiated this call.

<a id="return-value"></a>

## Return Value

The result of handling the invocation.

## Default Implementations

### WebPage.DialogPresenting Implementations

- [handleJavaScriptConfirm(message:initiatedBy:)](handlejavascriptconfirm%28message_initiatedby_%29-86j9x.md): By default, this method immediately returns with a result of `.cancel`.
