> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/predicateexpressions/build_contains(_:_:)-9ferb](https://developer.apple.com/documentation/foundation/predicateexpressions/build_contains(_:_:)-9ferb)

# build_contains(\_:\_:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

## Declaration

```swift
static func build_contains<Subject, Regex>(_ subject: Subject, _ regex: Regex) -> PredicateExpressions.StringContainsRegex<Subject, Regex> where Subject : PredicateExpression, Regex : PredicateExpression, Subject.Output : BidirectionalCollection, Regex.Output : RegexComponent, Subject.Output.SubSequence == Substring
```
