> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsparagraphstyle/usesdefaulthyphenation](https://developer.apple.com/documentation/uikit/nsparagraphstyle/usesdefaulthyphenation)

# usesDefaultHyphenation (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether the paragraph style uses the system hyphenation settings.

## Declaration

```swift
var usesDefaultHyphenation: Bool { get }
```

## See Also

### Getting line-break information

- [lineBreakMode](linebreakmode.md): The mode for breaking lines in the paragraph that don’t fit within a container.
- [NSLineBreakMode](../nslinebreakmode.md): Constants that specify what happens when a line is too long for a container.
- [lineBreakStrategy](linebreakstrategy-swift.property.md): The strategy for breaking lines while laying out paragraphs.
- [NSParagraphStyle.LineBreakStrategy](linebreakstrategy-swift.struct.md): Constants that specify how the text system breaks lines while laying out paragraphs.
- [hyphenationFactor](hyphenationfactor.md): The paragraph’s threshold for hyphenation.
- [tighteningFactorForTruncation](https://developer.apple.com/documentation/appkit/nsparagraphstyle/tighteningfactorfortruncation): The threshold for using tightening as an alternative to truncation.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens character spacing before truncating text.

# usesDefaultHyphenation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether the paragraph style uses the system hyphenation settings.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL usesDefaultHyphenation;
```

## See Also

### Getting line-break information

- [lineBreakMode](linebreakmode.md): The mode for breaking lines in the paragraph that don’t fit within a container.
- [NSLineBreakMode](../nslinebreakmode.md): Constants that specify what happens when a line is too long for a container.
- [lineBreakStrategy](linebreakstrategy-swift.property.md): The strategy for breaking lines while laying out paragraphs.
- [NSLineBreakStrategy](linebreakstrategy-swift.struct.md): Constants that specify how the text system breaks lines while laying out paragraphs.
- [hyphenationFactor](hyphenationfactor.md): The paragraph’s threshold for hyphenation.
- [tighteningFactorForTruncation](https://developer.apple.com/documentation/appkit/nsparagraphstyle/tighteningfactorfortruncation): The threshold for using tightening as an alternative to truncation.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens character spacing before truncating text.
