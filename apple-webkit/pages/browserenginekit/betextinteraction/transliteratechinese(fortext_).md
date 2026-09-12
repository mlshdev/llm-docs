> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinteraction/transliteratechinese(fortext:)](https://developer.apple.com/documentation/browserenginekit/betextinteraction/transliteratechinese(fortext:))

# transliterateChinese(forText:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Converts text between traditional and simplified Chinese.

## Declaration

```swift
func transliterateChinese(forText text: String)
```

## Parameters

- `text`: The text to transliterate.

<a id="discussion"></a>

## Discussion

Call this method to invoke the system’s standard transliteration behavior, for example, when your browser text view receives [transliterateChinese(\_:)](../berespondereditactions/transliteratechinese%28__%29.md).

## See Also

### Translation and transliteration

- [translate(text:from:)](translate%28text_from_%29.md): Presents a translation of the text.

# transliterateChineseForText: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Converts text between traditional and simplified Chinese.

## Declaration

```objectivec
- (void) transliterateChineseForText:(NSString *) text;
```

## Parameters

- `text`: The text to transliterate.

<a id="discussion"></a>

## Discussion

Call this method to invoke the system’s standard transliteration behavior, for example, when your browser text view receives [transliterateChinese:](../berespondereditactions/transliteratechinese%28__%29.md).

## See Also

### Translation and transliteration

- [translateText:fromRect:](translate%28text_from_%29.md): Presents a translation of the text.
