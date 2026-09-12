> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beextendedtextinputtraits/istypingadaptationenabled](https://developer.apple.com/documentation/browserenginekit/beextendedtextinputtraits/istypingadaptationenabled)

# isTypingAdaptationEnabled (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A Boolean value that controls whether the system learns new words and corrections.

## Declaration

```swift
optional var isTypingAdaptationEnabled: Bool { get }
```

<a id="discussion"></a>

## Discussion

Setting this property to `false` prevents the system from learning of words or corrections by omitting their addition to the keyboard lexicon.

## See Also

### Customizing text input behavior

- [isSingleLineDocument](issinglelinedocument.md): A Boolean value that represents whether the active web input field is a single line document.

# typingAdaptationEnabled (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A Boolean value that controls whether the system learns new words and corrections.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isTypingAdaptationEnabled) BOOL typingAdaptationEnabled;
```

<a id="discussion"></a>

## Discussion

Setting this property to `false` prevents the system from learning of words or corrections by omitting their addition to the keyboard lexicon.

## See Also

### Customizing text input behavior

- [singleLineDocument](issinglelinedocument.md): A Boolean value that represents whether the active web input field is a single line document.
