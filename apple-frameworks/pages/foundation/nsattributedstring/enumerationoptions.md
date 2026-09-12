> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/enumerationoptions](https://developer.apple.com/documentation/foundation/nsattributedstring/enumerationoptions)

# NSAttributedString.EnumerationOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for enumerating attributes.

## Declaration

```swift
struct EnumerationOptions
```

<a id="overview"></a>

## Overview

These constants describe the options available to the [enumerateAttribute(\_:in:options:using:)](enumerateattribute%28__in_options_using_%29.md) and [enumerateAttributes(in:options:using:)](enumerateattributes%28in_options_using_%29.md) methods.

## Topics

### Getting the enumeration options

- [reverse](enumerationoptions/reverse.md): Causes the enumeration to occur in reverse.
- [longestEffectiveRangeNotRequired](enumerationoptions/longesteffectiverangenotrequired.md): If `NSAttributedStringEnumerationLongestEffectiveRangeNotRequired` option is supplied, then the longest effective range computation is not performed; the blocks may be invoked with consecutive attribute runs that have the same value.

### Creating an enumeration option

- [init(rawValue:)](enumerationoptions/init%28rawvalue_%29.md)
- [reverse](enumerationoptions/reverse.md): Causes the enumeration to occur in reverse.
- [longestEffectiveRangeNotRequired](enumerationoptions/longesteffectiverangenotrequired.md): If `NSAttributedStringEnumerationLongestEffectiveRangeNotRequired` option is supplied, then the longest effective range computation is not performed; the blocks may be invoked with consecutive attribute runs that have the same value.

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

### Getting attributes for a range of text

- [attributes(at:effectiveRange:)](attributes%28at_effectiverange_%29.md): Returns the attributes for the character at the specified index.
- [attributes(at:longestEffectiveRange:in:)](attributes%28at_longesteffectiverange_in_%29.md): Returns the attributes for the character at the specified index and, by reference, the range where the attributes apply.
- [attribute(\_:at:effectiveRange:)](attribute%28__at_effectiverange_%29.md): Returns the value for an attribute with the specified name of the character at the specified index and, by reference, the range where the attribute applies.
- [attribute(\_:at:longestEffectiveRange:in:)](attribute%28__at_longesteffectiverange_in_%29.md): Returns the value for the attribute with the specified name of the character at the specified index and, by reference, the range where the attribute applies.
- [enumerateAttribute(\_:in:options:using:)](enumerateattribute%28__in_options_using_%29.md): Executes the specified closure or block for each range of a particular attribute in the attributed string.
- [enumerateAttributes(in:options:using:)](enumerateattributes%28in_options_using_%29.md): Executes the specified closure or block for each range of attributes in the attributed string.

# NSAttributedStringEnumerationOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for enumerating attributes.

## Declaration

```objectivec
enum NSAttributedStringEnumerationOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

These constants describe the options available to the [enumerateAttribute:inRange:options:usingBlock:](enumerateattribute%28__in_options_using_%29.md) and [enumerateAttributesInRange:options:usingBlock:](enumerateattributes%28in_options_using_%29.md) methods.

## Topics

### Getting the enumeration options

- [NSAttributedStringEnumerationReverse](enumerationoptions/reverse.md): Causes the enumeration to occur in reverse.
- [NSAttributedStringEnumerationLongestEffectiveRangeNotRequired](enumerationoptions/longesteffectiverangenotrequired.md): If `NSAttributedStringEnumerationLongestEffectiveRangeNotRequired` option is supplied, then the longest effective range computation is not performed; the blocks may be invoked with consecutive attribute runs that have the same value.

### Creating an enumeration option

- [NSAttributedStringEnumerationReverse](enumerationoptions/reverse.md): Causes the enumeration to occur in reverse.
- [NSAttributedStringEnumerationLongestEffectiveRangeNotRequired](enumerationoptions/longesteffectiverangenotrequired.md): If `NSAttributedStringEnumerationLongestEffectiveRangeNotRequired` option is supplied, then the longest effective range computation is not performed; the blocks may be invoked with consecutive attribute runs that have the same value.

## See Also

### Getting attributes for a range of text

- [attributesAtIndex:effectiveRange:](attributes%28at_effectiverange_%29.md): Returns the attributes for the character at the specified index.
- [attributesAtIndex:longestEffectiveRange:inRange:](attributes%28at_longesteffectiverange_in_%29.md): Returns the attributes for the character at the specified index and, by reference, the range where the attributes apply.
- [attribute:atIndex:effectiveRange:](attribute%28__at_effectiverange_%29.md): Returns the value for an attribute with the specified name of the character at the specified index and, by reference, the range where the attribute applies.
- [attribute:atIndex:longestEffectiveRange:inRange:](attribute%28__at_longesteffectiverange_in_%29.md): Returns the value for the attribute with the specified name of the character at the specified index and, by reference, the range where the attribute applies.
- [enumerateAttribute:inRange:options:usingBlock:](enumerateattribute%28__in_options_using_%29.md): Executes the specified closure or block for each range of a particular attribute in the attributed string.
- [enumerateAttributesInRange:options:usingBlock:](enumerateattributes%28in_options_using_%29.md): Executes the specified closure or block for each range of attributes in the attributed string.
