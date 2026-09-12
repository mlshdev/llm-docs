> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/requesttextrects(for:withcompletionhandler:)](https://developer.apple.com/documentation/browserenginekit/betextinput/requesttextrects(for:withcompletionhandler:))

# requestTextRects(for:withCompletionHandler:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Gathers context for the presentation of a text-related user interface.

## Declaration

```swift
func requestTextRects(for input: String, withCompletionHandler completionHandler: @escaping @Sendable ([UITextSelectionRect]) -> Void)
```

```swift
func requestTextRects(for input: String) async -> [UITextSelectionRect]
```

<a id="discussion"></a>

## Discussion

The system invokes your implementation of this method. The completion handler receives [UITextSelectionRect](https://developer.apple.com/documentation/uikit/uitextselectionrect) instances for the substring nearest to the caret that matches the given `input`.

## See Also

### Requesting context

- [requestDocumentContext(\_:completionHandler:)](requestdocumentcontext%28__completionhandler_%29.md): Gathers context for the system about the current document.
- [requestTextContextForAutocorrection(completionHandler:)](requesttextcontextforautocorrection%28completionhandler_%29.md): A method the text system calls to get extra information for autocorrection suggestions.

# requestTextRectsForString:withCompletionHandler: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Gathers context for the presentation of a text-related user interface.

## Declaration

```objectivec
- (void) requestTextRectsForString:(NSString *) input withCompletionHandler:(void (^)(NSArray<UITextSelectionRect *> *rects)) completionHandler;
```

<a id="discussion"></a>

## Discussion

The system invokes your implementation of this method. The completion handler receives [UITextSelectionRect](https://developer.apple.com/documentation/uikit/uitextselectionrect) instances for the substring nearest to the caret that matches the given `input`.

## See Also

### Requesting context

- [requestDocumentContext:completionHandler:](requestdocumentcontext%28__completionhandler_%29.md): Gathers context for the system about the current document.
- [requestTextContextForAutocorrectionWithCompletionHandler:](requesttextcontextforautocorrection%28completionhandler_%29.md): A method the text system calls to get extra information for autocorrection suggestions.
