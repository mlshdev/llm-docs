> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsstringdrawingoptions](https://developer.apple.com/documentation/uikit/nsstringdrawingoptions)

# NSStringDrawingOptions (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that specify the rendering options for drawing a string.

## Declaration

```swift
struct NSStringDrawingOptions
```

## Topics

### Constants

- [usesLineFragmentOrigin](nsstringdrawingoptions/useslinefragmentorigin.md): Uses the line fragment origin instead of the baseline origin.
- [usesFontLeading](nsstringdrawingoptions/usesfontleading.md): Uses the font leading for calculating line heights.
- [usesDeviceMetrics](nsstringdrawingoptions/usesdevicemetrics.md): Uses image glyph bounds instead of typographic bounds.
- [truncatesLastVisibleLine](nsstringdrawingoptions/truncateslastvisibleline.md): Truncates and adds the ellipsis character to the last visible line if the text doesn’t fit into the specified bounds.

### Initializer

- [init(rawValue:)](nsstringdrawingoptions/init%28rawvalue_%29.md): Creates a structure that specifies the rendering options for drawing a string.

### Type Properties

- [optionsResolvesNaturalAlignmentWithBaseWritingDirection](nsstringdrawingoptions/optionsresolvesnaturalalignmentwithbasewritingdirection.md): Specifies the behavior for resolving [NSTextAlignment.natural](nstextalignment/natural.md) to the visual alignment.

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

### Strings

- [NSStringDrawingContext](nsstringdrawingcontext.md): An object that manages metrics for drawing attributed strings.
- [UIBaselineAdjustment](uibaselineadjustment.md): Vertical adjustment options.

# NSStringDrawingOptions (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that specify the rendering options for drawing a string.

## Declaration

```objectivec
enum NSStringDrawingOptions : NSInteger;
```

## Topics

### Constants

- [NSStringDrawingUsesLineFragmentOrigin](nsstringdrawingoptions/useslinefragmentorigin.md): Uses the line fragment origin instead of the baseline origin.
- [NSStringDrawingUsesFontLeading](nsstringdrawingoptions/usesfontleading.md): Uses the font leading for calculating line heights.
- [NSStringDrawingUsesDeviceMetrics](nsstringdrawingoptions/usesdevicemetrics.md): Uses image glyph bounds instead of typographic bounds.
- [NSStringDrawingTruncatesLastVisibleLine](nsstringdrawingoptions/truncateslastvisibleline.md): Truncates and adds the ellipsis character to the last visible line if the text doesn’t fit into the specified bounds.

### Enumeration Cases

- [NSStringDrawingOptionsResolvesNaturalAlignmentWithBaseWritingDirection](nsstringdrawingoptions/optionsresolvesnaturalalignmentwithbasewritingdirection.md): Specifies the behavior for resolving [NSTextAlignmentNatural](nstextalignment/natural.md) to the visual alignment.

## See Also

### Strings

- [NSStringDrawingContext](nsstringdrawingcontext.md): An object that manages metrics for drawing attributed strings.
- [UIBaselineAdjustment](uibaselineadjustment.md): Vertical adjustment options.
- [UILineBreakMode](uilinebreakmode.md): Deprecated. Options for wrapping and truncating text.
- [UITextAlignment](uitextalignment.md): Deprecated. Options for aligning text horizontally.
- [UITextAttributeFont](uitextattributefont.md): Deprecated. The key to the font in a text attributes dictionary.
- [UITextAttributeTextColor](uitextattributetextcolor.md): Deprecated. The key to the text color in a text attributes dictionary.
- [UITextAttributeTextShadowColor](uitextattributetextshadowcolor.md): Deprecated. The key to the text shadow color in a text attributes dictionary.
- [UITextAttributeTextShadowOffset](uitextattributetextshadowoffset.md): Deprecated. The key to the offset for the text shadow in a text attributes dictionary.
