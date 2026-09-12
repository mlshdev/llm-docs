> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/dialogpresenting/handlejavascriptprompt(message:defaulttext:initiatedby:)](https://developer.apple.com/documentation/webkit/webpage/dialogpresenting/handlejavascriptprompt(message:defaulttext:initiatedby:))

# handleJavaScriptPrompt(message:defaultText:initiatedBy:)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A JavaScript `prompt()` function has been invoked.

## Declaration

```swift
@MainActor func handleJavaScriptPrompt(message: String, defaultText: String?, initiatedBy frame: WebPage.FrameInfo) async -> WebPage.JavaScriptPromptResult
```

## Parameters

- `message`: The message provided by JavaScript.
- `defaultText`: The initial text provided by JavaScript, intended to be displayed in some text entry field.
- `frame`: Information about the frame whose JavaScript process initiated this call.

<a id="return-value"></a>

## Return Value

The result of handling the invocation; if the result is affirmative, the response will include some text returned to JavaScript.

## Default Implementations

### WebPage.DialogPresenting Implementations

- [handleJavaScriptPrompt(message:defaultText:initiatedBy:)](handlejavascriptprompt%28message_defaulttext_initiatedby_%29-9aik4.md): By default, this method immediately returns with a result of `.cancel`.
