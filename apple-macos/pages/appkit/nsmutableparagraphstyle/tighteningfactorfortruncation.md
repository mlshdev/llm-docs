> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmutableparagraphstyle/tighteningfactorfortruncation](https://developer.apple.com/documentation/appkit/nsmutableparagraphstyle/tighteningfactorfortruncation)

# tighteningFactorForTruncation (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The threshold for using tightening as an alternative to truncation.

## Declaration

```swift
var tighteningFactorForTruncation: Float { get set }
```

<a id="Discussion"></a>

## Discussion

When the line break mode specifies truncation, the text system attempts to tighten inter character spacing as an alternative to truncation, provided that the ratio of the text width to the line fragment width does not exceed 1.0 + the value of [tighteningFactorForTruncation](../nsparagraphstyle/tighteningfactorfortruncation.md). Otherwise the text is truncated at a location determined by the line break mode. The default value is 0.05. This value can be a positive or negative value. Values less than or equal to 0.0 result in not tightening.

## See Also

### Setting line-break information

- [lineBreakMode](linebreakmode.md): The mode for breaking lines in the paragraph.
- [lineBreakStrategy](linebreakstrategy.md): The strategies that the text system may use to break lines while laying out the paragraph.
- [hyphenationFactor](hyphenationfactor.md): The paragraph’s threshold for hyphenation.
- [usesDefaultHyphenation](usesdefaulthyphenation.md)
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens intercharacter spacing before truncating text.

# tighteningFactorForTruncation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The threshold for using tightening as an alternative to truncation.

## Declaration

```objectivec
@property float tighteningFactorForTruncation;
```

<a id="Discussion"></a>

## Discussion

When the line break mode specifies truncation, the text system attempts to tighten inter character spacing as an alternative to truncation, provided that the ratio of the text width to the line fragment width does not exceed 1.0 + the value of [tighteningFactorForTruncation](../nsparagraphstyle/tighteningfactorfortruncation.md). Otherwise the text is truncated at a location determined by the line break mode. The default value is 0.05. This value can be a positive or negative value. Values less than or equal to 0.0 result in not tightening.

## See Also

### Setting line-break information

- [lineBreakMode](linebreakmode.md): The mode for breaking lines in the paragraph.
- [lineBreakStrategy](linebreakstrategy.md): The strategies that the text system may use to break lines while laying out the paragraph.
- [hyphenationFactor](hyphenationfactor.md): The paragraph’s threshold for hyphenation.
- [usesDefaultHyphenation](usesdefaulthyphenation.md)
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens intercharacter spacing before truncating text.
