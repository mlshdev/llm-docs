> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinteraction/showdictionary(fortextincontext:definingtextinrange:from:)](https://developer.apple.com/documentation/browserenginekit/betextinteraction/showdictionary(fortextincontext:definingtextinrange:from:))

# showDictionary(forTextInContext:definingTextInRange:from:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Presents a dictionary definition for the supplied text.

## Declaration

```swift
func showDictionary(forTextInContext textWithContext: String, definingTextInRange range: NSRange, from presentationRect: CGRect)
```

## Parameters

- `textWithContext`: The text to supply a definition for, embedded in the sentence in which it appears in the text view’s document.
- `range`: The range of the word to define in the context text.
- `presentationRect`: The location of the text in the view, which the system uses to position the definition UI.

## See Also

### Sharing and defining text

- [share(text:from:)](share%28text_from_%29.md): Presents standard UI for someone to share text from a browser text view.

# showDictionaryForTextInContext:definingTextInRange:fromRect: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Presents a dictionary definition for the supplied text.

## Declaration

```objectivec
- (void) showDictionaryForTextInContext:(NSString *) textWithContext definingTextInRange:(NSRange) range fromRect:(CGRect) presentationRect;
```

## Parameters

- `textWithContext`: The text to supply a definition for, embedded in the sentence in which it appears in the text view’s document.
- `range`: The range of the word to define in the context text.
- `presentationRect`: The location of the text in the view, which the system uses to position the definition UI.

## See Also

### Sharing and defining text

- [shareText:fromRect:](share%28text_from_%29.md): Presents standard UI for someone to share text from a browser text view.
