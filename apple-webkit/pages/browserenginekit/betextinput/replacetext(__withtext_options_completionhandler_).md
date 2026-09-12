> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/replacetext(_:withtext:options:completionhandler:)](https://developer.apple.com/documentation/browserenginekit/betextinput/replacetext(_:withtext:options:completionhandler:))

# replaceText(\_:withText:options:completionHandler:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Replace the specified text preceding the current selection.

## Declaration

```swift
func replaceText(_ originalText: String, withText replacementText: String, options: BETextReplacementOptions = [], completionHandler: @escaping @Sendable ([UITextSelectionRect]) -> Void)
```

```swift
func replaceText(_ originalText: String, withText replacementText: String, options: BETextReplacementOptions = []) async -> [UITextSelectionRect]
```

<a id="discussion"></a>

## Discussion

Completion handler should be invoked with the rects representing the replacementText.  If the replaceText could not be completed succesfully, such as when the originalText no longer matches the current text, then the completion handler should be invoked with an empty array.

# replaceText:withText:options:completionHandler: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Replace the specified text preceding the current selection.

## Declaration

```objectivec
- (void) replaceText:(NSString *) originalText withText:(NSString *) replacementText options:(BETextReplacementOptions) options completionHandler:(void (^)(NSArray<UITextSelectionRect *> *rects)) completionHandler;
```

<a id="discussion"></a>

## Discussion

Completion handler should be invoked with the rects representing the replacementText.  If the replaceText could not be completed succesfully, such as when the originalText no longer matches the current text, then the completion handler should be invoked with an empty array.
