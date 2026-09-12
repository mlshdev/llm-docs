> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/berespondereditactions/translate(_:)](https://developer.apple.com/documentation/browserenginekit/berespondereditactions/translate(_:))

# translate(\_:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Presents a translation of the selected text.

## Declaration

```swift
optional func translate(_ sender: Any?)
```

## Parameters

- `sender`: The object calling this method.

<a id="discussion"></a>

## Discussion

To present the standard system UI for translating text, call [translate(text:from:)](../betextinteraction/translate%28text_from_%29.md) in your implementation of this method.

## See Also

### Translating and transliterating text

- [transliterateChinese(\_:)](transliteratechinese%28__%29.md): Converts the selected text between traditional and simplified Chinese.

# translate: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Presents a translation of the selected text.

## Declaration

```objectivec
- (void) translate:(id) sender;
```

## Parameters

- `sender`: The object calling this method.

<a id="discussion"></a>

## Discussion

To present the standard system UI for translating text, call [translateText:fromRect:](../betextinteraction/translate%28text_from_%29.md) in your implementation of this method.

## See Also

### Translating and transliterating text

- [transliterateChinese:](transliteratechinese%28__%29.md): Converts the selected text between traditional and simplified Chinese.
