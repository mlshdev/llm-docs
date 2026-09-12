> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsregularexpression/options-swift.struct](https://developer.apple.com/documentation/foundation/nsregularexpression/options-swift.struct)

# NSRegularExpression.Options (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

These constants define the regular expression options. These constants are used by the property [options](options-swift.property.md), [regularExpressionWithPattern:options:error:](regularexpressionwithpattern_options_error_.md), and [init(pattern:options:)](init%28pattern_options_%29.md).

## Declaration

```swift
struct Options
```

## Topics

### Constants

- [caseInsensitive](options-swift.struct/caseinsensitive.md): Match letters in the pattern independent of case.
- [allowCommentsAndWhitespace](options-swift.struct/allowcommentsandwhitespace.md): Ignore whitespace and #-prefixed comments in the pattern.
- [ignoreMetacharacters](options-swift.struct/ignoremetacharacters.md): Treat the entire pattern as a literal string.
- [dotMatchesLineSeparators](options-swift.struct/dotmatcheslineseparators.md): Allow `.` to match any character, including line separators.
- [anchorsMatchLines](options-swift.struct/anchorsmatchlines.md): Allow `^` and `$` to match the start and end of lines.
- [useUnixLineSeparators](options-swift.struct/useunixlineseparators.md): Treat only `\n` as a line separator (otherwise, all standard line separators are used).
- [useUnicodeWordBoundaries](options-swift.struct/useunicodewordboundaries.md): Use Unicode `TR#29` to specify word boundaries (otherwise, traditional regular expression word boundaries are used).

### Initializers

- [init(rawValue:)](options-swift.struct/init%28rawvalue_%29.md)

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

- [NSRegularExpression.MatchingFlags](matchingflags.md): Set by the Block as the matching progresses, completes, or fails. Used by the method [enumerateMatches(in:options:range:using:)](enumeratematches%28in_options_range_using_%29.md).
- [NSRegularExpression.MatchingOptions](matchingoptions.md): The matching options constants specify the reporting, completion and matching rules to the expression matching methods. These constants are used by all methods that search for, or replace values, using a regular expression.

# NSRegularExpressionOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

These constants define the regular expression options. These constants are used by the property [options](options-swift.property.md), [regularExpressionWithPattern:options:error:](regularexpressionwithpattern_options_error_.md), and [initWithPattern:options:error:](init%28pattern_options_%29.md).

## Declaration

```objectivec
enum NSRegularExpressionOptions : NSUInteger;
```

## Topics

### Constants

- [NSRegularExpressionCaseInsensitive](options-swift.struct/caseinsensitive.md): Match letters in the pattern independent of case.
- [NSRegularExpressionAllowCommentsAndWhitespace](options-swift.struct/allowcommentsandwhitespace.md): Ignore whitespace and #-prefixed comments in the pattern.
- [NSRegularExpressionIgnoreMetacharacters](options-swift.struct/ignoremetacharacters.md): Treat the entire pattern as a literal string.
- [NSRegularExpressionDotMatchesLineSeparators](options-swift.struct/dotmatcheslineseparators.md): Allow `.` to match any character, including line separators.
- [NSRegularExpressionAnchorsMatchLines](options-swift.struct/anchorsmatchlines.md): Allow `^` and `$` to match the start and end of lines.
- [NSRegularExpressionUseUnixLineSeparators](options-swift.struct/useunixlineseparators.md): Treat only `\n` as a line separator (otherwise, all standard line separators are used).
- [NSRegularExpressionUseUnicodeWordBoundaries](options-swift.struct/useunicodewordboundaries.md): Use Unicode `TR#29` to specify word boundaries (otherwise, traditional regular expression word boundaries are used).

## See Also

### Constants

- [NSMatchingFlags](matchingflags.md): Set by the Block as the matching progresses, completes, or fails. Used by the method [enumerateMatchesInString:options:range:usingBlock:](enumeratematches%28in_options_range_using_%29.md).
- [NSMatchingOptions](matchingoptions.md): The matching options constants specify the reporting, completion and matching rules to the expression matching methods. These constants are used by all methods that search for, or replace values, using a regular expression.
