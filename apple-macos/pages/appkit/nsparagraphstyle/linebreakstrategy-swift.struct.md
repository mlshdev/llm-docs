> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsparagraphstyle/linebreakstrategy-swift.struct](https://developer.apple.com/documentation/appkit/nsparagraphstyle/linebreakstrategy-swift.struct)

# NSParagraphStyle.LineBreakStrategy (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.11+

Constants that specify how the text system breaks lines while laying out paragraphs.

## Declaration

```swift
struct LineBreakStrategy
```

## Topics

### Getting the line-break styles

- [pushOut](linebreakstrategy-swift.struct/pushout.md): The text system pushes out individual lines to avoid an orphan word on the last line of the paragraph.
- [hangulWordPriority](linebreakstrategy-swift.struct/hangulwordpriority.md): The text system prohibits breaking between Hangul characters.
- [standard](linebreakstrategy-swift.struct/standard.md): The text system uses the same configuration of line-break strategies that it uses for standard UI labels.

### Creating a line-break style

- [init(rawValue:)](linebreakstrategy-swift.struct/init%28rawvalue_%29.md): Creates a line-break strategy with the specified raw value.

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

### Getting line-break information

- [lineBreakMode](linebreakmode.md): The mode for breaking lines in the paragraph that don’t fit within a container.
- [NSLineBreakMode](../nslinebreakmode.md): Constants that specify what happens when a line is too long for a container.
- [lineBreakStrategy](linebreakstrategy-swift.property.md): The strategy for breaking lines while laying out paragraphs.
- [hyphenationFactor](hyphenationfactor.md): The paragraph’s threshold for hyphenation.
- [usesDefaultHyphenation](usesdefaulthyphenation.md): A Boolean value that indicates whether the paragraph style uses the system hyphenation settings.
- [tighteningFactorForTruncation](tighteningfactorfortruncation.md): The threshold for using tightening as an alternative to truncation.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens character spacing before truncating text.

# NSLineBreakStrategy (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.11+

Constants that specify how the text system breaks lines while laying out paragraphs.

## Declaration

```objectivec
enum NSLineBreakStrategy : NSUInteger;
```

## Topics

### Getting the line-break styles

- [NSLineBreakStrategyPushOut](linebreakstrategy-swift.struct/pushout.md): The text system pushes out individual lines to avoid an orphan word on the last line of the paragraph.
- [NSLineBreakStrategyHangulWordPriority](linebreakstrategy-swift.struct/hangulwordpriority.md): The text system prohibits breaking between Hangul characters.
- [NSLineBreakStrategyStandard](linebreakstrategy-swift.struct/standard.md): The text system uses the same configuration of line-break strategies that it uses for standard UI labels.
- [NSLineBreakStrategyNone](../nslinebreakstrategy/nslinebreakstrategynone.md): The text system doesn’t use any line-break strategies.

## See Also

### Getting line-break information

- [lineBreakMode](linebreakmode.md): The mode for breaking lines in the paragraph that don’t fit within a container.
- [NSLineBreakMode](../nslinebreakmode.md): Constants that specify what happens when a line is too long for a container.
- [lineBreakStrategy](linebreakstrategy-swift.property.md): The strategy for breaking lines while laying out paragraphs.
- [hyphenationFactor](hyphenationfactor.md): The paragraph’s threshold for hyphenation.
- [usesDefaultHyphenation](usesdefaulthyphenation.md): A Boolean value that indicates whether the paragraph style uses the system hyphenation settings.
- [tighteningFactorForTruncation](tighteningfactorfortruncation.md): The threshold for using tightening as an alternative to truncation.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens character spacing before truncating text.
