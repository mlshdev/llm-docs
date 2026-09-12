> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsregularexpression/matchingoptions](https://developer.apple.com/documentation/foundation/nsregularexpression/matchingoptions)

# NSRegularExpression.MatchingOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The matching options constants specify the reporting, completion and matching rules to the expression matching methods. These constants are used by all methods that search for, or replace values, using a regular expression.

## Declaration

```swift
struct MatchingOptions
```

## Topics

### Constants

- [reportProgress](matchingoptions/reportprogress.md): Call the Block periodically during long-running match operations. This option has no effect for methods other than [enumerateMatches(in:options:range:using:)](enumeratematches%28in_options_range_using_%29.md). See [enumerateMatches(in:options:range:using:)](enumeratematches%28in_options_range_using_%29.md) for a description of the constant in context.
- [reportCompletion](matchingoptions/reportcompletion.md): Call the Block once after the completion of any matching. This option has no effect for methods other than [enumerateMatches(in:options:range:using:)](enumeratematches%28in_options_range_using_%29.md). See [enumerateMatches(in:options:range:using:)](enumeratematches%28in_options_range_using_%29.md) for a description of the constant in context.
- [anchored](matchingoptions/anchored.md): Specifies that matches are limited to those at the start of the search range. See [enumerateMatches(in:options:range:using:)](enumeratematches%28in_options_range_using_%29.md) for a description of the constant in context.
- [withTransparentBounds](matchingoptions/withtransparentbounds.md): Specifies that matching may examine parts of the string beyond the bounds of the search range, for purposes such as word boundary detection, lookahead, etc. This constant has no effect if the search range contains the entire string. See [enumerateMatches(in:options:range:using:)](enumeratematches%28in_options_range_using_%29.md) for a description of the constant in context.
- [withoutAnchoringBounds](matchingoptions/withoutanchoringbounds.md): Specifies that `^` and `$` will not automatically match the beginning and end of the search range, but will still match the beginning and end of the entire string. This constant has no effect if the search range contains the entire string. See [enumerateMatches(in:options:range:using:)](enumeratematches%28in_options_range_using_%29.md) for a description of the constant in context.

### Initializers

- [init(rawValue:)](matchingoptions/init%28rawvalue_%29.md)

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

- [NSRegularExpression.Options](options-swift.struct.md): These constants define the regular expression options. These constants are used by the property [options](options-swift.property.md), [regularExpressionWithPattern:options:error:](regularexpressionwithpattern_options_error_.md), and [init(pattern:options:)](init%28pattern_options_%29.md).
- [NSRegularExpression.MatchingFlags](matchingflags.md): Set by the Block as the matching progresses, completes, or fails. Used by the method [enumerateMatches(in:options:range:using:)](enumeratematches%28in_options_range_using_%29.md).

# NSMatchingOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The matching options constants specify the reporting, completion and matching rules to the expression matching methods. These constants are used by all methods that search for, or replace values, using a regular expression.

## Declaration

```objectivec
enum NSMatchingOptions : NSUInteger;
```

## Topics

### Constants

- [NSMatchingReportProgress](matchingoptions/reportprogress.md): Call the Block periodically during long-running match operations. This option has no effect for methods other than [enumerateMatchesInString:options:range:usingBlock:](enumeratematches%28in_options_range_using_%29.md). See [enumerateMatchesInString:options:range:usingBlock:](enumeratematches%28in_options_range_using_%29.md) for a description of the constant in context.
- [NSMatchingReportCompletion](matchingoptions/reportcompletion.md): Call the Block once after the completion of any matching. This option has no effect for methods other than [enumerateMatchesInString:options:range:usingBlock:](enumeratematches%28in_options_range_using_%29.md). See [enumerateMatchesInString:options:range:usingBlock:](enumeratematches%28in_options_range_using_%29.md) for a description of the constant in context.
- [NSMatchingAnchored](matchingoptions/anchored.md): Specifies that matches are limited to those at the start of the search range. See [enumerateMatchesInString:options:range:usingBlock:](enumeratematches%28in_options_range_using_%29.md) for a description of the constant in context.
- [NSMatchingWithTransparentBounds](matchingoptions/withtransparentbounds.md): Specifies that matching may examine parts of the string beyond the bounds of the search range, for purposes such as word boundary detection, lookahead, etc. This constant has no effect if the search range contains the entire string. See [enumerateMatchesInString:options:range:usingBlock:](enumeratematches%28in_options_range_using_%29.md) for a description of the constant in context.
- [NSMatchingWithoutAnchoringBounds](matchingoptions/withoutanchoringbounds.md): Specifies that `^` and `$` will not automatically match the beginning and end of the search range, but will still match the beginning and end of the entire string. This constant has no effect if the search range contains the entire string. See [enumerateMatchesInString:options:range:usingBlock:](enumeratematches%28in_options_range_using_%29.md) for a description of the constant in context.

## See Also

### Constants

- [NSRegularExpressionOptions](options-swift.struct.md): These constants define the regular expression options. These constants are used by the property [options](options-swift.property.md), [regularExpressionWithPattern:options:error:](regularexpressionwithpattern_options_error_.md), and [initWithPattern:options:error:](init%28pattern_options_%29.md).
- [NSMatchingFlags](matchingflags.md): Set by the Block as the matching progresses, completes, or fails. Used by the method [enumerateMatchesInString:options:range:usingBlock:](enumeratematches%28in_options_range_using_%29.md).
