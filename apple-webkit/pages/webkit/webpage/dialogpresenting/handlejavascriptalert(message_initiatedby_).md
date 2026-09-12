> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/dialogpresenting/handlejavascriptalert(message:initiatedby:)](https://developer.apple.com/documentation/webkit/webpage/dialogpresenting/handlejavascriptalert(message:initiatedby:))

# handleJavaScriptAlert(message:initiatedBy:)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A JavaScript `alert()` function has been invoked.

## Declaration

```swift
@MainActor func handleJavaScriptAlert(message: String, initiatedBy frame: WebPage.FrameInfo) async
```

## Parameters

- `message`: The message provided by JavaScript.
- `frame`: Information about the frame whose JavaScript process initiated this call.

## Default Implementations

### WebPage.DialogPresenting Implementations

- [handleJavaScriptAlert(message:initiatedBy:)](handlejavascriptalert%28message_initiatedby_%29-32742.md): By default, this method immediately returns.
