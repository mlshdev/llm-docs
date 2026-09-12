> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/add(_:)](https://developer.apple.com/documentation/browserenginekit/betextinput/add(_:))

# add(\_:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Adds text alternatives to the text input object for the current selection.

## Declaration

```swift
func add(_ alternatives: BETextAlternatives)
```

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

## See Also

### Inserting and replacing text

- [insert(\_:)](insert%28__%29-5iryn.md): Inserts a text suggestion in response to a suggestion selection.
- [insert(\_:)](insert%28__%29-6x7hd.md): Inserts the given text or one of the available alternatives.
- [replaceSelectedText(\_:withText:)](replaceselectedtext%28__withtext_%29.md): Replaces text with new text, either within the current selection or near the cursor.
- [replaceDictatedText(\_:withText:)](replacedictatedtext%28__withtext_%29.md): Replaces the specified text for the text of a dictation.

# addTextAlternatives: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Adds text alternatives to the text input object for the current selection.

## Declaration

```objectivec
- (void) addTextAlternatives:(BETextAlternatives *) alternatives;
```

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

## See Also

### Inserting and replacing text

- [insertTextSuggestion:](insert%28__%29-5iryn.md): Inserts a text suggestion in response to a suggestion selection.
- [insertTextAlternatives:](insert%28__%29-6x7hd.md): Inserts the given text or one of the available alternatives.
- [replaceSelectedText:withText:](replaceselectedtext%28__withtext_%29.md): Replaces text with new text, either within the current selection or near the cursor.
- [replaceDictatedText:withText:](replacedictatedtext%28__withtext_%29.md): Replaces the specified text for the text of a dictation.
