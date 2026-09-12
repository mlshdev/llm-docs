> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsmutableparagraphstyle/usesdefaulthyphenation](https://developer.apple.com/documentation/uikit/nsmutableparagraphstyle/usesdefaulthyphenation)

# usesDefaultHyphenation (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether the paragraph style uses the system hyphenation settings.

## Declaration

```swift
var usesDefaultHyphenation: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The system determines the exact hyphenation logic dynamically by examining the layout context such as language, platform, etc. When `true`, it affects the return value from [hyphenationFactor](hyphenationfactor.md) when the property is set to `0.0`.

## See Also

### Setting line-break information

- [lineBreakMode](linebreakmode.md): The mode for breaking lines in the paragraph.
- [lineBreakStrategy](linebreakstrategy.md): The strategies that the text system may use to break lines while laying out the paragraph.
- [hyphenationFactor](hyphenationfactor.md): The paragraph’s threshold for hyphenation.
- [tighteningFactorForTruncation](https://developer.apple.com/documentation/appkit/nsmutableparagraphstyle/tighteningfactorfortruncation): The threshold for using tightening as an alternative to truncation.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens intercharacter spacing before truncating text.

# usesDefaultHyphenation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether the paragraph style uses the system hyphenation settings.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL usesDefaultHyphenation;
```

<a id="discussion"></a>

## Discussion

The system determines the exact hyphenation logic dynamically by examining the layout context such as language, platform, etc. When `true`, it affects the return value from [hyphenationFactor](hyphenationfactor.md) when the property is set to `0.0`.

## See Also

### Setting line-break information

- [lineBreakMode](linebreakmode.md): The mode for breaking lines in the paragraph.
- [lineBreakStrategy](linebreakstrategy.md): The strategies that the text system may use to break lines while laying out the paragraph.
- [hyphenationFactor](hyphenationfactor.md): The paragraph’s threshold for hyphenation.
- [tighteningFactorForTruncation](https://developer.apple.com/documentation/appkit/nsmutableparagraphstyle/tighteningfactorfortruncation): The threshold for using tightening as an alternative to truncation.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens intercharacter spacing before truncating text.
