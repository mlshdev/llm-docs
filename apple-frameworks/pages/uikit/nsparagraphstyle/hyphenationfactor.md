> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsparagraphstyle/hyphenationfactor](https://developer.apple.com/documentation/uikit/nsparagraphstyle/hyphenationfactor)

# hyphenationFactor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The paragraph’s threshold for hyphenation.

## Declaration

```swift
var hyphenationFactor: Float { get }
```

<a id="Discussion"></a>

## Discussion

The system attempts hyphenation when the ratio of the text width (as broken without hyphenation) to the width of the line fragment is less than the hyphenation factor. When the paragraph’s hyphenation factor is `0.0`, the system uses the layout manager’s hyphenation factor instead. The system disables hyphenation when both are `0.0`. This property detects the user-selected language by examining the first item in [preferredLanguages](../../foundation/nslocale/preferredlanguages.md).

## See Also

### Related Documentation

- [kCTLanguageAttributeName](../../coretext/kctlanguageattributename.md): The name of the text language.

### Getting line-break information

- [lineBreakMode](linebreakmode.md): The mode for breaking lines in the paragraph that don’t fit within a container.
- [NSLineBreakMode](../nslinebreakmode.md): Constants that specify what happens when a line is too long for a container.
- [lineBreakStrategy](linebreakstrategy-swift.property.md): The strategy for breaking lines while laying out paragraphs.
- [NSParagraphStyle.LineBreakStrategy](linebreakstrategy-swift.struct.md): Constants that specify how the text system breaks lines while laying out paragraphs.
- [usesDefaultHyphenation](usesdefaulthyphenation.md): A Boolean value that indicates whether the paragraph style uses the system hyphenation settings.
- [tighteningFactorForTruncation](https://developer.apple.com/documentation/appkit/nsparagraphstyle/tighteningfactorfortruncation): The threshold for using tightening as an alternative to truncation.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens character spacing before truncating text.

# hyphenationFactor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The paragraph’s threshold for hyphenation.

## Declaration

```objectivec
@property (nonatomic, readonly) float hyphenationFactor;
```

<a id="Discussion"></a>

## Discussion

The system attempts hyphenation when the ratio of the text width (as broken without hyphenation) to the width of the line fragment is less than the hyphenation factor. When the paragraph’s hyphenation factor is `0.0`, the system uses the layout manager’s hyphenation factor instead. The system disables hyphenation when both are `0.0`. This property detects the user-selected language by examining the first item in [preferredLanguages](../../foundation/nslocale/preferredlanguages.md).

## See Also

### Related Documentation

- [kCTLanguageAttributeName](../../coretext/kctlanguageattributename.md): The name of the text language.

### Getting line-break information

- [lineBreakMode](linebreakmode.md): The mode for breaking lines in the paragraph that don’t fit within a container.
- [NSLineBreakMode](../nslinebreakmode.md): Constants that specify what happens when a line is too long for a container.
- [lineBreakStrategy](linebreakstrategy-swift.property.md): The strategy for breaking lines while laying out paragraphs.
- [NSLineBreakStrategy](linebreakstrategy-swift.struct.md): Constants that specify how the text system breaks lines while laying out paragraphs.
- [usesDefaultHyphenation](usesdefaulthyphenation.md): A Boolean value that indicates whether the paragraph style uses the system hyphenation settings.
- [tighteningFactorForTruncation](https://developer.apple.com/documentation/appkit/nsparagraphstyle/tighteningfactorfortruncation): The threshold for using tightening as an alternative to truncation.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens character spacing before truncating text.
