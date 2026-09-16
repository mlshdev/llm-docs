> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/webpage/dialogpresenting/handlejavascriptalert(message:initiatedby:)-32742

# handleJavaScriptAlert(message:initiatedBy:)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

By default, this method immediately returns.

## Declaration

```swift
@MainActor func handleJavaScriptAlert(message: String, initiatedBy frame: WebPage.FrameInfo) async
```
