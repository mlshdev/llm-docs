> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsunderlinestyle](https://developer.apple.com/documentation/uikit/nsunderlinestyle)

# NSUnderlineStyle (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants for the underline style and strikethrough style attribute keys.

## Declaration

```swift
struct NSUnderlineStyle
```

<a id="overview"></a>

## Overview

Use these constants to specify the [NSUnderlineStyleAttributeName](nsunderlinestyleattributename.md) and [NSStrikethroughStyleAttributeName](nsstrikethroughstyleattributename.md) attributes of an attributed string.

## Topics

### Getting the line style

- [single](nsunderlinestyle/single.md): Draw a single line.
- [thick](nsunderlinestyle/thick.md): Draw a thick line.
- [double](nsunderlinestyle/double.md): Draw a double line.
- [patternDot](nsunderlinestyle/patterndot.md): Draw a line of dots.
- [patternDash](nsunderlinestyle/patterndash.md): Draw a line of dashes.
- [patternDashDot](nsunderlinestyle/patterndashdot.md): Draw a line of alternating dashes and dots.
- [patternDashDotDot](nsunderlinestyle/patterndashdotdot.md): Draw a line of alternating dashes and two dots.
- [byWord](nsunderlinestyle/byword.md): Draw the line only beneath or through words, not whitespace.

### Initializers

- [init(\_:)](https://developer.apple.com/documentation/uikit/nsunderlinestyle/init%28_:%29): Creates a [NSUnderlineStyle](nsunderlinestyle.md) from `Text.LineStyle`.
- [init(rawValue:)](https://developer.apple.com/documentation/uikit/nsunderlinestyle/init%28rawvalue:%29): Creates an underline style with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Getting text content attributes

- [NSWritingDirectionFormatType](nswritingdirectionformattype.md): Constants for the writing direction attribute key.

# NSUnderlineStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants for the underline style and strikethrough style attribute keys.

## Declaration

```objectivec
enum NSUnderlineStyle : NSInteger;
```

<a id="overview"></a>

## Overview

Use these constants to specify the [NSUnderlineStyleAttributeName](nsunderlinestyleattributename.md) and [NSStrikethroughStyleAttributeName](nsstrikethroughstyleattributename.md) attributes of an attributed string.

## Topics

### Getting the line style

- [NSUnderlineStyleNone](nsunderlinestyle/nsunderlinestylenone.md): Don’t draw a line.
- [NSUnderlineStyleSingle](nsunderlinestyle/single.md): Draw a single line.
- [NSUnderlineStyleThick](nsunderlinestyle/thick.md): Draw a thick line.
- [NSUnderlineStyleDouble](nsunderlinestyle/double.md): Draw a double line.
- [NSUnderlineStylePatternSolid](nsunderlinestyle/nsunderlinestylepatternsolid.md): Draw a solid line.
- [NSUnderlineStylePatternDot](nsunderlinestyle/patterndot.md): Draw a line of dots.
- [NSUnderlineStylePatternDash](nsunderlinestyle/patterndash.md): Draw a line of dashes.
- [NSUnderlineStylePatternDashDot](nsunderlinestyle/patterndashdot.md): Draw a line of alternating dashes and dots.
- [NSUnderlineStylePatternDashDotDot](nsunderlinestyle/patterndashdotdot.md): Draw a line of alternating dashes and two dots.
- [NSUnderlineStyleByWord](nsunderlinestyle/byword.md): Draw the line only beneath or through words, not whitespace.

### Deprecated

- [NSUnderlinePatternSolid](nsunderlinepatternsolid.md): Deprecated. A solid line.
- [NSUnderlinePatternDot](nsunderlinepatterndot.md): Deprecated. A line of dots.
- [NSUnderlinePatternDash](nsunderlinepatterndash.md): Deprecated. A line of dashes.
- [NSUnderlinePatternDashDot](nsunderlinepatterndashdot.md): Deprecated. A line of alternating dashes and dots.
- [NSUnderlinePatternDashDotDot](nsunderlinepatterndashdotdot.md): Deprecated. A line of alternating dashes and two dots.
- [NSUnderlineByWord](nsunderlinebyword.md): Deprecated. A line only beneath or through words, not whitespace.

## See Also

### Getting text content attributes

- [TextKit string attribute keys](textkit-string-attribute-keys.md): UIKit-specific keys you use to apply attributes to ranges of characters in an attributed string.
- [NSTextHighlightStyle](nstexthighlightstyle.md): Constants that specify the type of highlight to apply to text.
- [NSTextHighlightColorScheme](nstexthighlightcolorscheme.md): Constants that specify the highlight color to use with the text.
- [NSTextEffectStyle](nstexteffectstyle.md): Constants for the type of effect to apply to the text.
- [NSWritingDirectionFormatType](nswritingdirectionformattype.md): Constants for the writing direction attribute key.
