> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/dialogpresenting](https://developer.apple.com/documentation/webkit/webpage/dialogpresenting)

# WebPage.DialogPresenting

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Allows providing custom behavior to handle JavaScript actions and provide a response.

## Declaration

```swift
protocol DialogPresenting
```

<a id="overview"></a>

## Overview

Typically when handling these, some UI should be presented to the user for them to provide a response, which will then be communicated back to JavaScript.

When these methods are invoked, JavaScript is blocked until the async method returns.

## Topics

### Instance Methods

- [handleFileInputPrompt(parameters:initiatedBy:)](dialogpresenting/handlefileinputprompt%28parameters_initiatedby_%29.md): Returns the result of handling a JavaScript request to open files.
- [handleJavaScriptAlert(message:initiatedBy:)](dialogpresenting/handlejavascriptalert%28message_initiatedby_%29.md): A JavaScript `alert()` function has been invoked.
- [handleJavaScriptConfirm(message:initiatedBy:)](dialogpresenting/handlejavascriptconfirm%28message_initiatedby_%29.md): A JavaScript `confirm()` function has been invoked.
- [handleJavaScriptPrompt(message:defaultText:initiatedBy:)](dialogpresenting/handlejavascriptprompt%28message_defaulttext_initiatedby_%29.md): A JavaScript `prompt()` function has been invoked.

## See Also

### Customizing JavaScript dialogs

- [WebPage.FileInputPromptResult](fileinputpromptresult.md): The result of handling a JavaScript open invocation.
- [WebPage.JavaScriptConfirmResult](javascriptconfirmresult.md): The result of handling a JavaScript confirm invocation.
- [WebPage.JavaScriptPromptResult](javascriptpromptresult.md): The result of handling a JavaScript confirm invocation.
