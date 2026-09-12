> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctframeprogression](https://developer.apple.com/documentation/coretext/ctframeprogression)

# CTFrameProgression (Swift)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that specify frame progression types.

## Declaration

```swift
enum CTFrameProgression
```

<a id="overview"></a>

## Overview

The lines of text within a frame may stack for either horizontal or vertical text. Values are enumerated for each stacking type supported by [CTFrameProgression](ctframeprogression.md). Frames with a progression type that specifies vertical text rotate lines 90 degrees counterclockwise during drawing.

## Topics

### Constants

- [CTFrameProgression.topToBottom](ctframeprogression/toptobottom.md): Lines stack top to bottom for horizontal text.
- [CTFrameProgression.rightToLeft](ctframeprogression/righttoleft.md): Lines stack right to left for vertical text.
- [CTFrameProgression.leftToRight](ctframeprogression/lefttoright.md): Lines stack left to right for vertical text.

### Initializers

- [init(rawValue:)](ctframeprogression/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [kCTFrameProgressionAttributeName](kctframeprogressionattributename.md): Specifies progression for a frame.
- [kCTFramePathFillRuleAttributeName](kctframepathfillruleattributename.md): The key used to specify the fill rule for a frame.
- [kCTFramePathWidthAttributeName](kctframepathwidthattributename.md): The key used to specify the frame width.
- [kCTFrameClippingPathsAttributeName](kctframeclippingpathsattributename.md): Specifies array of paths to clip frame.
- [kCTFramePathClippingPathAttributeName](kctframepathclippingpathattributename.md): Specifies clipping path.

# CTFrameProgression (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that specify frame progression types.

## Declaration

```objectivec
enum CTFrameProgression : uint32_t;
```

<a id="overview"></a>

## Overview

The lines of text within a frame may stack for either horizontal or vertical text. Values are enumerated for each stacking type supported by [CTFrameProgression](ctframeprogression.md). Frames with a progression type that specifies vertical text rotate lines 90 degrees counterclockwise during drawing.

## Topics

### Constants

- [kCTFrameProgressionTopToBottom](ctframeprogression/toptobottom.md): Lines stack top to bottom for horizontal text.
- [kCTFrameProgressionRightToLeft](ctframeprogression/righttoleft.md): Lines stack right to left for vertical text.
- [kCTFrameProgressionLeftToRight](ctframeprogression/lefttoright.md): Lines stack left to right for vertical text.

## See Also

### Constants

- [kCTFrameProgressionAttributeName](kctframeprogressionattributename.md): Specifies progression for a frame.
- [kCTFramePathFillRuleAttributeName](kctframepathfillruleattributename.md): The key used to specify the fill rule for a frame.
- [kCTFramePathWidthAttributeName](kctframepathwidthattributename.md): The key used to specify the frame width.
- [kCTFrameClippingPathsAttributeName](kctframeclippingpathsattributename.md): Specifies array of paths to clip frame.
- [kCTFramePathClippingPathAttributeName](kctframepathclippingpathattributename.md): Specifies clipping path.
