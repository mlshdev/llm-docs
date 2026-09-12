> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/requestdocumentcontext(_:completionhandler:)](https://developer.apple.com/documentation/browserenginekit/betextinput/requestdocumentcontext(_:completionhandler:))

# requestDocumentContext(\_:completionHandler:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Gathers context for the system about the current document.

## Declaration

```swift
func requestDocumentContext(_ request: BETextDocumentRequest, completionHandler: @escaping @Sendable (BETextDocumentContext) -> Void)
```

```swift
func requestDocumentContext(_ request: BETextDocumentRequest) async -> BETextDocumentContext
```

## See Also

### Requesting context

- [requestTextContextForAutocorrection(completionHandler:)](requesttextcontextforautocorrection%28completionhandler_%29.md): A method the text system calls to get extra information for autocorrection suggestions.
- [requestTextRects(for:withCompletionHandler:)](requesttextrects%28for_withcompletionhandler_%29.md): Gathers context for the presentation of a text-related user interface.

# requestDocumentContext:completionHandler: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Gathers context for the system about the current document.

## Declaration

```objectivec
- (void) requestDocumentContext:(BETextDocumentRequest *) request completionHandler:(void (^)(BETextDocumentContext *)) completionHandler;
```

## See Also

### Requesting context

- [requestTextContextForAutocorrectionWithCompletionHandler:](requesttextcontextforautocorrection%28completionhandler_%29.md): A method the text system calls to get extra information for autocorrection suggestions.
- [requestTextRectsForString:withCompletionHandler:](requesttextrects%28for_withcompletionhandler_%29.md): Gathers context for the presentation of a text-related user interface.
