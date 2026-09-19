> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitextinput/tokenizer

# tokenizer (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

An input tokenizer that provides information about the granularity of text units.

## Declaration

```swift
var tokenizer: any UITextInputTokenizer { get }
```

<a id="Discussion"></a>

## Discussion

Standard units of granularity include characters, words, lines, and paragraphs. In most cases, you may lazily create and assign an instance of a subclass of [UITextInputStringTokenizer](../uitextinputstringtokenizer.md) for this purpose. If you require different behavior than this system-provided tokenizer, you can create a custom tokenizer that adopts the [UITextInputTokenizer](../uitextinputtokenizer.md) protocol.

## See Also

### Tokenizing input text

- [UITextInputTokenizer](../uitextinputtokenizer.md): A tokenizer, which is an object that allows the text input system to evaluate text units of different granularities.

# tokenizer (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

An input tokenizer that provides information about the granularity of text units.

## Declaration

```objectivec
@property (nonatomic, readonly) id<UITextInputTokenizer> tokenizer;
```

<a id="Discussion"></a>

## Discussion

Standard units of granularity include characters, words, lines, and paragraphs. In most cases, you may lazily create and assign an instance of a subclass of [UITextInputStringTokenizer](../uitextinputstringtokenizer.md) for this purpose. If you require different behavior than this system-provided tokenizer, you can create a custom tokenizer that adopts the [UITextInputTokenizer](../uitextinputtokenizer.md) protocol.

## See Also

### Tokenizing input text

- [UITextInputTokenizer](../uitextinputtokenizer.md): A tokenizer, which is an object that allows the text input system to evaluate text units of different granularities.
