> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/dialogpresenting/handlefileinputprompt(parameters:initiatedby:)](https://developer.apple.com/documentation/webkit/webpage/dialogpresenting/handlefileinputprompt(parameters:initiatedby:))

# handleFileInputPrompt(parameters:initiatedBy:)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Returns the result of handling a JavaScript request to open files.

## Declaration

```swift
@MainActor func handleFileInputPrompt(parameters: WKOpenPanelParameters, initiatedBy frame: WebPage.FrameInfo) async -> WebPage.FileInputPromptResult
```

## Parameters

- `parameters`: The options to use for the file dialog.
- `frame`: Information about the frame whose JavaScript process initiated this call.

<a id="return-value"></a>

## Return Value

The result of handling the invocation; if the result is affirmative, the response will include a set of files returned to JavaScript.

## Default Implementations

### WebPage.DialogPresenting Implementations

- [handleFileInputPrompt(parameters:initiatedBy:)](handlefileinputprompt%28parameters_initiatedby_%29-1t7xa.md): By default, this method immediately returns with a result of `.cancel`.
