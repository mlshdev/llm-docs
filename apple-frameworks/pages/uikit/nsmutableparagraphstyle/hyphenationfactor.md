> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsmutableparagraphstyle/hyphenationfactor](https://developer.apple.com/documentation/uikit/nsmutableparagraphstyle/hyphenationfactor)

# hyphenationFactor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The paragraph’s threshold for hyphenation.

## Declaration

```swift
var hyphenationFactor: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Valid values lie between `0.0` and `1.0` inclusive. The default value is `0.0`. Hyphenation is attempted when the ratio of the text width (as broken without hyphenation) to the width of the line fragment is less than the hyphenation factor. When the paragraph’s hyphenation factor is `0.0`, the layout manager’s hyphenation factor is used instead. When both are `0.0`, hyphenation is disabled. This property detects the user-selected language by examining the first item in `preferredLanguages`.

## See Also

### Related Documentation

- [kCTLanguageAttributeName](../../coretext/kctlanguageattributename.md): The name of the text language.

### Setting line-break information

- [lineBreakMode](linebreakmode.md): The mode for breaking lines in the paragraph.
- [lineBreakStrategy](linebreakstrategy.md): The strategies that the text system may use to break lines while laying out the paragraph.
- [usesDefaultHyphenation](usesdefaulthyphenation.md): A Boolean value that indicates whether the paragraph style uses the system hyphenation settings.
- [tighteningFactorForTruncation](https://developer.apple.com/documentation/appkit/nsmutableparagraphstyle/tighteningfactorfortruncation): The threshold for using tightening as an alternative to truncation.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens intercharacter spacing before truncating text.

# hyphenationFactor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The paragraph’s threshold for hyphenation.

## Declaration

```objectivec
@property (nonatomic) float hyphenationFactor;
```

<a id="Discussion"></a>

## Discussion

Valid values lie between `0.0` and `1.0` inclusive. The default value is `0.0`. Hyphenation is attempted when the ratio of the text width (as broken without hyphenation) to the width of the line fragment is less than the hyphenation factor. When the paragraph’s hyphenation factor is `0.0`, the layout manager’s hyphenation factor is used instead. When both are `0.0`, hyphenation is disabled. This property detects the user-selected language by examining the first item in `preferredLanguages`.

## See Also

### Related Documentation

- [kCTLanguageAttributeName](../../coretext/kctlanguageattributename.md): The name of the text language.

### Setting line-break information

- [lineBreakMode](linebreakmode.md): The mode for breaking lines in the paragraph.
- [lineBreakStrategy](linebreakstrategy.md): The strategies that the text system may use to break lines while laying out the paragraph.
- [usesDefaultHyphenation](usesdefaulthyphenation.md): A Boolean value that indicates whether the paragraph style uses the system hyphenation settings.
- [tighteningFactorForTruncation](https://developer.apple.com/documentation/appkit/nsmutableparagraphstyle/tighteningfactorfortruncation): The threshold for using tightening as an alternative to truncation.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens intercharacter spacing before truncating text.
