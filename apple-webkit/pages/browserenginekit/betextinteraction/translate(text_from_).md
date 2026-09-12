> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinteraction/translate(text:from:)](https://developer.apple.com/documentation/browserenginekit/betextinteraction/translate(text:from:))

# translate(text:from:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Presents a translation of the text.

## Declaration

```swift
func translate(text: String, from presentationRect: CGRect)
```

## Parameters

- `text`: The text to translate.
- `presentationRect`: The area in the text input view in which the text appears, which the system uses to locate the translation UI.

## See Also

### Translation and transliteration

- [transliterateChinese(forText:)](transliteratechinese%28fortext_%29.md): Converts text between traditional and simplified Chinese.

# translateText:fromRect: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Presents a translation of the text.

## Declaration

```objectivec
- (void) translateText:(NSString *) text fromRect:(CGRect) presentationRect;
```

## Parameters

- `text`: The text to translate.
- `presentationRect`: The area in the text input view in which the text appears, which the system uses to locate the translation UI.

## See Also

### Translation and transliteration

- [transliterateChineseForText:](transliteratechinese%28fortext_%29.md): Converts text between traditional and simplified Chinese.
