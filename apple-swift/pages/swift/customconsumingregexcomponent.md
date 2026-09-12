> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/customconsumingregexcomponent](https://developer.apple.com/documentation/swift/customconsumingregexcomponent)

# CustomConsumingRegexComponent

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
protocol CustomConsumingRegexComponent : RegexComponent
```

## Topics

### Instance Methods

- [consuming(\_:startingAt:in:)](customconsumingregexcomponent/consuming%28__startingat_in_%29.md): Process the input string within the specified bounds, beginning at the given index, and return the end position (upper bound) of the match and the produced output.

## Relationships

### Inherits From

- [RegexComponent](regexcomponent.md)

## See Also

### Regular Expressions

- [Regex](regex.md): A regular expression.
- [RegexRepetitionBehavior](regexrepetitionbehavior.md): Specifies how much to attempt to match when using a quantifier.
- [RegexSemanticLevel](regexsemanticlevel.md): A semantic level to use during regex matching.
- [RegexWordBoundaryKind](regexwordboundarykind.md): A word boundary algorithm to use during regex matching.
- [AnyRegexOutput](anyregexoutput.md): The type-erased, dynamic output of a regular expression match.
- [RegexComponent](regexcomponent.md): A type that represents a regular expression.
