> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctunderlinestyle](https://developer.apple.com/documentation/coretext/ctunderlinestyle)

# CTUnderlineStyle (Swift)

**Framework:** Core Text  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Underline style specifiers.

## Declaration

```swift
struct CTUnderlineStyle
```

<a id="overview"></a>

## Overview

You can apply these underline style specifiers to the value that you set with the [kCTUnderlineStyleAttributeName](kctunderlinestyleattributename.md) attribute. These specifiers control the underline style Core Text uses when rendering the text to which the attribute applies.

## Topics

### Constants

- [single](ctunderlinestyle/single.md): A specifier that indicates to draw an underline consisting of a single line.
- [thick](ctunderlinestyle/thick.md): A specifier that indicates to draw an underline consisting of a thick line.
- [double](ctunderlinestyle/double.md): A specifier that indicates to draw an underline consisting of a double line.

### Initializers

- [init(rawValue:)](ctunderlinestyle/init%28rawvalue_%29.md): Creates an underline style structure with the specified raw value.

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
- [CTUnderlineStyleModifiers](ctunderlinestylemodifiers.md): Underline style modifiers.

# CTUnderlineStyle (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Underline style specifiers.

## Declaration

```objectivec
enum CTUnderlineStyle : int32_t;
```

<a id="overview"></a>

## Overview

You can apply these underline style specifiers to the value that you set with the [kCTUnderlineStyleAttributeName](kctunderlinestyleattributename.md) attribute. These specifiers control the underline style Core Text uses when rendering the text to which the attribute applies.

## Topics

### Constants

- [kCTUnderlineStyleNone](ctunderlinestyle/kctunderlinestylenone.md): A specifier that indicates not to draw an underline.
- [kCTUnderlineStyleSingle](ctunderlinestyle/single.md): A specifier that indicates to draw an underline consisting of a single line.
- [kCTUnderlineStyleThick](ctunderlinestyle/thick.md): A specifier that indicates to draw an underline consisting of a thick line.
- [kCTUnderlineStyleDouble](ctunderlinestyle/double.md): A specifier that indicates to draw an underline consisting of a double line.

## See Also

### Constants

- [String Attribute Name Constants](string-attribute-name-constants.md): These constants represent string attribute names.
- [CTUnderlineStyleModifiers](ctunderlinestylemodifiers.md): Underline style modifiers.
