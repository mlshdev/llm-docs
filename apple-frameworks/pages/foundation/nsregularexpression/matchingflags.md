> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsregularexpression/matchingflags](https://developer.apple.com/documentation/foundation/nsregularexpression/matchingflags)

# NSRegularExpression.MatchingFlags (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Set by the Block as the matching progresses, completes, or fails. Used by the method [enumerateMatches(in:options:range:using:)](enumeratematches%28in_options_range_using_%29.md).

## Declaration

```swift
struct MatchingFlags
```

## Topics

### Constants

- [progress](matchingflags/progress.md): Set when the Block is called to report progress during a long-running match operation.
- [completed](matchingflags/completed.md): Set when the Block is called after matching has completed.
- [hitEnd](matchingflags/hitend.md): Set when the current match operation reached the end of the search range.
- [requiredEnd](matchingflags/requiredend.md): Set when the current match depended on the location of the end of the search range.
- [internalError](matchingflags/internalerror.md): Set when matching failed due to an internal error.

### Initializers

- [init(rawValue:)](matchingflags/init%28rawvalue_%29.md)

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
- [NSRegularExpression.MatchingOptions](matchingoptions.md): The matching options constants specify the reporting, completion and matching rules to the expression matching methods. These constants are used by all methods that search for, or replace values, using a regular expression.

# NSMatchingFlags (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Set by the Block as the matching progresses, completes, or fails. Used by the method [enumerateMatchesInString:options:range:usingBlock:](enumeratematches%28in_options_range_using_%29.md).

## Declaration

```objectivec
enum NSMatchingFlags : NSUInteger;
```

## Topics

### Constants

- [NSMatchingProgress](matchingflags/progress.md): Set when the Block is called to report progress during a long-running match operation.
- [NSMatchingCompleted](matchingflags/completed.md): Set when the Block is called after matching has completed.
- [NSMatchingHitEnd](matchingflags/hitend.md): Set when the current match operation reached the end of the search range.
- [NSMatchingRequiredEnd](matchingflags/requiredend.md): Set when the current match depended on the location of the end of the search range.
- [NSMatchingInternalError](matchingflags/internalerror.md): Set when matching failed due to an internal error.

## See Also

### Constants

- [NSRegularExpressionOptions](options-swift.struct.md): These constants define the regular expression options. These constants are used by the property [options](options-swift.property.md), [regularExpressionWithPattern:options:error:](regularexpressionwithpattern_options_error_.md), and [initWithPattern:options:error:](init%28pattern_options_%29.md).
- [NSMatchingOptions](matchingoptions.md): The matching options constants specify the reporting, completion and matching rules to the expression matching methods. These constants are used by all methods that search for, or replace values, using a regular expression.
