> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/replacedictatedtext(_:withtext:)](https://developer.apple.com/documentation/browserenginekit/betextinput/replacedictatedtext(_:withtext:))

# replaceDictatedText(\_:withText:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Replaces the specified text for the text of a dictation.

## Declaration

```swift
func replaceDictatedText(_ oldText: String, withText newText: String)
```

## See Also

### Inserting and replacing text

- [insert(\_:)](insert%28__%29-5iryn.md): Inserts a text suggestion in response to a suggestion selection.
- [insert(\_:)](insert%28__%29-6x7hd.md): Inserts the given text or one of the available alternatives.
- [replaceSelectedText(\_:withText:)](replaceselectedtext%28__withtext_%29.md): Replaces text with new text, either within the current selection or near the cursor.
- [add(\_:)](add%28__%29.md): Adds text alternatives to the text input object for the current selection.

# replaceDictatedText:withText: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Replaces the specified text for the text of a dictation.

## Declaration

```objectivec
- (void) replaceDictatedText:(NSString *) oldText withText:(NSString *) newText;
```

## See Also

### Inserting and replacing text

- [insertTextSuggestion:](insert%28__%29-5iryn.md): Inserts a text suggestion in response to a suggestion selection.
- [insertTextAlternatives:](insert%28__%29-6x7hd.md): Inserts the given text or one of the available alternatives.
- [replaceSelectedText:withText:](replaceselectedtext%28__withtext_%29.md): Replaces text with new text, either within the current selection or near the cursor.
- [addTextAlternatives:](add%28__%29.md): Adds text alternatives to the text input object for the current selection.
