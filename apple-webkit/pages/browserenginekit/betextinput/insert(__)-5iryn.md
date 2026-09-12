> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/insert(_:)-5iryn](https://developer.apple.com/documentation/browserenginekit/betextinput/insert(_:)-5iryn)

# insert(\_:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Inserts a text suggestion in response to a suggestion selection.

## Declaration

```swift
func insert(_ textSuggestion: BETextSuggestion)
```

## Parameters

- `textSuggestion`: The suggestion to insert.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

<a id="discussion"></a>

## Discussion

The system calls this method to suggest text-view insertions, for example, for AutoFill credentials.

## See Also

### Inserting and replacing text

- [insert(\_:)](insert%28__%29-6x7hd.md): Inserts the given text or one of the available alternatives.
- [replaceSelectedText(\_:withText:)](replaceselectedtext%28__withtext_%29.md): Replaces text with new text, either within the current selection or near the cursor.
- [replaceDictatedText(\_:withText:)](replacedictatedtext%28__withtext_%29.md): Replaces the specified text for the text of a dictation.
- [add(\_:)](add%28__%29.md): Adds text alternatives to the text input object for the current selection.

# insertTextSuggestion: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Inserts a text suggestion in response to a suggestion selection.

## Declaration

```objectivec
- (void) insertTextSuggestion:(BETextSuggestion *) textSuggestion;
```

## Parameters

- `textSuggestion`: The suggestion to insert.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

<a id="discussion"></a>

## Discussion

The system calls this method to suggest text-view insertions, for example, for AutoFill credentials.

## See Also

### Inserting and replacing text

- [insertTextAlternatives:](insert%28__%29-6x7hd.md): Inserts the given text or one of the available alternatives.
- [replaceSelectedText:withText:](replaceselectedtext%28__withtext_%29.md): Replaces text with new text, either within the current selection or near the cursor.
- [replaceDictatedText:withText:](replacedictatedtext%28__withtext_%29.md): Replaces the specified text for the text of a dictation.
- [addTextAlternatives:](add%28__%29.md): Adds text alternatives to the text input object for the current selection.
