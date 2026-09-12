> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/dialogpresenting/handlejavascriptconfirm(message:initiatedby:)-86j9x](https://developer.apple.com/documentation/webkit/webpage/dialogpresenting/handlejavascriptconfirm(message:initiatedby:)-86j9x)

# handleJavaScriptConfirm(message:initiatedBy:)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

By default, this method immediately returns with a result of `.cancel`.

## Declaration

```swift
@MainActor func handleJavaScriptConfirm(message: String, initiatedBy frame: WebPage.FrameInfo) async -> WebPage.JavaScriptConfirmResult
```
