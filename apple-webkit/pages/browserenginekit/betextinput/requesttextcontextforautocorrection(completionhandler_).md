> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/requesttextcontextforautocorrection(completionhandler:)](https://developer.apple.com/documentation/browserenginekit/betextinput/requesttextcontextforautocorrection(completionhandler:))

# requestTextContextForAutocorrection(completionHandler:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A method the text system calls to get extra information for autocorrection suggestions.

## Declaration

```swift
func requestTextContextForAutocorrection(completionHandler: @escaping @Sendable (BETextDocumentContext) -> Void)
```

```swift
func requestTextContextForAutocorrection() async -> BETextDocumentContext
```

## Parameters

- `completionHandler`: A closure that you call to supply the context as a [BETextDocumentContext](../betextdocumentcontext.md).

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

<a id="discussion"></a>

## Discussion

The system calls this method to retrieve extra context for the currently selected text.

Construct a [BETextDocumentContext](../betextdocumentcontext.md) that contains complete sentences that also include the current selection. If the selection is at a sentence boundary, also include the preceding sentence.

## See Also

### Requesting context

- [requestDocumentContext(\_:completionHandler:)](requestdocumentcontext%28__completionhandler_%29.md): Gathers context for the system about the current document.
- [requestTextRects(for:withCompletionHandler:)](requesttextrects%28for_withcompletionhandler_%29.md): Gathers context for the presentation of a text-related user interface.

# requestTextContextForAutocorrectionWithCompletionHandler: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A method the text system calls to get extra information for autocorrection suggestions.

## Declaration

```objectivec
- (void) requestTextContextForAutocorrectionWithCompletionHandler:(void (^)(BETextDocumentContext *context)) completionHandler;
```

## Parameters

- `completionHandler`: A closure that you call to supply the context as a [BETextDocumentContext](../betextdocumentcontext.md).

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

<a id="discussion"></a>

## Discussion

The system calls this method to retrieve extra context for the currently selected text.

Construct a [BETextDocumentContext](../betextdocumentcontext.md) that contains complete sentences that also include the current selection. If the selection is at a sentence boundary, also include the preceding sentence.

## See Also

### Requesting context

- [requestDocumentContext:completionHandler:](requestdocumentcontext%28__completionhandler_%29.md): Gathers context for the system about the current document.
- [requestTextRectsForString:withCompletionHandler:](requesttextrects%28for_withcompletionhandler_%29.md): Gathers context for the presentation of a text-related user interface.
