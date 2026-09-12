> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/replaceselectedtext(_:withtext:)](https://developer.apple.com/documentation/browserenginekit/betextinput/replaceselectedtext(_:withtext:))

# replaceSelectedText(\_:withText:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Replaces text with new text, either within the current selection or near the cursor.

## Declaration

```swift
func replaceSelectedText(_ text: String, withText replacementText: String)
```

## Parameters

- `text`: The text to find and replace.
- `replacementText`: The text to insert in place of the found text.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

<a id="discussion"></a>

## Discussion

This method’s behavior depends on the current selection state:

- If text is selected, this method replaces occurrences of `text` within the selection with `replacementText`.
- If the cursor is positioned without a selection, this method searches for `text` immediately before the cursor and replaces it with `replacementText`.
- If the cursor is at the start of an editable element, this method searches for `text` immediately after the cursor instead.

## See Also

### Inserting and replacing text

- [insert(\_:)](insert%28__%29-5iryn.md): Inserts a text suggestion in response to a suggestion selection.
- [insert(\_:)](insert%28__%29-6x7hd.md): Inserts the given text or one of the available alternatives.
- [replaceDictatedText(\_:withText:)](replacedictatedtext%28__withtext_%29.md): Replaces the specified text for the text of a dictation.
- [add(\_:)](add%28__%29.md): Adds text alternatives to the text input object for the current selection.

# replaceSelectedText:withText: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Replaces text with new text, either within the current selection or near the cursor.

## Declaration

```objectivec
- (void) replaceSelectedText:(NSString *) text withText:(NSString *) replacementText;
```

## Parameters

- `text`: The text to find and replace.
- `replacementText`: The text to insert in place of the found text.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

<a id="discussion"></a>

## Discussion

This method’s behavior depends on the current selection state:

- If text is selected, this method replaces occurrences of `text` within the selection with `replacementText`.
- If the cursor is positioned without a selection, this method searches for `text` immediately before the cursor and replaces it with `replacementText`.
- If the cursor is at the start of an editable element, this method searches for `text` immediately after the cursor instead.

## See Also

### Inserting and replacing text

- [insertTextSuggestion:](insert%28__%29-5iryn.md): Inserts a text suggestion in response to a suggestion selection.
- [insertTextAlternatives:](insert%28__%29-6x7hd.md): Inserts the given text or one of the available alternatives.
- [replaceDictatedText:withText:](replacedictatedtext%28__withtext_%29.md): Replaces the specified text for the text of a dictation.
- [addTextAlternatives:](add%28__%29.md): Adds text alternatives to the text input object for the current selection.
