> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmutableparagraphstyle/hyphenationfactor](https://developer.apple.com/documentation/appkit/nsmutableparagraphstyle/hyphenationfactor)

# hyphenationFactor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The paragraph’s threshold for hyphenation.

## Declaration

```swift
var hyphenationFactor: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Valid values lie between `0.0` and `1.0` inclusive. The default value is `0.0`. Hyphenation is attempted when the ratio of the text width (as broken without hyphenation) to the width of the line fragment is less than the hyphenation factor. When the paragraph’s hyphenation factor is `0.0`, the layout manager’s hyphenation factor is used instead. When both are `0.0`, hyphenation is disabled. This property detects the user-selected language by examining the first item in `preferredLanguages`.

## See Also

### Setting line-break information

- [lineBreakMode](linebreakmode.md): The mode for breaking lines in the paragraph.
- [lineBreakStrategy](linebreakstrategy.md): The strategies that the text system may use to break lines while laying out the paragraph.
- [usesDefaultHyphenation](usesdefaulthyphenation.md)
- [tighteningFactorForTruncation](tighteningfactorfortruncation.md): The threshold for using tightening as an alternative to truncation.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens intercharacter spacing before truncating text.

# hyphenationFactor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The paragraph’s threshold for hyphenation.

## Declaration

```objectivec
@property float hyphenationFactor;
```

<a id="Discussion"></a>

## Discussion

Valid values lie between `0.0` and `1.0` inclusive. The default value is `0.0`. Hyphenation is attempted when the ratio of the text width (as broken without hyphenation) to the width of the line fragment is less than the hyphenation factor. When the paragraph’s hyphenation factor is `0.0`, the layout manager’s hyphenation factor is used instead. When both are `0.0`, hyphenation is disabled. This property detects the user-selected language by examining the first item in `preferredLanguages`.

## See Also

### Setting line-break information

- [lineBreakMode](linebreakmode.md): The mode for breaking lines in the paragraph.
- [lineBreakStrategy](linebreakstrategy.md): The strategies that the text system may use to break lines while laying out the paragraph.
- [usesDefaultHyphenation](usesdefaulthyphenation.md)
- [tighteningFactorForTruncation](tighteningfactorfortruncation.md): The threshold for using tightening as an alternative to truncation.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens intercharacter spacing before truncating text.
