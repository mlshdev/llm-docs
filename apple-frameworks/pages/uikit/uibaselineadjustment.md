> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibaselineadjustment](https://developer.apple.com/documentation/uikit/uibaselineadjustment)

# UIBaselineAdjustment (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Vertical adjustment options.

## Declaration

```swift
enum UIBaselineAdjustment
```

<a id="overview"></a>

## Overview

Baseline adjustment options determine how to adjust the position of text in cases where the text must be drawn using a different font size than the one originally specified. For example, with the [UIBaselineAdjustment.alignBaselines](uibaselineadjustment/alignbaselines.md) option, the position of the baseline remains fixed at its initial location while the text appears to move toward that baseline. Similarly, the [UIBaselineAdjustment.none](uibaselineadjustment/none.md) option makes it appear as if the text is moving upwards toward the top-left corner of the bounding box.

## Topics

### Constants

- [UIBaselineAdjustment.alignBaselines](uibaselineadjustment/alignbaselines.md): Adjust text relative to the position of its baseline.
- [UIBaselineAdjustment.alignCenters](uibaselineadjustment/aligncenters.md): Adjust text relative to the center of its bounding box.
- [UIBaselineAdjustment.none](uibaselineadjustment/none.md): Adjust text relative to the top-left corner of the bounding box.

### Initializers

- [init(rawValue:)](uibaselineadjustment/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Strings

- [NSStringDrawingContext](nsstringdrawingcontext.md): An object that manages metrics for drawing attributed strings.
- [NSStringDrawingOptions](nsstringdrawingoptions.md): Constants that specify the rendering options for drawing a string.

# UIBaselineAdjustment (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Vertical adjustment options.

## Declaration

```objectivec
enum UIBaselineAdjustment : NSInteger;
```

<a id="overview"></a>

## Overview

Baseline adjustment options determine how to adjust the position of text in cases where the text must be drawn using a different font size than the one originally specified. For example, with the [UIBaselineAdjustmentAlignBaselines](uibaselineadjustment/alignbaselines.md) option, the position of the baseline remains fixed at its initial location while the text appears to move toward that baseline. Similarly, the [UIBaselineAdjustmentNone](uibaselineadjustment/none.md) option makes it appear as if the text is moving upwards toward the top-left corner of the bounding box.

## Topics

### Constants

- [UIBaselineAdjustmentAlignBaselines](uibaselineadjustment/alignbaselines.md): Adjust text relative to the position of its baseline.
- [UIBaselineAdjustmentAlignCenters](uibaselineadjustment/aligncenters.md): Adjust text relative to the center of its bounding box.
- [UIBaselineAdjustmentNone](uibaselineadjustment/none.md): Adjust text relative to the top-left corner of the bounding box.

## See Also

### Strings

- [NSStringDrawingContext](nsstringdrawingcontext.md): An object that manages metrics for drawing attributed strings.
- [NSStringDrawingOptions](nsstringdrawingoptions.md): Constants that specify the rendering options for drawing a string.
- [UILineBreakMode](uilinebreakmode.md): Deprecated. Options for wrapping and truncating text.
- [UITextAlignment](uitextalignment.md): Deprecated. Options for aligning text horizontally.
- [UITextAttributeFont](uitextattributefont.md): Deprecated. The key to the font in a text attributes dictionary.
- [UITextAttributeTextColor](uitextattributetextcolor.md): Deprecated. The key to the text color in a text attributes dictionary.
- [UITextAttributeTextShadowColor](uitextattributetextshadowcolor.md): Deprecated. The key to the text shadow color in a text attributes dictionary.
- [UITextAttributeTextShadowOffset](uitextattributetextshadowoffset.md): Deprecated. The key to the offset for the text shadow in a text attributes dictionary.
