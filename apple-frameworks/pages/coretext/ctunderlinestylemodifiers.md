> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctunderlinestylemodifiers](https://developer.apple.com/documentation/coretext/ctunderlinestylemodifiers)

# CTUnderlineStyleModifiers (Swift)

**Framework:** Core Text  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Underline style modifiers.

## Declaration

```swift
struct CTUnderlineStyleModifiers
```

<a id="overview"></a>

## Overview

You can apply these underline style modifiers to the underline style ([CTUnderlineStyle](ctunderlinestyle.md)) that you set with the [kCTUnderlineStyleAttributeName](kctunderlinestyleattributename.md) attribute. These modifiers control the pattern of the underline.

## Topics

### Constants

- [patternSolid](ctunderlinestylemodifiers/patternsolid.md): A modifier that indicates to draw a solid underline.
- [patternDot](ctunderlinestylemodifiers/patterndot.md): A modifier that indicates to draw an underline using a pattern of dots.
- [patternDash](ctunderlinestylemodifiers/patterndash.md): A modifier that indicates to draw an underline using a pattern of dashes.
- [patternDashDot](ctunderlinestylemodifiers/patterndashdot.md): A modifier that indicates to draw an underline using a pattern of alternating dashes and dots.
- [patternDashDotDot](ctunderlinestylemodifiers/patterndashdotdot.md): A modifier that indicates to draw an underline using a pattern of a dash followed by two dots.

### Initializers

- [init(rawValue:)](ctunderlinestylemodifiers/init%28rawvalue_%29.md): Creates an underline style modifiers structure with the specified raw value.

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

### Constants

- [String Attribute Name Constants](string-attribute-name-constants.md): These constants represent string attribute names.
- [CTUnderlineStyle](ctunderlinestyle.md): Underline style specifiers.

# CTUnderlineStyleModifiers (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Underline style modifiers.

## Declaration

```objectivec
enum CTUnderlineStyleModifiers : int32_t;
```

<a id="overview"></a>

## Overview

You can apply these underline style modifiers to the underline style ([CTUnderlineStyle](ctunderlinestyle.md)) that you set with the [kCTUnderlineStyleAttributeName](kctunderlinestyleattributename.md) attribute. These modifiers control the pattern of the underline.

## Topics

### Constants

- [kCTUnderlinePatternSolid](ctunderlinestylemodifiers/patternsolid.md): A modifier that indicates to draw a solid underline.
- [kCTUnderlinePatternDot](ctunderlinestylemodifiers/patterndot.md): A modifier that indicates to draw an underline using a pattern of dots.
- [kCTUnderlinePatternDash](ctunderlinestylemodifiers/patterndash.md): A modifier that indicates to draw an underline using a pattern of dashes.
- [kCTUnderlinePatternDashDot](ctunderlinestylemodifiers/patterndashdot.md): A modifier that indicates to draw an underline using a pattern of alternating dashes and dots.
- [kCTUnderlinePatternDashDotDot](ctunderlinestylemodifiers/patterndashdotdot.md): A modifier that indicates to draw an underline using a pattern of a dash followed by two dots.

## See Also

### Constants

- [String Attribute Name Constants](string-attribute-name-constants.md): These constants represent string attribute names.
- [CTUnderlineStyle](ctunderlinestyle.md): Underline style specifiers.
