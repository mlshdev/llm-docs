> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinteraction/share(text:from:)](https://developer.apple.com/documentation/browserenginekit/betextinteraction/share(text:from:))

# share(text:from:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Presents standard UI for someone to share text from a browser text view.

## Declaration

```swift
func share(text: String, from presentationRect: CGRect)
```

## Parameters

- `text`: The text to share.
- `presentationRect`: The area in the view containing the text, which the system uses to locate the sharing UI.

## See Also

### Sharing and defining text

- [showDictionary(forTextInContext:definingTextInRange:from:)](showdictionary%28fortextincontext_definingtextinrange_from_%29.md): Presents a dictionary definition for the supplied text.

# shareText:fromRect: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Presents standard UI for someone to share text from a browser text view.

## Declaration

```objectivec
- (void) shareText:(NSString *) text fromRect:(CGRect) presentationRect;
```

## Parameters

- `text`: The text to share.
- `presentationRect`: The area in the view containing the text, which the system uses to locate the sharing UI.

## See Also

### Sharing and defining text

- [showDictionaryForTextInContext:definingTextInRange:fromRect:](showdictionary%28fortextincontext_definingtextinrange_from_%29.md): Presents a dictionary definition for the supplied text.
