> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/enumerationoptions](https://developer.apple.com/documentation/foundation/nsstring/enumerationoptions)

# NSString.EnumerationOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants to specify kinds of substrings and styles of enumeration.

## Declaration

```swift
struct EnumerationOptions
```

<a id="overview"></a>

## Overview

These options are used with the [enumerateSubstrings(in:options:using:)](enumeratesubstrings%28in_options_using_%29.md) method. Pass in one `NSStringEnumerationBy...` option and combine with any of the remaining enumeration style constants using the C bitwise `OR` operator.

## Topics

### Constants

- [byLines](enumerationoptions/bylines.md)
- [byParagraphs](enumerationoptions/byparagraphs.md)
- [byComposedCharacterSequences](enumerationoptions/bycomposedcharactersequences.md)
- [byWords](enumerationoptions/bywords.md)
- [bySentences](enumerationoptions/bysentences.md)
- [reverse](enumerationoptions/reverse.md)
- [substringNotRequired](enumerationoptions/substringnotrequired.md)
- [localized](enumerationoptions/localized.md)

### Initializers

- [init(\_:)](enumerationoptions/init%28__%29.md)
- [init(rawValue:)](enumerationoptions/init%28rawvalue_%29.md)

### Instance Methods

- [contains(\_:)](enumerationoptions/contains%28__%29.md)
- [formIntersection(\_:)](enumerationoptions/formintersection%28__%29.md)
- [formSymmetricDifference(\_:)](enumerationoptions/formsymmetricdifference%28__%29.md)
- [formUnion(\_:)](enumerationoptions/formunion%28__%29.md)
- [insert(\_:)](enumerationoptions/insert%28__%29.md)
- [isSubset(of:)](enumerationoptions/issubset%28of_%29.md)
- [remove(\_:)](enumerationoptions/remove%28__%29.md)

### Type Properties

- [byCaretPositions](enumerationoptions/bycaretpositions.md)
- [byDeletionClusters](enumerationoptions/bydeletionclusters.md)

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

### Performing Linguistic Analysis

- [enumerateLinguisticTags(in:scheme:options:orthography:using:)](enumeratelinguistictags%28in_scheme_options_orthography_using_%29.md): Deprecated. Performs linguistic analysis on the specified string by enumerating the specific range of the string, providing the Block with the located tags.
- [linguisticTags(in:scheme:options:orthography:tokenRanges:)](linguistictags%28in_scheme_options_orthography_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags for the specified range and requested tags within the receiving string.

# NSStringEnumerationOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants to specify kinds of substrings and styles of enumeration.

## Declaration

```objectivec
enum NSStringEnumerationOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

These options are used with the [enumerateSubstringsInRange:options:usingBlock:](enumeratesubstrings%28in_options_using_%29.md) method. Pass in one `NSStringEnumerationBy...` option and combine with any of the remaining enumeration style constants using the C bitwise `OR` operator.

## Topics

### Constants

- [NSStringEnumerationByLines](enumerationoptions/bylines.md)
- [NSStringEnumerationByParagraphs](enumerationoptions/byparagraphs.md)
- [NSStringEnumerationByComposedCharacterSequences](enumerationoptions/bycomposedcharactersequences.md)
- [NSStringEnumerationByWords](enumerationoptions/bywords.md)
- [NSStringEnumerationBySentences](enumerationoptions/bysentences.md)
- [NSStringEnumerationReverse](enumerationoptions/reverse.md)
- [NSStringEnumerationSubstringNotRequired](enumerationoptions/substringnotrequired.md)
- [NSStringEnumerationLocalized](enumerationoptions/localized.md)

### Enumeration Cases

- [NSStringEnumerationByCaretPositions](enumerationoptions/bycaretpositions.md)
- [NSStringEnumerationByDeletionClusters](enumerationoptions/bydeletionclusters.md)

## See Also

### Performing Linguistic Analysis

- [enumerateLinguisticTagsInRange:scheme:options:orthography:usingBlock:](enumeratelinguistictags%28in_scheme_options_orthography_using_%29.md): Deprecated. Performs linguistic analysis on the specified string by enumerating the specific range of the string, providing the Block with the located tags.
- [linguisticTagsInRange:scheme:options:orthography:tokenRanges:](linguistictags%28in_scheme_options_orthography_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags for the specified range and requested tags within the receiving string.
