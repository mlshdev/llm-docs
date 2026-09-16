> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/webpage/dialogpresenting/handlefileinputprompt(parameters:initiatedby:)-1t7xa

# handleFileInputPrompt(parameters:initiatedBy:)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

By default, this method immediately returns with a result of `.cancel`.

## Declaration

```swift
@MainActor func handleFileInputPrompt(parameters: WKOpenPanelParameters, initiatedBy frame: WebPage.FrameInfo) async -> WebPage.FileInputPromptResult
```
