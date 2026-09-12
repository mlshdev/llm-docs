> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltokenunit](https://developer.apple.com/documentation/naturallanguage/nltokenunit)

# NLTokenUnit (Swift)

**Framework:** Natural Language  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Constants representing linguistic units.

## Declaration

```swift
enum NLTokenUnit
```

<a id="overview"></a>

## Overview

You use these constants with these methods:

- [availableTagSchemes(for:language:)](nltagger/availabletagschemes%28for_language_%29.md)
- [tagsInRange:unit:scheme:options:tokenRanges:](nltagger/tagsinrange_unit_scheme_options_tokenranges_.md)
- [enumerateTagsInRange:unit:scheme:options:usingBlock:](nltagger/enumeratetagsinrange_unit_scheme_options_usingblock_.md)

## Topics

### Constants

- [NLTokenUnit.word](nltokenunit/word.md): An individual word.
- [NLTokenUnit.sentence](nltokenunit/sentence.md): An individual sentence.
- [NLTokenUnit.paragraph](nltokenunit/paragraph.md): An individual paragraph.
- [NLTokenUnit.document](nltokenunit/document.md): The document in its entirety.

### Initializers

- [init(rawValue:)](nltokenunit/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining the range of a unit token

- [tokenRange(at:unit:)](nltagger/tokenrange%28at_unit_%29.md): Returns the range of the linguistic unit containing the specified character index.
- [tokenRange(for:unit:)](nltagger/tokenrange%28for_unit_%29.md): Finds the entire range of all tokens of the specified linguistic unit contained completely or partially within the specified range.

# NLTokenUnit (Objective-C)

**Framework:** Natural Language  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Constants representing linguistic units.

## Declaration

```objectivec
enum NLTokenUnit : NSInteger;
```

<a id="overview"></a>

## Overview

You use these constants with these methods:

- [availableTagSchemesForUnit:language:](nltagger/availabletagschemes%28for_language_%29.md)
- [tagsInRange:unit:scheme:options:tokenRanges:](nltagger/tagsinrange_unit_scheme_options_tokenranges_.md)
- [enumerateTagsInRange:unit:scheme:options:usingBlock:](nltagger/enumeratetagsinrange_unit_scheme_options_usingblock_.md)

## Topics

### Constants

- [NLTokenUnitWord](nltokenunit/word.md): An individual word.
- [NLTokenUnitSentence](nltokenunit/sentence.md): An individual sentence.
- [NLTokenUnitParagraph](nltokenunit/paragraph.md): An individual paragraph.
- [NLTokenUnitDocument](nltokenunit/document.md): The document in its entirety.

## See Also

### Determining the range of a unit token

- [tokenRangeAtIndex:unit:](nltagger/tokenrangeatindex_unit_.md): Returns the range of the linguistic unit containing the specified character index.
- [tokenRangeForRange:unit:](nltagger/tokenrangeforrange_unit_.md): Finds the entire range of all tokens of the specified linguistic unit contained completely or partially within the specified range.
