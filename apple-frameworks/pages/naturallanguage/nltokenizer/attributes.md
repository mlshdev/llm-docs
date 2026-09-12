> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltokenizer/attributes](https://developer.apple.com/documentation/naturallanguage/nltokenizer/attributes)

# NLTokenizer.Attributes (Swift)

**Framework:** Natural Language  
**Kind:** Structure  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Hints about the contents of the string for the tokenizer.

## Declaration

```swift
struct Attributes
```

## Topics

### Contents

- [emoji](attributes/emoji.md): The string contains emoji.
- [numeric](attributes/numeric.md): The string contains numbers.
- [symbolic](attributes/symbolic.md): The string contains symbols.

### Initializers

- [init(rawValue:)](attributes/init%28rawvalue_%29.md): Creates an attribute with given value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Configuring a tokenizer

- [string](string.md): The text to be tokenized.
- [setLanguage(\_:)](setlanguage%28__%29.md): Sets the language of the text to be tokenized.
- [unit](unit.md): The linguistic unit that this tokenizer uses.

# NLTokenizerAttributes (Objective-C)

**Framework:** Natural Language  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Hints about the contents of the string for the tokenizer.

## Declaration

```objectivec
enum NLTokenizerAttributes : NSUInteger;
```

## Topics

### Contents

- [NLTokenizerAttributeEmoji](attributes/emoji.md): The string contains emoji.
- [NLTokenizerAttributeNumeric](attributes/numeric.md): The string contains numbers.
- [NLTokenizerAttributeSymbolic](attributes/symbolic.md): The string contains symbols.

## See Also

### Configuring a tokenizer

- [string](string.md): The text to be tokenized.
- [setLanguage:](setlanguage%28__%29.md): Sets the language of the text to be tokenized.
- [unit](unit.md): The linguistic unit that this tokenizer uses.
