> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/browserenginekit/beextendedtextinputtraits/issinglelinedocument

# isSingleLineDocument (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A Boolean value that represents whether the active web input field is a single line document.

## Declaration

```swift
optional var isSingleLineDocument: Bool { get }
```

## See Also

### Customizing text input behavior

- [isTypingAdaptationEnabled](istypingadaptationenabled.md): A Boolean value that controls whether the system learns new words and corrections.

# singleLineDocument (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A Boolean value that represents whether the active web input field is a single line document.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isSingleLineDocument) BOOL singleLineDocument;
```

## See Also

### Customizing text input behavior

- [typingAdaptationEnabled](istypingadaptationenabled.md): A Boolean value that controls whether the system learns new words and corrections.
