> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/insert(_:)-6x7hd](https://developer.apple.com/documentation/browserenginekit/betextinput/insert(_:)-6x7hd)

# insert(\_:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Inserts the given text or one of the available alternatives.

## Declaration

```swift
func insert(_ alternatives: BETextAlternatives)
```

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

## See Also

### Inserting and replacing text

- [insert(\_:)](insert%28__%29-5iryn.md): Inserts a text suggestion in response to a suggestion selection.
- [replaceSelectedText(\_:withText:)](replaceselectedtext%28__withtext_%29.md): Replaces text with new text, either within the current selection or near the cursor.
- [replaceDictatedText(\_:withText:)](replacedictatedtext%28__withtext_%29.md): Replaces the specified text for the text of a dictation.
- [add(\_:)](add%28__%29.md): Adds text alternatives to the text input object for the current selection.

# insertTextAlternatives: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Inserts the given text or one of the available alternatives.

## Declaration

```objectivec
- (void) insertTextAlternatives:(BETextAlternatives *) alternatives;
```

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

## See Also

### Inserting and replacing text

- [insertTextSuggestion:](insert%28__%29-5iryn.md): Inserts a text suggestion in response to a suggestion selection.
- [replaceSelectedText:withText:](replaceselectedtext%28__withtext_%29.md): Replaces text with new text, either within the current selection or near the cursor.
- [replaceDictatedText:withText:](replacedictatedtext%28__withtext_%29.md): Replaces the specified text for the text of a dictation.
- [addTextAlternatives:](add%28__%29.md): Adds text alternatives to the text input object for the current selection.
